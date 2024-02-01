import {
    Image,
    TimeAgo,
} from 'Base'
import { useAgentUrl } from 'Properties'
import { Mobile } from 'Svg'

const Agent = ({
    agentTitle,
    currentLocale,
    displayName,
    item,
    localePathPrefix,
    localesEnum,
    property,
    propertyCode,
    relatedItems,
    slug,
}) => {

    return <>
        <div class="w-full p-4 rounded-md shadow-lg shadow-gray-200 bg-white border border-custom-color3 basis-[50%] px-4">

            <div class="flex flex-col items-end gap-1">
                <div class="flex gap-2 items-center">
                    <span>{propertyCode} :</span>
                    <span>{property?.id}</span>
                </div>
                <div class="text-sm text-custom-color4">
                    <TimeAgo
                        utcDate={item?.modificationUtcDate}
                        localKey={currentLocale?.key}
                        localesEnum={localesEnum}
                    />

                </div>
            </div>

            <div class='flex items-center justify-start gap-2 mb-4'>
                {relatedItems?.imageUrl &&
                    <a href={useAgentUrl(slug, localePathPrefix)}>
                        <Image
                            src={relatedItems?.imageUrl}
                            alt={displayName}
                            containerClass="w-16 h-16 aspect-square rounded-full overflow-hidden border border-slate-600 mb-4"
                            imageContainer="w-full h-full"
                        />
                    </a>
                }
                <div class="my-6">
                    <span class="me-1">
                        {agentTitle}:
                    </span>
                    <a href={useAgentUrl(slug, localePathPrefix)}>
                        <strong class="break-all">
                            {displayName}
                        </strong>
                    </a>
                </div>
            </div>

            <div
                class="flex flex-col gap-3 items-between justify-center mb-8 border px-4 py-2 rounded-md"
                dir="ltr">
                {
                    relatedItems?.phones?.map(item => <>
                        <a
                            href={`tel:${item?.phoneValue}`}
                            class="flex gap-2 items-center justify-between"
                        >
                            <Mobile class="w-8 aspect-square p-1 bg-custom-color1 rounded fill-custom-color31" />
                            <span>
                                {item?.phoneValue}
                            </span>
                        </a>
                    </>)
                }
            </div>
        </div>
    </>
}

export default Agent
