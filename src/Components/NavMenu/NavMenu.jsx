import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
const NavMenu = () => {
    const { user,logOut } = useContext(AuthContext)
    const logOutHandler = ()=>{
        logOut()
        .then(()=>{})
        .catch(err=>{
            console.log(err.message)
        })
    }


    const navItems = <>
        <li><Link>Home</Link></li>
        <li><Link>All Toys</Link></li>
        {user && <li><Link>My Toys</Link></li>}
        {user && <li><Link>Add A Toy</Link></li>}
        <li><Link to='/blogs'>Blogs</Link></li>
        <div className="form-control lg:ml-10 ml-0">
            <form className="input-group">
                <input type="text" placeholder="Search…" className="input input-bordered" />
                <button type="submit" className="btn bg-blue-500 hover:bg-blue-600 border-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </form>
        </div>
    </>
    return (
        <div className="navbar px-0 bg-base-100 py-5">
            <div className="">
                <div className="dropdown">
                    <label tabIndex={0} className="btn pl-0 btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-fit">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">(logo) Little Joyful Land</a>
            </div>
            <div className="ml-auto w-fit hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    {navItems}
                </ul>
            </div>
            <div className="ml-auto lg:ml-10 gap-3">
                {user
                    ? <><Link className="font-semibold">{user&& user?.photoURL && <img title={user?.displayName} className="h-11 w-11 rounded-full" src={user?.photoURL} alt="" />}</Link>
                        <a onClick={logOutHandler} className="btn bg-blue-1000 hover:bg-blue-600 border-0">Log Out</a>
                    </>
                    : <Link to='/login' className="btn bg-blue-500 hover:bg-blue-600 border-0">Login</Link>
                }
            </div>
        </div>
    );
};

export default NavMenu;