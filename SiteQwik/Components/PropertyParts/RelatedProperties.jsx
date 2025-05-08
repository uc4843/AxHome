import { component$ } from "@builder.io/qwik"
import {
    lg,
    md,
    sm,
    Swiper,
    SwiperSlide,
    xl,
    xs,
    zero,
} from "Base"
import { PropertyCard } from "Shared"

const RelatedProperties = component$(({
    currentLocale,
    featuredLabelTitle,
    localePathPrefix,
    localesEnum,
    properties,
    propertiesTexts,
    propertyImages,
    propertyInfoTexts,
    translations,
}) => {

    return <>
        {
            properties.length > 0 &&
            <section>
                <div class="max-w-7xl mx-auto px-5 pt-8 pb-4 lg:pt-16 lg:pb-8">
                    <h2 class="mb-2 font-bold text-md md:text-xl py-2">
                        {propertiesTexts?.relatedPropertiesTitle}
                    </h2>
                    <Swiper
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
                                    slidesPerView: 3.6,
                                    spaceBetween: 20,
                                },
                            },
                        }}
                        containerClass="pb-16"
                        name="relatedSwiper"
                        paginationClass="pt-0 bullet:w-3 bullet:h-3 active-bullet:bg-custom-color4"
                    >
                        {
                            properties?.map(item => <SwiperSlide key={item.id}>
                                <PropertyCard
                                    {...propertyImages}
                                    currentLocale={currentLocale}
                                    featuredLabelTitle={featuredLabelTitle}
                                    item={item}
                                    localePathPrefix={localePathPrefix}
                                    localesEnum={localesEnum}
                                    occasionLabelTitle={propertiesTexts?.occasionLabelTitle}
                                    propertiesTexts={propertiesTexts}
                                    propertyInfoTexts={propertyInfoTexts}
                                    translations={translations}
                                />
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </section>
        }
    </>
})

export default RelatedProperties

