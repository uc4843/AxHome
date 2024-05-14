import { useTagUrl } from "Properties"

const Tags = ({
    items,
    localePathPrefix,
    title,
}) => {

    return <>
        <div class="border p-4 basis-[50%]">
            <p class="w-full text-lg font-bold mb-5 max-w-[90%] mx-auto text-start">{title}</p>
            <div class="flex items-center gap-3 flex-wrap">
                {
                    items?.map(item => <>
                        <a
                            class="py-1 px-3 bg-custom-color4 text-white rounded-sm"
                            href={useTagUrl(item?.slug, localePathPrefix)}
                            key={item.id}
                        >
                            {item?.title}
                        </a>
                    </>)
                }
            </div>
        </div>
    </>
}

export default Tags
