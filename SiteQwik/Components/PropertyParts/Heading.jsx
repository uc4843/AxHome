import { component$ } from "@builder.io/qwik"

const Heading = component$(({
    property,
    translations,
}) => {
    return <div>
        <div class="flex gap-4 justify-between my-6">
            <h1 class="font-bold text-lg md:text-xl lg:text-2xl">
                {property?.title}
            </h1>
        </div>
        <dl class="flex flex-wrap gap-4 justify-start items-center mt-4">
            <div class="flex items-center justify-between gap-1.5 p-2 border border-custom-color1 rounded-md">
                {
                    property?.relatedItems.isRent
                        ?
                        <dt> {translations?.rent}</dt>
                        :
                        <dt> {translations?.minorPrice}</dt>
                }
                <dd class="font-light space-x-1.5">
                    <strong>
                        {property?.minorPrice?.toLocaleString()}
                    </strong>
                    <strong>{translations?.toman}</strong>
                </dd>
            </div>
            <div class="flex items-center justify-between gap-1.5 p-2 border border-custom-color1 rounded-md">
                {
                    property?.relatedItems.isRent
                        ?
                        <dt> {translations?.mortgage}</dt>
                        :
                        <dt> {translations?.majorPrice}</dt>
                }
                <dd class="font-light space-x-1.5">
                    <strong>
                        {property?.majorPrice?.toLocaleString()}
                    </strong>
                    <strong>{translations?.toman}</strong>
                </dd>
            </div>
        </dl>
    </div>
})

export default Heading
