import { DesktopSubMenu } from 'Layout'

const DesktopMainMenu = ({ menuItems }) => {

    return <>
        <div class='flex w-[calc(50%-64px)]'>
            <ul class="hidden lg:flex gap-4 items-center justify-center">
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
        </div>

    </>
}

export default DesktopMainMenu
