import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Login/Register";
import Login from "../Pages/Login/Login";
import Blogs from "../Pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/register',
                element: <Register/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/blogs',
                element:<Blogs/>
            }
        ]
    }
])

export default router