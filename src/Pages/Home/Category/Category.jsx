import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Category = () => {
    return (
        <Tabs>
            <TabList>
                <Tab><span className='font-semibold'>Sports car</span></Tab>
                <Tab><span className='font-semibold'>Truck</span></Tab>
                <Tab><span className='font-semibold'>Regular car</span></Tab>
            </TabList>

            <TabPanel>
                <div className='grid grid-cols-3 gap-4'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <img className="rounded-md max-h-full max-w-auto m-auto" src="https://i.ibb.co/d0Rvw01/gallery-pic-3.jpg" alt="" />
                        <div className="card-body">
                            <h2 className="card-title">
                                Name
                                <div className="badge badge-secondary">Rating</div>
                            </h2>
                            <p>Price</p>
                            <button className="btn bg-blue-600 hover:bg-blue-700 border-0">Buy Now</button>
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid grid-cols-3 gap-4'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                    <img className="rounded-md max-h-full max-w-full m-auto" src="https://m.media-amazon.com/images/I/71O6ZBfa7TL.jpg" alt="" />
                        <div className="card-body">
                            <h2 className="card-title">
                                Name
                                <div className="badge badge-secondary">Rating</div>
                            </h2>
                            <p>Price</p>
                            <button className="btn bg-blue-600 hover:bg-blue-700 border-0">Buy Now</button>
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid grid-cols-3 gap-4'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                    <img className="rounded-md max-h-full max-w-full m-auto" src="https://i.ibb.co/QFDsfhP/gallery-pic-2.png" alt="" />
                        <div className="card-body">
                            <h2 className="card-title">
                                Name
                                <div className="badge badge-secondary">Rating</div>
                            </h2>
                            <p>Price</p>
                            <button className="btn bg-blue-600 hover:bg-blue-700 border-0">Buy Now</button>
                        </div>
                    </div>
                </div>
            </TabPanel>
        </Tabs>
    );
};

export default Category;