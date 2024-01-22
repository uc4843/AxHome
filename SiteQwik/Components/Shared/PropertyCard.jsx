import {
    Image,
    TimeAgo,
} from 'Base'
import {
    useListingUrl,
    usePropertyUrl,
} from 'Properties'

const PropertyCard = ({
    age,
    area,
    currentLocale,
    featuredLabelTitle,
    item,
    localesEnum,
    location,
    occasionLabelTitle,
    rooms,
    translations,
    type,
}) => {

    return <>
        <div class="rounded-2xl overflow-hidden shadow-md group transition-all duration-300 ma-w-[400px]">
            <div class="relative">
                <a
                    href={usePropertyUrl(item?.slug)}>
                    <Image
                        src={item?.relatedItems?.imageUrl}
                        alt={item?.title}
                        containerClass="relative max-w-[350px] w-full aspect-[350/220]"
                    />
                </a>
                <a
                    href={useListingUrl({ dealType: item?.dealTypeSlug })}
                    class="absolute z-10 bottom-2 start-2 bg-custom-color21/30 text-slate-50 rounded-xl text-xs px-2 pt-.5 pb-1">
                    {item?.dealTypeName}
                </a>
                {item?.isOccasion &&
                    <p class="absolute z-10 top-2 start-2 bg-custom-color1/80 text-slate-50 rounded-xl text-xs px-2 py-1">{occasionLabelTitle}</p>
                }
                {item?.isFeatured &&
                    <p class="absolute z-10 top-1 end-2 bg-custom-color1 text-slate-950 rounded-bl-xl text-sm px-2 pt-.5 pb-1 -rotate-90">{featuredLabelTitle}</p>
                }
            </div>
            <div class="bg-white">
                <div class="px-4 py-3">
                    <a
                        href={usePropertyUrl(item?.slug)}
                        class="mt-3 mb-4 font-bold line-clamp-1 text-sm md:text-base"
                    >
                        {item?.title}
                    </a>
                    <div class="grid grid-cols-2 gap-2 text-sm">
                        <div class="flex flex-col gap-4">
                            <div class="flex gap-2">
                                <Image
                                    src={type}
                                    containerClass="w-4 aspect-square"
                                    imageClass="w-full h-auto object-contain"
                                    alt={translations?.propertyTypeName}
                                />
                                <span>{item?.propertyTypeName}</span>
                            </div>
                            <div class="flex gap-2">
                                <Image
                                    src={area}
                                    containerClass="w-4 aspect-square"
                                    imageClass="w-full h-auto object-contain"
                                    alt={translations?.area}
                                />
                                <span>{item?.area}</span>
                                <span>{translations?.area}</span>
                            </div>
                            <div class="flex gap-2">
                                <Image
                                    src={rooms}
                                    containerClass="w-4 aspect-square"
                                    imageClass="w-full h-auto object-contain"
                                    alt={translations?.rooms}
                                />
                                <span>{item?.roomsCount} </span>
                                <span>{translations?.rooms}</span>
                            </div>
                            <div class="flex gap-2">
                                <Image
                                    src={age}
                                    containerClass="w-4 aspect-square"
                                    imageClass="w-full h-auto object-contain"
                                    alt={translations?.age}
                                />
                                <span>{item?.age}</span>
                                <span>{translations?.age}</span>
                            </div>
                        </div>
                        <div class="flex flex-col gap-5">
                            <a
                                href={useListingUrl({ cityDivision: item?.cityDivisionSlug })}
                                class="flex items-center gap-1.5">
                                <Image
                                    src={location}
                                    containerClass="w-4 aspect-square"
                                    imageClass="w-full h-auto object-contain"
                                    alt={translations?.cityDivisionName}
                                />
                                <span>
                                    {item?.cityDivisionName}
                                </span>
                            </a>
                            <div class="w-full flex items-center justify-between gap-.5 px-1.5 py-1.5 border rounded">
                                {
                                    item?.dealTypeKey === 'rent'
                                        ?
                                        <span> {translations?.rent}</span>
                                        :
                                        <span> {translations?.minorPrice}</span>
                                }
                                <span>
                                    {item?.minorPrice?.toLocaleString()}
                                </span>
                            </div>

                            <div class="w-full flex items-center justify-between gap-.5 bg-custom-color1 px-1.5 py-1.5 rounded">
                                {
                                    item?.dealTypeKey === 'rent'
                                        ?
                                        <span> {translations?.mortgage}</span>
                                        :
                                        <span> {translations?.majorPrice}</span>
                                }
                                <span>
                                    {item?.majorPrice?.toLocaleString()}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between items-center gap-2 border-t mt-3 px-4 py-3">
                    {
                        item?.relatedItems?.agent ?
                            <div class="flex items-center gap-2">
                                <Image
                                    src={item?.relatedItems?.agent?.relatedItems?.imageUrl}
                                    alt={item?.displayName}
                                    containerClass={`w-9 aspect-square rounded-full overflow-hidden ${item?.relatedItems?.agent ? '' : 'invisible'}`}
                                />
                                <p class="line-clamp-1 w-32">
                                    {item?.relatedItems?.agent?.displayName}
                                </p>
                            </div>
                            :
                            <div class="w-9 aspect-square"></div>
                    }

                    <div class="text-sm text-gray-600">
                        <TimeAgo
                            utcDate={item?.modificationUtcDate}
                            localKey={currentLocale?.key}
                            localesEnum={localesEnum}
                        />
                    </div>

                </div>
            </div>
        </div >
    </>
}

export default PropertyCard
