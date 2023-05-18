import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Login/Register";
import Login from "../Pages/Login/Login";
import Blogs from "../Pages/Blogs/Blogs";
import AllToys from "../Pages/AllToys/AllToys";
import AddToy from "../Pages/AddToy/AddToy";

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
            },
            {
                path:'/all-toys',
                element:<AllToys/>
            },
            {
                path:'/add-toy',
                element:<AddToy/>
            }
        ]
    },
])

export default router