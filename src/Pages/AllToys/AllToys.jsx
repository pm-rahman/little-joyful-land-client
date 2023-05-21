import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLoaderData } from "react-router-dom";
import Title from "../../Components/Title/Title";

const AllToys = () => {
    const totalToy = useLoaderData()
    const [allToys, setAllToys] = useState([]);
    const [toyPerPage, setToyPerPage] = useState(20);
    const [currentPage, setCurrentPage] = useState(0)
    const { register, handleSubmit, formState: { errors } } = useForm();
    Title('All-toys')

    useEffect(() => {
        fetch(`https://toy-assignment-server.vercel.app/toys?limit=${toyPerPage}&page=${currentPage}`)
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [currentPage, toyPerPage])

    const onSubmit = data => {
        fetch(`https://toy-assignment-server.vercel.app/searchToy/${data.search}`)
            .then(res => res.json())
            .then(data => setAllToys(data))
    };
    const totalPage = Math.ceil(totalToy.length / toyPerPage);
    const pageNumber = [...Array(totalPage).keys()]

    const handlePerPageChange = (event) => {
        const newPerPage = parseInt(event.target.value)
        setToyPerPage(newPerPage);
        setCurrentPage(0)

    }

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
            <div className="flex justify-center mt-4 gap-2">
                {
                    pageNumber.map(number => <button
                        key={number}
                        className={`px-4 py-2 rounded  ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-slate-50'}`}
                        onClick={() => setCurrentPage(number)}
                    >{number}</button>)
                }
                <div className="flex px-3 rounded gap-2 items-center bg-slate-50">
                    <h5 className="">per page</h5>
                    <select className="bg-slate-50" defaultValue={toyPerPage} onClick={handlePerPageChange}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default AllToys;