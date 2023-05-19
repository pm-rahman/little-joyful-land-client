import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Title from "../../Components/Title/Title";

const AllToys = () => {
    const loadedToys = useLoaderData()
    const [allToys, setAllToys] = useState(loadedToys);
    Title('All-toys')

    return (
        <div className="overflow-x-auto">
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
                        <th>{index+1}</th>
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