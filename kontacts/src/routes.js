import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { ContextProvider } from "./contexts/context";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function ProtectedRoutes({ redirectTo }) {
  // const isAuth = localStorage.getItem("token");
  const isAuth = true;
  return isAuth ? <Outlet /> : <Navigate to={redirectTo} />;
}

export default function myRoutes() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route element={<ProtectedRoutes redirectTo={"/login"} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </ContextProvider>
  );
}
