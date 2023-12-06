import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useAuth = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated;
};

const ProtectedElement = ({ children }) => {
  const isAuthenticated = useAuth();
  return isAuthenticated ? children : <Navigate to="/SignIn" />;
};


export default ProtectedElement;