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
    isDark,
    localePathPrefix,
}) => {

    const isShown = useSignal(true)
    const {
        handleSearch,
        model,
        resetAdvance,
        resetRentUpfront,
    } = useSearch({ localePathPrefix })
    const toggleAdvanceSearch = $(() => {
        isShown.value = !isShown.value
        if (isShown.value == false) {
            resetAdvance()
        }
    })
    const selectChangeHandler = $((e, value) => {
        model[e.name] = value
        if (e.name == "dealType") {
            resetRentUpfront()
        }
    })
    const selectChildStyle = `${isDark ? "bg-custom-color31 text-custom-color41" : "bg-custom-color4 text-custom-color31"} hover:bg-custom-color1 hover:text-custom-color31 rounded-lg`
    const selectStyle = isDark ? "bg-custom-color31" : "bg-custom-color4 text-custom-color3"
    const iconClass = `w-6 aspect-square ${isDark ? "fill-custom-color31" : "fill-custo-color4"} group-hover:fill-custom-color1`

    const combinedProps = {
        childClass: selectChildStyle,
        class: selectStyle,
        isDark,
        onChange: selectChangeHandler,
    }

    return <>
        <Select
            {...combinedProps}
            all={filter?.allDealTitle}
            items={allDealTypes}
            label={filter?.dealTypeTitle}
            name="dealType"
            selected={model.dealType}
        />
        <Select
            {...combinedProps}
            all={filter?.allPropertyTitle}
            items={allPropertyTypes}
            label={filter?.propertyTypeTitle}
            name="propertyType"
            selected={model.propertyType}
        />
        <Select
            {...combinedProps}
            all={filter?.allCityDivisionTitle}
            filter
            filterText={filter?.buttonSearchTitle}
            items={allCityDivision}
            label={filter?.cityDivisionType}
            name="cityDivision"
            selected={model.cityDivision}
        />
        <div onClick$={toggleAdvanceSearch}>
            <div class="max-w-3xl mx-auto">
                {
                    isShown.value
                        ?
                        <div class="flex items-center gap-2 text-custom-color31 hover:text-custom-color2 group cursor-pointer">
                            <MinusBox class={iconClass} />
                        </div>
                        :
                        <div class="flex items-center gap-2 text-custom-color31 hover:text-custom-color2 group cursor-pointer">
                            <AddBox class={iconClass} />
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
                <span>
                    {filter?.buttonSearchTitle}
                </span>
            </button>
        </div>
        <div class="block md:hidden">
            <div class={`flex flex-col gap-y-1 bg-transparent rounded-md justify-center items-center overflow-hidden duration-1000 transition-all ${isShown.value ? " duration-1000 transition-all max-h-[50vh]" : "duration-1000 transition-all max-h-0"}`}>
                <AdvancedSearch
                    {...filter}
                    isDark={isDark}
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
            <div class={`flex flex-col gap-y-1 bg-transparent rounded-md justify-center items-center overflow-hidden duration-1000 transition-all lg:w-[90%] ${isShown.value ? " duration-1000 transition-all max-h-[50vh]" : "duration-1000 transition-all max-h-0"}`}>
                <AdvancedSearch
                    {...filter}
                    isDark={isDark}
                    isShown={isShown.value}
                    model={model}
                />
            </div>
        </div>

    </>
})

export default Search
