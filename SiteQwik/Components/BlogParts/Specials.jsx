import { component$ } from "@builder.io/qwik"
import {
    lg,
    md,
    sm,
    Swiper,
    SwiperSlide,
    xs,
    zero,
} from "Base"
import { PostCard } from "Shared"

const Specials = component$(({
    blogTexts,
    localePathPrefix,
    popularPosts,
}) => {

    return <>
        <section class='bg-white rounded-2xl max-w-7xl mx-auto px-4 lg:px-16 pt-8'>
            <div class='max-w-7xl mx-auto px-4 pb-8 bg-white rounded-2xl'>
                <h2 class='font-bold text-lg mb-2'>
                    <p>{blogTexts?.latestPostsTitle}</p>
                </h2>
                <Swiper
                    name='SpecialSwiper'
                    containerClass='pb-16'
                    paginationClass='active-bullet:bg-custom-color1 active-bullet:w-5 active-bullet:rounded-md'
                    config={{
                        breakpoints: {
                            [zero]: {
                                slidesPerView: 1.2,
                                spaceBetween: 10
                            },
                            [xs]: {
                                slidesPerView: 1.3,
                                spaceBetween: 10,
                            },
                            [sm]: {
                                slidesPerView: 1.6,
                                spaceBetween: 15,
                            },
                            [md]: {
                                slidesPerView: 2.2,
                                spaceBetween: 15,
                            },
                            [lg]: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        },
                    }}
                >
                    {popularPosts?.map(item => <>
                        <SwiperSlide key={item?.id}>
                            <PostCard
                                item={item}
                                localePathPrefix={localePathPrefix}
                            />
                        </SwiperSlide>
                    </>)}
                </Swiper>
            </div>
        </section>
    </>
})

export default Specials
