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

    return <>
        <div class="border border-gray-200 my-4 flex flex-col sm:flex-row items-start">
            <div class="w-full sm:w-1/2 p-4 border-b border-gray-200 md:border-b-0 md:border-l">
                <h3 class="text-xl font-bold">
                    {propertyInfoTexts?.propertyInfoTitle}
                </h3>
                <div class="my-4 flex flex-col gap-2">

                    <div class="flex items-center gap-4 text-md group">
                        <p class="w-1/3">{propertyInfoTexts?.cityDivision}</p>
                        <a
                            class="text-black hover:text-custom-color1 transition-all"
                            href={useListingUrl({
                                cityDivision: property?.cityDivisionSlug,
                                dealType: property?.dealTypeSlug,
                                localePathPrefix: localePathPrefix,
                            })}
                        >
                            {property?.geoCityDivisionName}
                        </a>
                    </div>

                    <div class="flex items-center gap-4 text-md group">
                        <p class="w-1/3">{propertyInfoTexts?.dealType}</p>
                        <a
                            class="text-black hover:text-custom-color1 transition-all"
                            href={useListingUrl({
                                cityDivision: property?.cityDivisionSlug,
                                dealType: property?.dealTypeSlug,
                                localePathPrefix: localePathPrefix,
                            })}
                        >
                            {property?.dealTypeName}
                        </a>
                    </div>

                    <div class="flex items-center gap-4 text-md group">
                        <p class="w-1/3">{propertyInfoTexts?.propertyType}</p>
                        <a
                            class="text-black hover:text-custom-color1 transition-all"
                            href={useListingUrl({
                                cityDivision: property?.cityDivisionSlug,
                                propertyType: property?.propertyTypeSlug,
                                localePathPrefix: localePathPrefix,
                            })}
                        >
                            {property?.propertyTypeName}
                        </a>
                    </div>

                    <div class="flex items-center gap-4 text-md group">
                        <p class="w-1/3">{propertyInfoTexts?.roomsCount}</p>
                        <p>{property?.roomsCount} {propertyInfoTexts?.roomsCountUnit}</p>
                    </div>

                    <div class="flex items-center gap-4 text-md group">
                        <p class="w-1/3">{propertyInfoTexts?.age}</p>
                        <p>{property?.age} {propertyInfoTexts?.ageUnit}</p>
                    </div>

                    <div class="flex items-center gap-4 text-md group">
                        <p class="w-1/3">{propertyInfoTexts?.area}</p>
                        <p>{property?.area} {propertyInfoTexts?.areaUnit}</p>
                    </div>

                    {
                        nonBooleanAttributes.map(item => <div
                            class="flex items-center gap-4 text-md group"
                            key={item.id}
                        >
                            <p class="w-1/3">{item?.title}</p>
                            <p>{item?.value}</p>
                        </div>)
                    }
                </div>
            </div>
            <div class="w-full sm:w-1/2 p-4">
                <h3 class="text-xl font-bold">
                    {propertyInfoTexts?.featuresTitle}
                </h3>
                <div class="my-4 grid grid-cols-2 gap-2">
                    {
                        trueBooleanAttributes.map(item => <div
                            class="flex items-center gap-1 text-md"
                            key={item.id}
                        >
                            <p class="w-1/3">{item.title}</p>
                            <Check class="w-6 h-6 border border-black bg-custom-color3 fill-custom-color1 stroke-2" />
                        </div>)
                    }
                </div>
            </div>
        </div>
    </>
})

export default PropertyInfo
