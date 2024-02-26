import {
    Image,
    LocalizedDate,
} from "Base"
import { usePostUrl } from "Blog"

const Related = ({
    localePathPrefix,
    post,
    relatedPosts,
}) => {

    return <>
        {
            relatedPosts?.map(item => <>
                <div
                    class="w-full group flex justify-start gap-2 px-3 block h-[80px]"
                    key={item?.id}
                >
                    <a
                        href={item?.slug}
                        title={item?.title}
                    >
                        <Image
                            src={item?.relatedItems?.imageUrl}
                            alt={item?.title}
                            containerClass='h-full aspect-[4/3] rounded-lg overflow-hidden shrink-0'
                        />
                    </a>

                    <div class="flex flex-col items-between justify-between w-full h-full">
                        <a
                            href={usePostUrl(item?.slug, localePathPrefix)}
                            title={item?.title}
                            class="line-clamp-1 my-2 group-hover:text-custom-color2 text-sm font-bold transition-all"
                        >
                            {item?.title}
                        </a>
                        <LocalizedDate
                            utcDate={post?.utcDate}
                        />
                    </div>

                </div>
            </>)
        }
    </>
}

export default Related
