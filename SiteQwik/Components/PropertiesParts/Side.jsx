import {
    CityDivisions,
    LatestPosts,
    SeoDescription,
} from "PropertiesParts"

const Side = ({
    allCityDivisions,
    blogTexts,
    content,
    currentDealType,
    latestPosts,
    localePathPrefix,
    propertiesTexts,
    rootCityDivisions,
    seo,
}) => {

    return <>
        <div class="h-full w-full">
            <div class="sticky top-10 start-0 shadow-lg shadow-gray-200 rounded-lg px-4 pb-10 mb-8 border-t-8 border-custom-color1 bg-white">
                <p class="block text-sm font-semibold text-custom-color41 pt-4 pb-3 border-b border-gray-300">
                    {currentDealType?.name} {propertiesTexts?.cityDivisionsTitle}
                </p>
                <CityDivisions
                    allCityDivisions={allCityDivisions}
                    cityDivisionsTitle={propertiesTexts?.cityDivisionsTitle}
                    currentDealType={currentDealType}
                    localePathPrefix={localePathPrefix}
                    propertiesTexts={propertiesTexts}
                    rootCityDivisions={rootCityDivisions}
                />

                <SeoDescription
                    {...propertiesTexts}
                    {...seo}
                    content={content || seo?.relatedItems?.content}
                />

                <LatestPosts
                    latestPosts={latestPosts}
                    localePathPrefix={localePathPrefix}
                    title={blogTexts?.sideLatestPostsTitle}
                />

            </div>
        </div>
    </>
}

export default Side
