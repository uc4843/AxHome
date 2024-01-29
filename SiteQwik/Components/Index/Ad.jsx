import {Image} from 'Base'

const Ad = ({
    image,
    link,
    title,
}) => {

    return <>
        <section class="max-w-3xl px-0 mx-auto my-5 md:px-5">
            <a
                href={link}
                aria-label={title}
            >
                <Image
                    src={image}
                    alt={title}
                    containerClass="w-full aspect-[1027/400]"
                />
            </a>
        </section>
    </>
}

export default Ad
