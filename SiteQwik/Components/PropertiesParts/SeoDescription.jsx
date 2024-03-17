import {
    component$,
    useSignal,
} from "@builder.io/qwik"
import { RichText } from "Shared"

const SeoDescription = component$(({
    relatedItems,
    showLess,
    showMore,
}) => {

    const isShownMore = useSignal(false)

    return <>
        <div class={`${isShownMore.value ? "" : "h-28 overflow-hidden"}`}>
            <RichText content={relatedItems?.content} />
        </div>
        <p
            class="flex items-center justify-center pt-4 text-custom-color1 text-sm hover:text-custom-color2 transition-all cursor-pointer"
            onClick$={() => isShownMore.value = !isShownMore.value}
        >
            {isShownMore.value ? showLess : showMore}
        </p>
    </>
})

export default SeoDescription
