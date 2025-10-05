import { useTagUrl } from "Properties"

const Tags = ({
    items,
    localePathPrefix,
    title,
}) => {

    return <>
        <div class="border border-gray-200 p-4 basis-[50%]">
            <p class="w-full text-lg font-bold mb-5 max-w-[90%] mx-auto text-start">{title}</p>
            <div class="flex items-center gap-3 flex-wrap">
                {
                    items?.map(item => <article key={item.id}>
                        <a
                            aria-label={item.title}
                            class="py-1 px-3 bg-custom-color4 text-white rounded-xs"
                            href={useTagUrl(item.slug, localePathPrefix)}
                        >
                            {item.title}
                        </a>
                    </article>)
                }
            </div>
        </div>
    </>
}

export default Tags
