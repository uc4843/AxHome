import { RichText as InfraRichText } from "Base"

const RichText = props => {
    return <InfraRichText
        {...props}
        class="leading-8"
        h1='font-bold mt-[30px] mb-[10px] text-[1.5rem]'
        h2='font-bold mt-[30px] mb-[10px] text-[1.25rem]'
        h3='font-bold mt-[30px] mb-[10px] text-[1rem]'
        p='mt-[10px] mb-[10px]'
        a='font-medium text-custom-color11 hover:text-custom-color1 transition-all'
    />
}

export default RichText
