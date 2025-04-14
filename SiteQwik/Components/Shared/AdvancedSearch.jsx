import {
    $,
    component$
} from "@builder.io/qwik"
import { toCamelCase } from "Base"
import { AdvancedInput } from "Shared"

const AdvancedSearch = component$(({
    isDark,
    maxArea,
    maxDeposit,
    maxRent,
    maxSaleTotalPrice,
    minArea,
    minDeposit,
    minRent,
    minSaleTotalPrice,
    model,
}) => {

    const inputStyle = `w-full [appearance:textfield] outline-none border focus:border-custom-color1 rounded-md py-1 px-2 ${isDark ? "bg-custom-color31 border-custom-color3" : "bg-custom-color4 border-custom-color4 text-custom-color31 placeholder:text-custom-color3"}`
    const advancedInputChangeHandler = $((name, value) => {
        model[toCamelCase(name)] = value
    })

    return <>
        <div class="grid grid-cols-2 gap-x-1.5 gap-y-2 lg:gap-y-4 rounded-md max-w-7xl mx-auto">
            <div class="rounded-md overflow-hidden">
                <AdvancedInput
                    class={inputStyle}
                    name="min-area"
                    onChange={advancedInputChangeHandler}
                    placeholder={minArea}
                    value={+model.minArea}
                />
            </div>
            <div class="rounded-md overflow-hidden">
                <AdvancedInput
                    class={inputStyle}
                    name="max-area"
                    onChange={advancedInputChangeHandler}
                    placeholder={maxArea}
                    value={+model.maxArea}
                />
            </div>
        </div>
        {
            model.dealType != "rent" &&
            <div class="grid grid-cols-2 gap-x-1.5 gap-y-2 lg:gap-y-4 rounded-md max-w-7xl mx-auto">
                <div class="rounded-md overflow-hidden">
                    <AdvancedInput
                        class={inputStyle}
                        name="min-sale-total-price"
                        onChange={advancedInputChangeHandler}
                        placeholder={minSaleTotalPrice}
                        value={+model.minSaleTotalPrice}
                    />
                </div>
                <div class="rounded-md overflow-hidden">
                    <AdvancedInput
                        class={inputStyle}
                        name="max-sale-total-price"
                        onChange={advancedInputChangeHandler}
                        placeholder={maxSaleTotalPrice}
                        value={+model.maxSaleTotalPrice}
                    />
                </div>
            </div>
        }
        {
            model.dealType == "rent" && <>
                <div class="grid grid-cols-2 gap-x-1.5 gap-y-2 lg:gap-y-4 rounded-md max-w-7xl mx-auto">
                    <AdvancedInput
                        class={inputStyle}
                        name="min-rent-upfront"
                        onChange={advancedInputChangeHandler}
                        placeholder={minDeposit}
                        value={+model.minRentUpfront}
                    />
                    <AdvancedInput
                        class={inputStyle}
                        name="max-rent-upfront"
                        onChange={advancedInputChangeHandler}
                        placeholder={maxDeposit}
                        value={+model.maxRentUpfront}
                    />
                </div>
                <div class="grid grid-cols-2 gap-x-1.5 gap-y-2 lg:gap-y-4 rounded-md max-w-7xl mx-auto">
                    <AdvancedInput
                        class={inputStyle}
                        name="min-monthly-rent"
                        onChange={advancedInputChangeHandler}
                        placeholder={minRent}
                        value={+model.minMonthlyRent}
                    />
                    <AdvancedInput
                        class={inputStyle}
                        name="max-monthly-rent"
                        onChange={advancedInputChangeHandler}
                        placeholder={maxRent}
                        value={+model.maxMonthlyRent}
                    />
                </div>
            </>
        }
    </>
})

export default AdvancedSearch
