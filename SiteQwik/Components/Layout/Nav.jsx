import { KeyboardArrowDown } from 'Svg'

const Nav = ({ menuItems }) => {

    return <nav class='flex w-[calc(50%-64px)]'>
        <div
            // onClick={toggleMenu}
            class="menu-toggle lg:hidden"
        >
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="cross">
                <span></span>
                <span></span>
            </div>
        </div>
        <ul class="hidden lg:flex gap-3 xl:gap-6 items-center ">
            {menuItems?.map(item => (
                <li
                    key={item.id}
                    class="group relative py-5 text-slate-800 hover:text-custom-color1">
                    <a
                        href={item.url}
                        class="flex items-center"
                        prefetch
                    >
                        <span>{item.title}</span>
                        {
                            item.relatedItems?.children?.length > 0 &&
                            <KeyboardArrowDown class="hidden lg:block group-hover:-rotate-[180deg] transition-all w-4 h-4" />
                        }
                    </a>
                    <>
                        {item.relatedItems?.children?.length > 0 && <ul class="absolute top-[80%] z-20 start-0 hidden w-[300px] bg-white rounded-md overflow-hidden shadow-lg group-hover:block">
                            {item.relatedItems.children?.map(submenuItem => (
                                <li
                                    key={submenuItem.id}
                                    class={`p-3 text-sm text-black hover:text-white transition-all hover:bg-custom-color1 `}
                                >
                                    <a href={submenuItem.url}>
                                        {submenuItem.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        }
                    </>
                </li>
            ))}
        </ul>
    </nav>
}

export default Nav
