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

const OurTeam = component$(({
    description,
    items,
    title,
}) => {

    return <>
        <section class="relative max-w-3xl mx-auto">
            <SectionTitle
                description={description}
                title={title}
            />
            <Swiper
                name='teamSlider'
                containerClass="pb-14"
                paginationClass="pt-0 bullet:w-3 bullet:h-3 active-bullet:bg-custom-color4"
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
            >
                {items?.map(item => <SwiperSlide
                    key={item?.id}>
                    <a
                        class="block shadow-xl rounded-2xl my-5 md:my-10 text-center"
                        href={item?.link}
                    >
                        <Image
                            src={item?.image}
                            containerClass="w-full aspect-square"
                        />
                        <div class='py-8'>
                            <p class="py-1 font-bold text-lg line-clamp-1">
                                {item?.title}
                            </p>
                            <p class="text-slate-500 text-md line-clamp-1">
                                {item?.jobPosition}
                            </p>
                        </div>
                    </a>
                </SwiperSlide>)}
            </Swiper>
        </section>
    </>
})

export default OurTeam
