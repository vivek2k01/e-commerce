import React from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import Home from "./pages/Home";
import FeaturedProducts from "./pages/FeaturedProducts";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Maha_shivratri from "./sub pages/Maha_shivratri";
import Ganesh_Chaturthi from "./sub pages/Ganesh_Chaturthi";
import Navdurga from "./sub pages/Navdurga";
import ContactUs from "./pages/Contact";
import Diwali from "./sub pages/Diwali";
import Holi from "./sub pages/Holi";
import Ramnavmi from "./sub pages/Ramnavmi";
import Rakshabandhan from "./sub pages/Rakshabandhan";
import Krishna_janmashtami from "./sub pages/Krishna_janmashtami";
import Teej from "./sub pages/Teej";
import Homedecore from "./sub pages/Homedecore";
import Karwachauth from "./sub pages/Karwachauth";
import ChhathPuja from "./sub pages/ChhathPuja";
import Hanumanjayanti from "./sub pages/Hanumanjayanti";
import Vasantpanchami from "./sub pages/Vasantpanchami";
import Makarsankranti from "./sub pages/Makarsankranti";
import Murti from "./CategoriesPage/Murti";
import Poojathali from "./CategoriesPage/Poojathali";
import Agarbatti from "./CategoriesPage/Agarbatti";
import Books from "./CategoriesPage/Books";
import ChandanDhoop from "./CategoriesPage/ChandanDhoop";
import Cloth from "./CategoriesPage/Cloth";
import Gifts from "./CategoriesPage/Gifts";
import Jewelry from "./CategoriesPage/Jewelry";
import Malas from "./CategoriesPage/Malas";
import Mandir from "./CategoriesPage/Mandir";
import PoojaEssentials from "./CategoriesPage/PoojaEssential";
import Vastu from "./CategoriesPage/Vastu";
import Upvashfood from "./CategoriesPage/Upvashfood";
import Techpro from "./CategoriesPage/Techpro";
import Footer from "./Footer";

const UserRoutes = () => {
  return (
    <div>
      <div style={{ paddingTop: "90px" }}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FeaturedProducts" element={<FeaturedProducts />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/Maha_shivratri" element={<Maha_shivratri />} />
          <Route path="/Ganesh_Chaturthi" element={<Ganesh_Chaturthi />} />
          <Route path="/Navdurga" element={<Navdurga />} />
          <Route path="/Diwali" element={<Diwali />} />
          <Route path="/Holi" element={<Holi />} />
          <Route path="/Ramnavmi" element={<Ramnavmi />} />
          <Route path="/Rakshabandhan" element={<Rakshabandhan />} />
          <Route
            path="/Krishna_janmashtami"
            element={<Krishna_janmashtami />}
          />
          <Route path="/Teej" element={<Teej />} />
          <Route path="/Homedecore" element={<Homedecore />} />
          <Route path="/Karwachauth" element={<Karwachauth />} />
          <Route path="/ChhathPuja" element={<ChhathPuja />} />
          <Route path="/Hanumanjayanti" element={<Hanumanjayanti />} />
          <Route path="/Vasantpanchami" element={<Vasantpanchami />} />
          <Route path="/Makarsankranti" element={<Makarsankranti />} />

          {/* Categories page routes */}

          <Route path="/Murti" element={<Murti />} />
          <Route path="/Aagarbatti" element={<Agarbatti />} />
          <Route path="/Books" element={<Books />} />
          <Route path="/Chandandhup" element={<ChandanDhoop />} />
          <Route path="/Cloth" element={<Cloth />} />
          <Route path="/Gifts" element={<Gifts />} />
          <Route path="/ReligiousJewelry" element={<Jewelry />} />
          <Route path="/Mala" element={<Malas />} />
          <Route path="/Mandir" element={<Mandir />} />
          <Route path="/EssentialPujaItems" element={<PoojaEssentials />} />
          <Route path="/Poojathali" element={<Poojathali />} />
          <Route path="/Vastuitems" element={<Vastu />} />
          <Route path="/Upvashfood" element={<Upvashfood />} />
          <Route path="/TechPro" element={<Techpro />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default UserRoutes;
