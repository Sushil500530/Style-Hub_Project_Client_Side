import { Outlet } from "react-router-dom";
import Navbar from "../header/navbar/Navbar";
import Container from "../shared/Container";

const MainLayout = () => {
    return (
        <Container>
            <Navbar />
            <Outlet></Outlet>
        </Container>
    );
};

export default MainLayout;