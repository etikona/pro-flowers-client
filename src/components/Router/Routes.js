import Home from "../Pages/Home/Home";
import Login from "../Pages/User/Login";
import Signin from "../Pages/User/Signin";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layouts/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/home',
                element: <Home/>,
                loader:() => fetch('http://localhost:5000/services')
            },
            {
                path: '/login',
                element: <Login/>,
            },
            {
                path: '/signin',
                element: <Signin/>
            }
        ]
    }
])


export default router;