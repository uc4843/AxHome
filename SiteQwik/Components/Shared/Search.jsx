import {
    $,
    component$,
    useSignal,
} from '@builder.io/qwik'
import { useSearch } from 'Properties'
import {
    AddBox,
    Magnifying,
    MinusBox,
} from 'Svg'
import {
    AdvancedSearch,
    Select,
} from 'Shared'

const Search = component$(({
    allCityDivision,
    allDealTypes,
    allPropertyTypes,
    class: internalClass,
    filter,
}) => {
    const {
        model,
        handleSearch,
        resetAdvance,
    } = useSearch()
    const isShown = useSignal(false)

    const toggleAdvanceSearch = $(() => {

        isShown.value = !isShown.value
        resetAdvance()
    })

    return <>

        <div class={`${internalClass} relative max-w-7xl mx-auto md:py-10 -mt-10 md:-mt-0 rounded-t-[30px] z-30 bg-custom-color4`}>
            <form class='flex flex-col w-full px-2 relative md:px-4 md:flex-row flex-wrap gap-2 gap-y-4 md:gap-4 max-w-5xl md:mx-auto justify-center items-center py-4'>
                <p class="text-lg md:text-md text-white mb-4 md:mb-0 font-bold">
                    {filter?.searchTitle}
                </p>
                <Select
                    childClass="bg-custom-color31 text-custom-color41 hover:bg-custom-color1 hover:text-custom-color31 rounded-lg"
                    items={allDealTypes}
                    name="dealtype"
                    selected={model.value.dealType}
                    label={filter?.dealTypeTitle}
                    all={filter?.allTextFilter}
                    onChange={$((e, value) => {
                        model.value = {
                            ...model.value,
                            dealType: value
                        }
                    })}
                />

                <Select
                    childClass="bg-custom-color31 text-custom-color41 hover:bg-custom-color1 hover:text-custom-color31 rounded-lg"
                    items={allPropertyTypes}
                    name="dealtype"
                    selected={model.value.propertyType}
                    label={filter?.propertyTypeTitle}
                    all={filter?.allTextFilter}
                    onChange={$((e, value) => {
                        model.value = {
                            ...model.value,
                            propertyType: value
                        }
                    })}
                />

                <Select
                    childClass="bg-custom-color31 text-custom-color41 hover:bg-custom-color1 hover:text-custom-color31 rounded-lg"
                    items={allCityDivision}
                    name="dealtype"
                    selected={model.value.cityDivision}
                    label={filter?.cityDivisionType}
                    all={filter?.allTextFilter}
                    onChange={$((e, value) => {
                        model.value = {
                            ...model.value,
                            cityDivision: value
                        }
                    })}
                    filter
                    filterText={filter?.buttonSearchTitle}
                />

                <div onClick$={toggleAdvanceSearch}>
                    <div class='max-w-3xl mx-auto'>
                        {
                            isShown.value ?
                                <div class="flex items-center gap-2 text-custom-color31 hover:text-custom-color2 group cursor-pointer">
                                    <MinusBox class="w-6 h-6 fill-custom-color31 group-hover:fill-custom-color1" />
                                </div> :
                                <div class="flex items-center gap-2 text-custom-color31 hover:text-custom-color2 group cursor-pointer">
                                    <AddBox class="w-6 h-6 fill-custom-color31 group-hover:fill-custom-color1" />
                                </div>
                        }
                    </div>
                </div>

                <div class="hidden lg:block">
                    <button
                        class='flex justify-center items-center w-32 gap-4 bg-custom-color1 text-white rounded-md py-1.5 font-bold cursor-pointer hover:brightness-110 transition-all duration-300 group'
                        type="button"
                        onClick$={handleSearch}
                    >
                        <span>{filter?.buttonSearchTitle}</span>
                    </button>
                </div>

                <div class="block md:hidden">
                    <div class={`flex flex-col gap-y-1 bg-transparent rounded-md justify-center items-center overflow-hidden duration-1000 transition-all ${isShown.value ? ' duration-1000 transition-all max-h-[50vh]' : ' duration-1000 transition-all max-h-0'}`}>
                        <AdvancedSearch
                            model={model}
                            {...filter}
                            isShown={isShown.value}
                        />
                    </div>
                </div>
                <div class="lg:hidden text-center my-2 w-full">
                    <button
                        class='inline-flex justify-center items-center gap-4 mx-auto bg-custom-color1 text-white rounded-md px-6 py-2 cursor-pointer hover:bg-custom-color2 transition-all duration-300 group'
                        type="button"
                        onClick$={handleSearch}
                    >
                        <span>{filter?.buttonSearchTitle}</span>
                        <Magnifying class="w-5 aspect-square fill-white" />
                    </button>
                </div>
                <div class="hidden md:block">
                    <div class={`flex flex-col gap-y-1 bg-transparent rounded-md justify-center items-center overflow-hidden duration-1000 transition-all lg:w-[90%] ${isShown.value ? ' duration-1000 transition-all max-h-[50vh]' : ' duration-1000 transition-all max-h-0'}`}>
                        <AdvancedSearch
                            model={model}
                            {...filter}
                            isShown={isShown.value}
                        />
                    </div>
                </div>
            </form>
        </div>
    </>
})

export default Search
