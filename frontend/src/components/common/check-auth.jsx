import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, children }) {
  const location = useLocation();

  console.log(location.pathname, isAuthenticated);

  if (location.pathname === "/") {
    if (!isAuthenticated) {
      return <Navigate to="/" />;
    } else {
      if (isAuthenticated) {
        return <Navigate to="/dashboard" />;
      }
    }
  }
  
  return <>{children}</>;
}

export default CheckAuth;
