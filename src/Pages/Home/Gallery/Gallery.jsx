
const Gallery = () => {
    return (
        <div>
            <h3 className="text-xl sm:text-3xl md:text-4xl font-bold mb-8">Exclusive for you (change)</h3>
            <div className="grid md:grid-cols-3 gap-8 md:grid-rows-2">
                <div className="row-span-2 z-0 relative overflow-hidden">
                    <div className="bg-slate-300 absolute top-0 left-0 -z-10 opacity-20 h-full w-full"></div>
                    <div className="h-full flex gap-5 flex-col items-center justify-center">
                        <h4 className="text-xl sm:text-3xl md:text-4xl font-bold text-blue-800">Exclusive Toys</h4>
                        <button className="btn bg-blue-500 rounded-full px-6 border-none py-2">Shop Now</button>
                    </div>
                    <img className="rounded-md w-auto h-full absolute top-0 -z-20 left-0" src="https://media.istockphoto.com/id/145163491/photo/vertical-line-of-cars.jpg?s=612x612&w=is&k=20&c=s7sKjMT_BN4nc7J3lmR5dmVWb33H5OslYAYTUrWOi54=" alt="" />
                </div>

                <div className="border flex flex-col h-72 items-center justify-center rounded-lg p-6">
                    <img className="rounded-md max-h-full max-w-auto m-auto" src="https://i.ibb.co/d0Rvw01/gallery-pic-3.jpg" alt="" />
                    <h5 className="text-xl font-bold">Toy Argos cars</h5>
                </div>

                <div className="border flex flex-col h-72 items-center justify-center rounded-lg p-6">
                    <img className="rounded-md max-h-full max-w-full m-auto" src="https://i.ibb.co/3SLnBtP/gallery-pic-5.jpg" alt="" />
                    <h5 className="text-xl font-bold"> Die Cast Car Toys </h5>
                </div>

                <div className="border flex flex-col h-72 items-center justify-center rounded-lg p-6">
                    <img className="rounded-md max-h-full max-w-full m-auto" src="https://i.ibb.co/QFDsfhP/gallery-pic-2.png" alt="" />
                    <h5 className="text-xl font-bold">Toy Police cars</h5>
                </div>

                <div className="border flex flex-col h-72 items-center justify-center rounded-lg p-6">
                    <img className="rounded-md max-h-full max-w-full m-auto" src="https://m.media-amazon.com/images/I/71O6ZBfa7TL.jpg" alt="" />
                    <h5 className="text-xl font-bold">TISEN Remote Control Car</h5>
                </div>
            </div>
        </div>
    );
};

export default Gallery;