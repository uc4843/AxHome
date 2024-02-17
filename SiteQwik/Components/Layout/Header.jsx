import {
    component$,
    useSignal,
} from '@builder.io/qwik'
import { Image } from 'Base'
import {
    Bars,
    Person,
    PhoneForwarded,
} from 'Svg'
import {
    DesktopMainMenu,
    MobileMainMenu,
} from 'Layout'

const Header = component$(({
    branding,
    contactInfo,
    headerCta,
    menuItems,
}) => {

    const isOpen = useSignal(false)
    console.log('qqqqqqqqqqqqqqqqqqq', headerCta);
    return <header class='py:2 md:py-4 bg-custom-color3'>
        <div class="relative flex items-center justify-between max-w-wide mx-auto px-4 2xl:px-0">
            <div class='flex w-[calc(50%-64px)]'>
                <DesktopMainMenu menuItems={menuItems} />
                <div
                    class="py-2"
                    onClick$={() => isOpen.value = !isOpen.value}
                >
                    <Bars class="w-7 aspect-square text-custom-color24 md:hidden font-bold focus:outline-none" />
                </div>
                <MobileMainMenu
                    branding={branding}
                    isOpen={isOpen}
                    menuItems={menuItems}
                />
            </div>
            <a
                href="/">
                <Image
                    containerClass="relative hidden xs:block h-[60px] md:h-[70px] aspect-square mt-2 md:mt-0"
                    imageClass="w-full h-full object-contain"
                    src={branding?.logo}
                    alt={branding?.brand}
                    priority
                />
            </a>

            <div class='flex items-center w-[calc(50%-64px)] justify-end gap-2'>

                <a
                    aria-label={headerCta?.ctaTitle}
                    href={`tel:${contactInfo?.phone}`}
                    class="flex lg:hidden items-center gap-1 hover:translate-y-0.5 transition-all duration-300 text-slate-400 bg-custom-color3 p-1 rounded-md"
                >
                    <span class="text-[14px] text-black">{contactInfo?.phone}</span>
                    <PhoneForwarded class="w-5 h-5 md:w-6 md:h-6 fill-custom-color1" />
                </a>

                <a
                    aria-label={headerCta?.authTitle}
                    class="flex justify-start items-center bg-custom-color1 hover:translate-y-0.5 transition-all duration-300 py-0.5 lg:py-1 px-1 lg:px-2 rounded-md text-neutral-700 hover:brightness-110"
                    href={headerCta?.authLink}
                >
                    <Person class="w-5 h-5 lg:w-6 lg:h-6 fill-white" />
                    <p class='hidden lg:flex pe-4 ps-2 text-white font-bold'>
                        {headerCta?.ctaText}
                    </p>
                </a>

                <p class='w-[1px] h-[30px] bg-black hidden lg:flex'></p>

                <p class='items-center gap-1 hidden lg:flex'>
                    <a
                        aria-label={headerCta?.phoneTitle}
                        class="text-md hover:text-custom-color1"
                        href={`tel:${contactInfo?.phone}`}
                        target="_blank"
                    >
                        {headerCta?.phoneTitle}
                    </a>
                    <a
                        aria-label={headerCta?.phoneTitle}
                        href={`tel:${contactInfo?.phone}`}
                        target="_blank"
                        class='font-light hover:text-custom-color1'
                    >
                        {contactInfo?.phone}
                    </a>
                </p>
            </div>
        </div>
    </header>
})

export default Header
