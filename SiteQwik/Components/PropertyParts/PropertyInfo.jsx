import { useListingUrl } from 'Properties'

const PropertyInfo = ({
    property,
    propertyInfoTexts,
}) => (
    <div class='w-full border p-4 my-4'>
        {[
            {
                label: propertyInfoTexts?.cityDivision,
                slug: property?.cityDivisionSlug,
                value: property?.cityDivisionName,
            },
            {
                label: propertyInfoTexts?.dealType,
                slug: property?.dealTypeSlug,
                value: property?.dealTypeName,
            },
            {
                label: propertyInfoTexts?.propertyType,
                slug: property?.propertyTypeSlug,
                value: property?.propertyTypeName,
            },
            {
                label: propertyInfoTexts?.age,
                value: property?.age,
            },
            {
                label: propertyInfoTexts?.area,
                value: property?.area,
            },
            {
                label: propertyInfoTexts?.roomsCount,
                value: property?.roomsCount,
            },
        ].map(({
            label,
            slug,
            value,
        }) => (
            <div class='flex gap-4 items-center text-md group'>
                <p
                    class='w-1/2 md:w-1/6'>
                    {label}:
                </p>
                {slug ? (
                    <a
                        href={useListingUrl({ cityDivision: slug })}
                        class='group-hover:text-custom-color1 transition-all'>
                        {value}
                    </a>
                ) : (
                    <p>{value}</p>
                )}
            </div>
        ))}
    </div>
)

export default PropertyInfo
