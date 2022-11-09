import Details from "../Pages/Details/Details";
import ServiceDetails from "../Pages/Details/ServiceDetails";
import Home from "../Pages/Home/Home";
import AddService from "../Pages/PrivatePages/AddService";
import MyReviews from "../Pages/PrivatePages/MyReviews";
import Services from "../Pages/Services/Services";
import Login from "../Pages/User/Login";
import Signin from "../Pages/User/Signin";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layouts/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/home',
                element: <Home />,
                loader: () => fetch('https://pro-flowers-server.vercel.app/services')
            },
            {
                path: '/services',
                element: <Services/>,
                loader: () => fetch('https://pro-flowers-server.vercel.app/services')
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/signin',
                element: <Signin />
            },
            {
                path: '/details',
                element: <Details />
            },
            {
                path: '/addService',
                element: <AddService />
            },
            {
                path: '/myReviews',
                element: <MyReviews />
            },
            {
                path: '/serviceDetails/:id',
                element: <ServiceDetails />,
                loader: ({params}) => fetch(`https://pro-flowers-server-kgrcwyvbl-etikona.vercel.app/services/${params.id}`)
               
            }
        ]
    }
])


export default router;