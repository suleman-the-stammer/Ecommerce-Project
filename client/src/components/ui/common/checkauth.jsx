import { Navigate, useLocation } from "react-router-dom"
import { useSelector } from 'react-redux';


function CheckAuth({children}) {
    const location = useLocation();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
   // const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);
    if (location.pathname === "/") {
        if (!isAuthenticated) {
          return <Navigate to="/auth/login" />;
        } else {
          if (user?.role === "admin") {
            return <Navigate to="/admin/dashboard" />;
          } else {
            return <Navigate to="/shop/home" />;
          }
        }
      }
      if (
        !isAuthenticated &&
        !(
          location.pathname.includes("/login") ||
          location.pathname.includes("/register")
        )
      ) {
        return <Navigate to="/auth/login" />;
      }
    
      if (
        isAuthenticated &&
        location.pathname.includes("/auth") 
      ) {
        if (user?.role === "admin") {
          return <Navigate to="/admin/dashboard" />;
        } else {
          return <Navigate to="/shop/home" />;
        }
      }
    
      if (
        isAuthenticated &&
        user?.role !== "admin" &&
        location.pathname.includes("admin")
      ) {
        return <Navigate to="/unauth-page" />;
      }
    
      if (
        isAuthenticated &&
        user?.role === "admin" &&
        location.pathname.includes("shop")
      ) {
        return <Navigate to="/unauth-page" />;
      }
  return (
    <>
    {children}
    </>
  )
}

export default CheckAuth
