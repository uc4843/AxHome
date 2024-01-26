import { component$ } from '@builder.io/qwik'
import { PropertyCard } from 'Shared'

const Main = component$(({
    currentLocale,
    featuredLabelTitle,
    items,
    localesEnum,
    metadata,
    occasionLabelTitle,
    propertyImages,
    translations,
}) => {

    return <>

        <div class='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-8 gap-x-4 items-start self-start'>
            {
                items?.map(item => <>
                    <PropertyCard
                        {...propertyImages}
                        featuredLabelTitle={featuredLabelTitle}
                        item={item}
                        occasionLabelTitle={occasionLabelTitle}
                        translations={translations}
                        currentLocale={currentLocale}
                        localesEnum={localesEnum}
                    />
                </>)
            }
        </div>

    </>
})

export default Main
