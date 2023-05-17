import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
const NavMenu = () => {
    const { user } = useContext(AuthContext)
    const navItems = <>
        <li><Link>Home</Link></li>
        <li><Link>All Toys</Link></li>
        {user && <li><Link>My Toys</Link></li>}
        {user && <li><Link>Add A Toy</Link></li>}

        <li><Link>Blogs</Link></li>
        <div className="form-control">
            <form className="input-group">
                <input type="text" placeholder="Search…" className="input input-bordered" />
                <button type="submit" className="btn bg-pink-500 hover:bg-pink-600 border-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </form>
        </div>
    </>
    return (
        <div className="navbar bg-base-100 py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">(logo) Little Joyful Land</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                {user
                    ? <><Link>User profile picture</Link>
                        <Link to='/login' className="btn bg-pink-500 hover:bg-pink-600 border-0">Login</Link>
                    </>
                    :<a className="btn bg-pink-500 hover:bg-pink-600 border-0">Log Out</a>
                }
            </div>
        </div>
    );
};

export default NavMenu;