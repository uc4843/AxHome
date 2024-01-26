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
    buttonText,
    cityDivisionWrapper,
    content,
    currentDealType,
    currentLocale,
    faqPages,
    featuredLabelTitle,
    filter,
    items,
    latestPosts,
    localePathPrefix,
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

                <Side
                    {...cityDivisionWrapper}
                    blogTexts={blogTexts}
                    latestPosts={latestPosts}
                    localePathPrefix={localePathPrefix}
                    propertiesTexts={propertiesTexts}
                    translations={translations}
                />
            </section>

            <Pagination
                first
                last
                metadata={properties.metadata}
            />
        </section>
    </>
}

export default Layout
