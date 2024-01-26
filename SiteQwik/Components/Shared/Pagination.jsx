import { component$ } from '@builder.io/qwik'
import { Pagination as DefaultPagination } from 'Base'
import { useLocation } from '@builder.io/qwik-city'

const Pagination = component$(({ metadata }) => {

    const { url } = useLocation()

    return <div class='max-w-6xl mx-auto my-6 flex items-center justify-center'>
        <DefaultPagination
            container="flex flex-wrap items-center justify-center isolate-space-x-px text-center select-none block max-w-6xl mx-auto mt-16"
            items="relative inline-flex flex items-center justify-center align-center md:w-8 font-sans text-black font-bold mx-1 xl:mx-2 w-8 aspect-square border rounded-full border-custom-color1 bg-custom-color31"
            activeClass="bg-custom-color1 text-white"
            ellipses
            next="w-8 aspect-square p-2"
            last="w-8 aspect-square p-2"
            previous="w-8 aspect-square p-2"
            first="w-8 aspect-square p-2"
            metadata={metadata}
            url={url}
        />
    </div>
})

export default Pagination
