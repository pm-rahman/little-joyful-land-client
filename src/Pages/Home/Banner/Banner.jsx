import Button from "../../../Components/Button/Button";
import banner from "../../../assets/banner.webp";
const Banner = () => {
  return (
    <div className="overflow-hidden px-3 rounded relative">
      <img className="h-full w-auto" src={banner} alt="" />
      <div className="container absolute h-full flex items-center top-0 z-20">
        <div>
          <p className="text-sm sm:text-lg">Exclusive Products is Here</p>
          <h4 className="text-xl mt-3 sm:text-5xl font-bold">Make Your Kids</h4>
          <h4 className="text-lg font-sans mt-2 sm:text-4xl">
            Happy & Healthy
          </h4>
          <Button variant="outline" className="mt-5">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
