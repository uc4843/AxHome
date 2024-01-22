import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import {
    Map,
    useAsync,
} from 'Base'
import { useSeo } from 'Seo'
import { getForm } from 'Forms'
import { getPage } from 'Contents'
import { Breadcrumb } from 'Shared'
import {
    Form,
    Info,
} from 'Contact'

const getData = routeLoader$(async props => {

    const [
        page,
        form,
    ] = await useAsync(
        [
            getPage('contact', props),
            getForm('contact', props),
        ]
    )

    return {
        ...page,
        ...form,
    }
})

const Contact = component$(() => {

    const data = getData().value
    const {
        breadcrumb,
        contactInfo,
        fields,
        form,
        page,
    } = data

    return <>
        <Breadcrumb items={breadcrumb} />
        <section class="flex flex-col md:flex-row gap-14 w-full max-w-7xl mx-auto px-5 my-10 md:my-20">
            <div class="w-full md:w-1/2 flex flex-col-reverse md:flex-row gap-6 lg:gap-20">
                <Form
                    form={form}
                    fields={fields}
                />
            </div>
            <Info
                {...contactInfo}
            />
        </section>
        <section>
            <Map
                containerClass='relative z-0 w-full h-[440px]'
                zoom={15}
                coordinates={[contactInfo?.mapLatitude, contactInfo?.mapLongitude]}
                marker={{
                    coordinates: [contactInfo?.mapLatitude, contactInfo?.mapLongitude]
                }}
                id='contactMap'
            />
        </section>
    </>
})

export default Contact

const head = ({ resolveValue }) => {
    return useSeo(getData, resolveValue)
}

export { head }
