import {
    Body,
    Heading,
    PropertyInfo,
    Slider,
} from "PropertyParts"
import { Videos } from "Shared"

const Main = ({
    body,
    localePathPrefix,
    propertiesTexts,
    property,
    propertyInfoTexts,
    translations,
}) => {

    return <>
        <div class="w-full md:mb-6 px-4">
            <Slider
                {...property}
                title={property?.title}
            />
            <Heading
                property={property}
                translations={translations}
            />
            <PropertyInfo
                localePathPrefix={localePathPrefix}
                property={property}
                propertyInfoTexts={propertyInfoTexts}
            />
            <Body
                body={body}
                propertiesTexts={propertiesTexts}
            />
            <Videos entity={property} />
        </div>
    </>
}

export default Main
