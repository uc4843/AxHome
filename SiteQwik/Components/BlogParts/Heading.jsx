const Heading = ({
    blogTexts,
    seo,
}) => {

    return <>
        <h1 class="mt-4 mb-10 text-3xl mx-auto text-center font-bold relative px-5 after:w-10 after:absolute after:content-[''] after:-bottom-5 after:end-1/2 after:translate-x-[-50%] after:w-10 after:bg-custom-color1 after:h-1.5">
            {seo?.pageTitle}
        </h1>
        <p class="text-lg text-center mt-12">{blogTexts?.blogPageDescription}</p>
    </>
}

export default Heading
