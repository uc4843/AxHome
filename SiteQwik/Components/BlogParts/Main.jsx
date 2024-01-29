import { component$ } from '@builder.io/qwik'
import { Card } from 'BlogParts'
import { Pagination } from 'Shared'

const Main = component$(({
    currentLocale,
    items,
    localePathPrefix,
    localesEnum,
    localesEnum,
    metadata,
}) => {

    return <>
        <article class='flex flex-col gap-y-6 mb-6 lg:mb-0'>
            <Card
                currentLocale={currentLocale}
                items={items}
                localePathPrefix={localePathPrefix}
                localesEnum={localesEnum}
            />

            <Pagination
                first
                last
                metadata={metadata}
            />
        </article>
    </>
})

export default Main
