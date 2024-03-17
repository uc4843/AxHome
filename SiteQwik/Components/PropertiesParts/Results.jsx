import { Window } from "Svg"

const Results = ({
    metadata,
    propertiesTexts,
    seo,
    translations,
}) => {
    return <div class="w-full flex justify-center md:justify-between items-center my-4 px-4 py-5 border border-slate-300 rounded-2xl">
        <div class="flex items-center gap-1 font-light text-custom-color41 text-sm">
            <Window class="w-7 h-7 fill-custom-color1" />
            <h2>{seo?.pageTitle}</h2>
        </div>
        <div class="hidden md:flex gap-1 text-sm font-light items-center">
            <span>{propertiesTexts?.result}:</span>
            <span>{propertiesTexts?.properties}</span>
            <span>{metadata?.from}</span>
            <span>{propertiesTexts?.to}</span>
            <span>{metadata?.to}</span>
            <span>{propertiesTexts?.from}</span>
            <span>{metadata?.totalCount}</span>
            <span>{propertiesTexts?.property}</span>
        </div>
    </div>
}

export default Results
