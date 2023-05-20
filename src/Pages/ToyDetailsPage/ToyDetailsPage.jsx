import { useLoaderData } from "react-router-dom";
import Title from "../../Components/Title/Title";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ToyDetailsPage = () => {
    const { toyPic, toyName, sellerName, description, email, price, quantity, rating } = useLoaderData();
    Title('Toy-Details')
    return (
        <div className="hero p-10 rounded-lg bg-slate-100">
            <div className="hero-content flex-col gap-16 lg:flex-row">
                <img src={toyPic} className="w-1/2 rounded-lg shadow-2xl" />
                <div className="w-1/2 space-y-2">
                    <h1 className="text-5xl font-bold">{toyName}</h1>
                    <hr  className="py-1"/>
                    <p className="font-semibold text-lg">Seller : {sellerName}</p>
                    <p className="text-lg"><span className="font-semibold">Email: </span>{email}</p>
                    <p className="text-lg"><span className="font-semibold">Price: </span>{price}</p>
                    <p className="text-lg"><span className="font-semibold">Quantity: </span>{quantity}</p>
                    <p className=""><span className="font-semibold">Description:</span>{description}</p>
                    <div className="text-lg flex gap-2"><span className="font-semibold">Rating: </span>
                        <Rating
                            className="mt-auto mb-1"
                            style={{ width: 100 }}
                            value={rating}
                            readOnly
                        />
                        {rating}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetailsPage;