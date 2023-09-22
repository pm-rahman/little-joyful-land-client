import { NavLink } from "react-router-dom";

const ActiveLink = ({children,to}) => {
    return (
        <NavLink
        to={to}
        className={({isActive})=>isActive?'text-[#f3bd98]':'text-[#363c42]'}
        >
            {children}    
        </NavLink>
    );
};

export default ActiveLink;