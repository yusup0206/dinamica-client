import { useContext } from 'react';
import { AppContext } from '../context/Context';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const { isAuth } = useContext(AppContext);
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
