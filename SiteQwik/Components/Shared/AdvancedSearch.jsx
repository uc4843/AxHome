import {
    $,
    component$
} from "@builder.io/qwik"
import { toCamelCase } from "Base"
import { AdvancedInput } from "Shared"

const AdvancedSearch = component$(({
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

    const inputStyle = "border-none h-full outline-hidden px-2 py-1 w-full [appearance:textfield]"
    const advancedInputChangeHandler = $((name, value) => {
        model[toCamelCase(name)] = value

    })

    return <>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 rounded-md max-w-7xl mx-auto">
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
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 rounded-md max-w-7xl mx-auto">
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
            model.dealType == "rent" &&
            <>
                <div class="flex flex-col md:flex-row gap-4">
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
                <div class="flex flex-col md:flex-row gap-4">
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
