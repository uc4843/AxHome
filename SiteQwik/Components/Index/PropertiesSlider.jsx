import { component$ } from '@builder.io/qwik'
import {
    lg,
    md,
    sm,
    Swiper,
    SwiperSlide,
    xl,
    xs,
    zero,
} from 'Base'
import {
    PropertyCard,
    SectionTitle,
} from 'Shared'

const PropertiesSlider = component$(({
    currentLocale,
    featuredLabel,
    localesEnum,
    occasionLabel,
    properties,
    propertyImages,
    sliderName,
    occasionDescription,
    occasionTitle,
    translations,
}) => {

    return <>
        <section class="max-w-7xl mx-auto px-5">
            <SectionTitle
                description={occasionDescription}
                title={occasionTitle}
            />
            <Swiper
                name={sliderName}
                containerClass="pb-16"
                paginationClass="active-bullet:bg-custom-color1 active-bullet:w-5 active-bullet:rounded-md"
                config={{
                    breakpoints: {
                        [zero]: {
                            slidesPerView: 1.1,
                            spaceBetween: 10
                        },
                        [xs]: {
                            slidesPerView: 1.2,
                            spaceBetween: 10,
                        },
                        [sm]: {
                            slidesPerView: 2.2,
                            spaceBetween: 15,
                        },
                        [md]: {
                            slidesPerView: 2.5,
                            spaceBetween: 15,
                        },
                        [lg]: {
                            slidesPerView: 3.3,
                            spaceBetween: 20,
                        },
                        [xl]: {
                            slidesPerView: 4.2,
                            spaceBetween: 20,
                        },
                    },
                }}
            >
                {
                    properties?.map(item => <>
                        <SwiperSlide key={item?.id}>
                            <PropertyCard
                                    {...propertyImages}
                                    featuredLabel={featuredLabel}
                                    item={item}
                                    occasionLabel={occasionLabel}
                                    translations={translations}
                                    currentLocale={currentLocale}
                                    localesEnum={localesEnum}
                                />
                        </SwiperSlide>
                    </>)
                }
            </Swiper>
        </section>
    </>
})

export default PropertiesSlider
