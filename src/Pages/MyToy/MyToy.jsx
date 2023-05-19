import { useContext, useEffect, useState } from "react";
import Title from "../../Components/Title/Title";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const MyToy = () => {
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState();
    Title('My-Toy');
    useEffect(() => {
        fetch(`http://localhost:5000/user-toys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [])
    console.log(toys);
    return (
        <div>
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
                    {toys && toys.map((toy, index) => <tr
                        key={toy._id}
                    >
                        <th>{index + 1}</th>
                        <td>{toy.sellerName}</td>
                        <td>{toy.toyName}</td>
                        <td>{toy.subCategory}</td>
                        <td>${toy.price}</td>
                        <td>{toy.quantity}</td>
                        <td className="flex gap-2">
                            <Link className="btn my-2 bg-blue-500 hover:bg-blue-600 border-0"><Icon icon="fa-regular:trash-alt" /></Link>
                            <Link className="btn my-2 bg-blue-500 hover:bg-blue-600 border-0"><Icon icon="fa-regular:edit" /></Link>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default MyToy;