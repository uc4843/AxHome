import { Image } from 'Base'

const Hero = ({
    animateCircleImage,
    locationImage,
    subtitle,
    title,
}) => {

    return <section class='bg-custom-color3 overflow-hidden relative after:content-[""] after:relative after:block after:w-full after:bg-[length:250%_100%] md:after:bg-[length:115%_100%] after:bg-center after:h-[150px] md:after:h-[320px] after:bg-[url("/images/rounded.svg")] select-none'>
        <div class='pt-10 px-4 2xl:px-0'>
            <h1 class='text-3xl font-bold text-center'>
                {title}
            </h1>
            <p class='text-lg text-center py-2 mb-6'>
                {subtitle}
            </p>
        </div>
        <Image
            containerClass="absolute bottom-[30px] md:bottom-[140px] end-[50%] w-8 h-8 md:w-12 md:h-12 z-40 free-animate"
            imageClass="object-contain"
            src={locationImage}
            priority
        />
        <Image
            containerClass="absolute animate-spin-custom w-[600px] md:w-[600px] lg:w-[900px] aspect-[1/1] end-[calc(50%-300px)] md:end-[calc(50%-300px)] lg:end-[calc(50%-450px)] top-[calc(50%)] md:top-[calc(50%-100px)] lg:top-[calc(50%-100px)]"
            imageClass="object-cover"
            priority
            src={animateCircleImage}
        />
        <div class=' aspect-[1/1] w-[400px] md:w-[500px] lg:w-[800px] rounded-[100%] bg-gradient-to-r from-custom-color4 to-transparent opacity-[0.6] absolute end-1/2 translate-x-[-50%] top-1/2 translate-y-[12%] md:translate-y-[-5%] lg:translate-y-[0] '>
            <Image
                containerClass="absolute free-animate delay-2 top-[50px] md:top-[90px] start-[150px] md:start-[30%] w-6 h-6 z-40"
                imageClass="object-contain"
                src={locationImage}
                priority
            />
            <Image
                containerClass="absolute top-[50px] md:top-[90px] end-[150px] md:end-[30%] w-6 h-6 z-40 free-animate delay-2"
                imageClass="object-contain"
                src={locationImage}
                priority
            />
            <Image
                containerClass="hidden md:flex absolute top-[160px] end-[20%] w-4 h-4 z-40 free-animate delay-5"
                imageClass="object-contain"
                src={locationImage}
                priority
            />
        </div>
    </section>
}

export default Hero
