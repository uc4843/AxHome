import {
    component$,
    useSignal,
} from '@builder.io/qwik'

const CityDivisions = component$(({
    allCityDivisions,
    cityDivisionsTitle,
    propertiesTexts,
    rootCityDivisions,
}) => {

    return <>

        <div class='py-4 mb-4'>
            <h2 class='text-md'>555</h2>

            <ul class='mb-4 mt-3 overflow-hidden transition-all duration-300 grid grid-cols-2 gap-x-2 max-h-[215px]'>
                {rootCityDivisions?.map(item => <>
                    <li class='my-2 hover:text-custom-color1 line-clamp-1 overflow-hidden'>
                        <a key={item?.id}>
                            {item?.name}
                        </a>
                    </li>
                </>)}
            </ul>

            <div class='flex items-center justify-center pt-4'>
                <a
                    class='text-custom-color1 text-sm hover:text-custom-color2 transition-all cursor-pointer'
                >
                    5555
                </a>
            </div>
        </div>
    </>
})

export default CityDivisions
