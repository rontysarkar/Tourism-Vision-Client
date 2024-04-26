import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <div className="font-poppins">
            <Navbar />
            <div className="min-h-[calc(100vh-200px)]">
            <Outlet />
            </div>
            <Footer/>
            <Toaster />
        </div>
    );
};

export default Root;