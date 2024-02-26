import { Image } from "Base"
import { Search } from "Shared"

const Filter = ({
    allCityDivision,
    allDealTypes,
    allPropertyTypes,
    backgroundImage,
    filter,
    noBackgroundImage,
}) => {

    return <section>
        {
            noBackgroundImage ? null : <Image
                containerClass={`-mt-20 md:-mt-28 w-[300px] max-w-[100%] md:max-w-[600px] md:w-full max-w-6xl mx-auto h-[120px] relative z-10 bottom-0 end-0 absolute pt-5`}
                imageClass="object-contain"
                src={backgroundImage}
                priority
            />
        }

        <div class='relative max-w-7xl mx-auto md:py-10 -mt-10 md:-mt-0 rounded-t-[30px] z-30 bg-custom-color4'>
            <form class='flex flex-col w-full px-2 relative md:px-4 md:flex-row flex-wrap gap-2 gap-y-4 md:gap-4 max-w-5xl md:mx-auto justify-center items-center py-4'>
                <p class="text-lg md:text-md text-white mb-4 md:mb-0 font-bold">
                    {filter?.searchTitle}
                </p>
                <Search
                    allCityDivision={allCityDivision}
                    allDealTypes={allDealTypes}
                    allPropertyTypes={allPropertyTypes}
                    filter={filter}
                />
            </form>
        </div>
    </section>
}

export default Filter
