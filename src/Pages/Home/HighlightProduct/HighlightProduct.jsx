import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import Aos from "aos";
import 'aos/dist/aos.css'

const HighlightProduct = () => {
    const [highlightToys, setHighlightToys] = useState([])
    useEffect(() => {
        fetch('https://toy-assignment-server.vercel.app/highlightProduct')
            .then(res => res.json())
            .then(data => setHighlightToys(data))
    }, [])
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className="grid md:grid-cols-2 gap-6">
            <div>
                <h3 className="mb-6 border-l-4 pl-5 border-l-blue-500 text-lg sm:text-xl md:text-2xl font-bold">New Products</h3>
                {highlightToys.slice(0, 3).map(toy => <div
                    key={toy._id}
                    className="flex gap-10 h-32  mb-3 items-center px-8 py-3 rounded-lg shadow-md hover:shadow-lg">
                    <img className="rounded-md h-auto w-28" src={toy.toyPic} alt="" data-aos="zoom-in" data-aos-duration="1000" />
                    <div className="text-xl">
                        <h4 className="font-bold">{toy.toyName}</h4>
                        <p className="text-blue-600 font-semibold"><small>${toy.price}</small></p>
                    </div>
                </div>
                )}

            </div>
            <div>
                <h3 className="mb-6 border-l-4 pl-5 border-l-blue-500 text-lg sm:text-xl md:text-2xl font-bold">Best Rated Products</h3>
                {highlightToys.slice(3, 6).map(toy => <div
                    data-aos="zoom-in"
                    key={toy._id}
                    className="flex gap-10 h-32 mb-3 items-center px-8 py-3 rounded-lg shadow-md hover:shadow-lg">
                    <img className="rounded-md h-auto w-28" src={toy.toyPic} alt="" data-aos="zoom-in" data-aos-duration="1000" />
                    <div className="text-xl">
                        <h4 className="font-bold">{toy.toyName}</h4>
                        <p className="text-blue-600 font-semibold"><small>${toy.price}</small></p>
                        <div className="flex gap-1 items-center">
                            <small>{toy.rating}</small>
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={toy.rating}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
};

export default HighlightProduct;