import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import Title from "../../Components/Title/Title";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { Icon } from "@iconify/react";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  Title("Add-Toy");
  const naviGate = useNavigate();
  const createProductHandler = (toy) => {
    const {
      description,
      email,
      price,
      quantity,
      rating,
      sellerName,
      subCategory,
      toyName,
      toyPic,
    } = toy;
    const intPrice = parseInt(price);
    const newToy = {
      description,
      email,
      price: intPrice,
      quantity,
      rating,
      sellerName,
      subCategory,
      toyName,
      toyPic,
    };

    fetch("https://toy-assignment-server.vercel.app/toy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Toy Created Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          naviGate("/");
        }
      });
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(createProductHandler)}
        className="p-12 md:w-3/4 my-10 md:mx-auto flex flex-col gap-2 bg-[#f3bd98]"
      >
        <h3 className="uppercase text-xl md:text-2xl mb-2 font-semibold">
          Add Product
        </h3>

        {/* first row */}
        <div className="grid sm:grid-cols-5 gap-3">
          <label className="col-span-4">
            <input
              type="text"
              {...register("toyName", { required: true })}
              placeholder="Toy Name"
              className="py-3 px-4 border rounded-sm w-full"
            />
            {errors.toyName && (
              <span className="text-red-500 flex items-center gap-1">
                <Icon
                  className="relative top-[2px]"
                  icon="heroicons-outline:information-circle"
                />
                required
              </span>
            )}
          </label>
          <label>
            <input
              type="text"
              {...register("price", { required: true })}
              placeholder="Price"
              className="py-3 px-4 border rounded-sm w-full"
            />
            {errors.price && (
              <span className="text-red-500 flex items-center gap-1">
                <Icon
                  className="relative top-[2px]"
                  icon="heroicons-outline:information-circle"
                />
                required
              </span>
            )}
          </label>
        </div>
        {/* second row */}
        <label>
          <input
            type="url"
            {...register("toyPic", { required: true })}
            placeholder="Toy Picture"
            className="py-3 px-4 border rounded-sm w-full"
          />
          {errors.toyPic && (
            <span className="text-red-500 flex items-center gap-1">
              <Icon
                className="relative top-[2px]"
                icon="heroicons-outline:information-circle"
              />
              required
            </span>
          )}
        </label>
        {/* third row */}
        <div className="grid sm:grid-cols-2 gap-3">
          <input
            type="text"
            value={user && user?.displayName}
            placeholder="Seller Name"
            {...register("sellerName", { required: true })}
            className="py-3 px-4 border rounded-sm w-full"
          />
          <input
            type="email"
            {...register("email", { required: true })}
            value={user && user?.email}
            className="py-3 px-4 border rounded-sm w-full"
          />
        </div>
        {/* forth row */}
        <div className="grid sm:grid-cols-3 gap-3">
          <label>
            <select
              {...register("subCategory")}
              className="h-[50px] px-4 border rounded-sm w-full"
            >
              <option value="sportsCar">Sports car</option>
              <option value="truck">Truck</option>
              <option value="regularCar">Regular car</option>
            </select>
            {errors.subCategory && (
              <span className="text-red-500 flex items-center gap-1">
                <Icon
                  className="relative top-[2px]"
                  icon="heroicons-outline:information-circle"
                />{" "}
                required
              </span>
            )}
          </label>
          <label>
            <input
              type="text"
              {...register("rating", { required: true })}
              placeholder="Rating"
              className="py-3 px-4 border rounded-sm w-full"
            />
            {errors.rating && (
              <span className="text-red-500 flex items-center gap-1">
                <Icon
                  className="relative top-[2px]"
                  icon="heroicons-outline:information-circle"
                />
                required
              </span>
            )}
          </label>
          <label>
            <input
              type="number"
              {...register("quantity", { required: true })}
              placeholder="Available quantity"
              className="py-3 px-4 border rounded-sm w-full"
            />
            {errors.quantity && (
              <span className="text-red-500 flex items-center gap-1">
                <Icon
                  className="relative top-[2px]"
                  icon="heroicons-outline:information-circle"
                />
                required
              </span>
            )}
          </label>
        </div>
        {/* fifth */}
        <label>
          <textarea
            type="text"
            {...register("description", { required: true })}
            placeholder="Detail description"
            className="px-4 py-3 border rounded-sm w-full"
            rows={5}
          ></textarea>
          {errors.description && (
            <span className="text-red-500 flex items-center gap-1">
              <Icon
                className="relative top-[2px]"
                icon="heroicons-outline:information-circle"
              />
              required
            </span>
          )}
        </label>
        <Button variant="white-blue" type="submit" size="block">
          Submit
        </Button>
      </form>
    </>
  );
};

export default AddToy;
