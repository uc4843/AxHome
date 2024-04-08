import { FaqPages } from "Seo"
import {
    Breadcrumb,
    Pagination,
    Search,
} from "Shared"
import {
    ChartAveragePrice,
    Main,
    Results,
    Side,
} from "PropertiesParts"

const Layout = ({
    agent,
    averagePrices,
    blogTexts,
    breadcrumb,
    cityDivisionWrapper,
    currentDealType,
    currentLocale,
    currentPropertyType,
    dealTypes,
    faqPages,
    filter,
    latestPosts,
    localePathPrefix,
    localesEnum,
    properties,
    propertiesTexts,
    property,
    propertyImages,
    propertyInfoTexts,
    propertyTypes,
    seo,
    translations,
}) => {

    return <>
        <div class="bg-custom-color3">
            <Breadcrumb breadcrumb={breadcrumb} />

            <div class="relative max-w-7xl mx-auto my-8 pb-8 rounded-t-[30px] z-30">
                <form class="flex flex-col w-full px-2 relative md:px-4 md:flex-row flex-wrap gap-2 gap-y-4 md:gap-4 max-w-5xl md:mx-auto justify-center items-center py-4">
                    <p class="text-lg md:text-md text-black mb-4 md:mb-0 font-bold">
                        {filter?.searchTitle}
                    </p>
                    <Search
                        allCityDivision={cityDivisionWrapper.allCityDivisions}
                        allDealTypes={dealTypes}
                        allPropertyTypes={propertyTypes}
                        filter={filter}
                        localePathPrefix={localePathPrefix}
                    />
                </form>
            </div>
        </div>

        {averagePrices &&
            <ChartAveragePrice
                {...propertiesTexts}
                currentLocale={currentLocale}
                prices={averagePrices}
                title={cityDivisionWrapper?.currentCityDivision?.name}
                translations={translations}
            />
        }

        <section class="max-w-7xl mx-auto px-4">

            <Results
                cityDivisionWrapper={cityDivisionWrapper}
                currentDealType={currentDealType}
                currentPropertyType={currentPropertyType}
                metadata={properties?.metadata}
                propertiesTexts={propertiesTexts}
                translations={translations}
            />

            <section class="relative w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[70%_27%] gap-5 justify-between mt-10">
                <div>
                    <Main
                        agent={agent}
                        averagePrices={averagePrices}
                        cityDivisionWrapper={cityDivisionWrapper}
                        currentLocale={currentLocale}
                        faqPages={faqPages}
                        items={properties?.data}
                        localePathPrefix={localePathPrefix}
                        localesEnum={localesEnum}
                        metadata={properties?.metadata}
                        propertiesTexts={propertiesTexts}
                        property={property}
                        propertyImages={propertyImages}
                        propertyInfoTexts={propertyInfoTexts}
                        readMore={propertiesTexts?.readMore}
                        seo={seo}
                        translations={translations}
                    />
                    <Pagination
                        first
                        last
                        metadata={properties?.metadata}
                    />
                </div>

                <Side
                    {...cityDivisionWrapper}
                    blogTexts={blogTexts}
                    currentDealType={currentDealType}
                    latestPosts={latestPosts}
                    localePathPrefix={localePathPrefix}
                    propertiesTexts={propertiesTexts}
                    seo={seo}
                    translations={translations}
                />
            </section>

            <section>
                {
                    faqPages && <FaqPages faqPages={faqPages} />
                }
            </section>

        </section>
    </>
}

export default Layout
