import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import ActiveLink from "../ActiveLink/ActiveLink";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const NavMenu = () => {
  const { user, logOut } = useContext(AuthContext);
  const [logoutShow, setLogoutShow] = useState(false);
  const logOutHandler = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
      });
  };

  const navItems = (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/all-toys">All Toys</ActiveLink>
      </li>
      {user && (
        <li>
          <ActiveLink to="/my-toys">My Toys</ActiveLink>
        </li>
      )}
      {user && (
        <li>
          <ActiveLink to="/add-toy">Add Toy</ActiveLink>
        </li>
      )}
      {/* <li>
        <ActiveLink to="/blogs">Blogs</ActiveLink>
      </li> */}
    </>
  );
  return (
    <div className="container navbar sticky z-50 top-0 py-4 shadow uppercase bg-white">
      <div>
        <div className="dropdown">
          <label tabIndex={0} className="btn pl-0 btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-44"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost px-0 normal-case text-xl">
          <span className="hidden sm:block uppercase">Little Joyful Land</span>
        </Link>
      </div>
      <div className="ml-auto w-fit hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">{navItems}</ul>
      </div>
      <div className="ml-auto lg:ml-5 relative">
        {user ? (
          <>
            <a className="font-semibold">
              {user && user?.photoURL ? (
                <img
                  onClick={() => setLogoutShow(!logoutShow)}
                  title={user?.displayName}
                  className="h-11 w-11 rounded-full cursor-pointer"
                  src={user?.photoURL}
                  alt=""
                />
              ) : (
                ""
              )}
            </a>
            <div
              className={`absolute z-40 right-0 top-[142%] duration-300 ${
                logoutShow || "origin-top scale-y-0"
              } w-[120px] bg-white rounded border`}
            >
              <button onClick={logOutHandler} className="w-full py-2">Logout</button>
            </div>
          </>
        ) : (
          <Link to="/login">
            <Button size="small">Login/Register</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavMenu;
