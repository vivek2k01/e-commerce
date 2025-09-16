import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Topbar from "./components/Topbar";
import AdminRoutes from "./components/Admin/AdminRoutes";
import UserRoutes from "./components/UserRoutes";
import Adminlogin from "./components/Admin/Adminlogin";
import Footer from "./components/Footer"; // apna footer import karo
import RouteTitleHandler from "./components/RouteTitleHandler";

const Layout = () => {
  const location = useLocation();
  const hideTopbarRoutes = ["/adminlogin"];
  const isAdminRoute =
    location.pathname.startsWith("/admin") ||
    location.pathname === "/adminlogin" ||
    location.pathname === "/Dashboard";

  return (
    <>
      {/* Topbar hide karo agar /adminlogin ya /admin/... ho */}
      {!hideTopbarRoutes.includes(location.pathname) && <Topbar />}

      <Routes>
        <Route path="/adminlogin" element={<Adminlogin />} />
      </Routes>
      <UserRoutes />
      <AdminRoutes />

      {/* Yaha condition lagayi → sirf user routes pe Footer dikhega */}
      {!isAdminRoute && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <RouteTitleHandler />
      <Layout />
    </Router>
  );
};

export default App;
