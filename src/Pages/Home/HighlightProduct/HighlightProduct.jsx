import { useEffect, useState } from "react";

const HighlightProduct = () => {
    const [highlightToys, setHighlightToys] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/highlightProduct')
            .then(res => res.json())
            .then(data => setHighlightToys(data))
    }, [])
    return (
        <div className="grid md:grid-cols-2 gap-6">
            <div>
                <h3 className="mb-6 border-l-4 pl-5 border-l-blue-500 text-lg sm:text-xl md:text-2xl font-bold">New Products</h3>
                {highlightToys.slice(0, 3).map(toy => <div
                    key={toy._id}
                    className="flex gap-10 mb-3 items-center px-8 py-3 rounded-lg shadow-md hover:shadow-lg">
                    <img className="rounded-md hover:scale-125 hover:duration-300 h-auto w-28" src={toy.toyPic} alt="" />
                    <div className="text-xl">
                        <h4 className="font-bold">{toy.toyName}</h4>
                        <p className="text-blue-600">${toy.price}</p>
                    </div>
                </div>
                )}

            </div>
            <div>
                <h3 className="mb-6 border-l-4 pl-5 border-l-blue-500 text-lg sm:text-xl md:text-2xl font-bold">Best Rated Products</h3>
                {highlightToys.slice(3, 6).map(toy => <div
                    key={toy._id}
                    className="flex gap-10 mb-3 items-center px-8 py-3 rounded-lg shadow-md hover:shadow-lg">
                    <img className="rounded-md hover:scale-125 hover:duration-300 h-auto w-28" src={toy.toyPic} alt="" />
                    <div className="text-xl">
                        <h4 className="font-bold">{toy.toyName}</h4>
                        <p className="text-blue-600">${toy.price}</p>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
};

export default HighlightProduct;