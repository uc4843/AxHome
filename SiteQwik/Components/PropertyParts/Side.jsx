import {
    Agent,
    Description,
} from 'PropertyParts'

const Side = ({
    agent,
    agentTitle,
    currentLocale,
    defaultDescription,
    description,
    item,
    localePathPrefix,
    localesEnum,
    property,
    propertyCode,
}) => {
    return <>
        <div class='flex justify-end items-start mb-4'>
            <div class="sticky top-10 start-0 px-4">
                {agent &&
                    <Agent
                        {...agent}
                        agentTitle={agentTitle}
                        localePathPrefix={localePathPrefix}
                        property={property}
                        propertyCode={propertyCode}
                        localesEnum={localesEnum}
                        item={item}
                        currentLocale={currentLocale}
                    />
                }
                <Description
                    descriptionText={description}
                    body={defaultDescription}
                />
            </div>
        </div>
    </>
}

export default Side
