import { DefaultBreadcrumb } from "Base"

const Breadcrumb = ({ breadcrumb }) => {

    return <>
        <section class="w-full max-w-7xl mx-auto px-4 2xl:px-0">
            <DefaultBreadcrumb
                wrapperClass="flex max-w-7xl mx-auto py-4 items-center gap-1 overflow-x-auto text-sm text-custom-color41"
                itemClass="min-w-fit whitespace-nowrap flex py-2 hover:text-custom-color1 transition-all"
                lastItemClass="min-w-fit whitespace-nowrap cursor-auto"
                separator={'>'}
                breadcrumb={breadcrumb}
            />
        </section>
    </>
}

export default Breadcrumb
