import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
    const { auth } = useContext(AuthContext);
    return auth.isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
