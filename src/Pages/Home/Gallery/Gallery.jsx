import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const galleryProduct = [
  {
    id: 1,
    name: "Toy Argos cars",
    image: "https://i.ibb.co/MptW6hP/gallery-pic-3.jpg",
    price: 120,
    retting:5,
},
{
    id: 2,
    name: "Die Cast Car Toys",
    image: "https://i.ibb.co/3SLnBtP/gallery-pic-5.jpg",
    price: 130,
    retting:3,
},
{
    id: 3,
    name: "Toy Police cars",
    image: "https://i.ibb.co/QFDsfhP/gallery-pic-2.png",
    price: 80,
    retting:4,
},
{
    id: 4,
    name: "TISEN Remote Control Car",
    image: "https://m.media-amazon.com/images/I/71O6ZBfa7TL.jpg",
    price: 90,
    retting:5,
  },
];

const Gallery = () => {
  return (
    <div className="container">
      <h3 className="text-xl md:text-3xl mb-5 font-normal">
        Exclusive products
      </h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {galleryProduct?.map((product) => (
          <div
            key={product?.key}
            className="border flex flex-col items-center justify-center p-1"
            // data-aos="fade-up"
          >
            <img
              className="rounded-md max-w-full m-auto"
              src={product?.image}
              alt=""
            />
            <h5 className="text-base text-[#535456] font-bold">{product?.name}</h5>
            <h4 className="font-extrabold">${product?.price}</h4>
            <Rating style={{ maxWidth: 80 }} value={product?.retting} readOnly />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
