import {
    component$,
    useContext,
} from '@builder.io/qwik'
import {
    LocalizedDate,
    Rating,
} from 'Base'
import {
    PostContext,
    useCategoryUrl,
} from 'Blog'
import {
    Calendar,
    Eye,
    Folder,
} from 'Svg'

const Icons = component$(({
    blogTexts,
    localePathPrefix,
    post,
}) => {

    const viewCount = useContext(PostContext)

    return <>
        <div class='flex flex-wrap items-center justify-start my-5 gap-10 text-xs sm:text-sm'>

            {post?.relatedItems?.hierarchies.length > 0 &&
                <a
                    href={useCategoryUrl(post?.relatedItems?.hierarchies?.[0]?.slug, localePathPrefix)}
                    class='flex items-center gap-1'>
                    <Folder class='w-5 aspect-square' />
                    {post?.relatedItems?.hierarchies?.[0]?.title}
                </a>
            }

            <span class='flex items-center gap-1'>
                <Calendar class='w-5 aspect-square' />
                <LocalizedDate utcDate={post?.utcDate} />
            </span>

            <span class='flex items-center gap-1'>
                <Eye class='w-6 aspect-square' />
                {viewCount}
            </span>

            <Rating
                once
                containerClass='ms-auto'
                entityGuid={post.guid}
                entityType='BlogPost'
                value={post.relatedItems?.ratingAverage?.value}
                {...blogTexts}
            />

        </div>
    </>
})

export default Icons

