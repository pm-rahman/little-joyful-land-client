import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Category = () => {
    const [category, setCategory] = useState('sportsCar')
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch(`https://toy-assignment-server.vercel.app/toy-category?category=${category}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [category]);
    return (
        <Tabs>
            <h2 className='text-xl md:text-2xl mb-5 font-bold'>Shop by category</h2>
            <TabList>
                <Tab onClick={() => setCategory('sportsCar')}><span className='font-semibold'>Sports car</span></Tab>
                <Tab onClick={() => setCategory('truck')}><span className='font-semibold'>Truck</span></Tab>
                <Tab onClick={() => setCategory('regularCar')}><span className='font-semibold'>Regular car</span></Tab>
            </TabList>
            <TabPanel>
                <div className='grid md:grid-cols-3 gap-4'>
                    {
                        category === 'sportsCar' && toys.map(toy => <div
                            key={toy._id}>
                            <div style={{height:'500px'}} className="card bg-base-100 max-w-auto shadow-md">
                            <div className='w-full p-5'><img className="rounded-md h-60 w-auto m-auto" src={toy.toyPic} alt="" /></div>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {toy.toyName}
                                        <div className="badge badge-secondary">{toy.rating}</div>
                                    </h2>
                                    <p>${toy.price}</p>
                                    <Link to={`/toy-details/${toy._id}`} className="btn bg-blue-600 hover:bg-blue-700 border-0">View Details</Link>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid md:grid-cols-3 gap-4'>
                    {
                        category === 'truck' && toys.map(toy => <div
                            key={toy._id}
                        >
                            <div style={{height:'500px'}} className="card bg-base-100 max-w-auto shadow-md">
                            <div className='w-full p-5'><img className="rounded-md h-60 w-auto m-auto" src={toy.toyPic} alt="" /></div>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {toy.toyName}
                                        <div className="badge badge-secondary">{toy.rating}</div>
                                    </h2>
                                    <p>${toy.price}</p>
                                    <Link to={`/toy-details/${toy._id}`} className="btn bg-blue-600 hover:bg-blue-700 border-0">View Details</Link>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid md:grid-cols-3 gap-4'>
                    {
                        category === 'regularCar' && toys.map(toy => <div
                            key={toy._id}
                        >
                            <div style={{height:'500px'}} className="card bg-base-100 max-w-auto shadow-md">
                            <div className='w-full p-5'><img className="rounded-md h-60 w-auto m-auto" src={toy.toyPic} alt="" /></div>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {toy.toyName}
                                        <div className="badge badge-secondary">{toy.rating}</div>
                                    </h2>
                                    <p>${toy.price}</p>
                                    <Link to={`/toy-details/${toy._id}`} className="btn bg-blue-600 hover:bg-blue-700 border-0">View Details</Link>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>

            </TabPanel>
        </Tabs>
    );
};

export default Category;