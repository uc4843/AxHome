import {
    Envelope,
    Fax,
    Location,
    Mobile,
    Phone,
} from 'Svg'

const Info = ({
    address,
    email,
    fax,
    firstPhoneNumber,
    mobile,
    secondPhoneNumber,
    title,
}) => {

    return <>
        <div class="w-full md:w-1/2 font-bold">

            <p class="py-4 mb-4">{title}</p>

            <div class="flex flex-col gap-4 p-6">

                <div class="flex gap-4 items-start">
                    <Location class="w-7 aspect-square fill-custom-color1" />
                    <p class="w-[calc(100%-20px)] leading-8 text-sm">
                        {address}
                    </p>
                </div>

                <a
                    href={`tel:${firstPhoneNumber}`}
                    class="flex gap-4 items-start"
                >
                    <Phone class="w-7 aspect-square fill-custom-color1" />
                    <p class="w-[calc(100%-20px)] leading-8 text-sm">
                        {firstPhoneNumber}
                    </p>
                </a>

                <a
                    href={`tel:${secondPhoneNumber}`}
                    class="flex gap-4 items-start">
                    <Phone class="w-7 aspect-square fill-custom-color1" />
                    <p class="w-[calc(100%-20px)] leading-8 text-sm">
                        {secondPhoneNumber}
                    </p>
                </a>

                <a
                    href={`tel:${mobile}`}
                    class="flex gap-4 items-start">
                    <Mobile class="w-7 aspect-square fill-custom-color1" />
                    <p class="w-[calc(100%-20px)] leading-8 text-sm">
                        {mobile}
                    </p>
                </a>

                <a
                    href={`tel:${mobile}`}
                    class="flex gap-4 items-start"
                >
                    <Fax class="w-7 aspect-square fill-custom-color1" />
                    <p class="w-[calc(100%-20px)] leading-8 text-sm">
                        {fax}
                    </p>
                </a>

                <a
                    href={`mailto:${email}`}
                    class="flex gap-4 items-start">
                    <Envelope class="w-7 aspect-square fill-custom-color1" />
                    <p class="w-[calc(100%-20px)] leading-8 text-sm">
                        {email}
                    </p>
                </a>

            </div>

        </div>
    </>
}

export default Info
