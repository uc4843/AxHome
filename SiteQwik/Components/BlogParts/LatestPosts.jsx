import { component$ } from "@builder.io/qwik"
import { PostCard } from "Shared"
import {
    Swiper,
    SwiperSlide,
    zero,
} from "Base"

const LatestPosts = component$(({
    blogTexts,
    latestPosts,
    localePathPrefix,
    readMore,
}) => {

    return <>
        <div class='mt-8 p-4'>
            <p class='block text-xl text-custom-color41 pt-4 mb-4 pb-3 border-b border-gray-300'>
                {blogTexts?.sideLatestPostsTitle}
            </p>

            <div class='mx-auto flex max-w-6xl my-4'>
                <Swiper
                    name='LatestPostsSwiper'
                    containerClass='pb-20'
                    paginationClass='active-bullet:bg-custom-color41'
                    config={{
                        navigation: {
                            nextEl: '.button-next',
                            prevEl: '.button-prev',
                        },
                        breakpoints: {
                            [zero]: {
                                slidesPerView: 1,
                            },
                        },
                    }}
                >
                    {latestPosts?.map(item => <>
                        <SwiperSlide key={item?.id}>
                            <div class='border border-custom-color3 shadow-md shadow-gray-100 group rounded-lg'>
                                <PostCard
                                    item={item}
                                    localePathPrefix={localePathPrefix}
                                />
                                <p class='text-md text-center text-custom-color4 group-hover:text-custom-color41 py-4 mb-4'>
                                    {readMore}
                                </p>
                            </div>
                        </SwiperSlide>
                    </>)}
                </Swiper>

                {/* <div class='button-next'></div>
                <div class='button-prev'></div> */}

            </div>
        </div>
    </>
})

export default LatestPosts
