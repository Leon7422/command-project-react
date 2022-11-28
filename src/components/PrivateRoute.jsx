import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import selectors from "redux/selectors";

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectors.getIsLoggedIn)
  return isLoggedIn ? children : <Navigate to={redirectTo}/>
}

export default PrivateRoute;