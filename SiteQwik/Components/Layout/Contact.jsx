import { FooterTitle } from 'Layout'

const Contact = ({
    address,
    addressTitle,
    phone,
    phoneTitle,
    title,
}) => {

    return <>
        <div class="w-full md:w-[30%]">
            <FooterTitle title={title} />

            <div class="flex flex-col gap-1 items-start">
                <a
                    aria-label={phoneTitle}
                    class="block hover:text-custom-color1 transition-all duration-300"
                    href={`tel:${phone}`}
                >
                    {phone}
                </a>
                <a
                    aria-label={addressTitle}
                    class="text-white hover:text-custom-color1"
                    href="/contact"
                    target="_blank"
                    >
                    {address}
                </a>
            </div>
        </div>
    </>
}

export default Contact
