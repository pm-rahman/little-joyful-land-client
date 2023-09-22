import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import Button from "../../../Components/Button/Button";

const Category = () => {
  const [category, setCategory] = useState("sportsCar");
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(
      `https://toy-assignment-server.vercel.app/toy-category?category=${category}`
    )
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [category]);
  return (
    <>
      <div className="py-6 md:py-8 px-10 md:px-14 rounded border-8 border-white bg-[#f3bd98]">
        <h2 className="text-center text-xl sm:text-3xl font-bold uppercase">
          Something For Your
        </h2>
        <div className="mt-2 md:mt-3 flex justify-center gap-2 md:gap-4">
          <Button onClick={() => setCategory("sportsCar")} className={`${category==="sportsCar"&&"active-Category"}`} variant="white-blue">
            Sports Car
          </Button>
          <Button onClick={() => setCategory("truck")} className={`${category==="truck"&&"active-Category"}`} variant="white-blue">
            Truck
          </Button>
          <Button
            onClick={() => setCategory("regularCar")}
            className={`${category==="regularCar"&&"active-Category"}`}
            variant="white-blue"
          >
            Regular Car
          </Button>
        </div>
      </div>
      {/* card top part */}
      <div className="mt-3 md:mt-4 grid md:grid-cols-3 gap-2 sm:gap-5">
        {toys.map((toy) => (
          <Link to={`/toy-details/${toy._id}`} key={toy._id}>
            <figure className="w-full h-full flex justify-center bg-white">
              <img className="max-w-full" src={toy.toyPic} alt="" />
            </figure>
          </Link>
        ))}
      </div>
      {/* cart bottom part */}
      <div className="grid md:grid-cols-3 gap-2 sm:gap-5 relative bottom-2">
        {toys.map((toy) => (
          <Link to={`/toy-details/${toy._id}`} key={toy._id}>
            <div className="hover:underline bg-[#cee5ec] p-2 sm:p-3">
              <h3 className="font-semibold xl:text-xl xl:text-[22px]">
                {toy?.toyName}
              </h3>
              <p className="font-semibold">${toy?.price}</p>
              <p className="text-sm">
                {toy?.description?.slice(0, 60)} see more...
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Category;
