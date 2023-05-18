import { NavLink } from "react-router-dom";

const ActiveLink = ({children,to}) => {
    return (
        <NavLink
        to={to}
        className={({isActive})=>isActive?'text-blue-500 underline':''}
        >
            {children}    
        </NavLink>
    );
};

export default ActiveLink;