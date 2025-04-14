import baseConfig from "./TailwindBase.js"

const config = {
    presets: [
        baseConfig
    ],
    theme: {
        extend: {
            colors: {
                custom: {
                    color1: "#D7181E",
                    color2: "#ef7f80",
                    color3: "#EEEEEE",
                    color31: "#ffffff",
                    color32: "#727272",
                    color4: "#57585A",
                    color41: "#000",
                    border: "#707070",
                    btn: "#C9C9C9"
                }
            },
            maxWidth: {
                "wide": "1600px",
                "8xl": "1500px"
            },
            animation: {
                "spin-custom": "spin 60s linear infinite",
                "up-down-one": "upDown 3s ease-in-out infinite",
                "up-down-two": "upDown 5s ease-in-out infinite",
                "up-down-three": "upDown 2s ease-in-out infinite",
            },
            keyframes: {
                "upDown": {
                    "0%, 100%": { transform: "translate-Y(0%)" },
                    "50%": { transform: "translateY(-30%)" },
                }
            }
        }
    },
}

export default config
