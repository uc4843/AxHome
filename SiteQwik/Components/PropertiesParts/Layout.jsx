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
    averagePrices,
    breadcrumb,
    cityDivisionWrapper,
    currentPropertyType,
    dealTypes,
    faqPages,
    filter,
    properties,
    propertiesTexts,
    propertyTypes,
    ...rest
}) => {

    return <>
        <div class="bg-custom-color3">
            <Breadcrumb breadcrumb={breadcrumb} />
            <div class="relative max-w-7xl mx-auto mb-8 mt-5 pb-2.5 rounded-t-[30px] z-30">
                <form class="flex flex-col w-full px-2 relative md:px-4 md:flex-row flex-wrap gap-2 gap-y-4 md:gap-4 max-w-5xl md:mx-auto justify-center items-center py-4">
                    <p class="text-lg md:text-md text-black mb-4 md:mb-0 font-bold">
                        {filter?.searchTitle}
                    </p>
                    <Search
                        {...rest}
                        allCityDivision={cityDivisionWrapper.allCityDivisions}
                        allDealTypes={dealTypes}
                        allPropertyTypes={propertyTypes}
                        filter={filter}
                    />
                </form>
            </div>
        </div>
        {
            averagePrices &&
            <ChartAveragePrice
                {...propertiesTexts}
                {...rest}
                prices={averagePrices}
                title={cityDivisionWrapper?.currentCityDivision?.name}
            />
        }
        <section class="max-w-7xl mx-auto px-4">
            <Results
                {...rest}
                cityDivisionWrapper={cityDivisionWrapper}
                currentPropertyType={currentPropertyType}
                metadata={properties?.metadata}
                propertiesTexts={propertiesTexts}
            />
            <section class="relative w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[70%_27%] gap-5 justify-between mt-10">
                <div>
                    <Main
                        {...rest}
                        averagePrices={averagePrices}
                        cityDivisionWrapper={cityDivisionWrapper}
                        faqPages={faqPages}
                        metadata={properties?.metadata}
                        properties={properties?.data}
                        propertiesTexts={propertiesTexts}
                        readMore={propertiesTexts?.readMore}
                    />
                    <Pagination
                        first
                        last
                        metadata={properties?.metadata}
                    />
                </div>
                <Side
                    {...cityDivisionWrapper}
                    {...rest}
                    propertiesTexts={propertiesTexts}
                />
            </section>
            <FaqPages faqPages={faqPages} />
        </section>
    </>
}

export default Layout
