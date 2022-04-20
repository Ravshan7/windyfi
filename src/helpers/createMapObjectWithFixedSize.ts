import { Feature, PolygonCoordinates, Position } from "@nebula.gl/edit-modes"
import { calculateCircleCoordinates } from "../helpers/calculateCircleCoordinates"
import { calculateRectangleCoordinates } from "../helpers/calculateRectangleCoordinates"
import { MapObjectSize, StructureType } from "../types"

export const createMapObjectWithFixedSize = function (
    position: Position,
    type: StructureType,
    size: MapObjectSize,
    modelType?: string
): Feature {
    if (!modelType) modelType = "Unknow Model"
    let coordinates: PolygonCoordinates = []
    let properties

    if (type === "hardstand") {
        const { heightInMeter, widthInMeter } = size
        coordinates = calculateRectangleCoordinates(position, heightInMeter, widthInMeter)
        properties = { type: type }
    } else if (type === "wtg") {
        const { diameterInMeter } = size
        coordinates = calculateCircleCoordinates(position, diameterInMeter)
        properties = { type: type, model: modelType }
    } else if (type === "safetyRadius") {
        let { diameterInMeter } = size
        const safetyRadiusMultiplyer = 3.5
        // I diameter is not defined, set to standard of 117 meters, should not happen
        if (!diameterInMeter) diameterInMeter = 117
        coordinates = calculateCircleCoordinates(position, diameterInMeter * safetyRadiusMultiplyer)
        properties = { type: type }
    }

    return {
        type: "Feature",
        properties: properties,
        geometry: {
            type: "Polygon",
            coordinates: coordinates
        }
    }
}
