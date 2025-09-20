import { component$ } from "@builder.io/qwik"
import {
    Image,
    TimeAgo,
} from "Base"
import { Sharing } from "Seo"
import { useAgentUrl } from "Properties"
import { Share } from "Svg"

const Agent = component$(({
    agentNum,
    agentTitle,
    currentLocale,
    displayName,
    localePathPrefix,
    localesEnum,
    modalShareTitle,
    phone,
    property,
    propertyAdCodeTitle,
    realEstateNum,
    relatedItems,
    shareTitle,
    slug,
}) => {

    return <>
        <aside class="w-full p-4 rounded-md shadow-lg shadow-gray-200 bg-white border border-custom-color3 basis-[50%] px-4 text-sm">

            <div class="flex flex-col items-end gap-1">
                <div class="flex gap-2 items-center">
                    <p>{propertyAdCodeTitle}:</p>
                    <p>{property?.id}</p>
                </div>
                <p class="text-custom-color4">
                    <TimeAgo
                        utcDate={property?.modificationUtcDate}
                        localKey={currentLocale?.key}
                        localesEnum={localesEnum}
                    />
                </p>
            </div>

            <div class="flex items-center justify-start gap-2 my-4">
                {relatedItems?.imageUrl &&
                    <a
                        aria-labe={displayName}
                        href={useAgentUrl(slug, localePathPrefix)}
                    >
                        <Image
                            src={relatedItems?.imageUrl}
                            alt={displayName}
                            containerClass="w-16 h-16 aspect-square rounded-full overflow-hidden border border-slate-600 mb-4"
                            imageContainer="w-full h-full"
                        />
                    </a>
                }
                <div class="my-6 flex gap-1 items-center">
                    <p class="me-1">
                        {agentTitle}:
                    </p>
                    <strong>
                        <a
                            aria-labe={displayName}
                            class="break-all"
                            href={useAgentUrl(slug, localePathPrefix)}
                        >
                            {displayName}
                        </a>
                    </strong>
                </div>
            </div>

            <div
                class="flex flex-col gap-3 items-between justify-center mb-4 border border-gray-200 px-4 py-2 rounded-md bg-green-600 hover:border-green-500 transition-all text-white font-bold"
                dir="ltr"
            >
                {
                    relatedItems?.phones?.map(item => <a
                        aria-labe={item.phoneValue}
                        class="flex gap-2 items-center justify-between"
                        href={`tel:${item?.phoneValue}`}
                        key={item.id}
                    >
                        <p>{item?.phoneValue}</p>
                        <p>{agentNum}</p>
                    </a>)
                }
            </div>

            <div
                class="flex flex-col gap-3 items-between justify-center mb-8 border border-gray-200 px-4 py-2 rounded-md hover:border-custom-color1 transition-all"
                dir="ltr"
            >
                <a
                    aria-label={phone}
                    class="flex gap-2 items-center justify-between"
                    href={`tel:${phone}`}
                >
                    <p>{phone}</p>
                    <p>{realEstateNum}</p>
                </a>
            </div>

            <Sharing modalTitle={modalShareTitle}>
                <div class="flex gap-1 cursor-pointer py-2 px-2 rounded-md border border-gray-200 bg-white cursor-pointer group hover:border-custom-color1 transition-all">
                    <Share class="w-5 aspect-square cursor-pointer text-white group-hover:text-custom-color1" />
                    <p>{shareTitle}</p>
                </div>
            </Sharing>

        </aside>
    </>
})

export default Agent
