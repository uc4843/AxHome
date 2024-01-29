import { useCategoryUrl } from 'Blog'

const Categories = ({
    categories,
    localePathPrefix,
}) => {

    return <>
        <div class='mt-3'>
            {
                categories?.map(item => <>
                    <a
                        key={item.id}
                        href={useCategoryUrl(item.slug, localePathPrefix)}
                        class='py-2 flex items-center gap-2 text-sm hover:text-custom-color1 transition-all'
                    >
                        {item.title}
                    </a>
                </>)
            }
        </div>
    </>
}

export default Categories
