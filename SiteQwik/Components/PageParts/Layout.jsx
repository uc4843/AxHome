import {
    Breadcrumb,
    RichText,
} from "Shared"

const Layout = ({
    breadcrumb,
    content,
    page,
}) => {

    return <>
        <Breadcrumb breadcrumb={breadcrumb} />
        <section>

            <h1 class={`mt-4 mb-10 text-3xl mx-auto text-center font-bold relative px-5 after:w-10 after:absolute after:content-[""] after:-bottom-5 after:end-1/2 after:translate-x-[-50%] after:w-10 after:bg-custom-color1 after:h-1.5`}>
                {page?.title}
            </h1>

            <div class="bg-custom-color3 py-10 px-4">
                <div class="max-w-7xl mx-auto bg-white px-8 py-8 rounded-lg">

                    <RichText
                        content={content}
                        class="text-sm sm:text-base leading-7 sm:leading-8"
                        h1="font-bold mt-[20px] mb-[30px] text-[1.75rem]"
                        h2="font-bold mt-[15px] mb-[20px] text-[1.5rem]"
                        h3="font-bold mt-[15px] mb-[20px] text-[1.25rem]"
                        p="mb-[10px]"
                    />

                </div>
            </div>
        </section>
    </>
}

export default Layout
