import { Outlet } from "react-router-dom";
import Navbar from "../header/navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;