import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Title from "../../Components/Title/Title";
import Swal from "sweetalert2";

const UpdateToy = () => {
    const { _id, description, email, price, quantity, rating, sellerName, subCategory, toyName, toyPic } = useLoaderData();
    const { register, handleSubmit, formState: { errors } } = useForm();
    Title('Update-Toy')
    const naviGate = useNavigate()


    const onSubmit = updateToy => {
        const { description, email, price, quantity, rating, sellerName, subCategory, toyName, toyPic } = updateToy;
        const intPrice = parseInt(price);
        const toy = {description, email, price : intPrice, quantity, rating, sellerName, subCategory, toyName, toyPic};

        fetch(`https://toy-assignment-server.vercel.app/update/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(toy => {
                if(toy.modifiedCount){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                      naviGate('/my-toys')
                }
                else{
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: 'You need update something',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })

    };
    return (
        <div>
            <h3 className="text-3xl text-center font-bold mb-4">Update {toyName}</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-3 gap-x-10 gap-y-4 bg-blue-100 p-12 rounded-lg">
                {/* register your input into the hook by invoking the "register" function */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Toy Picture</span>
                    </label>
                    <label className="input-group">
                        <input type="url" value={toyPic} {...register("toyPic", { required: true })} placeholder="Toy Picture" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Toy Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" value={toyName} {...register("toyName", { required: true })} placeholder="Toy Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Seller Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" value={sellerName} placeholder="Seller Name" {...register("sellerName", { required: true })} className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Seller Email</span>
                    </label>
                    <label className="input-group">
                        <input type="email" value={email} {...register("email", { required: true })} className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Sub Category </span>
                    </label>
                    <select value={subCategory} {...register("subCategory")} className="select select-primary w-full">
                        <option value="sportsCar">Sports car</option>
                        <option value="truck">Truck</option>
                        <option value="regularCar">Regular car</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" defaultValue={price} {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Rating</span>
                    </label>
                    <label className="input-group">
                        <input type="text" value={rating} {...register("rating", { required: true })} placeholder="Rating" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Available quantity</span>
                    </label>
                    <label className="input-group">
                        <input type="number" defaultValue={quantity} {...register("quantity", { required: true })} placeholder="Available quantity" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control col-span-2">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Detail description</span>
                    </label>
                    <label className="input-group">
                        <textarea type="text" defaultValue={description} {...register("description", { required: true })} placeholder="Detail description" className="textarea w-full" ></textarea>
                    </label>
                </div>
                {errors.exampleRequired && <span className="text-red-500 font-semibold">This field is required</span>}
                <input className="btn btn-block bg-blue-500 border-0 hover:bg-blue-600 col-span-3" type="submit" />
            </form>
        </div>
    );
};

export default UpdateToy;