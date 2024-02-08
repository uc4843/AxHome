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
            <RichText
                content={body}
                class="w-full mb-10 text-sm sm:text-base leading-7 sm:leading-8"
                h1='font-bold mt-[20px] mb-[30px] text-[1.75rem]'
                h2='font-bold mt-[15px] mb-[20px] text-[1.5rem]'
                h3='font-bold mt-[15px] mb-[20px] text-[1.25rem]'
                p='mb-[10px]'
            />
        </div>
    </>
}

export default Body
