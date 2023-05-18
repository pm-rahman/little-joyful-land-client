const Testimonial = () => {
    return (
        <div className="bg-blue-50 p-12 rounded-lg text-center">
            <h4 className="text-3xl mb-4 font-extrabold">Read Our Articles</h4>
            <div className='grid grid-cols-3 gap-4'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <img className="rounded-md max-h-full max-w-auto m-auto" src="https://i.ibb.co/d0Rvw01/gallery-pic-3.jpg" alt="" />
                        <div className="card-body">
                            <h2 className="card-title">
                                Name
                                <div className="badge badge-secondary">Rating</div>
                            </h2>
                            <p>Price</p>
                            <button className="btn bg-amber-600 hover:bg-amber-700 border-0">Buy Now</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Testimonial;