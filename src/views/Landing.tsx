import { useEffect, useState, useRef, useCallback } from "react"

import ReactMapGL from "react-map-gl"
import { Editor, EditingMode } from "react-map-gl-draw"
import { Feature } from "@nebula.gl/edit-modes"

import mapboxgl from "mapbox-gl" // This is a dependency of react-map-gl even if you didn't explicitly install it

// This is needed to fix bug that prevents satelitemap to load when switched to
;(mapboxgl as any).workerClass =
    // eslint-disable-next-line no-undef
    require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default

import { getObjectTypes } from "../utils/getObjectTypes"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { StructureObject, Structure, MapObjectSize } from "../types"
import { getFeatureStyle, getEditHandleStyle } from "../styles/mapDrawStyle"
import { createMapObjectWithFixedSize } from "../helpers/createMapObjectWithFixedSize"

import LeftSidebar from "../components/LeftSidebar"
import ControlPanel from "../components/ControlPanel/ControlPanel"
import { updateExport } from "../components/ExportTable/ExportTable"
import InformationSidebar from "../components/InformationSidebar/InformationSidebar"
import { Layer, Source } from "react-map-gl"


// eslint-disable-next-line no-undef
const accessToken = "pk.eyJ1Ijoic3BpcmVjb25zdWx0aW5nIiwiYSI6ImNrd2t3Z3Z4eDFrbmgyb3BiMG9xdnR2NGYifQ.OXoIMb_uEeINLUaPVO5VIg"
// "pk.eyJ1Ijoic2hhbXN0amsiLCJhIjoiY2wwN29rZHBhMDZoazNicTBsbmg1bTg0dSJ9.w16zwUrmIK5NToA7pQjBIg"
// process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

const geojson = {
    'type': 'image',
    'url': 'https://docs.mapbox.com/mapbox-gl-js/assets/radar.gif',
    'coordinates': [
        [-80.425, 46.437],
        [-71.516, 46.437],
        [-71.516, 37.936],
        [-80.425, 37.936]
    ]
}

export default function Landing() {
    const [viewport, setViewport] = useState({
        latitude: 60,
        longitude: 6.7,
        zoom: 7,
        width: "100vw",
        height: "100vh"
    })
    // const [geojson, setGeoJson] = useState({
    //     'type': 'image',
    //     'url': 'https://docs.mapbox.com/mapbox-gl-js/assets/radar.gif',
    //     'coordinates': [
    //         [-80.425, 46.437],
    //         [-71.516, 46.437],
    //         [-71.516, 37.936],
    //         [-80.425, 37.936]
    //     ]
    // })

    // const [layerStyle, setLayerStyle] = useState({
    //     id: 'radar-layer',
    //     'type': 'raster',
    //     'source': 'radar',
    //     'paint': {
    //         'raster-fade-duration': 0
    //     }
    // })

    const [mapEditorMode, setMapEditorMode] = useState<any>(null)
    const [objectToAdd, setObjectToAdd] = useState<Structure | undefined>()
    const [objectTypes, setObjectTypes] = useState<StructureObject[] | undefined>()
    const [showInformationSidebar, setShowInformationSidebar] = useState<boolean>(false)
    const [activeMapObject, setActiveMapObject] = useState<StructureObject | undefined>()

    const [mapType, setMapType] = useState<string>(
        // "mapbox://styles/shamstjk/ckwuwic1f5jqa14mkn7mn3ewf"

        "mapbox://styles/spireconsulting/ckwuwic1f5jqa14mkn7mn3ewf"
    )
    const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(0)
    const editorRef = useRef<any>(null)

    // All mapObjects are stored in local storage with the useLocalStorageHook
    const [features, setFeatures] = useLocalStorage<Feature[]>("mapObjects", [])

    // Simulate API fetch
    useEffect(() => {
        setMapEditorMode(new EditingMode())
        const fetchedObjectTypes = getObjectTypes()
        setObjectTypes(fetchedObjectTypes)
    }, [])

    // onSelect is called on every click on the map, both on mapobjects and the map
    const onSelect = useCallback(
        (options) => {
            // This is where the hardstand and wtg object is created and added to featuers
            const size: MapObjectSize = {
                heightInMeter: 30,
                widthInMeter: 50,
                diameterInMeter: undefined
            }
            if (objectToAdd?.type === "hardstand" && options.mapCoords) {
                const hardstandFeature = createMapObjectWithFixedSize(
                    options.mapCoords,
                    "hardstand",
                    size
                )
                setFeatures([...features, hardstandFeature])
                setMapEditorMode(new EditingMode())
                setObjectToAdd(undefined)
                updateExport([...features, hardstandFeature])
            } else if (objectToAdd?.type === "wtg" && options.mapCoords) {
                const modelType = objectTypes?.find(
                    (objectType: StructureObject) => objectType.model === objectToAdd.model
                )
                if (modelType) {
                    size.diameterInMeter = modelType.rotorDiameter
                    // Create the safety radius border round the wtg wich is 3.5x the diameter of the wtg
                    const safetyAreaFeature = createMapObjectWithFixedSize(
                        options.mapCoords,
                        "safetyRadius",
                        size
                    )
                    // Create the wtg
                    const wtgFeature = createMapObjectWithFixedSize(
                        options.mapCoords,
                        "wtg",
                        size,
                        objectToAdd.model
                    )
                    setFeatures([...features, safetyAreaFeature, wtgFeature])
                    setMapEditorMode(new EditingMode())
                    setObjectToAdd(undefined)
                    updateExport([...features, safetyAreaFeature, wtgFeature])
                }
            } else {
                const { selectedFeature } = options
                if (selectedFeature && selectedFeatureIndex >= 0) {
                    const object = objectTypes?.find(
                        (object: StructureObject) => object.title == selectedFeature.properties.type
                    )
                    if (object) {
                        setActiveMapObject(object)
                        setShowInformationSidebar(true)
                    }
                }
                setSelectedFeatureIndex(options.selectedFeatureIndex)
            }
        },
        [objectTypes, objectToAdd, features]
    )

    const onUpdate = useCallback(
        ({ data, editType }) => {
            if (editType === "addFeature") {
                const createdObject = data[data.length - 1]
                let newFeature
                if (objectToAdd) {
                    newFeature = { ...createdObject, properties: { type: objectToAdd.type } }
                    setFeatures([...features, newFeature])
                }
                setMapEditorMode(new EditingMode())
                setObjectToAdd(undefined)
                updateExport([...features, newFeature])
            }
        },
        [objectToAdd, features]
    )
    const deleteFeature = useCallback(() => {
        if (selectedFeatureIndex !== null && selectedFeatureIndex >= 0) {
            if (activeMapObject?.title === "wtg") {
                // Also deletes the feature before the wtg, that is always the safetyradius feature
                const updatedFeatures = features.filter(
                    (_: Feature, index: number) =>
                        !(index == selectedFeatureIndex || index == selectedFeatureIndex - 1)
                )
                updateExport(updatedFeatures)
                setFeatures(updatedFeatures)
            } else {
                const updatedFeatures = features.filter(
                    (_: Feature, index: number) => index !== selectedFeatureIndex
                )
                updateExport(updatedFeatures)
                setFeatures(updatedFeatures)
            }
        }
    }, [selectedFeatureIndex, features])

    return (
        <div style={{border: `1px solid red`}}>
            <ReactMapGL
                {...viewport}
                mapStyle={mapType}
                mapboxApiAccessToken={accessToken}
                onViewportChange={setViewport}
                attributionControl={false}
                reuseMaps={true}
            >
                <Editor
                    ref={editorRef}
                    style={{ width: "100%", height: "100%" }}
                    clickRadius={12}
                    mode={mapEditorMode}
                    onSelect={onSelect}
                    onUpdate={onUpdate}
                    features={features}
                    editHandleShape={"circle"}
                    featureStyle={getFeatureStyle}
                    editHandleStyle={getEditHandleStyle}
                />
                {/* <Source id="my-data" type="geojson" data={geojson}> */}
                <Source {...geojson}>
                    <Layer 
                        id="raster"
                        type='raster' 
                        paint = {{'raster-fade-duration': 0}}
                        source='radar'
                    />
                </Source>
            </ReactMapGL>
            <ControlPanel setObjectToAdd={setObjectToAdd} setMapEditorMode={setMapEditorMode} />
            <LeftSidebar
                setMapType={setMapType}
                setFeatures={setFeatures}
                updateExport={updateExport}
            />
            {showInformationSidebar && (
                <InformationSidebar
                    setShowInformationSidebar={setShowInformationSidebar}
                    activeMapObject={activeMapObject}
                    deleteFeature={deleteFeature}
                />
            )}
        </div>
    )
}
