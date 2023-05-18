import { useLoaderData } from "react-router-dom";
import Title from "../../Components/Title/Title";

const ToyDetailsPage = () => {
    const { toyPic,toyName,sellerName,description, email, price, quantity, rating  } = useLoaderData();
    Title('Toy-Details')
    return (
        <div className="hero p-10 rounded-lg bg-slate-100">
            <div className="hero-content flex-col gap-16 lg:flex-row">
                <img src={toyPic} className="w-1/2 rounded-lg shadow-2xl" />
                <div className="w-1/2 space-y-3">
                    <h1 className="text-5xl font-bold">{toyName}</h1>
                    <p className="font-semibold text-lg">Seller : {sellerName}</p>
                    <p className="text-lg"><span className="font-semibold">Email: </span>{email}</p>
                    <p className="text-lg"><span className="font-semibold">Price: </span>{price}</p>
                    <p className="text-lg"><span className="font-semibold">Rating: </span>{rating}</p>
                    <p className="text-lg"><span className="font-semibold">Quantity: </span>{quantity}</p>
                    <p className=""><span className="font-semibold">Description:</span>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ToyDetailsPage;