import { Image } from "Base"
import {
    About,
    Contact,
    Copyright,
    FooterLinks,
    QuickAccess,
    ScrollToTop,
    SocialNetworks,
} from "Layout"

const Footer = ({
    about,
    contactInfo,
    copyright,
    firstFooterLinks,
    footerImage,
    quickAccess,
    secondFooterLinks,
    socialNetworks,
}) => {
    return <>
        <footer class="bg-custom-color4 pt-10 relative">
            <Image
                containerClass="absolute w-full h-full inset-0 z-0"
                class="object-cover"
                src={footerImage?.image}
            />

            <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-5 items-start justify-center px-4 relative z-20 text-white mb-8">
                <About {...about} />
                <SocialNetworks {...socialNetworks} />
                <Contact {...contactInfo} />
            </div>
            <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-y-4 gap-x-5 items-start justify-center px-4 relative z-20 pb-20 2xl:pb-0">
                <FooterLinks {...firstFooterLinks} />
                <FooterLinks {...secondFooterLinks} />
                <QuickAccess {...quickAccess} />
                <ScrollToTop />
            </div>
            <Copyright {...copyright} />
        </footer>
    </>
}

export default Footer
