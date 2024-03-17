import { component$ } from "@builder.io/qwik"
import {
    Image,
    useLocalizedDate,
} from "Base"
import {
    useCategoryUrl,
    usePostUrl,
} from "Blog"
import {
    Calendar,
    Folder,
} from "Svg"

const Card = component$(({
    currentLocale,
    items,
    localePathPrefix,
    localesEnum,
}) => {

    return <>
        {items?.map(item => <div
            key={item?.id}
            class='w-full bg-white flex flex-col items-center sm:flex-row sm:items-start gap-5 md:gap-0 rounded-lg overflow-hidden shadow-md shadow-gray-200 group transition-all'>
            <a
                href={usePostUrl(item?.slug, localePathPrefix)}
                title={item?.title}
            >
                <Image
                    src={item?.relatedItems?.imageUrl}
                    alt={item?.title}
                    containerClass='relative w-full h-[220px] sm:h-[200px] xl:h-[250px] aspect-[245/163]'
                />
            </a>

            <div class='p-4 bg-white'>
                <a
                    class='line-clamp-1 text-lg font-bold group-hover:text-custom-color1 transition-all'
                    href={usePostUrl(item?.slug, localePathPrefix)}
                    title={item?.title}
                >
                    {item?.title}
                </a>

                <div class='flex flew-wrap items-center justify-between my-5 text-xs text-custom-color41'>

                    {item?.relatedItems?.hierarchies.length > 0 &&
                        <a
                            href={useCategoryUrl(item?.relatedItems?.hierarchies[0]?.slug, localePathPrefix)}
                            class='flex gap-1 items-center'
                        >
                            <Folder class='w-6 aspect-square' />
                            <span class='max-w-[calc(100%-20px)] line-clamp-1'>
                                {item?.relatedItems?.hierarchies[0]?.title}
                            </span>
                        </a>
                    }

                    <div class='flex gap-1 items-center'>
                        <Calendar class='w-5 aspect-square' />
                        <span class='max-w-[calc(100%-20px)] line-clamp-1'>
                            {useLocalizedDate({
                                localeKey: currentLocale.key,
                                localesEnum: localesEnum,
                                utcDate: item?.lastUpdateUtcDate,
                            })}
                        </span>
                    </div>

                </div>

                <p class='line-clamp-4 text-sm lg:mt-8'>
                    {item?.summary}
                </p>
            </div>
        </div>)}
    </>
})

export default Card
