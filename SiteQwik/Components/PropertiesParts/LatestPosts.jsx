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
            <p class='text-xl my-4'>
                {title}555
            </p>
            {lastThreePosts?.map(item => <>
                <div class="text-center mt-8">
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
