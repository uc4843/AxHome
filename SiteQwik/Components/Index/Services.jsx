import { Image } from 'Base'
import { SectionTitle } from 'Shared'

const Services = ({
    description,
    items,
    title,
}) => {

    return <>
        <section class="max-w-7xl mx-auto px-5 mx-5 py-2 my-5 lg:my-10 rounded-2xl border border-black">
            <SectionTitle
                description={description}
                title={title}
            />
            <div class="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-8 my-14">
                {
                    items?.map(item => <>
                        <a
                            class="flex flex-col items-center gap-6 group"
                            href={item?.link}
                            key={item?.id}
                        >
                            <Image
                                src={item?.image}
                                alt={item?.title}
                                containerClass="bg-white w-20 aspect-square rounded-full border shadow-xl flex justify-center items-center"
                                imageClass="w-10 aspect-square object-contain group-hover:translate-y-[2px] transition-all duration-300"
                            />
                            {item?.title}
                        </a>
                    </>)
                }
            </div>
        </section>
    </>
}

export default Services
