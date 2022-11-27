import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import operations from 'redux/operations';
import selectors from 'redux/selectors';
import { AppBar } from './AppBar/AppBar';

const Home = lazy(() => import('../pages/Home/Home'));
const Diary = lazy(() => import('../pages/Diary/Diary'));
const Login = lazy(() => import('../pages/Login/Login'));
const Register = lazy(() => import('../pages/Register/Register'));
const Calculator = lazy(() => import('../pages/Calculator/Calculator'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectors.getIsLoading);

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isLoading && (
      <Suspense>
        <AppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </Suspense>
    )
  );
};
