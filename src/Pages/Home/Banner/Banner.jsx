
const Banner = () => {
    return (
        <div className="bg-slate-100 rounded-md relative overflow-hidden">
            <div className=" bg-amber-400 opacity-20 absolute top-0 left-0 z-20 h-full w-full"></div>
            <div className="flex flex-col lg:flex-row">
                <img className="lg:w-1/2" src="https://i.ibb.co/hXFMgZC/banar-image.webp" alt="" />
                <div className="p-7 sm:p-10 relative z-40 lg:p-16 flex flex-col justify-center">
                    <p className="font-semibold text-sm sm:text-lg">Exclusive Products is Here</p>
                    <h4 className="text-xl sm:text-5xl font-bold">Make Your Kids Happy & Healthy</h4>
                    <button className="bg-amber-600 mt-3 md:mt-6 w-40 font-semibold sm:w-44 text-center text-white text-semibold py-3 rounded-full">Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;