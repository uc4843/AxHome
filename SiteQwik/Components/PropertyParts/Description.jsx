const Description = ({
    body,
    descriptionText,
}) => {

    return <>
        <div class="my-5 border border-gray-200 p-4 flex flex-col basis-[50%] items-center">

            <strong class="bg-custom-color1 rounded-md py-2 px-4 text-center text-white mx-auto inline-block my-5">
                {descriptionText}
            </strong>

            <p class="text-sm md:text-md font-semibold py-4 border-t border-black">
                {body}
            </p>
        </div>
    </>
}

export default Description
