import { Window } from "Svg"

const Results = ({
    cityDivisionWrapper,
    currentDealType,
    currentPropertyType,
    metadata,
    propertiesTexts,
    translations,
}) => {
    return <div class="w-full flex justify-center md:justify-between items-center my-4 px-4 py-5 border border-slate-300 rounded-2xl">
        <div class="flex items-center gap-1 font-light text-custom-color41 text-sm">
            <Window class="w-7 h-7 fill-custom-color1" />
            <h1 class="flex gap-1 font-semibold">
                {currentDealType && <span>{currentDealType?.name}</span>}
                {currentPropertyType && <span>{currentPropertyType?.name}</span>}
                {((currentDealType || currentPropertyType) && cityDivisionWrapper?.currentCityDivision) && <span>{translations.in}</span>}
                {cityDivisionWrapper?.currentCityDivision && <span>{cityDivisionWrapper?.currentCityDivision?.name}</span>}
            </h1>
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
