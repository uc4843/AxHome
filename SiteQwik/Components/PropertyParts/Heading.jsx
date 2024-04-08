import { component$ } from "@builder.io/qwik"

const Heading = component$(({
    property,
    translations,
}) => {
    return <>
        <div>

            <div class="flex gap-4 justify-between my-6">
                <h1 class="font-bold text-lg md:text-xl lg:text-2xl">
                    {property?.title}
                </h1>
            </div>

            <div class="flex gap-4 justify-start items-center mt-4">

                <div class="flex items-center justify-between gap-1.5 p-2 border border-custom-color1 rounded-md">
                    {
                        property?.dealTypeKey === "rent"
                            ?
                            <span> {translations?.rent}</span>
                            :
                            <span> {translations?.minorPrice}</span>
                    }
                    <span>
                        {property?.minorPrice?.toLocaleString()}
                    </span>
                    <span>{translations?.toman}</span>
                </div>

                <div class="flex items-center justify-between gap-1.5 p-2 border border-custom-color1 rounded-md">
                    {
                        property?.dealTypeKey === "rent"
                            ?
                            <span> {translations?.mortgage}</span>
                            :
                            <span> {translations?.majorPrice}</span>
                    }
                    <span>
                        {property?.majorPrice?.toLocaleString()}
                    </span>
                    <span>{translations?.toman}</span>
                </div>

            </div>
        </div>
    </>
})

export default Heading
