import { DesktopSubMenu } from "Layout"

const DesktopMainMenu = ({ menuItems }) => {

    return <>
        <ul class="hidden lg:flex gap-3 xl:gap-6 items-center justify-center">
            {
                menuItems?.map(item => <>
                    <li
                        key={item?.id}
                        class="group relative"
                    >
                        <a
                            href={item?.url}
                            class="block relative py-5 text-slate-800 hover:text-custom-color1 select-none focus:outline-none after:transition-all after:duration-700"
                        >
                            {item?.title}
                        </a>
                        {
                            item?.relatedItems?.children?.length > 0 && <DesktopSubMenu items={item?.relatedItems?.children} />
                        }
                    </li>
                </>
                )
            }
        </ul>
    </>
}

export default DesktopMainMenu
