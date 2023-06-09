
import Footer from '../../Components/Footer/Footer';
import NavMenu from '../../Components/NavMenu/NavMenu';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='space-y-12 bg-white'>
            <div className='px-6 sm:px-8 md:px-12 space-y-8'>
                <NavMenu />
                <Outlet />
            </div>
            <Footer/>
        </div>
    );
};

export default Main;