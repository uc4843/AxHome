import { component$ } from '@builder.io/qwik'
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

const States = component$(({
    description,
    items,
    title,
}) => {

    return <>
        <section class="bg-custom-color3 py-12">
            <div class="max-w-7xl mx-auto px-5">
                <SectionTitle
                    description={description}
                    title={title}
                />
                <Swiper
                    name='statesSlider'
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
                >
                    {
                        items?.map(item => <SwiperSlide
                            key={item?.id}>
                            <a
                                class="relative text-white text-center hover:text-custom-color1 transition-all"
                                href={item?.link}
                            >
                                <Image
                                    src={item?.image}
                                    containerClass="w-full aspect-square"
                                />
                                <div class="absolute bottom-0 start-0 w-full bg-black/60 px-4 pt-4 pb-12">
                                    <h2 class="w-full text-lg font-bold line-clamp-1 mb-2 line-clamp-0">
                                        {item?.title}
                                    </h2>
                                    <p class="w-full text-md line-clamp-1 line-clamp-0">
                                        {item?.summary}
                                    </p>
                                </div>
                            </a>
                            <a
                                class="absolute -bottom-3 rounded-md hover:brightness-125 transition-all end-1/2 translate-x-[-50%] bg-custom-color1 text-white font-bold text-md min-w-[40%] p-2 flex justify-center"
                                href={item?.link}
                            >
                                {item?.linkText}
                            </a>
                        </SwiperSlide>)}

                </Swiper>
            </div>
        </section>
    </>
})

export default States
