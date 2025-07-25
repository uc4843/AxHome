import {
    Image,
    LocalizedDate,
    TimeAgo,
} from "Base"
import {
    useListingUrl,
    usePropertyUrl,
} from "Properties"

const PropertyCard = ({
    age,
    area,
    currentLocale,
    localePathPrefix,
    localesEnum,
    location,
    occasionLabelTitle,
    propertiesTexts,
    property,
    propertyInfoTexts,
    rooms,
    translations,
    type,
}) => {

    return <div class="rounded-lg overflow-hidden block shadow-md shadow-gray-200 bg-white border border-custom-color3 group transition-all duration-300 ma-w-[400px]">
        <div class="relative w-full aspect-[6/4] z-10">
            <a href={usePropertyUrl(property?.slug, localePathPrefix)}>
                <Image
                    alt={property?.title}
                    containerClass="relative w-full aspect-[6/4] z-10"
                    src={property?.relatedItems?.imageUrl}
                />
            </a>
            <a
                class="absolute start-4 top-4 bg-custom-color1/70 p-1.5 text-white text-xs text-bold rounded-xs z-20"
                href={useListingUrl({
                    cityDivision: property?.geoCityDivisionSlug,
                    dealType: property?.dealTypeSlug,
                    localePathPrefix: localePathPrefix,
                })}
            >
                {property?.dealTypeName}
            </a>

            <p class="absolute end-4 top-4 bg-custom-color3/70 p-1.5 text-black text-xs text-bold rounded-xs z-20">{property?.propertyTypeName}</p>

        </div>
        <div class="p-2 px-2 pb-0 w-full">
            <div>
                <a
                    class="w-full flex items-center justify-between"
                    href={usePropertyUrl(property?.slug, localePathPrefix)}
                >
                    <h3 class="font-bold line-clamp-1 text-custom-color4 text-start text-base md:text-lg px-0.5 group-hover:text-custom-color1 transition-all">
                        {property?.title}
                    </h3>
                    {property?.isOccasion &&
                        <p class="bg-red-50 -rotate-90 px-2 text-custom-color1 mt-2">{occasionLabelTitle}</p>
                    }
                </a>
                <div class="flex flex-col xs:flex-row gap-y-4 justify-between items-start my-6">
                    <div class="grid grid-cols-1 gap-y-2 text-sm md:text-md justify-items-start">
                        <div class="flex gap-2">
                            <Image
                                alt={propertyInfoTexts?.propertyTypeName}
                                containerClass="w-4 aspect-square"
                                imageClass="w-full h-auto object-contain"
                                src={type}
                            />
                            <span>{property?.propertyTypeName}</span>
                        </div>
                        <div class="flex gap-2">
                            <Image
                                alt={propertyInfoTexts?.area}
                                containerClass="w-4 aspect-square"
                                imageClass="w-full h-auto object-contain"
                                src={area}
                            />
                            <span>{property?.area}</span>
                            <span>{propertyInfoTexts?.area}</span>
                        </div>
                        <div class="flex gap-2">
                            <Image
                                alt={propertyInfoTexts?.rooms}
                                containerClass="w-4 aspect-square"
                                imageClass="w-full h-auto object-contain"
                                src={rooms}
                            />
                            <span>{property?.roomsCount} </span>
                            <span>{propertyInfoTexts?.roomsCount}</span>
                        </div>
                        <div class="flex gap-2">
                            <Image
                                alt={propertyInfoTexts?.age}
                                containerClass="w-4 aspect-square"
                                imageClass="w-full h-auto object-contain"
                                src={age}
                            />
                            <span>{property?.age}</span>
                            <span>{propertyInfoTexts?.age}</span>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2 text-sm md:text-md">
                        <a
                            class="flex items-center gap-1"
                            href={useListingUrl({
                                cityDivision: property?.geoCityDivisionSlug,
                                localePathPrefix: localePathPrefix,
                            })}
                        >
                            <Image
                                alt={property?.geoCityDivisionName}
                                containerClass="w-4 aspect-square"
                                imageClass="w-full h-auto object-contain"
                                src={location}
                            />
                            <span>
                                {property?.geoCityDivisionName}
                            </span>
                        </a>
                        <div class="w-full flex items-center justify-between gap-1 border rounded-sm text-slate-600 border-slate-300 text-xs p-2">
                            {
                                property?.relatedItems.isRent
                                    ?
                                    <span> {propertiesTexts?.rent}: </span>
                                    :
                                    <span> {propertiesTexts?.minorPrice}: </span>
                            }
                            <div class="flex gap-1">
                                <span>
                                    {property?.minorPrice?.toLocaleString()}
                                </span>
                                <span class="text-[10px]">
                                    {propertiesTexts?.toman}
                                </span>
                            </div>
                        </div>

                        <div class="w-full flex items-center justify-between gap-1 bg-custom-color1 p-2 rounded-sm text-white text-xs">
                            {
                                property?.relatedItems.isRent
                                    ?
                                    <span> {propertiesTexts?.mortgage}: </span>
                                    :
                                    <span> {propertiesTexts?.majorPrice}: </span>
                            }
                            <div class="flex gap-1">
                                <span>
                                    {property?.majorPrice?.toLocaleString()}
                                </span>
                                <span class="text-[10px]">
                                    {propertiesTexts?.toman}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-between items-center gap-2 border-t border-slate-300 py-3">
                {
                    property?.relatedItems?.agent
                        ?
                        <div class="flex items-center gap-1">
                            <Image
                                alt={property?.relatedItems?.agent?.displayName}
                                containerClass={`w-9 aspect-square rounded-full overflow-hidden ${property?.relatedItems?.agent ? "" : "invisible"}`}
                                src={property?.relatedItems?.agent?.relatedItems?.imageUrl}
                            />
                            <p class="text-sm text-custom-color41">
                                {property?.relatedItems?.agent?.displayName}
                            </p>
                        </div>
                        :
                        <div class="w-9 aspect-square"></div>
                }

                <div class="text-sm text-custom-color4">
                    <TimeAgo
                        localesEnum={localesEnum}
                        localKey={currentLocale?.key}
                        utcDate={property?.modificationUtcDate}
                    />

                </div>

                {/* <span class="text-sm">
                <LocalizedDate utcDate={property?.modificationUtcDate} />
            </span> */}

            </div>
        </div>
    </div >
}

export default PropertyCard
