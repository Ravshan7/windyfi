import { length } from "@turf/turf"
import { data } from "../../utils/data"
import { formatMoney } from "../../helpers/formatCurrency"

function updateCategoryTotal(category: string) {
    // updates total price for each category (eg. category 1.1)
    let total = 0

    for (var i = 0; i < data.length; i++) {
        if (data[i].WBS.startsWith(category)) {
            total += (data[i].price || 0) * (data[i].quantity || 0)
        }
    }
    for (var j = 0; j < data.length; j++) {
        if (data[j].WBS === category) {
            data[j].totalPrice = total
        }
        if (data[j].item == "Total") {
            // updates total
            data[j].totalPrice += total
        }
    }
}

function getQuantity(features: any, item: string) {
    return features.filter(
        (feature: { properties: { type: string } }) => feature.properties?.type == item
    ).length
}

function updateQuantity(type: string, value: number) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].item === type) {
            data[i].quantity = value
            data[i].totalPrice = (data[i].quantity || 0) * (data[i].price || 0)
            // update total price of each category
            updateCategoryTotal("1.1.")
            updateCategoryTotal("1.2.")
            updateCategoryTotal("2.1.")
            updateCategoryTotal("3.1.")
            return
        }
    }
}

function getLength(features: any, type: string) {
    let len: number = 0
    for (var i = 0; i < features.length; i++) {
        if (features[i].properties.type === type) {
            len += length(features[i])
        }
    }

    return Math.round(len * 100) / 100
}

function getWTGQuantity(features: any, WTGmodel: string) {
    return features.filter(
        (feature: { properties: { type: string; model: string } }) =>
            feature.properties?.model == WTGmodel
    ).length
}

export const updateExport = (features: any) => {
    localStorage.setItem("features", features)
    const numOfWTG_V117 = getWTGQuantity(features, "Vestas V117-4.2")
    const numOfWTG_V150 = getWTGQuantity(features, "Vestas V150-4.5")
    const numOfWTG_GW155 = getWTGQuantity(features, "Gold Wind GW155-4.5")

    const numOfHardstand = getQuantity(features, "hardstand")
    const roadLength = getLength(features, "road")
    const cableLength = getLength(features, "cable")

    updateQuantity("WTG V117", numOfWTG_V117)
    updateQuantity("WTG V150", numOfWTG_V150)
    updateQuantity("WTG GW155", numOfWTG_GW155)
    updateQuantity("Hardstands", numOfHardstand)
    updateQuantity("Internal road", roadLength)
    updateQuantity("Internal Wind Park MV cables", cableLength)
}

export default function ExportTable() {
    return (
        <table className="inline-block min-w-full mt-8" id="Windify">
            <thead className="bg-gray-100">
                <tr>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase border border-emerald-500">
                        WBS
                    </th>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase border border-emerald-500">
                        Items
                    </th>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase border border-emerald-500">
                        Units
                    </th>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase border border-emerald-500">
                        Specifications
                    </th>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase border border-emerald-500">
                        Quantity
                    </th>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase border border-emerald-500">
                        Unit cost (EUR)
                    </th>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase border border-emerald-500">
                        Total cost (EUR)
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map((val: any, key: number) => {
                    if (
                        (val.WBS.length === 4 || val.WBS === "") &&
                        !(val.item == "WTG" && val.totalPrice == 0) // don't want to display WTG category with no WTGs
                    ) {
                        return (
                            <tr key={key}>
                                <td className="px-4 py-1 text-sm text-gray-700 bg-blue-100 border border-emerald-500">
                                    {val.WBS}
                                </td>
                                <td className="px-4 py-1 text-sm text-gray-700 bg-blue-100 border border-emerald-500">
                                    {val.item}
                                </td>
                                <td className="bg-blue-100 border-t border-b border-emerald-500" />
                                <td className="bg-blue-100 border-t border-b border-emerald-500" />
                                <td className="bg-blue-100 border-t border-b border-emerald-500" />
                                <td className="bg-blue-100 border-t border-b border-emerald-500" />
                                <td className="px-4 py-1 text-sm text-gray-700 bg-blue-100 border border-emerald-500">
                                    {val.totalPrice != 0 ? formatMoney(val.totalPrice) : ""}
                                </td>
                            </tr>
                        )
                    }
                    if (
                        // don't want to display WTG rows with no quantity
                        !(
                            val.item.startsWith("WTG") &&
                            (val.quantity == 0 || val.quantity === undefined)
                        )
                    ) {
                        return (
                            <tr key={key}>
                                <td className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 border border-emerald-500">
                                    {val.WBS}
                                </td>
                                <td className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 border border-emerald-500">
                                    {val.item}
                                </td>
                                <td className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 border border-emerald-500">
                                    {val.units}
                                </td>
                                <td className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 border border-emerald-500">
                                    {val.specs}
                                </td>
                                <td className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 border border-emerald-500">
                                    {val.quantity}
                                </td>
                                <td className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 border border-emerald-500">
                                    {val.price ? formatMoney(val.price) : ""}
                                </td>
                                <td className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 border border-emerald-500">
                                    {val.totalPrice ? formatMoney(val.totalPrice) : ""}
                                </td>
                            </tr>
                        )
                    }
                })}
            </tbody>
        </table>
    )
}
