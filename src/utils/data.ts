import { Data } from "../types"
import { getObjectTypes } from "./getObjectTypes"

export const data: Data[] = [
    {
        WBS: "1.1.",
        item: "WTG",
        totalPrice: 0
    },
    {
        WBS: "1.1.1.",
        item: "WTG V117",
        units: "stk",
        specs: "Vestas V117-4.2",
        quantity: 0,
        price: getObjectTypes().find((obj) => obj.model === "Vestas V117-4.2")?.price,
        totalPrice: 0
    },
    {
        WBS: "1.1.2.",
        item: "WTG V150",
        units: "stk",
        specs: "Vestas V150-4.5",
        quantity: 0,
        price: getObjectTypes().find((obj) => obj.model === "Vestas V150-4.5")?.price,
        totalPrice: 0
    },
    {
        WBS: "1.1.3.",
        item: "WTG GW155",
        units: "stk",
        specs: "Gold Wind GW155-4.5",
        quantity: 0,
        price: getObjectTypes().find((obj) => obj.model === "Gold Wind GW155-4.5")?.price,
        totalPrice: 0
    },
    {
        WBS: "1.2.",
        item: "Balance of Plants",
        totalPrice: 0
    },
    {
        WBS: "1.2.2.",
        item: "Hardstands",
        units: "stk",
        specs: "30x50m permanent hardstand, 30cm crushed stone, 80x30m WTG",
        quantity: 0,
        price: getObjectTypes().find((obj) => obj.title === "hardstand")?.price,
        totalPrice: 0
    },

    {
        WBS: "1.2.3.",
        item: "Internal road",
        units: "km",
        specs: "width = 4.5m, 4500m2/km, 25cm crushed stone, 20cm concrete",
        quantity: 0,
        price: getObjectTypes().find((obj) => obj.title === "road")?.price,
        totalPrice: 0
    },
    {
        WBS: "1.2.4.",
        item: "Internal Wind Park MV cables",
        units: "km",
        specs: "22kV IEC compliant (N)A2XS(F)2Y",
        quantity: 0,
        price: getObjectTypes().find((obj) => obj.title === "cable")?.price,
        totalPrice: 0
    },
    {
        WBS: "1.2.4.1.",
        item: "1x95mm2",
        units: "",
        specs: "N2XSH single core",
        totalPrice: 0
    },
    {
        WBS: "1.2.4.2.",
        item: "1x120mm2",
        units: "",
        specs: "N2XSH single core",
        totalPrice: 0
    },
    {
        WBS: "1.2.4.3.",
        item: "1x240mm2",
        units: "",
        specs: "N2XSH single core",
        totalPrice: 0
    },
    {
        WBS: "1.2.5.",
        item: "Fiber optic cable",
        units: "km",
        specs: "GYFTA53",
        quantity: 120,
        price: 25000,
        totalPrice: 30000000
    },
    {
        WBS: "2.1.",
        item: "Substation 22/220kV",
        totalPrice: 0
    },
    {
        WBS: "2.1.1.1",
        item: "Main transformer distribution device",
        units: "",
        specs: "60MVA 22/123kV, three-phase double wining, oil immersed",
        quantity: 2,
        price: 760000,
        totalPrice: 1520000
    },
    {
        WBS: "2.1.1.2.",
        item: "330kV distribution device",
        units: "",
        specs: "363kV, 4000A, Ik=63kA, ij=160kA",
        quantity: 3,
        price: 120000,
        totalPrice: 360000
    },
    {
        WBS: "2.1.1.3.",
        item: "22kV distribution device",
        units: "",
        specs: "",
        quantity: 4,
        price: 60000,
        totalPrice: 240000
    },
    {
        WBS: "2.1.1.4.",
        item: "Substation internal MV cables",
        units: "km",
        specs: "",
        quantity: 23,
        price: 25000,
        totalPrice: 575000
    },
    {
        WBS: "2.1.2.",
        item: "Secondary equipment",
        units: "",
        specs: "",
        quantity: 3,
        price: 45000,
        totalPrice: 135000
    },
    {
        WBS: "2.1.2.1.",
        item: "Other sub items for secondary equipment in Substation",
        units: "",
        specs: "",
        quantity: 0,
        price: 50000,
        totalPrice: 50000
    },
    {
        WBS: "3.1.",
        item: "Overhead line",
        totalPrice: 0
    },
    {
        WBS: "3.1.1.",
        item: "Conductor",
        units: "km",
        specs: "ACSR",
        quantity: 12,
        price: 55000,
        totalPrice: 660000
    },
    {
        WBS: "3.1.2.",
        item: "Pylons",
        units: "Stk",
        specs: "Suspension tower - 20, tnesion tower 3",
        quantity: 40,
        price: 125000,
        totalPrice: 5000000
    },
    {
        WBS: "3.1.3.",
        item: "Optical Grounded Wire (OPGW)",
        units: "km",
        specs: "",
        quantity: 40,
        price: 60000,
        totalPrice: 2400000
    },
    {
        WBS: "",
        item: "Total",
        totalPrice: 0
    }
]
