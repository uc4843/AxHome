import { component$ } from '@builder.io/qwik'
import { PropertyCard } from 'Shared'

const Main = component$(({
    currentLocale,
    featuredLabelTitle,
    items,
    localePathPrefix,
    localesEnum,
    occasionLabelTitle,
    property,
    propertyImages,
    translations,
}) => {

    return <>

        <div class='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-8 gap-x-4 items-start self-start'>
            {
                items?.map(item => <>
                    <PropertyCard
                        {...propertyImages}
                        currentLocale={currentLocale}
                        featuredLabelTitle={featuredLabelTitle}
                        item={item}
                        localePathPrefix={localePathPrefix}
                        localesEnum={localesEnum}
                        occasionLabelTitle={occasionLabelTitle}
                        translations={translations}
                        property={property}
                    />
                </>)
            }
        </div>

    </>
})

export default Main
