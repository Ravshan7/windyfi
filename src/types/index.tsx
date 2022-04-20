export type ControlPanelButtonType = {
    title: Structure
    icon: any
    mode?: any
}

export type MapObjectSize = {
    heightInMeter?: number
    widthInMeter?: number
    diameterInMeter?: number
}

export type Structure = {
    type: StructureType
    model?: string
}

export type Position = {
    latitude: number
    longitude: number
}

export type StructureType = "hardstand" | "road" | "cable" | "wtg" | "safetyRadius"

export type StructureObject = {
    title: StructureType
    figure: any
    price: number
    model: string
    rotorDiameter?: number
    power?: number
}

export type Data = {
    WBS: string
    item: string
    units?: string
    specs?: string
    quantity?: number
    price?: number
    totalPrice: number
}

export interface MapObject extends StructureObject {
    id: string
    longitude: number
    latitude: number
}

type GeometryType = "Polygon" | "LineString"

export type Feature = {
    type: string
    properties: {
        type: StructureType
    }
    geometry: {
        type: GeometryType
        coordinates: number[][]
    }
}
