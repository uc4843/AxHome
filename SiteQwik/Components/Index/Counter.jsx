import { Image } from "Base"
import { SectionTitle } from "Shared"

const Counter = ({
    bgImage,
    description,
    items,
    title,
}) => {

    return <>
        <section class="relative bg-custom-color1 py-8">
            <Image
                src={bgImage}
                alt={title}
                containerClass="absolute z-0 top-0 start-0 w-full h-full"
            />
            <div class="relative z-10 max-w-7xl mx-auto px-5">
                <SectionTitle
                    description={description}
                    title={title}
                    class="text-white"
                />
                <div class="max-w-5xl mx-auto flex justify-between items-center flex-wrap gap-y-8 px-4 my-6 md:my-16">
                    {
                        items?.map(item => <>
                            <div
                                key={item?.id}
                                class="flex flex-col gap-6 items-center w-1/2 md:w-auto"
                            >
                                <p class="rounded-full w-28 h-28 bg-white border-[10px] border-custom-color3 flex items-center justify-center text-3xl">
                                    {item?.number}
                                </p>
                                <p class="font-bold text-white text-lg">
                                    {item?.title}
                                </p>
                            </div>
                        </>)
                    }
                </div>
            </div>
        </section>
    </>
}

export default Counter
