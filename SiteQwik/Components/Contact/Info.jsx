import {
    Envelope,
    Location,
    Phone,
} from "Svg"

const Info = ({
    address,
    description,
    email,
    phone,
    title,
}) => {

    return <>
        <div class="w-full md:w-1/2">

            <p class="py-4 text-lg text-bold inline-block border-b-2 border-custom-color1">
                {title}
            </p>
            <p class="text-lg my-2">
                {description}
            </p>

            <div class="flex flex-col gap-4 py-6">

                <a
                    href={`tel:${phone}`}
                    class="flex gap-4 items-start text-custom-color4 hover:text-custom-color transition-all1"
                >
                    <Phone class="w-7 aspect-square fill-custom-color1" />
                    <p class="w-[calc(100%-20px)] leading-8">
                        {phone}
                    </p>
                </a>

                <a
                    href={`mailto:${email}`}
                    class="flex gap-4 items-start text-custom-color4 hover:text-custom-color1 transition-all">
                    <Envelope class="w-7 aspect-square fill-custom-color1" />
                    <p class="w-[calc(100%-20px)] leading-8">
                        {email}
                    </p>
                </a>

                <div class="flex gap-4 items-start text-custom-color4 hover:text-custom-color1 transition-all">
                    <Location class="w-7 aspect-square fill-custom-color1" />
                    <p class="w-[calc(100%-20px)] leading-8">
                        {address}
                    </p>
                </div>

            </div>

        </div>
    </>
}

export default Info
