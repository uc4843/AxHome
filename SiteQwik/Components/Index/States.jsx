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

const States = component$(({
    description,
    items,
    title,
}) => {

    return <>
        <section class="bg-custom-color3 py-12 mt-4">
            <div class="max-w-7xl mx-auto px-5">
                <SectionTitle
                    description={description}
                    title={title}
                />
                <Swiper
                    config={{
                        autoplay: false,
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
                                slidesPerView: 2.2,
                                spaceBetween: 20,
                            },
                            [md]: {
                                slidesPerView: 2.4,
                                spaceBetween: 30,
                            },
                            [lg]: {
                                slidesPerView: 2.8,
                                spaceBetween: 30,
                            },
                            [xl]: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            }
                        }
                    }}
                    containerClass="pb-14"
                    name="statesSlider"
                    paginationClass="pt-0 bullet:w-3 bullet:h-3 active-bullet:bg-custom-color4"
                >
                    {
                        items?.map(item => <SwiperSlide key={item.id}>
                            <a
                                class="relative text-white text-center aspect-[1/1]"
                                href={item.link}
                            >
                                <Image
                                    containerClass="relative w-full aspect-square rounded-md overflow-hidden mt-10"
                                    src={item.image}
                                />
                                <div class="absolute bottom-0 w-full bg-black/60 rounded-b-md md:pt-3">
                                    <h2 class="w-full text-sm md:text-xl font-bold line-clamp-1 py-1 px-3">
                                        {item.title}
                                    </h2>
                                    <p class="w-full text-xs md:text-lg line-clamp-1 mb-[40px] px-3 md:py-1">
                                        {item.summary}
                                    </p>
                                </div>
                            </a>
                            <a
                                class="absolute -bottom-3 rounded-md hover:brightness-125 transition-all end-1/2 translate-x-[-50%] bg-custom-color1 text-white font-bold text-xs md:text-lg min-w-[40%] p-2 flex justify-center"
                                href={item.link}
                            >
                                {item.linkText}
                            </a>
                        </SwiperSlide>)}
                </Swiper>
            </div>
        </section>
    </>
})

export default States
