import {
    $,
    component$,
    useSignal,
} from "@builder.io/qwik"
import { Image } from "Base"
import { useHomeUrl } from "Globalization"
import { MobileSubMenu } from "Layout"
import { Backdrop } from "Shared"
import { Close } from "Svg"

const MobileMainMenu = component$(({
    branding,
    isOpen,
    localePathPrefix,
    menuItems,
}) => {

    const isOpenSubMenu = useSignal(false)

    const closeMenuHandler = $(() => {
        isOpen.value = !isOpen.value
    })

    return <>
        {isOpen.value &&
            <Backdrop click={closeMenuHandler} />
        }

        <div class={`lg:hidden w-[90%] max-w-[300px] fixed overflow-y-scroll bg-white top-0 start-0 h-[100vh] z-50 transition duration-300 divide-y-[.5px] divide-gray-300 divide-opacity-2 ${isOpen.value ? "translate-x-0" : "translate-x-full"} `}>
            <div class="flex justify-between bg-slate-100">
                <a
                    aria-label={branding?.brand}
                    class="ms-4"
                    href={useHomeUrl(localePathPrefix)}
                >
                    <Image
                        containerClass="relative w-auto h-[60px] mt-2 md:mt-0"
                        imageClass="w-full h-full object-contain"
                        src={branding?.logo}
                        alt={branding?.brand}
                        priority
                    />
                </a>
                <div class="py-5 px-3"
                    onClick$={() => isOpen.value = false}
                >
                    <Close class="w-8 aspect-square text-custom-color22 focus:outline-none" />
                </div>
            </div>
            {
                menuItems?.map((item, index,) => <>
                    <div class="flex justify-between items-center">
                        <a
                            href={item.url}
                            key={item.id}
                            class={`w-fit text-custom-color24 hover:text-custom-color1 px-5 py-5 font-bold duration-700 after:absolute after:content-[""] after:bg-custom-color1 after:bottom-0 after:start-0 after:w-0 after:h-1 hover:after:w-full after:transition-all after:duration-700 delay-[${index * 1_000_000}ms] ${isOpen.value ? "translate-x-0" : "translate-x-[100vw]"}`}
                        >
                            {item.title}
                        </a>
                        {
                            item.hasChildren &&
                            <div class="pt-4 p-3 text-custom-color22" onclick$={() => isOpenSubMenu.value = !isOpenSubMenu.value}>
                                {isOpenSubMenu.value ? <span>-</span> : <span>+</span>}
                            </div>
                        }
                    </div>
                    {
                        item.hasChildren &&
                        <MobileSubMenu
                            isOpenSubMenu={isOpenSubMenu}
                            items={item.children}
                        />
                    }
                </>
                )
            }
        </div>

    </>

})

export default MobileMainMenu
