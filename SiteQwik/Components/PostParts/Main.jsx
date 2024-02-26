import { Image } from "Base"
import {
    AddComment,
    RichText,
} from "Shared"
import { FaqPages } from "Seo"
import {
    Icons,
    Tags,
} from "PostParts"

const Main = ({
    blogTexts,
    content,
    faqPages,
    fields,
    form,
    localePathPrefix,
    post,
}) => {

    return <>
        <div class="px-4 py-2 shadow-lg shadow-gray-200 rounded-lg">

            <Icons
                blogTexts={blogTexts}
                post={post}
                localePathPrefix={localePathPrefix}
            />

            <h1 class="font-bold font-bold text-xl my-4">
                {post?.title}
            </h1>

            <Image
                src={post?.relatedItems?.imageUrl}
                alt={post?.title}
                containerClass='relative'
                imageClass='object-contain w-full aspect-[2/1]'
            />

            <div class="w-full">
                <RichText
                    content={content}
                    class="leading-8"
                    h1='font-bold mt-[10px] mb-[20px] text-[1.75rem]'
                    h2='font-bold mt-[10px] mb-[15px] text-[1.5rem]'
                    h3='font-bold mt-[10px] mb-[15px] text-[1.25rem]'
                    p='mb-[10px]'
                />
            </div>

            <FaqPages faqPages={faqPages} />

            {
                post?.relatedItems?.tags && post?.relatedItems?.tags.length > 0 &&
                <div class="w-full flex flex-wrap gap-3 my-6 md:my-14">
                    <Tags tags={post?.relatedItems?.tags} />
                </div>
            }

            <AddComment
                {...fields}
                {...form}
                entityGuid={post.guid}
                entityType={post?.relatedItems?.entityType || 'BlogPost'}
            />

        </div>
    </>
}

export default Main
