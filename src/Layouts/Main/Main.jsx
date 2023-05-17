
import Footer from '../../Components/Footer/Footer';
import NavMenu from '../../Components/NavMenu/NavMenu';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <div className='px-12'>
                <NavMenu />
                <Outlet />
            </div>
            <Footer/>
        </div>
    );
};

export default Main;