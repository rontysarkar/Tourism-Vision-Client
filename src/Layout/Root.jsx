import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
    return (
        <div className="font-poppins">
            <Navbar />
            <div className="min-h-[calc(100vh-200px)]">
            <Outlet />
            </div>
            <Footer/>
        </div>
    );
};

export default Root;