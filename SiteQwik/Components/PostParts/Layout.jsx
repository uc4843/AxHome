import { Breadcrumb } from 'Shared'
import {
    Main,
    Side,
} from 'PostParts'

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
}) => {

    return <>
        <Breadcrumb breadcrumb={breadcrumb} />
        <section>

            <div class="relative w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[65%_30%] justify-between pb-0 md:pb-20 px-4 2xl:px-0 md:mt-10 md:md-0]">

                <Main
                    currentLocale={currentLocale}
                    content={content}
                    post={post}
                    translations={translations}
                    latestPosts={latestPosts}
                    blogTexts={blogTexts}
                    localePathPrefix={localePathPrefix}
                    faqPages={faqPages}
                    fields={fields}
                    form={form}
                    comments={comments}
                    commentsTexts={commentsTexts}
                />

                <Side
                    post={post}
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
