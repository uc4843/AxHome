import { DesktopSubMenu } from "Layout"

const DesktopMainMenu = ({ menuItems }) => {

    return <>
        <ul class="hidden lg:flex gap-3 xl:gap-6 items-center justify-center">
            {
                menuItems?.map(item => <>
                    <li
                        class="group relative"
                        key={item.id}
                    >
                        <a
                            class="block relative py-5 text-slate-800 hover:text-custom-color1 select-none focus:outline-hidden after:transition-all after:duration-700"
                            href={item.url}
                        >
                            {item.title}
                        </a>
                        {
                            item.hasChildren &&
                            <DesktopSubMenu items={item.children} />
                        }
                    </li>
                </>
                )
            }
        </ul>
    </>
}

export default DesktopMainMenu
