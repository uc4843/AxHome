const Description = ({
    body,
    descriptionText,
}) => {

    return <>
        <div class="my-5 border border-gray-200 p-4 flex flex-col basis-[50%]">

            <h2 class="w-full py-5 border-black flex justify-between items-center border-b">
                <span class='bg-custom-color1 rounded-md py-2 px-4 text-center text-white mx-auto inline-block'>
                    {descriptionText}
                </span>
            </h2>

            <p class='text-sm md:text-md font-semibold my-4'>
                {body}
            </p>
        </div>
    </>
}

export default Description
