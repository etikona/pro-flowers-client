import Home from "../Pages/Home/Home";

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
            }
        ]
    }
])


export default router;