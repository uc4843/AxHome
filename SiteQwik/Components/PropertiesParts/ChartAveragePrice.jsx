import {
    component$,
    useVisibleTask$,
} from "@builder.io/qwik"
import Chart from "chart.js/auto"
import {
    customColors,
    useLocalizedDate,
} from "Base"

const ChartAveragePrice = component$(({
    currentLocale,
    label,
    prices,
    title,
    translations,
}) => {
    useVisibleTask$(() => {
        new Chart(
            document.getElementById("chart"),
            {
                type: "bar",
                data: {
                    labels: prices.map(i => {
                        let month = i.month - 1
                        let date = new Date()
                        date.setMonth(month)
                        let monthName = date.toLocaleString(currentLocale.key, { month: "long" })
                        return monthName

                    }),
                    datasets: [
                        {
                            label: translations?.price,
                            backgroundColor: customColors.color1,
                            data: prices?.map(price => price.quantity),
                        }
                    ]
                },
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: title,
                        }
                    }
                }
            }
        )

    })
    return <>
            <section class="my-4 md:my-10 aspect-[2/1] px-4">
                <canvas
                    class="w-full"
                    id="chart"
                >
                </canvas>
        </section>
    </>
})

export default ChartAveragePrice
