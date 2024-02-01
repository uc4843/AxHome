import { component$ } from '@builder.io/qwik'
import { PostCard } from 'Shared'

const LatestPosts = component$(({
    latestPosts,
    localePathPrefix,
    title,
}) => {

    const lastThreePosts = latestPosts.slice(0, 3)

    return <>
        <div class="mb-2 mt-8 p-4">
            <p class='block text-xl text-custom-color41 pt-4 pb-3 border-b border-gray-300'>
                {title}
            </p>
            {lastThreePosts?.map(item => <>
                <div class="text-center mt-4">
                    <PostCard
                        key={item?.id}
                        item={item}
                        localePathPrefix={localePathPrefix}
                    />
                </div>
            </>)
            }
        </div>
    </>
})

export default LatestPosts
