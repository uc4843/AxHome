import { Image } from "Base"
import { Comments } from "Social"
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
    comments,
    content,
    faqPages,
    fields,
    form,
    localePathPrefix,
    post,
    visitCount,
    translations,
}) => {

    return <>
        <div class="px-4 py-2 shadow-lg shadow-gray-200 rounded-lg">

            <Icons
                blogTexts={blogTexts}
                localePathPrefix={localePathPrefix}
                post={post}
                visitCount={visitCount}
            />

            <h1 class="font-bold font-bold text-xl my-4">
                {post?.title}
            </h1>

            <Image
                alt={post?.title}
                containerClass="relative xs:w-[360px] sm:w-[640px] md:w-[768px] xl:w-[1024px] max-w-full aspect-[2/1]"
                imageClass="object-contain"
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
                    <Tags
                        localePathPrefix={localePathPrefix}
                        tags={post?.relatedItems?.tags}
                    />
                </div>
            }

            <Comments
                comments={comments?.data}
                title={translations?.usersComments}
                titleClass="w-full"
            />
            <AddComment
                {...fields}
                {...form}
                entity={post}
            />

        </div>
    </>
}

export default Main
