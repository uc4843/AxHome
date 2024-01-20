import { Image } from 'Base'
import {
    About,
    Contact,
    Copyright,
    FooterLinks,
    QuickAccess,
} from 'Layout'

const Footer = ({
    about,
    bgImages,
    contactInfo,
    copyright,
    firstFooterLinks,
    secondFooterLinks,
    quickAccess,
}) => {
    return <>
        <footer class="bg-custom-color4 pt-10 relative">
            {/* <Image
                containerclass="absolute w-full h-full inset-0 z-0"
                class="object-cover"
                src={bgImages?.footerBg?.relatedItems?.fileUrl}
            /> */}

            <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-5 items-start justify-center px-4 relative z-20 text-white mb-8">
                <About {...about} />
                <Contact {...contactInfo} />
            </div>
            <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-y-4 gap-x-5 items-start justify-center px-4 relative z-20 pb-20 2xl:pb-0">
                <FooterLinks {...firstFooterLinks} />
                <FooterLinks {...secondFooterLinks} />
                <QuickAccess {...quickAccess} />
            </div>
            <Copyright {...copyright} />
        </footer>
    </>
}

export default Footer
