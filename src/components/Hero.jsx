import hero from "../assets/main.jpg";

const Hero = () => {
    return (
        <section className="float-left w-1/4 me-4">
            <img className="w-full shasow-hero" src={hero} alt="Hero"/>
        </section>
    );
};

export default Hero;