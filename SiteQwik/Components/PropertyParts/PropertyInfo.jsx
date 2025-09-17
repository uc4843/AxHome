import { component$ } from "@builder.io/qwik"
import { useListingUrl } from "Properties"
import { Check } from "Svg"

const PropertyInfo = component$(({
    localePathPrefix,
    property,
    propertyInfoTexts,
}) => {

    const trueBooleanAttributes = property?.relatedItems.entityAttributes?.filter(item => item?.value == "True")
    const nonBooleanAttributes = property?.relatedItems.entityAttributes?.filter(item => item?.dataType?.toLowerCase() != "boolean" && item?.value != "")

    const linkedItems = [
        {
            id: 1,
            title: propertyInfoTexts?.cityDivision,
            name: property?.geoCityDivisionName,
            link: {
                cityDivision: property?.geoCityDivisionSlug,
                localePathPrefix: localePathPrefix
            },
        },
        {
            id: 2,
            title: propertyInfoTexts?.dealType,
            name: property?.dealTypeName,
            link: {
                cityDivision: property?.geoCityDivisionSlug,
                dealType: property?.dealTypeSlug,
                localePathPrefix: localePathPrefix,
            },
        },
        {
            id: 3,
            title: propertyInfoTexts?.propertyType,
            name: property?.propertyTypeName,
            link: {
                cityDivision: property?.geoCityDivisionSlug,
                dealType: property?.dealTypeSlug,
                localePathPrefix: localePathPrefix,
                propertyType: property?.propertyTypeSlug,
            },
        }
    ]
    const items = [
        {
            id: 1,
            title: propertyInfoTexts?.area,
            name: property.area + " " + propertyInfoTexts?.areaUnit
        },
        {
            id: 2,
            title: propertyInfoTexts?.age,
            name: property.age + " " + propertyInfoTexts?.ageUnit
        },
        {
            id: 3,
            title: propertyInfoTexts?.roomsCount,
            name: property?.roomsCount + " " + propertyInfoTexts?.roomsCountUnit
        }
    ]

    return <>
        <section class="border border-gray-200 my-4 flex flex-col sm:flex-row items-start">
            <div class="w-full sm:w-1/2 p-4 border-b border-gray-200 md:border-b-0 md:border-l">
                <h3 class="text-xl font-bold">
                    {propertyInfoTexts?.propertyInfoTitle}
                </h3>
                <dl class="my-4 flex flex-col gap-2">

                    {
                        linkedItems.map(item => <div
                            class="flex items-center gap-4 text-md group"
                            key={item.id}
                        >
                            <dt class="w-1/3">
                                {item.title}
                            </dt>
                            <dd>
                                <a
                                    aria-label={item.title}
                                    class="text-black hover:text-custom-color1 transition-all"
                                    href={useListingUrl(item.link)}
                                >
                                    {item.name}
                                </a>
                            </dd>
                        </div>)
                    }
                    {
                        items.map(item => <div
                            class="flex items-center gap-4 text-md group"
                            key={item.id}
                        >
                            <dt class="w-1/3">
                                {item.title}
                            </dt>
                            <dd>
                                {item.name}
                            </dd>
                        </div>)
                    }

                    {
                        nonBooleanAttributes.map(item => <div
                            class="flex items-center gap-4 text-md group"
                            key={item.id}
                        >
                            <dt class="w-1/3">{item?.title}</dt>
                            <dd>{item?.value}</dd>
                        </div>)
                    }
                </dl>
            </div>
            <div class="w-full sm:w-1/2 p-4">
                <h3 class="text-xl font-bold">
                    {propertyInfoTexts?.featuresTitle}
                </h3>
                <ul class="my-4 grid grid-cols-2 gap-3">
                    {
                        trueBooleanAttributes.map(item => <li
                            class="flex items-center gap-1 text-md w-full"
                            key={item.id}
                        >
                            <p class="w-[calc(100%-26px)] text-nowrap">{item.title}</p>
                            <Check class="w-6 h-6 border border-black bg-custom-color3 fill-custom-color1 stroke-2" />
                        </li>)
                    }
                </ul>
            </div>
        </section>
    </>
})

export default PropertyInfo
