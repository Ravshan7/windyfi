/* eslint-disable no-undef */
const colors = require("tailwindcss/colors")

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            fontFamily: {
                rob: ["Roboto", "sans-serif"]
            }
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            darkGray: "#101010",
            indigo: colors.indigo,
            red: "#ff4040",
            yellow: colors.amber,
            blue: colors.blue,
            primary: "#008575",
            secondary: "#9AC7C4",
            darkBacground: "#695d46",
            batteryChargedBlue: "#1AAFD0",
            ocean: "#30657D",
            pastelGreen: "#79E381",
            darkGreen: " #457125",
            turquoise: "#39D6EE"
        }
    },
    variants: {
        extend: {
            maxHeight: ["focus"]
        }
    },
    plugins: []
}
