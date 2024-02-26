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
            <div class='rounded-md overflow-hidden'>
                <input
                    type="number"
                    class={inputStyle}
                    placeholder={minArea}
                    onInput$={$((e) => {
                        model.value = {
                            ...model.value,
                            minArea: e.target.value.toString()
                        }
                    })}
                    value={model.value['minArea']}
                />
            </div>
            <div class='rounded-md overflow-hidden'>
                <input
                    type="number"
                    class={inputStyle}
                    placeholder={maxArea}
                    onInput$={$((e) => {
                        model.value = {
                            ...model.value,
                            maxArea: e.target.value.toString()
                        }
                    })}
                    value={model.value['maxArea']}
                />
            </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 rounded-md max-w-7xl mx-auto">
            <div class='rounded-md overflow-hidden'>
                <input
                    type="number"
                    class={inputStyle}
                    placeholder={minDeposit}
                    onInput$={$((e) => {
                        model.value = {
                            ...model.value,
                            minRentUpfront: e.target.value.toString()
                        }
                    })}
                    value={model.value['minDeposit']}
                />
            </div>
            <div class='rounded-md overflow-hidden'>
                <input
                    type="number"
                    class={inputStyle}
                    placeholder={maxDeposit}
                    onInput$={$((e) => {
                        model.value = {
                            ...model.value,
                            maxRentUpfront: e.target.value.toString()
                        }
                    })}
                    value={model.value['maxDeposit']}
                />
            </div>
        </div>
        {
            model.value.dealType == 'rent' &&
            <div class="flex flex-col md:flex-row gap-4">
                <input
                    type="number"
                    class={inputStyle}
                    placeholder={minRent}
                    onInput$={$((e) => {
                        model.value = {
                            ...model.value,
                            minMonthlyRent: e.target.value.toString()
                        }
                    })}
                    value={model.value['minRent']}
                />
                <input
                    type="number"
                    class={inputStyle}
                    placeholder={maxRent}
                    onInput$={$((e) => {
                        model.value = {
                            ...model.value,
                            maxMonthlyRent: e.target.value.toString()
                        }
                    })}
                    value={model.value['maxRent']}
                />
            </div>
        }
    </>
})

export default AdvancedSearch
