import Button from "../../../Components/Button/Button";
import banner from "../../../assets/banner.webp";
const Banner = () => {
  return (
    <div className="overflow-hidden relative">
      <img className="h-auto w-full rounded-md" src={banner} alt="" />
      <div className="container absolute h-full flex items-center top-0 z-20">
        <div className="p-2 sm:p-0">
          <p className="text-sm sm:text-sm font-semibold text-[#363c42]">SPECIAL OFFER</p>
          <h4 className="text-xl mt-1 sm:mt-4 sm:text-5xl font-semibold">Make Your Kids</h4>
          <h4 className="text-xl font-sans mt-1 sm:mt-3 sm:text-5xl">
            Happy & Healthy
          </h4>
          <p className="sm:text-xl my-3 sm:my-6">Get up to 20% off</p>
          <Button variant="outline-fill">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
