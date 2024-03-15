import {
    CityDivisions,
    LatestPosts,
} from "PropertiesParts"

const Side = ({
    allCityDivisions,
    blogTexts,
    latestPosts,
    localePathPrefix,
    propertiesTexts,
    rootCityDivisions,
}) => {

    return <>
        <div class="h-full w-full">
            <div class="sticky top-10 start-0 shadow-lg shadow-gray-200 rounded-lg px-4 pb-10 mb-8 border-t-8 border-custom-color1 bg-white">
                <p class="block text-xl text-custom-color41 pt-4 pb-3 border-b border-gray-300">
                    {propertiesTexts?.cityDivisionsTitle}
                </p>
                <CityDivisions
                    allCityDivisions={allCityDivisions}
                    cityDivisionsTitle={propertiesTexts?.cityDivisionsTitle}
                    localePathPrefix={localePathPrefix}
                    propertiesTexts={propertiesTexts}
                    rootCityDivisions={rootCityDivisions}
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
