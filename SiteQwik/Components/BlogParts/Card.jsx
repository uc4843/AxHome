import { component$ } from '@builder.io/qwik'
import {
    Image,
    useLocalizedDate,
} from 'Base'
import {
    useCategoryUrl,
    usePostUrl,
} from 'Blog'
import {
    ArrowLeft,
    Calendar,
    Text,
} from 'Svg'

const Card = component$(({
    currentLocale,
    items,
    localePathPrefix,
    localesEnum,
}) => {

    return <>
        {
            items?.map(item => <div
                key={item?.id}
                class="w-full max-w-[400px] sm:max-w-full sm:w-[calc(50%-10px)] md:w-full flex flex-col md:grid md:grid-rows-1 md:grid-cols-3 mx-auto bg-white"
            >
                <div class="self-stretch md:col-span-1 flex items-center">
                    <a
                        href={usePostUrl(item?.slug, localePathPrefix)}
                        title={item?.title}
                    >
                        <Image
                            src={item?.relatedItems?.imageUrl}
                            alt={item?.title}
                            containerClass='w-full aspect-[1.5]'
                            imageClass='w-full h-full group-hover:scale-110 duration-500 transition-all'
                        />
                    </a>
                </div>

                <div class="md:col-span-2 px-0 sm:px-3 md:px-6 py-5 flex flex-col gap-4 md:gap-1 lg:gap-4">

                    <h2 class="line-clamp-2">
                        <a
                            class='line-clamp-1 text-lg font-bold group-hover:text-custom-color1 transition-all'
                            href={usePostUrl(item?.slug, localePathPrefix)}
                            title={item?.title}
                        >
                            {item?.title}
                        </a>
                    </h2>

                    <div class="flex gap-1 justify-between md:py-3 text-sm text-custom-color4">

                        {item?.relatedItems?.hierarchies.length > 0 &&
                            <a
                                href={useCategoryUrl(item?.relatedItems?.hierarchies[0]?.slug, localePathPrefix)}
                                class="flex gap-1 items-center"
                            >
                                <Text class="w-6 aspect-square" />
                                <span class="max-w-[calc(100%-20px)] line-clamp-1">
                                    {item?.relatedItems?.hierarchies[0]?.title}
                                </span>
                            </a>
                        }

                        <div class="flex gap-1 items-center">
                            <Calendar class="w-5 aspect-square" />
                            <span class="max-w-[calc(100%-20px)] line-clamp-1">
                                {useLocalizedDate({
                                    localeKey: currentLocale.key,
                                    localesEnum: localesEnum,
                                    utcDate: item?.lastUpdateUtcDate,
                                })}
                            </span>
                        </div>

                    </div>

                    <p class="line-clamp-4 text-sm">
                        {item?.summary}
                    </p>

                </div>

            </div>)
        }
    </>
})

export default Card
