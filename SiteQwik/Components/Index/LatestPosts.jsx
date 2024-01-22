import { component$ } from '@builder.io/qwik'
import {
    useCategoryUrl,
    usePostUrl,
} from 'Blog'
import {
    Image,
    lg,
    md,
    sm,
    Swiper,
    SwiperSlide,
    xl,
    xs,
    zero,
} from 'Base'
import { SectionTitle } from 'Shared'
import { Text } from 'Svg'

const LatestPosts = component$(({
    description,
    latestPosts,
    localePathPrefix,
    title,
}) => {

    return <>
        <section class="w-full px-5 mt-12 mb-10">
            <SectionTitle
                description={description}
                title={title}
            />
            <div class='w-full 2xl:px-0'>
                <Swiper
                    name='LatestPostsSlider'
                    containerClass="pb-14"
                    paginationClass="pt-0 bullet:w-3 bullet:h-3 active-bullet:bg-custom-color1"
                    config={{
                        autoplay: true,
                        loop: false,
                        speed: 800,
                        breakpoints: {
                            [zero]: {
                                slidesPerView: 1.1,
                                spaceBetween: 10,
                            },
                            [xs]: {
                                slidesPerView: 1.6,
                                spaceBetween: 10,
                            },
                            [sm]: {
                                slidesPerView: 2.5,
                                spaceBetween: 15,
                            },
                            [md]: {
                                slidesPerView: 3.5,
                                spaceBetween: 15,
                            },
                            [lg]: {
                                slidesPerView: 4.5,
                                spaceBetween: 15,
                            },
                            [xl]: {
                                slidesPerView: 5.5,
                                spaceBetween: 15,
                            }
                        }
                    }}
                >
                    {
                        latestPosts?.map(item => <SwiperSlide
                            key={item?.id}>
                            <div class='max-w-[260px] sm:max-w-[500px] mx-auto border rounded-xl overflow-hidden shadow-xl group'>

                                <a
                                    href={usePostUrl(item?.slug, localePathPrefix)}
                                    class='relative w-full block overflow-hidden after:transition-all'
                                    aria-label={item?.title}
                                >
                                    <Image
                                        containerClass='max-w-[260px] sm:max-w-[500px] mx-auto w-full aspect-[3/2] rounded-xl overflow-hidden'
                                        imageClass='group-hover:scale-110 transition-all duration-500'
                                        src={item?.relatedItems?.imageUrl}
                                        alt={item?.title}
                                    />
                                </a>

                                <a href={usePostUrl(item?.slug, localePathPrefix)}>
                                    <p class='font-bold line-clamp-1 my-3 px-3 group-hover:text-custom-color1 transition-all my-4'>{item?.title}</p>
                                </a>

                                <p class='text-gray-600 line-clamp-4 h-[80px] text-sm px-3 mb-4 text-[15px]'>{item?.summary}</p>

                                {item?.relatedItems?.hierarchies.length > 0 ?
                                    <a
                                        href={useCategoryUrl(item?.relatedItems?.hierarchies[0]?.slug, localePathPrefix)}
                                        class='py-2 border-t border-slate-200 flex items-center gap-1 px-2 text-gray-600 hover:text-slate-800 text-xs transition-all'
                                        aria-label={item?.relatedItems?.hierarchies[0]?.title}
                                    >
                                        <Text class="w-4 aspect-square fill-gray-600" />
                                        <span class="line-clamp-1">{item?.relatedItems?.hierarchies[0]?.title}</span>
                                    </a>
                                    : <div></div>
                                }
                            </div>
                        </SwiperSlide>)}

                </Swiper>
            </div>
        </section>
    </>
})

export default LatestPosts
