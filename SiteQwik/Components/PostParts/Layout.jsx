import { Breadcrumb } from "Shared"
import {
    Main,
    Side,
} from "PostParts"

const Layout = ({
    blogTexts,
    breadcrumb,
    categories,
    comments,
    commentsTexts,
    content,
    currentLocale,
    faqPages,
    fields,
    form,
    latestPosts,
    localePathPrefix,
    post,
    postTitles,
    relatedPosts,
    translations,
    visitCount,
}) => {

    return <>
        <Breadcrumb breadcrumb={breadcrumb} />
        <section>

            <div class="relative w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[65%_30%] justify-between pb-0 md:pb-20 px-4 2xl:px-0 md:mt-10 md:md-0]">

                <Main
                    blogTexts={blogTexts}
                    comments={comments}
                    commentsTexts={commentsTexts}
                    content={content}
                    currentLocale={currentLocale}
                    faqPages={faqPages}
                    fields={fields}
                    form={form}
                    latestPosts={latestPosts}
                    localePathPrefix={localePathPrefix}
                    post={post}
                    translations={translations}
                    visitCount={visitCount}
                />

                <Side
                    postTitles={postTitles}
                    categories={categories}
                    relatedPosts={relatedPosts}
                    blogTexts={blogTexts}
                    localePathPrefix={localePathPrefix}
                />

            </div>

        </section>

    </>
}

export default Layout
