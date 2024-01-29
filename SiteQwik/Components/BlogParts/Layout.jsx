import { component$ } from '@builder.io/qwik'
import { Breadcrumb } from 'Shared'
import {
    Heading,
    Main,
    Side,
    Specials,
} from 'BlogParts'

const Layout = component$(({
    blogTexts,
    breadcrumb,
    categories,
    currentLocale,
    item,
    latestPosts,
    localePathPrefix,
    localePathPrefix,
    localesEnum,
    popularPosts,
    posts,
    propertiesTexts,
    seo,
}) => {

    return <>
        <Breadcrumb breadcrumb={breadcrumb} />

        <Heading
            seo={seo}
            blogTexts={blogTexts}
        />

        <div class='relative pt-10 mt-16 px-4 bg-custom-color3'>

            <Specials
                popularPosts={popularPosts}
                localePathPrefix={localePathPrefix}
                blogTexts={blogTexts}
                propertiesTexts={propertiesTexts}
            />

            <section class='relative w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[65%_30%] justify-between md:pb-20 mt-10'>

                <Main
                    currentLocale={currentLocale}
                    items={posts?.data}
                    localePathPrefix={localePathPrefix}
                    localesEnum={localesEnum}
                    metadata={posts?.metadata}
                />

                <Side
                    blogTexts={blogTexts}
                    categories={categories}
                    item={item}
                    latestPosts={latestPosts}
                    localePathPrefix={localePathPrefix}
                    readMore={propertiesTexts?.readMore}
                    title={blogTexts?.categoryTitle}
                />
            </section>

        </div>
    </>
})

export default Layout
