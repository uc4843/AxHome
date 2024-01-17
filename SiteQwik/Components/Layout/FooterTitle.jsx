const FooterTitle = ({ title }) => {

    return <>
        <h2 class="font-bold text-white text-lg relative after:absolute after:-bottom-[9px] after:right-0 after:content-[&quot;&quot;] after:w-[80px] my-5 after:h-[2px] after:bg-white">
            {title}
        </h2>
    </>
}

export default FooterTitle
