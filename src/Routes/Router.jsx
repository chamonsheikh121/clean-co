import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Admin from "../Layouts/Admin";
import AddService from "../Pages/AddService";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path: 'about',
                element: <About></About>
            }
        ]
    },

    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/admin',
        element: <Admin></Admin>,
        children:[
            {
                path:'addservice',
                element:<AddService></AddService>
            }
        ]
        
    },

])


export default router