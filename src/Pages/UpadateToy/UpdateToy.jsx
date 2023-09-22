import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Title from "../../Components/Title/Title";
import Swal from "sweetalert2";
import { Icon } from "@iconify/react";
import Button from "../../Components/Button/Button";

const UpdateToy = () => {
  const {
    _id,
    description,
    email,
    price,
    quantity,
    rating,
    sellerName,
    subCategory,
    toyName,
    toyPic,
  } = useLoaderData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  Title("Update-Toy");
  const naviGate = useNavigate();

  const onSubmit = (updateToy) => {
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
    } = updateToy;
    const intPrice = parseInt(price);
    const toy = {
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

    fetch(`https://toy-assignment-server.vercel.app/update/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((toy) => {
        if (toy.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          naviGate("/my-toys");
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "You need update something",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-12 my-10 md:w-3/4 md:mx-auto flex flex-col gap-2 bg-[#f0f7f9]"
      >
        <h3 className="uppercase text-xl md:text-2xl mb-2 font-semibold">
          Update Toy
        </h3>
        {/* first row */}
        <div className="grid sm:grid-cols-5 gap-3">
          <label className="col-span-4">
            <input
              type="text"
              defaultValue={toyName}
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
              defaultValue={price}
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
            defaultValue={toyPic}
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
            value={sellerName}
            placeholder="Seller Name"
            {...register("sellerName", { required: true })}
            className="py-3 px-4 border rounded-sm w-full"
          />
          <input
            type="email"
            {...register("email", { required: true })}
            value={email}
            className="py-3 px-4 border rounded-sm w-full"
          />
        </div>
        {/* forth row */}
        <div className="grid sm:grid-cols-3 gap-3">
          <label>
            <select
              {...register("subCategory")}
              defaultValue={subCategory}
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
              defaultValue={rating}
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
              defaultValue={quantity}
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
            defaultValue={description}
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
        <Button type="submit" size="block">
          Submit
        </Button>
      </form>
    </>
  );
};

export default UpdateToy;
