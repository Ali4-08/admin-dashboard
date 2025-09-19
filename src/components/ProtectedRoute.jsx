import { Navigate } from "react-router-dom";

export default function ProtectedRoute({children, requiredRole}) {

    const user = JSON.parse(localStorage.getItem("authUser"));
    

    if(!user || !user.token){
        return <Navigate to={"/login"} replace />;
    }

    if(requiredRole && user.role !== requiredRole){
        return <Navigate to={"/dashboard"} replace />
    }

    return children;
}