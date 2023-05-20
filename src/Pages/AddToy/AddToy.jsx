import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import Title from "../../Components/Title/Title";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddToy = () => {

    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    Title('Add-Toy')
    const naviGate = useNavigate()
    const createProductHandler = newToy => {
        fetch('http://localhost:5000/toy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Toy Created Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    naviGate('/')
                }
            })
    };
    return (
        <div>
            <h3 className="text-3xl text-center font-bold mb-4">Add New Toy</h3>
            <form onSubmit={handleSubmit(createProductHandler)} className="grid grid-cols-3 gap-x-10 gap-y-4 bg-blue-100 p-12 rounded-lg">
                {/* register your input into the hook by invoking the "register" function */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Toy Picture</span>
                    </label>
                    <label className="input-group">
                        <input type="url" {...register("toyPic", { required: true })} placeholder="Toy Picture" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Toy Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" {...register("toyName", { required: true })} placeholder="Toy Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Seller Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" defaultValue={user && user?.displayName} placeholder="Seller Name" {...register("sellerName", { required: true })} className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Seller Email</span>
                    </label>
                    <label className="input-group">
                        <input type="email" {...register("email", { required: true })} value={user && user?.email} className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Sub Category </span>
                    </label>
                    <select {...register("subCategory")} className="select select-primary w-full">
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
                        <input type="text" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Rating</span>
                    </label>
                    <label className="input-group">
                        <input type="text" {...register("rating", { required: true })} placeholder="Rating" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Available quantity</span>
                    </label>
                    <label className="input-group">
                        <input type="number" {...register("quantity", { required: true })} placeholder="Available quantity" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control col-span-2">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Detail description</span>
                    </label>
                    <label className="input-group">
                        <textarea type="text" {...register("description", { required: true })} placeholder="Detail description" className="textarea w-full" ></textarea>
                    </label>
                </div>
                {errors.exampleRequired && <span className="text-red-500 font-semibold">This field is required</span>}
                <input className="btn btn-block bg-blue-500 border-0 hover:bg-blue-600 col-span-3" type="submit" />
            </form>
        </div>
    );
};

export default AddToy;