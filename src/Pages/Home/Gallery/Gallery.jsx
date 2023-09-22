import Button from "../../../Components/Button/Button";

const galleryProduct = [
  {
    id: 1,
    name: "Toy Police cars",
    image: "https://i.ibb.co/QFDsfhP/gallery-pic-2.png",
    price: 120,
    retting: 5,
  },
  {
    id: 2,
    name: "Die Cast Car Toys",
    image: "https://i.ibb.co/3SLnBtP/gallery-pic-5.jpg",
    price: 130,
    retting: 3,
  },
  {
    id: 3,
    name: "TISEN Remote Control Car",
    image: "https://m.media-amazon.com/images/I/71O6ZBfa7TL.jpg",
    price: 80,
    retting: 4,
  },
  {
    id: 4,
    name: "Toy Argos cars",
    image: "https://i.ibb.co/MptW6hP/gallery-pic-3.jpg",
    price: 90,
    retting: 5,
  },
];

const Gallery = () => {
  return (
    <div className="mt-7 md:mt-14">
      <h3 className="text-center text-xl md:text-3xl mb-5 font-semibold">
        Exclusive products
      </h3>
      <div className="cursor-pointer">
        {/* cart top part */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {galleryProduct?.map((product) => (
            <div
              key={product?.key}
              className="exclusive-cart relative flex flex-col items-center justify-center"
              // data-aos="fade-up"
            >
              <span className="absolute top-0 left-0 text-xs text-white font-semibold uppercase py-1 px-2 bg-[#f3bd98]">New</span>
              <figure className="w-full h-full px-4 py-12 flex items-center justify-center bg-white">
                <img
                  className="rounded-md max-w-[70%] m-auto"
                  src={product?.image}
                  alt=""
                />
              </figure>
              <Button
                className="exclusive-btn absolute bottom-0 hidden"
                size="block"
                variant="outline"
              >
                View Details
              </Button>
            </div>
          ))}
        </div>
        {/* cart bottom part */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-1">
          {galleryProduct?.map((product) => (
            <div
              key={product?.key}
              className="flex flex-col items-center justify-center mt-3"
            >
              <h5 className="text-lg text-[#535456] font-bold">
                {product?.name}
              </h5>
              <h4 className="font-extrabold text-xl">${product?.price}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
