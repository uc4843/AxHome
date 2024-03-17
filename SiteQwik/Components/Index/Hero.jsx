import { Image } from "Base"

const Hero = ({
    animateCircleImage,
    locationImage,
    roundedSvg,
    subtitle,
    title,
}) => {

    return <section class="overflow-hidden relative after:content-[''] after:relative after:block after:w-full after:h-[150px] md:after:h-[320px] select-none">

        <div
            dangerouslySetInnerHTML={roundedSvg}
            class="absolute bg-custom-color3 start-1/2 translate-x-1/2 mx-auto top-0 w-[250%] md:w-[115%] h-full"
        />

        <div class="relative z-10 pt-10 px-4 2xl:px-0">
            <h1 class="text-3xl font-bold text-center">
                {title}
            </h1>
            <p class="text-lg text-center py-2 mb-6">
                {subtitle}
            </p>
        </div>

        <Image
            containerClass="absolute bottom-[30px] md:bottom-[140px] end-[50%] w-8 h-8 md:w-12 md:h-12 z-40 animate-up-down-one"
            imageClass="object-contain"
            priority
            src={locationImage}
        />
        <Image
            containerClass="absolute animate-spin-custom w-[600px] lg:w-[900px] aspect-square end-0 start-0 mx-auto text-center top-[calc(50%)] md:top-[calc(50%-100px)]"
            priority
            src={animateCircleImage}
        />
        <div class="aspect-square w-[400px] md:w-[500px] lg:w-[800px] rounded-[100%] bg-gradient-to-r from-custom-color4 to-transparent opacity-[0.6] absolute end-1/2 translate-x-[-50%] top-1/2 translate-y-[12%] md:translate-y-[-5%] lg:translate-y-[0] ">
            <Image
                containerClass="absolute animate-up-down-two delay-2 top-[50px] md:top-[90px] start-[150px] md:start-[30%] w-6 h-6 z-40"
                imageClass="object-contain"
                priority
                src={locationImage}
            />
            <Image
                containerClass="absolute top-[50px] md:top-[90px] end-[150px] md:end-[30%] w-6 h-6 z-40 animate-up-down-three delay-2"
                imageClass="object-contain"
                priority
                src={locationImage}
            />
            <Image
                containerClass="hidden md:flex absolute top-[160px] end-[20%] w-4 h-4 z-40 animate-up-down-one delay-5"
                imageClass="object-contain"
                priority
                src={locationImage}
            />
        </div>
    </section>
}

export default Hero
