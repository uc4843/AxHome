import { FooterTitle } from "Layout"

const SocialNetworks = ({
    items,
    title,
}) => {

    return <div class="w-full md:w-[30%]">
        <FooterTitle title={title} />
        <ul class="flex flex-wrap gap-4">
            {
                items?.map(item => <li key={item.id}>
                    <a
                        aria-label={item.title}
                        href={item.link}
                        rel="nofollow"
                        target="_blank"
                    >
                        <div
                            class="flex items-center justify-center w-8 h-8 p-2 rounded-full border border-slate-50 hover:translate-y-1 fill-slate-50 hover:border-custom-color1 transition-all duration-300"
                            dangerouslySetInnerHTML={item.svg}
                        />
                    </a>
                </li>)
            }
        </ul>
    </div>
}

export default SocialNetworks
