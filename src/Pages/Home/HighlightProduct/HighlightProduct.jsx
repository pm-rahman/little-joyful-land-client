const HighlightProduct = () => {
    return (
        <div className="grid md:grid-cols-2 gap-6">
            <div>
                <h3 className="mb-6 text-xl sm:text-2xl md:text-3xl font-bold">New Products</h3>
                <div className="flex gap-10 items-center px-8 py-3 rounded-lg shadow-md hover:shadow-lg">
                    <img className="rounded-md h-auto w-28" src="https://i.ibb.co/d0Rvw01/gallery-pic-3.jpg" alt="" />
                    <div className="text-xl">
                        <h4 className="font-bold">Name</h4>
                        <p className="text-amber-600 font-semibold">price</p>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="mb-6 text-xl sm:text-2xl md:text-3xl font-bold">Best Rated Products</h3>
                <div className="flex gap-10 items-center px-8 py-3 rounded-lg shadow-md hover:shadow-lg">
                    <img className="rounded-md h-auto w-28" src="https://i.ibb.co/d0Rvw01/gallery-pic-3.jpg" alt="" />
                    <div className="text-xl">
                        <h4 className="font-bold">Name</h4>
                        <p className="text-amber-600 font-semibold">price</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HighlightProduct;