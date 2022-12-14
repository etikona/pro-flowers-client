import Blogs from "../Pages/Blogs/Blogs";
import Details from "../Pages/Details/Details";
import Review from "../Pages/Details/Review";
import ServiceDetails from "../Pages/Details/ServiceDetails";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import AddService from "../Pages/PrivatePages/AddService";
import MyReviews from "../Pages/PrivatePages/MyReviews";
import Services from "../Pages/Services/Services";
import Login from "../Pages/User/Login";
import Signin from "../Pages/User/Signin";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layouts/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://pro-flowers-server.vercel.app/services')
            },
            {
                path: '/services',
                element: <Services />,
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
                path: '/details/:id',
                element: <Details />,
                loader: ({ params }) => fetch(`https://pro-flowers-server-kgrcwyvbl-etikona.vercel.app/services/${params.id}`)
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddService /></PrivateRoute>
            },
            {
                path: '/reviews',
                element: <Review />,
            },
            {
                path: '/myReviews',
                element: <PrivateRoute><MyReviews /></PrivateRoute>
            },
            {
                path: '/serviceDetails/',
                element: <ServiceDetails />,

            },
            {
                path: '/blogs',
                element: <Blogs />
            }
        ]
    },
    {
        path: '*',
        element: <Error />
    }
])


export default router;