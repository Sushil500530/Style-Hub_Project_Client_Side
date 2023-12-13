import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "../pages/home/Home";

const Router = createBrowserRouter([
    {
       path: '/',
       element: <MainLayout />,
       errorElement: <ErrorPage />,
       children: [
        {
            path: '/',
            element: <Home />
        }
       ] 
    }
])

export default Router;