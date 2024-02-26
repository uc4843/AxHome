import { Image } from "Base"
import { usePostUrl } from "Blog"

const PostCard = ({
    item,
    localePathPrefix,
}) => {

    return <>
        <div class="max-w-md overflow-hidden block mx-auto rounded-lg">
            <div class="w-full group">
                <a
                    href={usePostUrl(item?.slug, localePathPrefix)}
                    class="block"
                >
                    <Image
                        key={item?.id}
                        src={item?.relatedItems?.imageUrl}
                        alt={item?.title}
                        containerClass="relative w-full aspect-[6/4]"
                    />
                </a>
                <h2 class="w-full border-b p-2 px-4">
                    <a
                        href={usePostUrl(item?.slug, localePathPrefix)}
                        class="font-bold line-clamp-1 text-sm md:text-lg my-3 text-center group-hover:text-custom-color1"
                    >
                        {item?.title}
                    </a>
                </h2>
            </div>
        </div>

    </>
}

export default PostCard
