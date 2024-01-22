import { DefaultBreadcrumb } from 'Base'

const Breadcrumb = ({ breadcrumb }) => {

    return <>
        <section class="max-w-7xl mx-auto py-3">
            <DefaultBreadcrumb
                wrapperClass="max-w-7xl mx-auto px-5 flex items-center gap-1 overflow-x-auto text-xs md:text-sm text-custom-color4"
                itemClass="min-w-fit whitespace-nowrap flex hover:text-custom-color1 transition-all"
                lastItemClass="min-w-fit whitespace-nowrap text-custom-color1"
                separator={'/'}
                breadcrumb={breadcrumb}
            />
        </section>
    </>
}

export default Breadcrumb
