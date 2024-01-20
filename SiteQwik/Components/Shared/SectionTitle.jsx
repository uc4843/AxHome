const SectionTitle = ({
    class: containerClass,
    description,
    title,
}) => {

    return <div class={`${containerClass}`}>
        <h2 class="text-center pt-6 text-3xl font-bold ">{title}</h2>
        <p class="text-slate-1000 text-center text-lg pt-4 mb-14">{description}</p>
    </div>
}

export default SectionTitle
