import {
    Main,
    RelatedProperties,
    Side,
} from 'PropertyParts'
import { Breadcrumb } from 'Shared'

const Layout = ({
    agent,
    breadcrumb,
    content,
    currentLocale,
    localePathPrefix,
    localesEnum,
    propertiesTexts,
    property,
    propertyImages,
    propertyInfoTexts,
    translations,
}) => {
    return <>
        <section>
            <Breadcrumb breadcrumb={breadcrumb} />

            <div class="w-full max-w-7xl mx-auto">
                <div class='grid grid-cols-1 lg:grid-cols-[70%_28%] gap-[2%] justify-between px-4 xl:px-0 min-w-0 min-h-0 '>
                    <Main
                        body={content}
                        property={property}
                        translations={translations}
                        propertyInfoTexts={propertyInfoTexts}
                        {...propertiesTexts}
                    />
                    <Side
                        agent={agent}
                        agentTitle={propertiesTexts?.agentTitle}
                        localePathPrefix={localePathPrefix}
                        {...propertiesTexts}
                        property={property}
                        localesEnum={localesEnum}
                        currentLocale={currentLocale}
                    />
                </div>
            </div>

            <div class='w-full h-0.5 bg-slate-200 my-10'></div>

            <RelatedProperties
                currentLocale={currentLocale}
                localePathPrefix={localePathPrefix}
                localesEnum={localesEnum}
                propertiesTexts={propertiesTexts}
                propertyImages={propertyImages}
                translations={translations}
                property={property}
            />
        </section>
    </>
}

export default Layout
