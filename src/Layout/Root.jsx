import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
// import { useContext } from "react";
// import { AuthContext } from "../AuthProvider/AuthProvider";
// import { HashLoader } from "react-spinners";

const Root = () => {
    // const {loading} = useContext(AuthContext)
    return (
        <div className="font-poppins">
            <ScrollRestoration/>
            <Navbar />
            {/* {loading && <div className="absolute flex justify-center  min-h-screen w-full bg-transparent  "><HashLoader className="mt-[12%]" size={200} color="#ff681a" /></div>} */}
            <div className="min-h-[calc(100vh-200px)]">
            <Outlet />
            </div>
            <Footer/>
            <Toaster />
        </div>
    );
};

export default Root;