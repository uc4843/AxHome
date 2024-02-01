import { component$ } from '@builder.io/qwik'
import { ArrowUp } from 'Svg'

const ScrollToTop = component$(() => {

    return <div
        class='absolute bottom-0 2xl:top-[50%] start-5 2xl:-end-28 rounded-full w-12 h-12 bg-custom-color1 flex items-center justify-center cursor-pointer group'
        onClick$={() => {
            window.scrollTo({
                behavior: "smooth",
                top: 0,
            })
        }}
    >
        <ArrowUp class="w-8 fill-white group-hover:-translate-y-1 group-hover:brightness-110 duration-200 transition-all" />
    </div>
})

export default ScrollToTop
