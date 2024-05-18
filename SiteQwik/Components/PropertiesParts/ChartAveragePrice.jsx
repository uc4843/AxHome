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
    chartTitle,
    currentLocale,
    label,
    prices,
    title,
    translations,
}) => {

    useVisibleTask$(() => {
        Chart.defaults.font.family = "IRANSansX"
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
            }
        )
    })

    return <section class="max-w-3xl mx-auto px-4 my-0 md:my-10 aspect-[2/1] px-4">
        <div class="flex justify-center font-bold mb-3">
            <h2>{chartTitle} {title}</h2>
        </div>
        <canvas
            class="w-full"
            id="chart"
        >
        </canvas>
    </section>
})

export default ChartAveragePrice
