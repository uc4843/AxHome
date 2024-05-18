import {
    component$,
    useSignal,
} from "@builder.io/qwik"
import { RichText } from "Shared"

const SeoDescription = component$(({
    pageTitle,
    metaDescription,
    relatedItems,
    showLess,
    showMore,
}) => {

    const isShownMore = useSignal(false)

    return <>
        {
            relatedItems?.content && relatedItems?.content !== "[]" &&
            <>
                <h1 class="text-lg font-bold mt-10 mb-3">{pageTitle}</h1>
                <p class="leading-6 font-light">{metaDescription}</p>
                <div class={`${isShownMore.value ? "" : "h-0 overflow-hidden"}`}>
                    <RichText
                        class="leading-6 font-light"
                        content={relatedItems?.content}
                        h2="font-bold mt-4 mb-2 text-[1.1rem]"
                        h3="font-bold mt-4 mb-2 text-[1rem]"
                        p="mt-2 mb-2"
                    />
                </div>
                <p
                    class="flex items-center justify-center pt-4 text-custom-color1 text-sm hover:text-custom-color2 transition-all cursor-pointer"
                    onClick$={() => isShownMore.value = !isShownMore.value}
                >
                    {isShownMore.value ? showLess : showMore}
                </p>
            </>
        }
    </>
})

export default SeoDescription
