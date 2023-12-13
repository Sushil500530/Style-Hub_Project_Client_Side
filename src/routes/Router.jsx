import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const Router = createBrowserRouter([
    {
       path: '/',
       element: <MainLayout />,
       errorElement: <ErrorPage />,
       children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/login',
            element: <Login />
        }
       ] 
    },
    {
        path: '/register',
        element: <Register />
    }
])

export default Router;