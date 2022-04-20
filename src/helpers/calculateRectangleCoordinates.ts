import { Position, PolygonCoordinates } from "@nebula.gl/edit-modes"

export const calculateShiftedLatitude = (longitude: number, distance: number) => {
    //radius of the earth in kilometer
    const earth = 6378.137
    const pi = Math.PI
    const m = 1 / (((2 * pi) / 360) * earth) / 1000
    //1 meter in degree
    return longitude + distance * m
}

export const calculateShiftedLongitude = (
    longitude: number,
    latitude: number,
    shiftDistance: number
) => {
    //radius of the earth in kilometer
    const earth = 6378.137
    const pi = Math.PI
    const cos = Math.cos
    const m = 1 / (((2 * pi) / 360) * earth) / 1000
    //1 meter in degree

    return longitude + (shiftDistance * m) / cos(latitude * (pi / 180))
}

export const calculateRectangleCoordinates = (
    position: Position,
    width?: number,
    height?: number
) => {
    if (!width) width = 50
    if (!height) height = 30

    const clickLatitude = position[0]
    const clickLongitude = position[1]

    const shiftedLongitudeDistance = width / 2
    const shiftedLatitudeDistance = height

    const leftTopCornerPosition: Position = [
        calculateShiftedLatitude(clickLatitude, -shiftedLatitudeDistance),
        calculateShiftedLongitude(clickLongitude, clickLatitude, shiftedLongitudeDistance)
    ]
    const leftBottomCornerPosition: Position = [
        calculateShiftedLatitude(clickLatitude, -shiftedLatitudeDistance),
        calculateShiftedLongitude(clickLongitude, clickLatitude, -shiftedLongitudeDistance)
    ]
    const rightTopCornerPosition: Position = [
        calculateShiftedLatitude(clickLatitude, shiftedLatitudeDistance),
        calculateShiftedLongitude(clickLongitude, clickLatitude, shiftedLongitudeDistance)
    ]
    const rightBottomCornerPosition: Position = [
        calculateShiftedLatitude(clickLatitude, shiftedLatitudeDistance),
        calculateShiftedLongitude(clickLongitude, clickLatitude, -shiftedLongitudeDistance)
    ]

    const newPositions: PolygonCoordinates = [
        [
            leftTopCornerPosition,
            rightTopCornerPosition,
            rightBottomCornerPosition,
            leftBottomCornerPosition
        ]
    ]
    return newPositions
}
