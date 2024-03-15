import {
    $,
    component$,
    useSignal,
} from "@builder.io/qwik"
import { useSearch } from "Properties"
import {
    AdvancedSearch,
    Select,
} from "Shared"
import {
    AddBox,
    Magnifying,
    MinusBox,
} from "Svg"

const Search = component$(({
    allCityDivision,
    allDealTypes,
    allPropertyTypes,
    filter,
    localePathPrefix,
}) => {
    const {
        handleSearch,
        model,
        resetAdvance,
    } = useSearch({ localePathPrefix })
    const isShown = useSignal(false)

    const toggleAdvanceSearch = $(() => {

        isShown.value = !isShown.value
        resetAdvance()
    })

    return <>

        <Select
            all={filter?.allTextFilter}
            childClass="bg-custom-color31 text-custom-color41 hover:bg-custom-color1 hover:text-custom-color31 rounded-lg"
            items={allDealTypes}
            label={filter?.dealTypeTitle}
            name="dealtype"
            onChange={$((e, value) => {
                model = {
                    ...model,
                    dealType: value
                }
            })}
            selected={model.dealType}
        />

        <Select
            all={filter?.allTextFilter}
            childClass="bg-custom-color31 text-custom-color41 hover:bg-custom-color1 hover:text-custom-color31 rounded-lg"
            items={allPropertyTypes}
            label={filter?.propertyTypeTitle}
            name="dealtype"
            onChange={$((e, value) => {
                model = {
                    ...model,
                    propertyType: value
                }
            })}
            selected={model.propertyType}
        />

        <Select
            all={filter?.allTextFilter}
            childClass="bg-custom-color31 text-custom-color41 hover:bg-custom-color1 hover:text-custom-color31 rounded-lg"
            filter
            filterText={filter?.buttonSearchTitle}
            items={allCityDivision}
            label={filter?.cityDivisionType}
            name="dealtype"
            onChange={$((e, value) => {
                model = {
                    ...model,
                    cityDivision: value
                }
            })}
            selected={model.cityDivision}
        />

        <div onClick$={toggleAdvanceSearch}>
            <div class="max-w-3xl mx-auto">
                {
                    isShown.value
                        ?
                        <div class="flex items-center gap-2 text-custom-color31 hover:text-custom-color2 group cursor-pointer">
                            <MinusBox class="w-6 h-6 fill-custom-color31 group-hover:fill-custom-color1" />
                        </div>
                        :
                        <div class="flex items-center gap-2 text-custom-color31 hover:text-custom-color2 group cursor-pointer">
                            <AddBox class="w-6 h-6 fill-custom-color31 group-hover:fill-custom-color1" />
                        </div>
                }
            </div>
        </div>

        <div class="hidden lg:block">
            <button
                class="flex justify-center items-center w-32 gap-4 bg-custom-color1 text-white rounded-md py-1.5 font-bold cursor-pointer hover:brightness-110 transition-all duration-300 group"
                onClick$={handleSearch}
                type="button"
            >
                <span>{filter?.buttonSearchTitle}</span>
            </button>
        </div>

        <div class="block md:hidden">
            <div class={`flex flex-col gap-y-1 bg-transparent rounded-md justify-center items-center overflow-hidden duration-1000 transition-all ${isShown.value ? " duration-1000 transition-all max-h-[50vh]" : " duration-1000 transition-all max-h-0"}`}>
                <AdvancedSearch
                    {...filter}
                    isShown={isShown.value}
                    model={model}
                />
            </div>
        </div>
        <div class="lg:hidden text-center my-2 w-full">
            <button
                class="inline-flex justify-center items-center gap-4 mx-auto bg-custom-color1 text-white rounded-md px-6 py-2 cursor-pointer hover:bg-custom-color2 transition-all duration-300 group"
                onClick$={handleSearch}
                type="button"
            >
                <span>{filter?.buttonSearchTitle}</span>
                <Magnifying class="w-5 aspect-square fill-white" />
            </button>
        </div>
        <div class="hidden md:block">
            <div class={`flex flex-col gap-y-1 bg-transparent rounded-md justify-center items-center overflow-hidden duration-1000 transition-all lg:w-[90%] ${isShown.value ? " duration-1000 transition-all max-h-[50vh]" : " duration-1000 transition-all max-h-0"}`}>
                <AdvancedSearch
                    {...filter}
                    isShown={isShown.value}
                    model={model}
                />
            </div>
        </div>

    </>
})

export default Search
