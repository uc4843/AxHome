import { component$ } from '@builder.io/qwik'
import {
    BlogCategories,
    Breadcrumb,
    Pagination,
} from 'Shared'
import { Card } from 'BlogParts'

const Layout = component$(({
    blogTexts,
    breadcrumb,
    categories,
    category,
    currentLocale,
    localePathPrefix,
    localesEnum,
    posts,
    seo,
}) => {

    return <>

        <Breadcrumb breadcrumb={breadcrumb} />

        <section>
            <h1 class="mt-4 mb-10 text-3xl mx-auto text-center font-bold relative px-5 after:w-10 after:absolute after:content-[''] after:-bottom-5 after:end-1/2 after:translate-x-[-50%] after:w-10 after:bg-custom-color1 after:h-1.5">
                {seo?.pageTitle}
            </h1>
            <p class="text-lg text-center mt-12">{blogTexts?.blogPageDescription}</p>
        </section>

        <section class="bg-white rounded-2xl max-w-7xl mx-auto px-4 lg:px-16 pt-8">

        </section>

        <section class="relative bg-custom-color3 pt-10 relative mx-auto px-5 flex flex-col xl:flex-row gap-16">

            <article class="w-full xl:w-[calc(100%-350px)] mb-20">
                {
                    category &&
                    <h2 class="mb-6 font-black text-lg lg:text-xl text-custom-color22 flex items-center gap-3">
                        <span>{category?.title}</span>
                    </h2>
                }
                <div class="flex flex-col sm:flex-row md:flex-col flex-wrap gap-x-4 gap-y-10 mb-14 mb-24">
                    <Card
                        currentLocale={currentLocale}
                        items={posts?.data}
                        localePathPrefix={localePathPrefix}
                        localesEnum={localesEnum}
                    />
                </div>
                <Pagination
                    first
                    last
                    items={posts?.metadata}
                />
            </article>

            <aside class="sticky top-10 end-0 w-full xl:w-[300px] xl:mb-14 mb-0 shadow-lg shadow-gray-200 rounded-lg px-4 pb-10 border-t-8 border-custom-color1 bg-white">
                <BlogCategories
                    categories={categories}
                    localePathPrefix={localePathPrefix}
                    title={blogTexts?.categoryTitle}
                />
            </aside>

        </section>

    </>
})

export default Layout
