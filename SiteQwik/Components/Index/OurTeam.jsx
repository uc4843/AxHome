import { component$ } from "@builder.io/qwik"
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
} from "Base"
import { SectionTitle } from "Shared"
import {
    ChevronLeft,
    ChevronRight,
} from "Svg"

const OurTeam = component$(({
    description,
    items,
    title,
}) => {

    return <section class="relative">
        <div class="max-w-3xl mx-auto px-5">
            <divTitle
                description={description}
                title={title}
            />
            <Swiper
                config={{
                    autoplay: false,
                    loop: false,
                    speed: 800,
                    navigation: {
                        nextEl: ".teamSlider-next",
                        prevEl: ".teamSlider-prev",
                    },
                    breakpoints: {
                        [zero]: {
                            slidesPerView: 1.1,
                            spaceBetween: 0,
                        },
                        [xs]: {
                            slidesPerView: 1.6,
                            spaceBetween: 0,
                        },
                        [sm]: {
                            slidesPerView: 2.2,
                            spaceBetween: 0,
                        },
                        [md]: {
                            slidesPerView: 2.4,
                            spaceBetween: 0,
                        },
                        [lg]: {
                            slidesPerView: 2.8,
                            spaceBetween: 0,
                        },
                        [xl]: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        }
                    }
                }}
                containerClass="pb-14"
                name="teamSlider"
                paginationClass="pt-0 bullet:w-3 bullet:h-3 active-bullet:bg-custom-color4"
            >
                {
                    items?.map((item, index) => <SwiperSlide
                        class="px-4"
                        key={item.id}
                    >
                        <div class="block shadow-xl rounded-2xl my-5 md:my-10 text-center">
                            <a
                                aria-label={item.title}
                                href={item.link}
                            >
                                <Image
                                    alt={item.title}
                                    containerClass="w-full aspect-square"
                                    priority={index < 3}
                                    src={item.image}
                                />

                            </a>
                            <div class="py-8">
                                <a
                                    aria-label={item.title}
                                    href={item.link}
                                >
                                    <p class="py-1 font-bold text-lg line-clamp-1">
                                        {item.title}
                                    </p>
                                </a>
                                <p class="text-slate-500 text-md line-clamp-1">
                                    {item.jobPosition}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>

        <div class="relative max-w-4xl mx-auto px-5 h-24 lg:mb-60">
            <div class="hidden lg:flex justify-between items-center mx-auto -mt-72">
                <div class="h-24 px-1 flex items-center rounded-sm cursor-pointer teamSlider-next bg-custom-color3 group hover:fill-white hover:bg-custom-color1 transition-all duration-300 swiper-button-disabled nextTeamSlider">
                    <ChevronRight class="w-8 aspect-square" />
                </div>
                <div class="h-24 px-1 flex items-center rounded-sm cursor-pointer teamSlider-prev bg-custom-color3 group hover:fill-white hover:bg-custom-color1 transition-all duration-300 previousTeamSlider">
                    <ChevronLeft class="w-8 aspect-square" />

                </div>
            </div>
        </div>
    </section>
})

export default OurTeam
