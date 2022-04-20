import { StructureObject } from "../types"

export function getObjectTypes(): StructureObject[] {
    return [
        {
            title: "wtg",
            figure: "",
            price: 2340000,
            model: "Vestas V117-4.2",
            rotorDiameter: 117,
            power: 4.2
        },
        {
            title: "wtg",
            figure: "",
            price: 3590000,
            model: "Vestas V150-4.5",
            rotorDiameter: 150,
            power: 4.5
        },
        {
            title: "wtg",
            figure: "",
            price: 3290000,
            model: "Gold Wind GW155-4.5",
            rotorDiameter: 155,
            power: 4.5
        },

        {
            title: "hardstand",
            figure: "",
            price: 60000,
            model: "Hardstand W119BT"
        },
        {
            title: "road",
            figure: "",
            price: 140000,
            model: "Asphalt"
        },
        {
            title: "cable",
            figure: "",
            price: 45000,
            model: "Coax"
        }
    ]
}
