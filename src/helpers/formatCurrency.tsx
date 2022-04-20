export function formatMoney(num: number) {
    return num.toLocaleString("en-US", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 0
    })
}
