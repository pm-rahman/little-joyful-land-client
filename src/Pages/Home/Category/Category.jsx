import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Category = () => {
    const [category, setCategory] = useState('sportsCar')
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/toy-category?category=${category}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [category])
    return (
        <Tabs>
            <TabList>
                <Tab onClick={() => setCategory('sportsCar')}><span className='font-semibold'>Sports car</span></Tab>
                <Tab onClick={() => setCategory('truck')}><span className='font-semibold'>Truck</span></Tab>
                <Tab onClick={() => setCategory('regularCar')}><span className='font-semibold'>Regular car</span></Tab>
            </TabList>

            <TabPanel>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        category === 'sportsCar' && toys.map(toy => <div
                            key={toy._id}
                            className='grid grid-cols-3 gap-4'>
                            <div className="card w-96 bg-base-100 shadow-md">
                                <img className="rounded-md max-h-full max-w-auto m-auto" src={toy.toyPic} alt="" />
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {toy.toyName}
                                        <div className="badge badge-secondary">{toy.rating}</div>
                                    </h2>
                                    <p>${toy.price}</p>
                                    <button className="btn bg-blue-600 hover:bg-blue-700 border-0">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        category === 'truck' && toys.map(toy => <div
                            key={toy._id}
                            className='grid grid-cols-3 gap-4'>
                            <div className="card w-96 bg-base-100 shadow-md">
                                <img className="rounded-md max-h-full max-w-auto m-auto" src={toy.toyPic} alt="" />
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {toy.toyName}
                                        <div className="badge badge-secondary">{toy.rating}</div>
                                    </h2>
                                    <p>${toy.price}</p>
                                    <button className="btn bg-blue-600 hover:bg-blue-700 border-0">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        category === 'regularCar' && toys.map(toy => <div
                            key={toy._id}
                            className='grid grid-cols-3 gap-4'>
                            <div className="card w-96 bg-base-100 shadow-md">
                                <img className="rounded-md max-h-full max-w-auto m-auto" src={toy.toyPic} alt="" />
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {toy.toyName}
                                        <div className="badge badge-secondary">{toy.rating}</div>
                                    </h2>
                                    <p>${toy.price}</p>
                                    <button className="btn bg-blue-600 hover:bg-blue-700 border-0">Buy Now</button>
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