import { useCategoryUrl } from 'Blog'

const BlogCategories = ({
    categories,
    localePathPrefix,
    title,
}) => {

    return <>
        <p class="text-lg md:text-xl font-bold border-b pb-4 mb-5">
            {title}
        </p>
        <div class="inline-flex xl:w-full xl:flex xl:flex-col gap-2 overflow-x-auto">
            {
                categories?.map(item => <>
                    <a
                        key={item.id}
                        href={useCategoryUrl(item.slug, localePathPrefix)}
                        class="px-3 py-2.5 md:py-3 text-custom-color24 text-sm md:text-lg text-center hover:bg-custom-color1 hover:text-slate-50 transition-all min-w-fit"
                    >
                        {item.title}
                    </a>
                </>)
            }
        </div>
    </>
}

export default BlogCategories
