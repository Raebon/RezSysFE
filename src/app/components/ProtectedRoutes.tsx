import { FC, ReactElement } from "react";
import { useAuth } from "../auth/auth-provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

interface ProtectedRoutesProps {
  children: ReactElement;
}
const ProtectedRoutes: FC<ProtectedRoutesProps> = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
export default ProtectedRoutes;
