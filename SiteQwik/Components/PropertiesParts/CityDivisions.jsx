import {
    $,
    component$,
    useSignal,
} from "@builder.io/qwik"
import { useListingUrl } from "Properties"

const CityDivisions = component$(({
    currentDealType,
    localePathPrefix,
    propertiesTexts,
    rootCityDivisions,
}) => {

    const activeAccordionId = useSignal()
    const accordionClickHandler = $(id => {

        if (id === activeAccordionId.value) {
            activeAccordionId.value = ""
        } else {
            activeAccordionId.value = id
        }
    })

    const style = "w-6 p-1 aspect-square bg-custom-color1 rounded font-bold"

    return <>
        <div class="mb-4">
            <ul class={`my-4 overflow-hidden transition-all duration-300 grid grid-cols-2 gap-x-2 ${activeAccordionId.value === rootCityDivisions?.id ? "duration-1000 max-h-[212px]" : "max-h-[800px] duration-[1000ms]"}`}>
                {
                    rootCityDivisions?.map(item => <li
                        class="my-2 hover:text-custom-color1 line-clamp-1 overflow-hidden"
                        key={item.id}
                    >
                        <a
                            href={useListingUrl({
                                cityDivision: item.slug,
                                dealType: currentDealType?.slug,
                                localePathPrefix: localePathPrefix,
                            })}
                        >
                            {item.name}
                        </a>
                    </li>)
                }
            </ul>

            <div
                class="flex items-center justify-center pt-4"
                onClick$={() => { accordionClickHandler(rootCityDivisions?.id) }}
            >
                <a class="text-custom-color1 text-sm hover:text-custom-color2 transition-all cursor-pointer">
                    {(activeAccordionId.value === rootCityDivisions.id ? propertiesTexts?.showMore : propertiesTexts?.showLess)}
                </a>
            </div>
        </div>
    </>
})

export default CityDivisions
