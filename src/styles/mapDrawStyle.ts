import { RENDER_STATE } from "react-map-gl-draw"
import { Feature, StructureType } from "../types"

function colorHandler(objectType: StructureType) {
    switch (objectType) {
        case "cable":
            return "rgb(220,20,60)"
        case "road":
            return "rgb(255,255,51)"
        case "hardstand":
            return "rgb(251, 176, 59)"
        case "wtg":
            return "rgb(193,84,193)"
        case "safetyRadius":
            return "rgba(57,255,20, 0.3)"
        default:
            return "rgba(57,255,20, 1)"
    }
}

const wtgColor = "rgb(193,84,193)"
const hardstandColor = "rgb(251, 176, 59)"

export function getEditHandleStyle({ feature, state }: { feature: Feature; state: any }) {
    const objectType = feature.properties.type
    switch (objectType) {
        case "wtg":
            switch (state) {
                case RENDER_STATE.SELECTED:
                case RENDER_STATE.HOVERED:
                case RENDER_STATE.UNCOMMITTED:
                    return {
                        fill: wtgColor,
                        fillOpacity: 1,
                        stroke: wtgColor,
                        strokeWidth: 2,
                        r: 1
                    }

                default:
                    return {
                        fill: wtgColor,
                        fillOpacity: 1,
                        stroke: wtgColor,
                        strokeWidth: 2,
                        r: 1
                    }
            }
        case "safetyRadius":
            switch (state) {
                case RENDER_STATE.SELECTED:
                case RENDER_STATE.HOVERED:
                case RENDER_STATE.UNCOMMITTED:
                    return {
                        fillOpacity: 1
                    }

                default:
                    return {
                        fillOpacity: 1
                    }
            }
        case "hardstand":
            switch (state) {
                case RENDER_STATE.SELECTED:
                case RENDER_STATE.HOVERED:
                case RENDER_STATE.UNCOMMITTED:
                    return {
                        fill: hardstandColor,
                        fillOpacity: 1,
                        stroke: hardstandColor,
                        strokeWidth: 2,
                        r: 1
                    }

                default:
                    return {
                        fill: hardstandColor,
                        fillOpacity: 1,
                        stroke: hardstandColor,
                        strokeWidth: 2,
                        r: 2
                    }
            }
        default:
            switch (state) {
                case RENDER_STATE.SELECTED:
                case RENDER_STATE.HOVERED:
                case RENDER_STATE.UNCOMMITTED:
                    return {
                        fill: "rgb(251, 0, 0)",
                        fillOpacity: 1,
                        stroke: "rgb(255, 255, 255)",
                        strokeWidth: 2,
                        r: 7
                    }

                default:
                    return {
                        fill: "rgb(251, 0,0)",
                        fillOpacity: 1,
                        stroke: "rgb(255, 255, 255)",
                        strokeWidth: 2,
                        r: 5
                    }
            }
    }
}

export function getFeatureStyle({ feature, state }: { feature: Feature; index: any; state: any }) {
    const featureType = feature.geometry.type
    const objectType = feature.properties.type
    switch (featureType) {
        case "LineString":
            switch (state) {
                case RENDER_STATE.SELECTED:
                case RENDER_STATE.HOVERED:
                case RENDER_STATE.UNCOMMITTED:
                case RENDER_STATE.CLOSING:
                    return {
                        stroke: colorHandler(objectType),
                        strokeWidth: 3,
                        fillOpacity: 0,
                        strokeDasharray: "4,2"
                    }

                default:
                    return {
                        stroke: colorHandler(objectType),
                        strokeWidth: 2,
                        fillOpacity: 0
                    }
            }
        case "Polygon":
            switch (state) {
                case RENDER_STATE.SELECTED:
                case RENDER_STATE.HOVERED:
                case RENDER_STATE.UNCOMMITTED:
                case RENDER_STATE.CLOSING:
                    return {
                        stroke: colorHandler(objectType),
                        strokeWidth: 2,
                        fill: colorHandler(objectType),
                        fillOpacity: 0.8,
                        strokeDasharray: "4,2"
                    }
                default:
                    return {
                        stroke: colorHandler(objectType),
                        strokeWidth: 2,
                        fill: colorHandler(objectType),
                        fillOpacity: 0.8
                    }
            }
        default:
            switch (state) {
                case RENDER_STATE.SELECTED:
                case RENDER_STATE.HOVERED:
                case RENDER_STATE.UNCOMMITTED:
                case RENDER_STATE.CLOSING:
                    return {
                        stroke: colorHandler(objectType),
                        strokeWidth: 2,
                        fill: colorHandler(objectType),
                        fillOpacity: 1,
                        strokeDasharray: "4,2",
                        r: 1
                    }

                default:
                    return {
                        stroke: colorHandler(objectType),
                        strokeWidth: 2,
                        fill: colorHandler(objectType),
                        fillOpacity: 1
                    }
            }
    }
}
