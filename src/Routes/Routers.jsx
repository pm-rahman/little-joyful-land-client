import { createBrowserRouter } from "react-router-dom";
import NavMenu from "../Components/NavMenu/NavMenu";

const router = createBrowserRouter([
    {
        path:'/',
        element:<NavMenu/>
    }
])

export default router