import { Image } from 'Base'

const Filter = ({
    backgroundImage,
    buttonText,
    class: internalClass,
    noBackgroundImage,
    searchTitle,
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
        <div class={`${internalClass} relative max-w-7xl mx-auto md:py-10 -mt-10 md:-mt-5 rounded-t-[30px] z-30`}>
            <form class="flex flex-col w-full px-2 relative lg:px-4 md:flex-row flex-wrap gap-2 gap-y-4 lg:gap-4 max-w-5xl lg:mx-auto justify-center items-center py-4">
                <p class="text-lg order-1 md:text-md text-white mb-4 md:mb-0 font-bold">
                    {searchTitle}
                </p>
                {/* <Select
                    class="w-full md:w-[150px] lg:w-[170px] px-1 py-0.5 rounded-[5px] order-1"
                    childClass="hover:bg-custom-color1 text-gray-600 hover:text-white rounded-[5px]"
                    items={dealTypes}
                />
                <Select
                    class="w-full md:w-[150px] lg:w-[170px] px-1 py-0.5 rounded-[5px] order-1"
                    childClass="hover:bg-custom-color1 text-gray-600 hover:text-white rounded-[5px]"
                    items={propertyTypes}
                />
                <Select
                    class="w-full md:w-[150px] lg:w-[170px] px-1 py-0.5 rounded-[5px] order-1"
                    childClass="hover:bg-custom-color1 text-gray-600 hover:text-white rounded-[5px]"
                    items={cityDivisions}
                />
                {!isAdvancedFilter ? <AddCircleOutlineIcon
                    class="w-6 h-6 text-white cursor-pointer order-1 fill-gray-600"
                /> : <RemoveCircleOutlineIcon
                    class="w-6 h-6 text-white cursor-pointer order-1 fill-gray-600"
                />} */}
                <button
                    type='submit'
                    class='py-1.5 rounded-md w-full md:w-32 bg-custom-color1 text-white font-bold hover:brightness-110 order-2 md:order-1'
                >{buttonText}</button>
                {/* <AdvancedFilter /> */}
            </form>
        </div>
    </section>
}

export default Filter
