import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import operations from 'redux/operations';
import selectors from 'redux/selectors';
import { AppBar } from './AppBar/AppBar';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Loader from './Loader/Loader';
import { useContextInfo } from './dataContext/dataContext';

const Home = lazy(() => import('../pages/Home/Home'));
const Diary = lazy(() => import('../pages/Diary/Diary'));
const Login = lazy(() => import('../pages/Login/Login'));
const Register = lazy(() => import('../pages/Register/Register'));
const Calculator = lazy(() => import('../pages/Calculator/Calculator'));
const ErrorPage = lazy(() => import('../pages/ErrorPage/ErrorPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectors.getIsLoading);
  const { setNotAllowedProducts } = useContextInfo();

  useEffect(() => {
    async function fetchData() {
      await dispatch(operations.fetchCurrentUser());
      const userInfo = await dispatch(operations.userInfo());
      const notAllowed = userInfo.payload.userData.notAllowedProducts;
      setNotAllowedProducts(notAllowed);
    }
    fetchData();
  }, [dispatch, setNotAllowedProducts]);

  return (
    !isLoading && (
      <Suspense fallback={<Loader />}>
        <AppBar />
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute
                Component={<Home />}
                restricted
                redirectTo="/diary"
              />
            }
          />
          <Route
            path="/diary"
            element={
              <PrivateRoute redirectTo="/login">
                <Diary />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute
                Component={<Login />}
                restricted
                redirectTo="/diary"
              />
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute
                Component={<Register />}
                restricted
                redirectTo="/diary"
              />
            }
          />
          <Route
            path="/calculator"
            element={
              <PrivateRoute redirectTo="/login">
                <Calculator />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    )
  );
};
