import { FooterTitle } from "Layout"

const About = ({
    text,
    title,
}) => {

    return <>
        <div class="w-full md:w-[30%]">
            <FooterTitle title={title} />
            <p>{text}</p>
        </div>
    </>
}

export default About
