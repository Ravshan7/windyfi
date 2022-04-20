import { Position, PolygonCoordinates } from "@nebula.gl/edit-modes"

export const calculateCircleCoordinates = (position: Position, diameterInMeter?: number) => {
    if (!diameterInMeter) diameterInMeter = 117
    const coords = {
        latitude: position[1],
        longitude: position[0]
    }
    const radiusInKm = diameterInMeter / (1000 * 2)
    // Polygon imitates a circle by drawing lines between alot of points, 64 is a arbitrary large number
    const numberOfPoints = 64

    const circleCoordinates: PolygonCoordinates = [[]]
    const distanceX = radiusInKm / (111.32 * Math.cos((coords.latitude * Math.PI) / 180))
    const distanceY = radiusInKm / 110.574

    let theta, x, y
    for (let i = 0; i < numberOfPoints; i++) {
        theta = (i / numberOfPoints) * (2 * Math.PI)
        x = distanceX * Math.cos(theta)
        y = distanceY * Math.sin(theta)
        const coordiantePoint: Position = [coords.longitude + x, coords.latitude + y]
        circleCoordinates[0].push(coordiantePoint)
    }
    return circleCoordinates
}
