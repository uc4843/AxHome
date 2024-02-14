import { RichText } from 'Shared'

const Body = ({
    body,
    propertiesTexts,
}) => {

    return <>
        <div class="w-full bg-white">
            <h2 class="mb-6 font-bold text-xl flex items-center">
                <span>{propertiesTexts?.description}</span>
            </h2>
            <RichText content={body} />
        </div>
    </>
}

export default Body
