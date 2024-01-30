import { Image } from 'Base'
import { Search } from 'Shared'

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

        <Search
            allCityDivision={allCityDivision}
            allDealTypes={allDealTypes}
            allPropertyTypes={allPropertyTypes}
            filter={filter}
        />
    </section>
}

export default Filter
