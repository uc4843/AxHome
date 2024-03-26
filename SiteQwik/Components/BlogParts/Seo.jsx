import { RichText } from "Shared"

const Seo = ({ content }) => {

    return <>
        {
            content && content != "[]" &&
            <section class="bg-white rounded-2xl max-w-7xl mx-auto px-4 lg:px-16 pt-8">
                <div class="max-w-7xl mx-auto px-4 pb-8 bg-white rounded-2xl">
                    <RichText
                        class="leading-7"
                        content={content}
                        h2="font-bold mt-4 mb-2 text-[1.1rem]"
                        h3="font-bold mt-4 mb-2 text-[1rem]"
                        p="text-md mt-2 mb-2"
                    />
                </div>
            </section>
        }
    </>
}

export default Seo
