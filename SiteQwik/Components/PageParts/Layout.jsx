import {
    Breadcrumb,
    RichText,
} from "Shared"

const Layout = ({
    breadcrumb,
    content,
    page,
    ...rest
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
                        {...rest}
                    />
                </div>
            </div>
        </section>
    </>
}

export default Layout
