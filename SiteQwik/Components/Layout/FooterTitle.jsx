const FooterTitle = ({
    isSmall,
    title,
}) => {
    return <>
        <h2 class={`font-bold text-white text-lg relative my-5 after:absolute after:-bottom-[9px] after:start-0 after:content-[""] after:h-[2px] after:bg-white ${isSmall ? "after:w-full" : "after:w-[80px]"}`}>
            {title}
        </h2>
    </>

}

export default FooterTitle
