import {
    Agent,
    Description,
    Tags,
} from "PropertyParts"

const Side = ({
    agent,
    agentNum,
    agentTitle,
    contactInfo,
    currentLocale,
    defaultDescription,
    description,
    item,
    localePathPrefix,
    localesEnum,
    modalShareTitle,
    property,
    propertyAdCodeTitle,
    realEstateNum,
    shareTitle,
    tagsTitle,
}) => {

    return <>
        <div class="flex justify-end items-start mb-4">
            <div class="sticky top-10 start-0 px-4">
                {
                    agent &&
                    <Agent
                        {...agent}
                        {...contactInfo}
                        agentNum={agentNum}
                        agentTitle={agentTitle}
                        currentLocale={currentLocale}
                        item={item}
                        localePathPrefix={localePathPrefix}
                        localesEnum={localesEnum}
                        modalShareTitle={modalShareTitle}
                        property={property}
                        propertyAdCodeTitle={propertyAdCodeTitle}
                        realEstateNum={realEstateNum}
                        shareTitle={shareTitle}
                    />
                }
                <Description
                    body={defaultDescription}
                    descriptionText={description}
                />
                {
                    property?.relatedItems?.tags.length > 0 &&
                    <Tags
                        items={property?.relatedItems?.tags}
                        localePathPrefix={localePathPrefix}
                        title={tagsTitle}
                    />
                }
            </div>
        </div>
    </>
}

export default Side
