import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Login/Register";
import Login from "../Pages/Login/Login";
import Blogs from "../Pages/Blogs/Blogs";
import AllToys from "../Pages/AllToys/AllToys";
import AddToy from "../Pages/AddToy/AddToy";
import PrivateRouter from "./PrivateRouter";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MyToy from "../Pages/MyToy/MyToy";
import ToyDetailsPage from "../Pages/ToyDetailsPage/ToyDetailsPage";
import UpdateToy from "../Pages/UpadateToy/UpdateToy";

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
                element:<AllToys/>,
                loader: ()=>fetch('http://localhost:5000/allToys')
            },
            {
                path:'/add-toy',
                element:<PrivateRouter><AddToy/></PrivateRouter>
            },
            {
                path:'/my-toys',
                element:<PrivateRouter><MyToy/></PrivateRouter>
            },
            {
                path:'/toy-details/:id',
                element:<PrivateRouter><ToyDetailsPage/></PrivateRouter>,
                loader:({params})=> fetch(`http://localhost:5000/toy/${params.id}`)
            },
            {
                path:'/update/:id',
                element:<UpdateToy/>,
                loader:({params})=>fetch(`http://localhost:5000/toy/${params.id}`)
            }
        ]
    },
    {
        path:'*',
        element: <ErrorPage/>
    }
])

export default router