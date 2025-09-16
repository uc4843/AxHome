import {
    Main,
    RelatedProperties,
    Side,
} from "PropertyParts"
import { Breadcrumb } from "Shared"

const Layout = ({
    agent,
    breadcrumb,
    contactInfo,
    content,
    currentLocale,
    localePathPrefix,
    localesEnum,
    propertiesTexts,
    property,
    propertyImages,
    propertyInfoTexts,
    relatedProperties,
    translations,
}) => {

    return <main>
        <Breadcrumb breadcrumb={breadcrumb} />
        <article class="w-full max-w-7xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-[70%_28%] gap-[2%] justify-between px-4 xl:px-0 min-w-0 min-h-0">
                <Main
                    body={content}
                    localePathPrefix={localePathPrefix}
                    propertiesTexts={propertiesTexts}
                    property={property}
                    propertyInfoTexts={propertyInfoTexts}
                    translations={translations}
                />
                <Side
                    {...propertiesTexts}
                    agent={agent}
                    agentTitle={propertiesTexts?.agentTitle}
                    contactInfo={contactInfo}
                    currentLocale={currentLocale}
                    localePathPrefix={localePathPrefix}
                    localesEnum={localesEnum}
                    property={property}
                />
            </div>
        </article>
        <div class="w-full h-0.5 bg-slate-200 my-10"></div>
        <RelatedProperties
            currentLocale={currentLocale}
            localePathPrefix={localePathPrefix}
            localesEnum={localesEnum}
            properties={relatedProperties}
            propertiesTexts={propertiesTexts}
            propertyImages={propertyImages}
            propertyInfoTexts={propertyInfoTexts}
            translations={translations}
        />
    </main>
}

export default Layout
