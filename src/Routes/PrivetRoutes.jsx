import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types"
import { HashLoader } from "react-spinners";

const PrivetRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <div className="absolute inset-0 bg-white/50 h-screen max-w-[1920px] flex justify-center items-center p-5 "><HashLoader className="" size={200} color="#ff681a" /></div>
    }

    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to={'/login'} ></Navigate>

};

export default PrivetRoutes;

PrivetRoutes.propTypes = {
    children: PropTypes.node
}