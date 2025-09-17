import { RichText } from "Shared"

const Body = ({
    body,
    propertiesTexts,
}) => {

    return <section class="w-full bg-white">
        <h2 class="mb-6 font-bold text-xl flex items-center">
            {propertiesTexts?.description}
        </h2>
        <RichText content={body} />
    </section>
}

export default Body
