import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";

import Dashboard from "./Dashboard";
import AdminmahaShivratri from "./Festivalpages/AdminmahaShivratri";
import AdminGaneshChaturthi from "./Festivalpages/AdminGaneshChaturthi";
import AdminNavDurgaPuja from "./Festivalpages/AdminNavDurgaPuja";
import AdminDiwali from "./Festivalpages/AdminDiwali";
import AdminHoli from "./Festivalpages/AdminHoli";
import AdminRamnavami from "./Festivalpages/AdminRamnavami";
import Adminkrishnajanmastami from "./Festivalpages/Adminkrishnajanmastami";
import Adminrakshabandhan from "./Festivalpages/Adminrakshabandhan";
import AdminTeej from "./Festivalpages/AdminTeej";
import Adminchhathpuja from "./Festivalpages/Adminchhathpuja";
import Adminhanumanjayanti from "./Festivalpages/Adminhanumanjayanti";
import Adminvasantpanchami from "./Festivalpages/Adminvasantpanchami";
import Adminmakarshakranti from "./Festivalpages/Adminmakarshakranti";
import Adminkarwachauth from "./Festivalpages/Adminkarwachauth";
import Adminhomedecore from "./Festivalpages/Adminhomedecore";
import Adminmurti from "./Categories/Adminmurti";
import Adminagarbatti from "./Categories/Adminagarbatti";
import Admincloth from "./Categories/Admincloth";
import Admingifts from "./Categories/Admingifts";
import Adminjewelry from "./Categories/Adminjewelry";
import Adminmalas from "./Categories/Adminmalas";
import Adminmandir from "./Categories/Adminmandir";
import Adminpoojaessentials from "./Categories/Adminpoojaessentials";
import Adminpoojathali from "./Categories/Adminpoojathali";
import Admintechpro from "./Categories/Admintechpro";
import Adminupvashfood from "./Categories/Adminupvashfood";
import Adminvastu from "./Categories/Adminvastu";
import Adminbook from "./Categories/Adminbook";
import Admindhoop from "./Categories/Admindhoop";
import Sidebar from "./Sidebar";
import AdminFeaturedProducts from "./AdminFeaturedProducts";
import AdminGetUserData from "./AdminGetUserData";
import Admincoverphoto from "./Admincoverphoto";
import AdminGetInquiry from "./AdminGetInquiry";

const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/Dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
              <Sidebar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-maha-shivratri"
          element={
            <ProtectedRoute>
              <AdminmahaShivratri />
              <Sidebar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-ganesh-chaturthi"
          element={
            <ProtectedRoute>
              <AdminGaneshChaturthi />
              <Sidebar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-nav-durga-puja"
          element={
            <ProtectedRoute>
              <AdminNavDurgaPuja />
              <Sidebar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-Diwali"
          element={
            <ProtectedRoute>
              <AdminDiwali />
              <Sidebar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-holi"
          element={
            <ProtectedRoute>
              <AdminHoli />
              <Sidebar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-ram-navami"
          element={
            <ProtectedRoute>
              <AdminRamnavami />
              <Sidebar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-krishna-janamashtami"
          element={
            <ProtectedRoute>
              <Adminkrishnajanmastami />
              <Sidebar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-rakshabandhan"
          element={
            <ProtectedRoute>
              <Adminrakshabandhan />
              <Sidebar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Admin-teej"
          element={
            <ProtectedRoute>
              <AdminTeej />
              <Sidebar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-chhath-puja"
          element={
            <ProtectedRoute>
              <Adminchhathpuja />
              <Sidebar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-hanuman-jayanti"
          element={
            <ProtectedRoute>
              <Adminhanumanjayanti />
              <Sidebar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-vasant-panchami"
          element={
            <ProtectedRoute>
              <Adminvasantpanchami />
              <Sidebar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-maker-sankranti--pongal-gudi-padwa"
          element={
            <ProtectedRoute>
              <Adminmakarshakranti />
              <Sidebar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-karwa-chauth"
          element={
            <ProtectedRoute>
              <Adminkarwachauth />
              <Sidebar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-home-decore"
          element={
            <ProtectedRoute>
              <Adminhomedecore />
              <Sidebar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-murtiidol"
          element={
            <ProtectedRoute>
              <Adminmurti />
              <Sidebar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-agarbatti"
          element={
            <ProtectedRoute>
              <Adminagarbatti />
              <Sidebar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-pooja-thali"
          element={
            <ProtectedRoute>
              <Adminpoojathali />
              <Sidebar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-dhoop"
          element={
            <ProtectedRoute>
              <Admindhoop />
              <Sidebar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-essentail-pooja-items"
          element={
            <ProtectedRoute>
              <Adminpoojaessentials />
              <Sidebar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-mandir-for-home"
          element={
            <ProtectedRoute>
              <Adminmandir />
              <Sidebar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-spritual-books"
          element={
            <ProtectedRoute>
              <Adminbook />
              <Sidebar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-praye-beads--malas"
          element={
            <ProtectedRoute>
              <Adminmalas />
              <Sidebar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-cloth"
          element={
            <ProtectedRoute>
              <Admincloth />
              <Sidebar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-religious-jewellery"
          element={
            <ProtectedRoute>
              <Adminjewelry />
              <Sidebar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-vastu-items"
          element={
            <ProtectedRoute>
              <Adminvastu />
              <Sidebar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-gifts--festival-items"
          element={
            <ProtectedRoute>
              <Admingifts />
              <Sidebar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-tech-products"
          element={
            <ProtectedRoute>
              <Admintechpro />
              <Sidebar />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-upvash-food"
          element={
            <ProtectedRoute>
              <Adminupvashfood />
              <Sidebar />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-Featured-Products"
          element={
            <ProtectedRoute>
              <AdminFeaturedProducts />
              <Sidebar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-GetUserData"
          element={
            <ProtectedRoute>
              <AdminGetUserData />
              <Sidebar />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-cover-photo"
          element={
            <ProtectedRoute>
              <Admincoverphoto />
              <Sidebar />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-Get-Inquiry"
          element={
            <ProtectedRoute>
              <AdminGetInquiry />
              <Sidebar />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default AdminRoutes;
