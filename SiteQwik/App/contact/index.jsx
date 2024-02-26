import { component$ } from "@builder.io/qwik"
import { routeLoader$ } from "@builder.io/qwik-city"
import {
    Map,
    useAsync,
} from "Base"
import { useSeo } from "Seo"
import { getForm } from "Forms"
import { getPage } from "Contents"
import { Breadcrumb } from "Shared"
import {
    Form,
    Info,
} from "Contact"

const getData = routeLoader$(async props => {

    const [
        page,
        form,
    ] = await useAsync(
        [
            getPage("contact", props),
            getForm("contact", props),
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
        <Breadcrumb breadcrumb={breadcrumb} />

        <section>
            <h1 class="mt-4 mb-10 text-3xl mx-auto text-center font-bold relative px-5 after:w-10 after:absolute after:content-[''] after:-bottom-5 after:end-1/2 after:translate-x-[-50%] after:w-10 after:bg-custom-color1 after:h-1.5">
                {page?.title}
            </h1>
            <div class="bg-custom-color3 py-10 px-4">
                <div class="flex flex-col md:flex-row gap-14 w-full max-w-7xl mx-auto bg-white px-8 py-8 rounded-lg">
                    <div class="w-full md:w-1/2 flex flex-col-reverse md:flex-row gap-6 lg:gap-20">
                        <Form
                            form={form}
                            fields={fields}
                        />
                    </div>
                    <Info
                        {...contactInfo}
                    />
                </div>
            </div>
        </section>

        <section>
            <Map
                containerClass="relative z-0 w-full h-[440px]"
                zoom={15}
                coordinates={[contactInfo?.mapLatitude, contactInfo?.mapLongitude]}
                marker={{
                    coordinates: [contactInfo?.mapLatitude, contactInfo?.mapLongitude]
                }}
                id="contactMap"
            />
        </section>
    </>
})

export default Contact

const head = ({ resolveValue }) => {
    return useSeo(getData, resolveValue)
}

export { head }
