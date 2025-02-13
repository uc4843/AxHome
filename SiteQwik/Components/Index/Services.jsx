import { Image } from "Base"
import { SectionTitle } from "Shared"

const Services = ({
    description,
    items,
    title,
}) => {

    return <>
        <section class="px-5">
            <div class="max-w-7xl mx-auto py-2 my-5 lg:my-10 rounded-2xl border border-black">
                <SectionTitle
                    description={description}
                    title={title}
                />
                <div class="max-w-4xl mx-5 mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-8 my-14">
                    {
                        items?.map(item => <>
                            <a
                                aria-label={item?.title}
                                class="flex flex-col items-center gap-6 group"
                                href={item?.link}
                                key={item?.id}
                            >
                                <Image
                                    alt={item?.title}
                                    containerClass="bg-white w-20 aspect-square rounded-full border border-gray-200 shadow-2xl shadow-black flex justify-center items-center"
                                    imageClass="w-10 aspect-square object-contain group-hover:translate-y-[2px] transition-all duration-300"
                                    src={item?.image}
                                />
                                {item?.title}
                            </a>
                        </>)
                    }
                </div>
            </div>
        </section>
    </>
}

export default Services
