import AuthProvider from "./auth/auth-provider/AuthProvider";
import PublicPage from "./pages/public-page/PublicPage";
import LoginPage from "./pages/login-page/LoginPage";
import ProtectedPage from "./pages/protected-page/ProtectedPage";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { Routes, Route } from "react-router-dom";
import App from "./App";

const RoutesComponent = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<PublicPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/protected"
            element={
              <ProtectedRoutes>
                <ProtectedPage />
              </ProtectedRoutes>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default RoutesComponent;
