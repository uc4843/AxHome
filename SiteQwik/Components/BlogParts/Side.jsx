import { PostCard } from 'Shared'
import {
    Swiper,
    SwiperSlide,
    zero,
} from 'Base'
import {
    Categories,
    LatestPosts,
} from 'BlogParts'

const Side = ({
    blogTexts,
    categories,
    latestPosts,
    localePathPrefix,
    readMore,
    title,
}) => {

    return <>
        <div class='w-full h-full'>
            <aside class='sticky top-10 start-0 shadow-lg shadow-gray-200 rounded-lg px-4 pb-10 border-t-8 border-custom-color1 bg-white'>
                <div class='p-4 mb-4'>
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
                    readMore={readMore}
                />

            </aside>
        </div>
    </>
}

export default Side
