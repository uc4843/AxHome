const SectionTitle = ({
    class: internalClass,
    description,
    title,
}) => {

    return <div class={`${internalClass}`}>
        <h2 class="text-center pt-2 text-2xl md:text-3xl font-bold">{title}</h2>
        <p class="text-center text-md md:text-lg py-2">{description}</p>
    </div>
}

export default SectionTitle
