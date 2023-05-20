import { useContext, useEffect, useState } from "react";
import Title from "../../Components/Title/Title";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Swal from "sweetalert2";

const MyToy = () => {
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([]);
    const [sortHandler, setSortHandler] = useState(1);
    // const [ascending,setAscending] = useState(true)
    Title('My-Toys');
    useEffect(() => {
        fetch(`http://localhost:5000/user-toys?email=${user?.email}&shortingValue=${sortHandler}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
                // console.log(data);
            })
    }, [sortHandler])

    const deleteItemHandler = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/user-toys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            const remaining = toys.filter(toy => toy._id !== id);
                            setToys(remaining);
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }
    return (
        <div>
            <div className="flex gap-2 justify-end mb-4">
                {sortHandler === -1 ?
                    <button onClick={()=>setSortHandler(1)}>Sort by 0-10</button>
                    : <button onClick={()=>setSortHandler(-1)}>Sort by 10-0</button>
                }
            </div>
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
                            <Link to={`/update/${toy._id}`} className="btn my-2 bg-blue-500 hover:bg-blue-600 border-0"><Icon icon="fa-regular:edit" /></Link>
                            <button onClick={() => deleteItemHandler(toy._id)} className="btn my-2 bg-blue-500 hover:bg-blue-600 border-0"><Icon icon="fa-regular:trash-alt" /></button>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default MyToy;