import { Image } from "Base"
import { FaqPages } from "Seo"
import {
    AddComment,
    RichText,
} from "Shared"
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
                localePathPrefix={localePathPrefix}
                post={post}
            />

            <h1 class="font-bold font-bold text-xl my-4">
                {post?.title}
            </h1>

            <Image
                alt={post?.title}
                containerClass="relative"
                imageClass="object-contain w-full aspect-[2/1]"
                src={post?.relatedItems?.imageUrl}
            />

            <div class="w-full">
                <RichText
                    class="leading-8"
                    content={content}
                    h1="font-bold mt-[10px] mb-[20px] text-[1.75rem]"
                    h2="font-bold mt-[10px] mb-[15px] text-[1.5rem]"
                    h3="font-bold mt-[10px] mb-[15px] text-[1.25rem]"
                    p="mb-[10px]"
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
                entity={post}
            />

        </div>
    </>
}

export default Main
