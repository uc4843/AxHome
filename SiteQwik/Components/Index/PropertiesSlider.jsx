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
import { ChevronLeft } from 'Svg'

const PropertiesSlider = component$(({
    currentLocale,
    featuredLabelTitle,
    localePathPrefix,
    localesEnum,
    occasionDescription,
    occasionLabelTitle,
    occasionTitle,
    properties,
    propertiesTexts,
    propertyImages,
    sliderName,
    translations,
}) => {

    return <>
        <section class="max-w-7xl mx-auto px-5">
            <SectionTitle
                description={propertiesTexts?.occasionDescription}
                title={propertiesTexts?.occasionTitle}
            />
            <div class='mt-10'>
                <Swiper
                    name={sliderName}
                    containerClass="pb-16"
                    paginationClass="active-bullet:bg-custom-color4 active-bullet:rounded-md"
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
                                    currentLocale={currentLocale}
                                    featuredLabelTitle={featuredLabelTitle}
                                    item={item}
                                    localePathPrefix={localePathPrefix}
                                    localesEnum={localesEnum}
                                    occasionLabelTitle={occasionLabelTitle}
                                    translations={translations}
                                />
                            </SwiperSlide>
                        </>)
                    }
                </Swiper>
            </div>

            <div class='px-4'>
                <a class='flex mx-auto justify-center bg-slate-300 w-full md:w-[250px] p-2 gap-5 hover:brightness-75 transition-all duration-300 rounded-md hover:bg-custom-color1 hover:text-white cursor-pointer'>
                    <ChevronLeft class='w-6 h-6 items-center rounded-full border border-white fill-white' />
                    <p>{propertiesTexts?.readMore}</p>
                </a>

            </div>
        </section>
    </>
})

export default PropertiesSlider
