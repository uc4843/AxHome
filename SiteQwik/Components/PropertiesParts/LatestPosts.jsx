import { component$ } from '@builder.io/qwik'
import { PostCard } from 'Shared'

const LatestPosts = component$(({
    latestPosts,
    localePathPrefix,
    seeMore,
}) => {

    const lastThreePosts = latestPosts.slice(0, 3)

    return <>
        <div class="mb-2 mt-8 p-4">
            <h2 class="text-xl">
                5555
            </h2>
            <div class="text-center">
                {lastThreePosts?.map(item => <>
                    <PostCard
                        key={item?.id}
                        item={item}
                        seeMore={seeMore}
                        localePathPrefix={localePathPrefix}
                    />
                </>)
                }
            </div>
        </div>
    </>
})

export default LatestPosts
