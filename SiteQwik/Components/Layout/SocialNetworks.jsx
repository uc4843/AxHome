import { FooterTitle } from 'Layout'

const SocialNetworks = ({
    items,
    title,
}) => {

    return <div class="w-full md:w-[30%]">
        <FooterTitle title={title} />
        <ul class="flex flex-wrap gap-4">
            {
                items?.map(item => <>
                    <li>
                        <a
                            key={item?.id}
                            href={item?.link}
                            aria-label={item?.title}
                        >
                            <div
                                dangerouslySetInnerHTML={item?.svg}
                                class="flex items-center justify-center w-10 aspect-square p-3 rounded-full border border-slate-50 fill-slate-50 hover:fill-custom-color1 transition-all"
                            />
                        </a>
                    </li>
                </>)
            }
        </ul>
    </div>
}

export default SocialNetworks
