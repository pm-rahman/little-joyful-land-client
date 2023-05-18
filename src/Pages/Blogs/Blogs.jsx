import Title from "../../Components/Title/Title";

const Blogs = () => {
    Title('Blogs')
    return (
        <div className="bg-blue-50 px-12 py-16 rounded-md">
            <div className="mb-6 bg-slate-50 p-8 rounded-lg">
                <h2 className="text-xl font-bold mb-2">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p></p>
            </div>
            <div className="mb-6 bg-slate-50 p-8 rounded-lg">
                <h2 className="text-xl font-bold mb-2">Compare SQL and NoSQL databases?</h2>
                <p></p>
            </div>
            <div className="mb-6 bg-slate-50 p-8 rounded-lg">
                <h2 className="text-xl font-bold mb-2">What is express js? What is Nest JS (google it)?</h2>
                <p></p>
            </div>
            <div className="mb-6 bg-slate-50 p-8 rounded-lg">
                <h2 className="text-xl font-bold mb-2">What is MongoDB aggregate and how does it work (google it)?</h2>
                <p></p>
            </div>
        </div>
    );
};

export default Blogs;