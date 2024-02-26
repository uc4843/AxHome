import {
    Categories,
    LatestPosts,
} from "BlogParts"

const Side = ({
    blogTexts,
    categories,
    latestPosts,
    localePathPrefix,
    propertiesTexts,
    title,
}) => {

    return <>
        <div class='w-full h-full'>
            <aside class='sticky top-10 start-0 shadow-lg shadow-gray-200 rounded-lg px-4 pb-10 border-t-8 border-custom-color1 bg-white'>
                <p class='block text-xl text-custom-color41 pt-4 px-3 pb-3 border-b border-gray-300'>
                    {blogTexts?.categoryTitle}
                </p>
                <div class='px-4 mb-4'>
                    <Categories
                        categories={categories}
                        localePathPrefix={localePathPrefix}
                        title={title}
                    />
                </div>

                <LatestPosts
                    blogTexts={blogTexts}
                    latestPosts={latestPosts}
                    localePathPrefix={localePathPrefix}
                    readMore={propertiesTexts?.readMore}
                />

            </aside>
        </div>
    </>
}

export default Side
