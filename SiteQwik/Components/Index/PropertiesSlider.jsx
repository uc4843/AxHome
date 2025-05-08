import { component$ } from "@builder.io/qwik"
import {
    Image,
    lg,
    md,
    sm,
    Swiper,
    SwiperSlide,
    xs,
    zero,
} from "Base"
import {
    PropertyCard,
    SectionTitle,
} from "Shared"
import { ChevronLeft } from "Svg"

const PropertiesSlider = component$(({
    currentLocale,
    featuredLabelTitle,
    leftCircle,
    localePathPrefix,
    localesEnum,
    properties,
    propertiesTexts,
    property,
    propertyImages,
    propertyInfoTexts,
    rightCircle,
    sliderName,
    translations,
    imagesAlt,
}) => {

    return <>
        <section class="relative">

            <Image
                alt={imagesAlt}
                containerClass="w-16 absolute z-0 start-0 bottom-10"
                src={rightCircle}
            />

            <Image
                alt={imagesAlt}
                containerClass="w-20 absolute z-0 end-0 bottom-16"
                src={leftCircle}
            />

            <div class="relative z-10 max-w-7xl mx-auto px-5 mb-10">
                <SectionTitle
                    description={propertiesTexts?.occasionDescription}
                    title={propertiesTexts?.occasionTitle}
                />
                <div class="mt-10">
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
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                }
                            },
                        }}
                        containerClass="pb-16"
                        name={sliderName}
                        paginationClass="pt-0 bullet:w-3 bullet:h-3 active-bullet:bg-custom-color4"
                    >
                        {
                            properties?.map(property => <SwiperSlide key={property.id}>
                                <PropertyCard
                                    {...propertyImages}
                                    currentLocale={currentLocale}
                                    featuredLabelTitle={featuredLabelTitle}
                                    localePathPrefix={localePathPrefix}
                                    localesEnum={localesEnum}
                                    occasionLabelTitle={propertiesTexts?.occasionLabelTitle}
                                    propertiesTexts={propertiesTexts}
                                    property={property}
                                    propertyInfoTexts={propertyInfoTexts}
                                    translations={translations}
                                />
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>

                <div class="px-4">
                    <a
                        aria-label={propertiesTexts?.readMore}
                        class="flex mx-auto justify-center bg-custom-color1 w-full md:w-[250px] p-2 gap-5 hover:brightness-110 transition-all text-white duration-300 rounded-md cursor-pointer"
                        href="/properties"
                    >
                        <ChevronLeft class="w-6 h-6 items-center rounded-full border border-white fill-white" />
                        <p>{propertiesTexts?.readMore}</p>
                    </a>

                </div>
            </div>
        </section>
    </>
})

export default PropertiesSlider
