import baseConfig, { withOpacity } from './TailwindBase.js'

const config = {
    presets: [
        baseConfig
    ],
    theme: {
        extend: {
            colors: {
                custom: {
                    color1: '#D7181E',
                    color2: '#ef7f80',
                    color3: '#EEEEEE', // header -- all gray color
                    color4: '#57585A', // search - footer
                    color41: '#000',
                    border: '#707070',
                    btn: '#C9C9C9'
                }
            },
            maxWidth: {
                'wide': '1600px',
                '8xl': '1500px'
            },
            animation: {
                'spin-custom': 'spin 60s linear infinite',
            }
        }
    },
}

export default config
