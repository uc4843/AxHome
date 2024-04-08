import {
    Categories,
    Related,
} from "PostParts"

const Side = ({
    blogTexts,
    categories,
    localePathPrefix,
    relatedPosts,
}) => {

    return <>
        <div class="h-full w-full">
            <div class="sticky top-10 start-0 shadow-lg shadow-gray-200 rounded-lg px-4 py-2 pb-8 border-t-8 border-custom-color1 bg-white">
                <p class="block text-xl text-custom-color41 pt-4 px-3 pb-3 border-b border-gray-300">
                    {blogTexts?.categoryTitle}
                </p>
                <ul class="flex flex-col gap-3 px-3 pb-4">
                    <Categories
                        categories={categories}
                        localePathPrefix={localePathPrefix}
                    />
                </ul>

                {
                    relatedPosts &&
                    <div class="my-5">
                        <p class="block text-xl text-custom-color41 pt-4 px-3 pb-3 border-b border-gray-300">
                            {blogTexts?.latestPostsTitle}
                        </p>
                        <div class="grid grid-cols-1 gap-4 py-4">
                            <Related
                                relatedPosts={relatedPosts}
                                localePathPrefix={localePathPrefix}
                            />
                        </div>
                    </div>
                }

            </div>
        </div>
    </>
}

export default Side
