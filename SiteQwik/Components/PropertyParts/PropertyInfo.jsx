const PropertyInfo = ({
    property,
    propertyInfoTexts,
}) => {

    return <>
        <div class="border my-4 flex flex-col sm:flex-row items-start">
            <div class="w-full sm:w-1/2 p-4 border-b md:border-b-0 md:border-l">
                <h3 class="text-xl font-bold">
                    {propertyInfoTexts?.propertyInfoTitle}
                </h3>
            </div>
            <div class="w-full sm:w-1/2 p-4">
                <h3 class="text-xl font-bold">
                    {propertyInfoTexts?.featuresTitle}
                </h3>
            </div>
        </div>
    </>
}

export default PropertyInfo
