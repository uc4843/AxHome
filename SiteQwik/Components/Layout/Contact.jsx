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
                    class="block hover:text-custom-color1 transition-all duration-300"
                    href={`tel:${phone}`}
                    aria-label={phoneTitle}
                >
                    {phone}
                </a>
                <a
                    target="_blank"
                    aria-label={addressTitle}
                    class="text-white hover:text-custom-color1"
                >
                    {address}
                </a>
            </div>
        </div>
    </>
}

export default Contact
