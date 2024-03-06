import {
    $,
    component$
} from "@builder.io/qwik"

const AdvancedSearch = component$(({
    maxArea,
    maxDeposit,
    maxRent,
    minArea,
    minDeposit,
    minRent,
    model,
}) => {
    const inputStyle = "border-none h-full outline-none px-2 py-1 w-full [appearance:textfield]"

    return <>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 rounded-md max-w-7xl mx-auto">
            <div class="rounded-md overflow-hidden">
                <input
                    class={inputStyle}
                    onInput$={$((e) => {
                        model = {
                            ...model,
                            minArea: e.target.value.toString()
                        }
                    })}
                    placeholder={minArea}
                    type="number"
                    value={model["minArea"]}
                />
            </div>
            <div class="rounded-md overflow-hidden">
                <input
                    class={inputStyle}
                    onInput$={$((e) => {
                        model = {
                            ...model,
                            maxArea: e.target.value.toString()
                        }
                    })}
                    placeholder={maxArea}
                    type="number"
                    value={model["maxArea"]}
                />
            </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 rounded-md max-w-7xl mx-auto">
            <div class="rounded-md overflow-hidden">
                <input
                    class={inputStyle}
                    onInput$={$((e) => {
                        model = {
                            ...model,
                            minRentUpfront: e.target.value.toString()
                        }
                    })}
                    placeholder={minDeposit}
                    type="number"
                    value={model["minDeposit"]}
                />
            </div>
            <div class="rounded-md overflow-hidden">
                <input
                    class={inputStyle}
                    onInput$={$((e) => {
                        model = {
                            ...model,
                            maxRentUpfront: e.target.value.toString()
                        }
                    })}
                    placeholder={maxDeposit}
                    type="number"
                    value={model["maxDeposit"]}
                />
            </div>
        </div>
        {
            model.dealType == "rent" &&
            <div class="flex flex-col md:flex-row gap-4">
                <input
                    class={inputStyle}
                    onInput$={$((e) => {
                        model = {
                            ...model,
                            minMonthlyRent: e.target.value.toString()
                        }
                    })}
                    placeholder={minRent}
                    type="number"
                    value={model["minRent"]}
                />
                <input
                    class={inputStyle}
                    onInput$={$((e) => {
                        model = {
                            ...model,
                            maxMonthlyRent: e.target.value.toString()
                        }
                    })}
                    placeholder={maxRent}
                    type="number"
                    value={model["maxRent"]}
                />
            </div>
        }
    </>
})

export default AdvancedSearch
