import { FooterTitle } from 'Layout'

const QuickAccess = ({
    items,
    title,
}) => {

    return <div class="text-white w-full md:w-[20%]">
        <FooterTitle
            title={title}
            isSmall
        />
        <div class="flex flex-col gap-1 items-start text-sm lg:text-md">
            {
                items?.map(item => <>
                    <a
                        key={item?.id}
                        class="text-white hover:text-custom-color1 transition-all duration-300"
                        href={item.link.replace("search", "listing")}
                    >
                        {item?.title}
                    </a>
                </>)
            }
        </div>
    </div>
}

export default QuickAccess
