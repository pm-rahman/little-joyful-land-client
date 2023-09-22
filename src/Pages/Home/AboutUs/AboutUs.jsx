import Button from "../../../Components/Button/Button";

const AboutUs = () => {
    return (
        <div className="mt-8 md:mt-12 flex flex-col items-center gap-5 bg-[#cee5ec] border-8 border-white rounded py-6 md:py-8 px-10 md:px-14 ">
             <h2 className="text-xl sm:text-3xl font-bold uppercase">Our Story</h2>
             <p className="text-center text-lg leading-5 sm:w-3/4 md:w-2/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolorum porro placeat minima harum ipsa eligendi accusamus ex quia!</p>
             <Button variant="white">About Us</Button>
        </div>
    );
};

export default AboutUs;