import {
    Body,
    Heading,
    PropertyInfo,
    Slider,
} from 'PropertyParts'

const Main = ({
    body,
    description,
    property,
    propertyInfoTexts,
    translations,
}) => {

    return <>
        <div class="grid grid-cols-1 gap-4 items-start self-start">

            <Slider
                {...property}
                title={property?.title}
            />

            <Heading
                property={property}
                translations={translations}
            />

            <PropertyInfo
                property={property}
                propertyInfoTexts={propertyInfoTexts}
            />

            <Body
                body={body}
                description={description}
            />
        </div>
    </>
}

export default Main
