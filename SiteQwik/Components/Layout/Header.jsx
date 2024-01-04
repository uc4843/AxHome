import { Image } from 'Base'
import {
    Person,
    PhoneForwarded,
} from 'Svg'
import { Nav } from 'Layout'

const Header = ({
    branding,
    contactInfo,
    headerCta,
    menuItems,
}) => {
    return <header class='py:2 md:py-4 bg-custom-color3'>
        <div class="relative w-full flex items-center justify-between max-w-wide mx-auto px-4 2xl:px-0">
            <Nav menuItems={menuItems} />
            <a
                href="/">
                <Image
                    containerClass="relative w-[60px] md:w-[70px] hidden xs:block aspect-[1/1] mt-2 md:mt-0"
                    imageClass="object-contain"
                    src={branding?.logo}
                    alt={branding?.brand}
                    priority
                />
            </a>
            <div class='w-[calc(50%-64px)] flex items-center justify-end gap-4'>
                <a
                    href={headerCta?.ctaLink}
                    class="flex lg:hidden items-center gap-1 hover:translate-y-0.5 transition-all duration-300 text-slate-400 bg-custom-color3 p-1 rounded-md"
                >
                    <span class="text-[14px] text-black">{contactInfo?.phone}</span>
                    <PhoneForwarded class="w-5 h-5 md:w-6 md:h-6 fill-custom-color1" />
                </a>
                <a
                    href={headerCta?.ctaLink}
                    class="flex justify-start items-center bg-custom-color1 hover:translate-y-0.5 transition-all duration-300 py-0.5 lg:py-1 px-1 lg:px-2 rounded-md text-neutral-700 hover:brightness-110"
                >
                    <Person class="w-5 h-5 lg:w-6 lg:h-6 fill-white" />
                    <p class='hidden lg:flex pe-4 ps-2 text-white font-bold'>
                        {headerCta?.ctaText}
                    </p>
                </a>
                <p class='w-[1px] h-[30px] bg-black hidden lg:flex'></p>
                <p class='items-center gap-1 hidden lg:flex'>
                    <a
                        href={headerCta?.ctaLink}
                        target="_blank"
                        class="text-md hover:text-custom-color1"
                    >
                        {headerCta?.phoneTitle}
                    </a>
                    <a
                        href={headerCta?.ctaLink}
                        target="_blank"
                        class='font-light hover:text-custom-color1'>
                        {contactInfo?.phone}
                    </a>
                </p>
            </div>
        </div>
    </header>
}

export default Header
