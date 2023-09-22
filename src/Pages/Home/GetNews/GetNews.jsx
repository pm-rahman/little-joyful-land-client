import Button from "../../../Components/Button/Button";

const GetNews = () => {
    return (
        <div className="grid lg:grid-cols-2 items-center mt-8 md:mt-12 gap-3 md:gap-4 bg-[#cee5ec] rounded py-6 md:py-8 px-10 md:px-14 ">
            <div>
             <h2 className="text-lg sm:text-2xl font-semibold uppercase">GET OUR LATEST NEWS AND SPECIAL SALES</h2>
             <p className="mt-3 leading-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolorum porro placeat minima harum ipsa eligendi accusamus ex quia!</p>
            </div>
            <div className="flex">
            <input placeholder="Email Address" type="text" className="w-3/4 px-2 py-3 bg-white focus:outline-none" />
             <Button variant="outline-fill" className="w-1/4">Get</Button>
            </div>
        </div>
    );
};

export default GetNews;