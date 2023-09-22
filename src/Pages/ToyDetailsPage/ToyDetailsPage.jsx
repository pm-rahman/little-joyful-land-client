import { useLoaderData } from "react-router-dom";
import Title from "../../Components/Title/Title";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Icon } from "@iconify/react";
import Button from "../../Components/Button/Button";

const ToyDetailsPage = () => {
  const {
    toyPic,
    toyName,
    sellerName,
    description,
    email,
    price,
    quantity,
    rating,
  } = useLoaderData();
  Title("Toy-Details");
  const quantityAddHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="grid md:grid-cols-7 my-8">
        {/* image some info */}
        <div className="col-span-5">
          <div className="grid grid-cols-2 gap-4 p-6 bg-white rounded-l md:p-8">
            <img src={toyPic} />
            <div>
              <h1 className="text-2xl font-semibold">{toyName}</h1>
              <p className="text-lg">
                <span className="font-semibold">Price: </span>
                {price}
              </p>
              <div className="text-lg flex gap-2">
                <span className="font-semibold">Rating: </span>
                <Rating
                  className="mt-auto mb-1"
                  style={{ width: 100 }}
                  value={rating}
                  readOnly
                />
                {rating}
              </div>
              <div className="mt-10">
                {/* quantity select from */}
                <form
                  onSubmit={quantityAddHandler}
                  className="flex items-center gap-2 mb-4"
                >
                  <label>Quantity</label>
                  <button className="bg-slate-200 text-slate-500 py-2 px-3 rounded">
                    <Icon icon="heroicons-outline:minus-sm" />
                  </button>
                  <input
                    className="w-10 text-center p-1"
                    type="number"
                    defaultValue={1}
                  />
                  <button className="bg-slate-200 text-slate-500 py-2 px-3 rounded">
                    <Icon icon="heroicons-outline:plus-sm" />
                  </button>
                </form>
                <Button size="small" variant="outline" className="mr-3">
                  Add To cart
                </Button>
                <Button size="small">Buy now</Button>
              </div>
            </div>
          </div>
        </div>
        {/* side bar */}
        <div className="col-span-2 border-l flex flex-col gap-1 bg-white rounded-r p-6">
          <p className="text-lg">
            <span className="font-semibold">Quantity: </span>
            {quantity}
          </p>
          <p>Seller : {sellerName}</p>
          <p>Email:{email}</p>
        </div>
      </div>
      {/* description */}
      <div className="rounded mt-4 bg-white p-6 md:p-8">
        <h2 className="font-normal text-lg">Description</h2>
        <p className="text-[#516067]">{description}</p>
      </div>
    </>
  );
};

export default ToyDetailsPage;
