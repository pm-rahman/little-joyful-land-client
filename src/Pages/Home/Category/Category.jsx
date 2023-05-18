import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Category = () => {
    return (
        <Tabs>
            <TabList>
                <Tab>sports car</Tab>
                <Tab>truck</Tab>
                <Tab>regular car</Tab>
            </TabList>

            <TabPanel>
                <div className='grid grid-cols-3 gap-4'>
                    <img className="rounded-md max-h-full max-w-auto m-auto" src="https://i.ibb.co/d0Rvw01/gallery-pic-3.jpg" alt="" />
                    <img className="rounded-md max-h-full max-w-auto m-auto" src="https://i.ibb.co/d0Rvw01/gallery-pic-3.jpg" alt="" />
                    <img className="rounded-md max-h-full max-w-full m-auto" src="https://i.ibb.co/3SLnBtP/gallery-pic-5.jpg" alt="" />
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid grid-cols-3 gap-4'>
                    <img className="rounded-md max-h-full max-w-auto m-auto" src="https://i.ibb.co/d0Rvw01/gallery-pic-3.jpg" alt="" />
                    <img className="rounded-md max-h-full max-w-full m-auto" src="https://i.ibb.co/3SLnBtP/gallery-pic-5.jpg" alt="" />
                    <img className="rounded-md max-h-full max-w-auto m-auto" src="https://i.ibb.co/d0Rvw01/gallery-pic-3.jpg" alt="" />
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid grid-cols-3 gap-4'>
                <img className="rounded-md max-h-full max-w-full m-auto" src="https://i.ibb.co/3SLnBtP/gallery-pic-5.jpg" alt="" />
                    <img className="rounded-md max-h-full max-w-auto m-auto" src="https://i.ibb.co/d0Rvw01/gallery-pic-3.jpg" alt="" />
                    <img className="rounded-md max-h-full max-w-auto m-auto" src="https://i.ibb.co/d0Rvw01/gallery-pic-3.jpg" alt="" />
                </div>
            </TabPanel>
        </Tabs>
    );
};

export default Category;