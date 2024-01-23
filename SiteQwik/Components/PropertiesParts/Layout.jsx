import {
    Breadcrumb,
    PropertyCard,
    Pagination,
} from 'Shared'
import { Window } from 'Svg'
import { Filter } from 'Index'

const Layout = ({
    agent,
    averagePrices,
    breadcrumb,
    buttonText,
    cityDivisionWrapper,
    content,
    currentDealType,
    currentLocale,
    faqPages,
    featuredLabelTitle,
    filter,
    items,
    localesEnum,
    metadata,
    occasionLabelTitle,
    properties,
    propertiesTexts,
    propertyImages,
    readMore,
    searchTitle,
    seo,
    translations,
}) => {

    return <>
        <section class='bg-custom-color3'>
            <Breadcrumb breadcrumb={breadcrumb} />
        </section>

        <section class='max-w-7xl mx-auto px-4'>

            <div class="w-full flex justify-center md:justify-between items-center my-4 px-4 py-5 border border-slate-300 rounded-2xl">
                <div class="flex items-center gap-1 font-light text-custom-color41 text-sm">
                    <Window class='w-7 h-7 fill-custom-color1' />
                    <h2>{searchTitle}</h2>
                </div>
                <div class="hidden md:flex gap-1 text-sm font-light items-center">
                    <span>{translations?.result}:</span>
                    <span>{translations?.properties}</span>
                    <span>{metadata?.from}</span>
                    <span>{translations?.to}</span>
                    <span>{metadata?.to}</span>
                    <span>{translations?.from}</span>
                    <span>{metadata?.totalCount}</span>
                    <span>{translations?.property}</span>
                </div>
            </div>

            <section class='relative w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[70%_27%] gap-5 justify-between mt-10'>
                <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-y-6 mb-10">
                    {
                        properties.data?.map(item => <>
                            <PropertyCard
                                propertyImages={propertyImages}
                                featuredLabelTitle={featuredLabelTitle}
                                item={item}
                                occasionLabelTitle={occasionLabelTitle}
                                translations={translations}
                                currentLocale={currentLocale}
                                localesEnum={localesEnum}
                            />
                        </>)
                    }
                </div>

            </section>

            <Pagination
                first
                last
                metadata={metadata}
            />

        </section>


    </>
}

export default Layout
