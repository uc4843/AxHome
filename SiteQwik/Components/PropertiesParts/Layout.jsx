import {
    Breadcrumb,
    Pagination,
} from 'Shared'
import {
    Main,
    Results,
    Side,
} from 'PropertiesParts'

const Layout = ({
    agent,
    averagePrices,
    blogTexts,
    breadcrumb,
    cityDivisionWrapper,
    currentLocale,
    faqPages,
    latestPosts,
    localePathPrefix,
    localesEnum,
    properties,
    propertiesTexts,
    propertyImages,
    searchTitle,
    seo,
    translations,
}) => {

    return <>
        <div class='bg-custom-color3'>
            <Breadcrumb breadcrumb={breadcrumb} />
        </div>

        <section class='max-w-7xl mx-auto px-4'>

            <Results
                filter={searchTitle}
                metadata={properties?.metadata}
                translations={translations}
            />

            <section class='relative w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[70%_27%] gap-5 justify-between mt-10'>
                <div>
                    <Main
                        agent={agent}
                        averagePrices={averagePrices}
                        cityDivisionWrapper={cityDivisionWrapper}
                        currentLocale={currentLocale}
                        faqPages={faqPages}
                        items={properties?.data}
                        localesEnum={localesEnum}
                        metadata={properties?.metadata}
                        propertiesTexts={propertiesTexts}
                        propertyImages={propertyImages}
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
                    latestPosts={latestPosts}
                    localePathPrefix={localePathPrefix}
                    propertiesTexts={propertiesTexts}
                    translations={translations}
                />
            </section>

        </section>
    </>
}

export default Layout
