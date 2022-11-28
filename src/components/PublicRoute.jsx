import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import selectors from "redux/selectors";

const PublicRoute = ({ Component, redirectTo = '/', restricted }) => {
  const isLoggedIn = useSelector(selectors.getIsLoggedIn);
  const shouldRedirect = restricted && isLoggedIn;

  return (
    shouldRedirect ? <Navigate to={redirectTo} /> : Component
  )
  
}

export default PublicRoute;