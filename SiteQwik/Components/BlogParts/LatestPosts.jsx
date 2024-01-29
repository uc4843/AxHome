import { component$ } from '@builder.io/qwik'
import { PostCard } from 'Shared'
import {
    Swiper,
    SwiperSlide,
    zero,
} from 'Base'

const LatestPosts = component$(({
    blogTexts,
    latestPosts,
    localePathPrefix,
    readMore,
}) => {

    return <>
        <div class='mt-8 p-4'>
            <p class='text-xl'>
                {blogTexts?.sideLatestPostsTitle}
            </p>

            <div class='mx-auto flex max-w-6xl my-4'>
                <Swiper
                    name='LatestPostsSwiper'
                    containerClass='pb-20'
                    paginationClass='active-bullet:bg-custom-color41'
                    config={{
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
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
                                    readMore={readMore}
                                />
                            </div>
                        </SwiperSlide>
                    </>)}
                </Swiper>

                {/* <div class='swiper-button-next'></div>
                <div class='swiper-button-prev'></div> */}

            </div>
        </div>
    </>
})

export default LatestPosts
