import {
    component$,
    useStyles$,
    useVisibleTask$,
} from "@builder.io/qwik"
import swiperStyles from "swiper/css?inline"
import swiperThumbsStyles from "swiper/css/thumbs?inline"
import swiperFreeModeStyles from "swiper/css/free-mode?inline"
import swiperNavigationStyles from "swiper/css/navigation?inline"
import Swiper from "swiper"
import {
    Navigation,
    Thumbs,
} from "swiper/modules"
import {
    Image,
    md,
    sm,
    xs,
    zero,
} from "Base"

const Slider = component$(({
    relatedItems,
    title,
}) => {

    useStyles$(swiperStyles)
    useStyles$(swiperThumbsStyles)
    useStyles$(swiperFreeModeStyles)
    useStyles$(swiperNavigationStyles)

    useVisibleTask$(() => {
        const thumbsSwiper = new Swiper(".thumbs-swiper", {
            modules: [Thumbs],
            clickable: true,
            slidesPerView: 4,
            spaceBetween: 20,
            freeMode: true,
            watchSlidesProgress: true,
            breakpoints: {
                [zero]: {
                    slidesPerView: 1.4,
                    spaceBetween: 5
                },
                [xs]: {
                    slidesPerView: 2.2,
                    spaceBetween: 5,
                },
                [sm]: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
            },
        })

        const mainSwiper = new Swiper(".main-swiper", {
            modules: [Thumbs, Navigation],
            navigation: {
                nextEl: ".product-next",
                prevEl: ".product-prev",
            },
            slidesPerView: 1,
            thumbs: {
                swiper: thumbsSwiper,
            },
        })
    }, {
        strategy: "document-ready"
    })

    return <>
        {
            relatedItems?.images && relatedItems?.images.length > 0 &&
            <div class="max-w-4xl bg-white">

                <div class="main-swiper swiper mb-6">
                    <div class="swiper-wrapper">
                        {
                            relatedItems?.images?.map(item => <div class="swiper-slide">
                                <Image
                                    src={item?.relatedItems?.url}
                                    alt={title}
                                    containerClass="w-full aspect-[2/1]"
                                />
                            </div>)
                        }
                    </div>
                </div>

                <div>
                    <div class="thumbs-swiper swiper">
                        <div class="swiper-wrapper">
                            {
                                relatedItems?.images?.map(item => <div
                                    class="swiper-slide"
                                    key={item?.relatedItems?.id}
                                >
                                    <Image
                                        src={item?.relatedItems?.url}
                                        alt={title}
                                        containerClass="w-full aspect-[1/.59]"
                                    />
                                </div>)
                            }

                        </div>
                    </div>

                    {/* <div class="flex items-center justify-center gap-x-2 mt-6">
                    <div class="cursor-pointer w-5 text-center rounded-md product-next bg-gray-200 hover:bg-gray-300 inline-block transition duration-200 fill-black">
                        <KeyboardArrowDown class="fill-black p-0.5 text-sm " />
                    </div>
                    <div class="cursor-pointer w-5 text-center rounded-md product-prev bg-gray-200 hover:bg-gray-300 inline-block transition duration-200 fill-black">
                        <KeyboardArrowUp class="fill-black p-0.5 text-sm " />
                    </div>
                </div> */}

                </div>
            </div>
        }
    </>
})

export default Slider
