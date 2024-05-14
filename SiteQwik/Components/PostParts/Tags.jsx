import { useTagUrl } from "Blog"

const Tags = ({
    tags,
    localePathPrefix,
}) => {

    return <>
        {
            tags?.map(tag => <a
                class="px-3 py-1 bg-gray-200 text-sm rounded-lg text-slate-950 hover:bg-custom-color1 transition-all"
                href={useTagUrl(tag.slug, localePathPrefix)}
                key={tag.id}
            >
                {tag.title}
            </a>)
        }
    </>
}

export default Tags
