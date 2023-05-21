import Title from "../../Components/Title/Title";

const Blogs = () => {
    Title('Blogs')
    return (
        <div className="bg-blue-50 px-12 py-16 rounded-md">
            <div className="mb-6 bg-slate-50 p-8 rounded-lg">
                <h2 className="text-xl font-bold mb-2">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p className="">
                    <span className="font-semibold">Access Token:</span> access token is like any private event ticket, if you have token, you will access private router, otherways not <br />
                    <span className="font-semibold">Refresh Token:</span> Refresh token give new access to user without login <br />
                    <span className="font-semibold"></span> basically people store them localStorage and httpOnly cookies but, storing refresh token in client side is not recommended

                </p>
            </div>
            <div className="mb-6 bg-slate-50 p-8 rounded-lg">
                <h2 className="text-xl font-bold mb-2">Compare SQL and NoSQL databases?</h2>
                <ul>
                    <span className="font-semibold">SQL</span>
                    <li>1. relational and have a predefined schema and it is better for multi-row transactions</li>
                    <li>2. its store in table-based and vertically scalable</li>
                </ul>
                <br />
                <ul>
                    <span className="font-semibold">NoSQL</span>
                    <li>1. non-relational and dynamic schemas for unstructured data its better for unstructured data like documents or JSON</li>
                    <li>2. horizontally scalable and wide-column stores</li>
                </ul>
            </div>
            <div className="mb-6 bg-slate-50 p-8 rounded-lg">
                <h2 className="text-xl font-bold mb-2">What is express js? What is Nest JS?</h2>
                <p>
                    <span className="font-semibold">Express Js</span>Express js is a free and open-source web application framework for Node.js. It is used for designing and building web applications quickly and easily.
                    <span className="font-semibold">Next Js</span>Next.js is a flexible React framework that gives you building blocks to create fast web applications. its well structure compare to react js. its can route client and server both 
                </p>
            </div>
            <div className="mb-6 bg-slate-50 p-8 rounded-lg">
                <h2 className="text-xl font-bold mb-2">What is MongoDB aggregate and how does it work?</h2>
                <p>Perform operations on the grouped data to return a single result like maximum minimum. Analyze data changes over time.</p>
            </div>
        </div>
    );
};

export default Blogs;