import NavMenu from '../../Components/NavMenu/NavMenu';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <NavMenu/>
            <Outlet/>
        </div>
    );
};

export default Main;