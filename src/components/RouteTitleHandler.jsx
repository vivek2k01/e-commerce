// RouteTitleHandler.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const titles = {
  // all user Routes
  "/": "Home | ShrijiiMart",
  "/FeaturedProducts": "Featured Products | ShrijiiMart",
  "/categories": "Categories | ShrijiiMart",
  "/about": "About Us | ShrijiiMart",
  "/contact": "Contact Us | ShrijiiMart",
  "/Maha_shivratri": "Maha Shivratri | ShrijiiMart",
  "/Ganesh_Chaturthi": "Ganesh Chaturthi | ShrijiiMart",
  "/Navdurga": "Nav Durga | ShrijiiMart",
  "/Diwali": "Diwali | ShrijiiMart",
  "/Holi": "Holi | ShrijiiMart",
  "/Ramnavmi": "Ram Navami | ShrijiiMart",
  "/Rakshabandhan": "Rakshabandhan | ShrijiiMart",
  "/Krishna_janmashtami": "Krishna Janmashtami | ShrijiiMart",
  "/Teej": "Teej | ShrijiiMart",
  "/Homedecore": "Home Decor | ShrijiiMart",
  "/Karwachauth": "Karwa Chauth | ShrijiiMart",
  "/ChhathPuja": "Chhath Puja | ShrijiiMart",
  "/Hanumanjayanti": "Hanuman Jayanti | ShrijiiMart",
  "/Vasantpanchami": "Vasant Panchami | ShrijiiMart",
  "/Makarsankranti": "Makar Sankranti | ShrijiiMart",
  "/Murti": "Murti | ShrijiiMart",
  "/Aagarbatti": "Agarbatti | ShrijiiMart",
  "/Books": "Books | ShrijiiMart",
  "/Chandandhup": "Dhoop | ShrijiiMart",
  "/Cloth": "Cloth | ShrijiiMart",
  "/Gifts": "Gifts | ShrijiiMart",
  "/ReligiousJewelry": "Religious Jewelry | ShrijiiMart",
  "/Mala": "Mala | ShrijiiMart",
  "/Mandir": "Mandir | ShrijiiMart",
  "/EssentialPujaItems": "Essential Pooja Items | ShrijiiMart",
  "/Poojathali": "Pooja Thali | ShrijiiMart",
  "/Vastuitems": "Vastu Items | ShrijiiMart",
  "/Upvashfood": "Upvash Food | ShrijiiMart",
  "/TechPro": "Tech Products | ShrijiiMart",

  // Admin Routes
  "/adminlogin": "Admin Login | ShrijiiMart",
  "/Dashboard": "Dashboard | ShrijiiMart",
  "/admin-maha-shivratri": "Admin Maha Shivratri | ShrijiiMart",
  "/admin-ganesh-chaturthi": "Admin Ganesh Chaturthi | ShrijiiMart",
  "/admin-nav-durga-puja": "Admin Nav Durga Puja | ShrijiiMart",
  "/admin-diwali": "Admin Diwali | ShrijiiMart",
  "/admin-holi": "Admin Holi | ShrijiiMart",
  "/admin-ram-navami": "Admin Ram Navami | ShrijiiMart",
  "/admin-krishna-janamashtami": "Admin Krishna Janmashtami | ShrijiiMart",
  "/admin-rakshabandhan": "Admin Rakshabandhan | ShrijiiMart",
  "/admin-teej": "Admin Teej | ShrijiiMart",
  "/admin-chhath-puja": "Admin Chhath Puja | ShrijiiMart",
  "/admin-hanuman-jayanti": "Admin Hanuman Jayanti | ShrijiiMart",
  "/admin-vasant-panchami": "Admin Vasant Panchami | ShrijiiMart",
  "/admin-maker-sankranti--pongal-gudi-padwa":
    "Admin Makar Sankranti | ShrijiiMart",
  "/admin-karwa-chauth": "Admin Karwa Chauth | ShrijiiMart",
  "/admin-home-decore": "Admin Home Decor | ShrijiiMart",
  "/admin-murtiidol": "Admin Murti / Idol | ShrijiiMart",
  "/admin-agarbatti": "Admin Agarbatti | ShrijiiMart",
  "/admin-pooja-thali": "Admin Pooja Thali | ShrijiiMart",
  "/admin-dhoop": "Admin Dhoop | ShrijiiMart",
  "/admin-essentail-pooja-items": "Admin Essential Pooja Items | ShrijiiMart",
  "/admin-mandir-for-home": "Admin Mandir For Home | ShrijiiMart",
  "/admin-spritual-books": "Admin Spiritual Books | ShrijiiMart",
  "/admin-praye-beads--malas": "Admin Prayer Beads / Malas | ShrijiiMart",
  "/admin-cloth": "Admin Cloth | ShrijiiMart",
  "/admin-religious-jewellery": "Admin Religious Jewellery | ShrijiiMart",
  "/admin-vastu-items": "Admin Vastu Items | ShrijiiMart",
  "/admin-gifts--festival-items": "Admin Gifts & Festival Items | ShrijiiMart",
  "/admin-tech-products": "Admin Tech Products | ShrijiiMart",
  "/admin-upvash-food": "Admin Upvash Food | ShrijiiMart",
  "/admin-Featured-Products": "Admin Featured Products | ShrijiiMart",
  "/admin-GetUserData": "Admin User Data | ShrijiiMart",
  "/admin-cover-photo": "Admin Cover Photo | ShrijiiMart",
  "/admin-Get-Inquiry": "Admin Get Inquiry | ShrijiiMart",
  "*": "404 not Found | ShrijiiMart",
};

export default function RouteTitleHandler() {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const title = titles[currentPath] || titles["*"];
    document.title = title;
  }, [location]);

  return null;
}
