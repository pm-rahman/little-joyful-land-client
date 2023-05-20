import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLoaderData } from "react-router-dom";
import Title from "../../Components/Title/Title";

const AllToys = () => {
    const loadedToys = useLoaderData()
    const [allToys, setAllToys] = useState(loadedToys);
    const { register, handleSubmit, formState: { errors } } = useForm();
    Title('All-toys')


    const onSubmit = data => {
        console.log(data);
        fetch(`http://localhost:5000/searchToy/${data.search}`)
        .then(res=>res.json())
        .then(data=>setAllToys(data))
    };

    return (
        <div className="overflow-x-auto">
            <form className="mb-8" onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group justify-center">
                        <input type="text" {...register("search", { required: true })} placeholder="Search...." className="input w-1/3 input-bordered" />
                        <button type="submit" className="btn bg-blue-500 hover:bg-blue-600 border-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                {errors.exampleRequired && <span>This field is required</span>}
            </form>
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>View Details</th>
                    </tr>
                </thead>
                <tbody>
                    {allToys.map((toy, index) => <tr
                        key={toy._id}
                    >
                        <th>{index + 1}</th>
                        <td>{toy.sellerName}</td>
                        <td>{toy.toyName}</td>
                        <td>{toy.subCategory}</td>
                        <td>${toy.price}</td>
                        <td>{toy.quantity}</td>
                        <td><Link to={`/toy-details/${toy._id}`} className="btn my-2 bg-blue-500 hover:bg-blue-600 border-0">Details</Link></td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;