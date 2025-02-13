import { LocalizedDate } from "Base"
import { Rating } from "Social"
import { useCategoryUrl } from "Blog"
import {
    Calendar,
    Eye,
    Folder,
} from "Svg"

const Icons = ({
    blogTexts,
    localePathPrefix,
    post,
    visitCount,
}) => {

    return <div class="flex flex-wrap items-center justify-start my-5 gap-10 text-xs sm:text-sm">

        {
            post?.relatedItems?.hasCategories &&
            <a
                class="flex items-center gap-1"
                href={useCategoryUrl(post?.relatedItems?.categories?.[0]?.slug, localePathPrefix)}
            >
                <Folder class="w-5 aspect-square" />
                {post?.relatedItems?.categories?.[0]?.title}
            </a>
        }

        <span class="flex items-center gap-1">
            <Calendar class="w-5 aspect-square" />
            <LocalizedDate utcDate={post?.utcDate} />
        </span>

        <span class="flex items-center gap-1">
            <Eye class="w-6 aspect-square" />
            {visitCount}
        </span>

        <Rating
            containerClass="ms-auto"
            entityGuid={post?.guid}
            entityType={post?.relatedItems.entityType}
            once
            value={post?.relatedItems.ratingAverage?.value}
            {...blogTexts}
        />

    </div>
}

export default Icons

