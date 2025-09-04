import React, { useState, useEffect } from "react";
import amazon_logo from "../../assets/amazon_logo.jpg";
import { db } from "../../firebase";
import { ref, onValue } from "firebase/database";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
// 🔽 ADD: reusable hook + modal
import { useUserData } from "../../components/useUserData";
import UserDetailsModal from "../UserDetailsModal";

import pooja_item from "../../assets/maha_shivratri/mahakal_pooja_item.jpg";
import havan_samagri from "../../assets/maha_shivratri/havan_samagri.jpg";
import deepak from "../../assets/dipak01_set.jpg";
import Shivling from "../../assets/maha_shivratri/shivling_pital.jpg";
import kapoor from "../../assets/kapoor.jpg";
import lohban from "../../assets/lohban.jpg";
import lohban_cup from "../../assets/lohban_cup.jpg";
import havan_kund from "../../assets/havan_kund.jpg";
import rudraksha from "../../assets/rudraksha_panchmukhi.jpg";
import shivnandi from "../../assets/maha_shivratri/shivling_nandi.jpg";
import shivparivar from "../../assets/maha_shivratri/shiv_family.jpg";
import narmdeshwar from "../../assets/maha_shivratri/narmedeshwar.jpg";
import crystelshivling from "../../assets/maha_shivratri/CrystalShivling.jpg";
import shivfamily from "../../assets/maha_shivratri/shiv_family1.jpg";
import lordshiv from "../../assets/maha_shivratri/LordShiva.jpg";
import loadshiva from "../../assets/maha_shivratri/shividol.jpg";
import shivset from "../../assets/maha_shivratri/shivset.jpg";
import jaladhar from "../../assets/maha_shivratri/jaladhar.jpg";
import ShivParivar from "../../assets/maha_shivratri/ShivParivar.jpg";
import shivling_stand from "../../assets/maha_shivratri/Shivling_Stand.jpg";
import shivparivar2 from "../../assets/maha_shivratri/shivparivar2.jpg";
import SnakeShivling from "../../assets/maha_shivratri/SnakeShivling.jpg";
import BrassTrishul from "../../assets/maha_shivratri/BrassTrishul.jpg";
import Nandi from "../../assets/maha_shivratri/Nandi.jpg";
import mahakal_shivling from "../../assets/maha_shivratri/mahakal_shivling.jpg";
import bholenath_photo from "../../assets/maha_shivratri/bholenath_photo.jpg";
import shiv_WoodenFram from "../../assets/maha_shivratri/Shiv_WoodenFram.jpg";
import jalpatra from "../../assets/maha_shivratri/jalpatra.jpg";
import GaumukhShringi from "../../assets/maha_shivratri/GaumukhShringi.jpg";
import gomtichakra from "../../assets/maha_shivratri/gomtichakra.jpg";
import MahaLakshmiSet from "../../assets/maha_shivratri/MahaLakshmiSet.jpg";
import chawal from "../../assets/maha_shivratri/chawal.jpg";
import Ashtgandha from "../../assets/maha_shivratri/Ashtgandha.jpg";
import BhasmVibhooti from "../../assets/maha_shivratri/BhasmVibhooti.jpg";
import CowDungCake from "../../assets/maha_shivratri/CowDungCake.jpg";
import GopiChandan from "../../assets/maha_shivratri/GopiChandan.jpg";
import GangaJal from "../../assets/maha_shivratri/GangaJal.jpg";
import GheeDiya from "../../assets/maha_shivratri/GheeDiya.jpg";
import ShivCharitra from "../../assets/maha_shivratri/ShivCharitra.jpg";
import shankh from "../../assets/maha_shivratri/sankh.webp";
import shankh2 from "../../assets/maha_shivratri/shankh2.jpg";
import ShankhaStand from "../../assets/maha_shivratri/sankh_stand.jpg";
import ghanti from "../../assets/maha_shivratri/ghanti.jpg";
import shiv_puran from "../../assets/maha_shivratri/shiv_puran.jpg";

const featuredProducts = [
  {
    id: "1",
    image: pooja_item,
    heading1: "Pooja Kit",
    heading2: "Girdhari Sawan Puja Kit",
    text: "22 Essential Items for Rudra Abhishek...",
    icon: amazon_logo,
    link: "https://amzn.to/44SBWa0",
  },
  {
    id: "2",
    image: havan_samagri,
    heading1: "Hawan Samagri",
    heading2: "100% Pure & Natural Samagri with 51 Ayurvedic Herbs",
    text: " Vedic Hawan Samagri for Yagya & Pooja",
    icon: amazon_logo,
    link: "https://amzn.to/44JL7cQ",
  },
  {
    id: "3",
    image: Shivling,
    heading1: "Brass Shivling",
    heading2: " Mini Brass Shiva Lingam ",
    text: "Shivling for Pooja Brass 5CM Height Brass Gold Colour 1 Piece",
    icon: amazon_logo,
    link: "https://amzn.to/4o7jYYL",
  },
  {
    id: "4",
    image: shivnandi,
    heading1: "Shivling & Nandi Idols",
    heading2: "Tilak Marble Shivling with Nandi Maharaj Idol Statue",
    text: "Tilak Marble Shivling with Nandi Maharaj Idol Statue - Black Tilak Shivlinga with Nandi Bull...",
    icon: amazon_logo,
    link: "https://amzn.to/4o82tYr",
  },
  {
    id: "5",
    image: shivparivar,
    heading1: "Shiv Parivar",
    heading2: "shiv, parvati and Shri Kartik Ganesh",
    text: "Brass Lord Shiv Parivar with Shivling Shri Kartik Ganesh Parvati and Nandi Murti...",
    icon: amazon_logo,
    link: "https://amzn.to/46p8zNM",
  },
  {
    id: "6",
    image: narmdeshwar,
    heading1: "Narmadeshwar Shivling",
    heading2: "Narmadeshwar Shivling with Brass Jaladhari",
    text: "Narmadeshwar Shivling with Brass Jaladhari, Kalash & Trishul | Sacred Shiva | 10 cm, 4.5 Inch...",
    icon: amazon_logo,
    link: "https://amzn.to/4kYtyKY",
  },
  {
    id: "7",
    image: crystelshivling,
    heading1: "Crystal Shivling Murti",
    heading2: "Shiva Lingam Statue for Home",
    text: "Shiva Lingam Statue for Home & Office Decoration | for Bholenath Worship | Diwali Gift Item...",
    icon: amazon_logo,
    link: "https://amzn.to/3GUUQUD",
  },
  {
    id: "8",
    image: shivfamily,
    heading1: "Shiv Pariva",
    heading2: "Marble Dust Lord Shiv Pariva",
    text: "Marble Dust Lord Shiv Parivar Mahadev Family Statue (18 Inches, Multicolor)...",
    icon: amazon_logo,
    link: "https://amzn.to/4oqXm63",
  },
  {
    id: "9",
    image: lordshiv,
    heading1: "Brass Lord Shiva",
    heading2: "Gold Plated Shiva Idol Showpiece for Mandir",
    text: "Gold Plated Shiva Idol Showpiece for Mandir Pooja Temple Decoration & Gifts (Size 5 x 5 Inches)...",
    icon: amazon_logo,
    link: "https://amzn.to/4mzS4Dx",
  },
  {
    id: "10",
    image: loadshiva,
    heading1: "Lord Shiva Idol",
    heading2: "Idol Shiv Ji Murti Meditating",
    text: "Lord Shiva Idol Shiv Ji Murti Meditating Padmasana Sitting Statue for Car Dashboard, Home Temple, Worship",
    icon: amazon_logo,
    link: "https://amzn.to/3H2H5TQ",
  },
  {
    id: "11",
    image: shivset,
    heading1: "Shiv Pooja set",
    heading2: "Shivling Nandi, Trishul, Nag (Snake) & Jaladhari",
    text: "Brass Black Shivling Nandi, Trishul, Nag (Snake) & Jaladhari Water Stand | Ritual Kit for Jalabhishek & Shiva Worship Jalaabhishek Sawaan Shivratri Sepcial, 12 cm, 12 cm...",
    icon: amazon_logo,
    link: "https://amzn.to/4lQBDmc",
  },
  {
    id: "12",
    image: rudraksha,
    heading1: "Rudraksha",
    heading2: " Panchmukhi Rudraksha Pendant",
    text: "Natural Panchmukhi Rudraksha Pendant with Silver Cap and Ring, Traditional Hindu Prayer Bead Charm...",
    icon: amazon_logo,
    link: "https://amzn.to/4lSdEmM",
  },
  {
    id: "13",
    image: jaladhar,
    heading1: "Jaladhar Stand",
    heading2: "Metal Shivling Jal Abhishek Stand",
    text: "Metal Shivling Jal Abhishek Stand with Lota - Elegant and Functional Design for Worship and Rituals (Golden_3x4 inch)_NO 1, Religious...",
    icon: amazon_logo,
    link: "https://amzn.to/4lalxmo",
  },
  {
    id: "14",
    image: ShivParivar,
    heading1: "Brass Shiv Parivar Murti",
    heading2: "Shiva Parvati Statue with Family",
    text: "Brass Shiv Parivar Murti for Home Puja, Shiva Parvati Statue with Family, Idol for House Warming Gift & Décor Height:- 8.5 Inche...",
    icon: amazon_logo,
    link: "https://amzn.to/3UvbNIi",
  },
  {
    id: "15",
    image: shivling_stand,
    heading1: "Jaladhari Stand",
    heading2: "Brass Plate Thali with Shivling Stand",
    text: "Brass Plate Thali with Shivling Stand and Jalabhishek Kalash Lota for Pooja Home Decor (Gold),Standard(PTSS_40)...",
    icon: amazon_logo,
    link: "https://amzn.to/3U0RMt6",
  },
  {
    id: "16",
    image: shivparivar2,
    heading1: "Metal Shiv Parivar",
    heading2: "Metal Shiva Parvati Ganesh & Kartike",
    text: "Metal Shiv Parivar Murti Metal Shiva Parvati Ganesh Idol Shiv Parivar Murti Statue Shiva Idols Family Sitting On Nandi Showpiece Figurine shivling for Home puja...",
    icon: amazon_logo,
    link: "https://amzn.to/3H4tRpA",
  },
  {
    id: "17",
    image: havan_kund,
    heading1: "Havan kund",
    heading2: "Copper Agnihotra Kit Sets",
    text: "Copper havan kund, Vedic fire Ritual, yajna Set, vastu havan kit, Handmade in India...",
    icon: amazon_logo,
    link: "https://amzn.to/4lKAZ9V",
  },
  {
    id: "18",
    image: SnakeShivling,
    heading1: "SES Naag for Shivling",
    heading2: "Pure Copper Shivling SES Naag",
    text: "100% Pure Copper Shivling SES Naag/kal shorp Dosh/Snake for Shivling/Antique Copper (Small, 9-11 g, 4x4x9.5 cm,Hood Width 9.5",
    icon: amazon_logo,
    link: "https://amzn.to/419zEkn",
  },
  {
    id: "19",
    image: BrassTrishul,
    heading1: "Brass Trishul",
    heading2: "Trident Damru With Stand Brass Statue",
    text: "Trident Damru With Stand Brass Statue For Car Dashboard/Temple, Puja Ghar, 10 Cm",
    icon: amazon_logo,
    link: "https://amzn.to/3IMdOgK",
  },
  {
    id: "20",
    image: Nandi,
    heading1: "Nandi",
    heading2: "Nandi Brissabh Idol for Shiva Temple",
    text: "Nandi Brissabh Idol for Shiva Temple - Bull Idol for Gift and Home Decor (4 cm)...",
    icon: amazon_logo,
    link: "https://amzn.to/40D3aim",
  },
  {
    id: "21",
    image: mahakal_shivling,
    heading1: "Mahakal Shivling",
    heading2: "Pooja Beautiful Mahakal Shivling",
    text: "Mahakaleshwar Shivling Idol Mahakal Shivling Idol Shivling Murti.",
    icon: amazon_logo,
    link: "https://amzn.to/4lRdL1P",
  },
  {
    id: "22",
    image: bholenath_photo,
    heading1: "Bhole Nath Parivar Poster",
    heading2: "Bhole Nath Parivar Poster",
    text: "Bhole Nath Parivar Poster, Multicolour, Religious, Medium (PNF-6399-12x12frame)...",
    icon: amazon_logo,
    link: "https://amzn.to/44QM6rR",
  },
  {
    id: "23",
    image: shiv_WoodenFram,
    heading1: "Photo of Bhole Nath",
    heading2: "Wooden Fram Photo of Bhole Nath",
    text: "Wooden Frame Hand-Crafted with Photo of Bhole Nath parivar 20804-(16.5x16.5inch), Medium...",
    icon: amazon_logo,
    link: "https://amzn.to/4704qQv",
  },
  {
    id: "24",
    image: jalpatra,
    heading1: "Shivling Abhishekam",
    heading2: "Shiv Jal Dhara Container",
    text: "Pure Copper Shiv Jal Dhara Container, Shivling Abhishekam, Temple Home - 1000ml...",
    icon: amazon_logo,
    link: "https://amzn.to/3UyqV7K",
  },
  {
    id: "25",
    image: GaumukhShringi,
    heading1: "Gaumukh Shringi",
    heading2: "Pure Brass Gaumukh Shringi",
    text: "Pure Brass Gaumukh Shringi || Gomukhi Abhishek Patra (4.5 cm, 1)",
    icon: amazon_logo,
    link: "https://amzn.to/455tcw3",
  },
  {
    id: "26",
    image: gomtichakra,
    heading1: "PMW-Combo Pack",
    heading2: "Natural Yellow , White , Red , Black Gunja ",
    text: "11 Pieces x 4 Colors Natural Yellow , White , Red , Black Gunja Yellow Jequirity Seeds PILI Gunja - White - Chirmi Beads-CHANOTHI-Guri GUNJA",
    icon: amazon_logo,
    link: "https://amzn.to/44JL7cQ",
  },
  {
    id: "27",
    image: MahaLakshmiSet,
    heading1: "Maha Lakshmi Set",
    heading2: "Kowri,Lal Gunja, Gomati Chakras ",
    text: "Kowri 11 Pcs, Lal Gunja 11 pcs, Gomati Chakra 11 pcs and Lotus Seeds 11 Pcs...",
    icon: amazon_logo,
    link: "https://amzn.to/44JL7cQ",
  },
  {
    id: "28",
    image: lohban,
    heading1: "Lohban",
    heading2: "Chemical Free Lohban",
    text: "DEEWAN Mubkhars 100% Pure & Natural Air Purifier Google Powder, Chemical Free Dhoop 60 Grams...",
    icon: amazon_logo,
    link: "https://amzn.to/44JL7cQ",
  },
  {
    id: "29",
    image: lohban_cup,
    heading1: "Lohban Cup",
    heading2: "Loban Cups Dhoop for Pooja",
    text: "Aviraj Loban Cups Dhoop for Pooja (72 Cups) | Havan Cups for Pooja | Natural Guggal...",
    icon: amazon_logo,
    link: "https://amzn.to/44JL7cQ",
  },
  {
    id: "30",
    image: shiv_puran,
    heading1: "Mahapuran",
    heading2: "Shri Shiv Mahapuran",
    text: "Shri Shiv Mahapuranbook Hindi New Edition",
    icon: amazon_logo,
    link: "https://amzn.to/458hxws",
  },
  {
    id: "31",
    image: deepak,
    heading1: "Diya",
    heading2: "Brass Gomedh Crystal Pyali Diya (small)",
    text: "An exquisite brass diya with studded crystals to brighten up your rituals.",
    icon: amazon_logo,
    link: "https://amzn.to/44JL7cQ",
  },
  {
    id: "32",
    image: kapoor,
    heading1: "Camphor",
    heading2: "Bhimseni Camphor Container",
    text: "Derived from a natural source, this 100 % pure Bhimseni Kapoor is perfect for daily worship and...",
    icon: amazon_logo,
    link: "https://amzn.to/44JL7cQ",
  },
  {
    id: "33",
    image: chawal,
    heading1: "Unbroken Rice for Pooja",
    heading2: "100% Pure & Unbroken Rice for Pooja",
    text: "Natural Akshat for Deity Worship | 25 Grams | Glass Jar Packaging...",
    icon: amazon_logo,
    link: "https://amzn.to/41enWoL",
  },
  {
    id: "34",
    image: Ashtgandha,
    heading1: "Ashtgandha",
    heading2: "Ashtgandha Kumkum Tilak Powder",
    text: "Kesariya Ashtgandha Kumkum Tilak Powder 300gm (Kesar-Chandan Tilak Powder and Religious Use)...",
    icon: amazon_logo,
    link: "https://amzn.to/4m897Mo",
  },
  {
    id: "35",
    image: BhasmVibhooti,
    heading1: "Bhasm Vibhooti",
    heading2: "Kashi Vishwanath Mahadev Bhasm",
    text: "Kashi Vishwanath Mahadev Bhasm Vibhooti Mahadev /Bhasma/Vibhooti/Bibhuti 50gms Pack...",
    icon: amazon_logo,
    link: "https://amzn.to/3GTSyoJ",
  },
  {
    id: "36",
    image: CowDungCake,
    heading1: "Cow Dung Cake",
    heading2: "Desi Cow Kande for havan Pooja",
    text: "Handmade Desi Gau ke kande/Upla/uplay for Religious Purpose-490g...",
    icon: amazon_logo,
    link: "https://amzn.to/4l1ENT0",
  },
  {
    id: "37",
    image: GopiChandan,
    heading1: "Gopi Chandan",
    heading2: "Tilak Powder for Devpujan",
    text: "Gopi Chandan Tilak Powder for Devpujan Mastak Abhishek Religious Purpose Hindu Rituals...",
    icon: amazon_logo,
    link: "https://amzn.to/4f9KKfb",
  },
  {
    id: "38",
    image: GangaJal,
    heading1: "Ganga Jal",
    heading2: "500ml Pure ganga Water for Pooja",
    text: "Ganga Jal | 500ml Pure Sacred Water for Pooja, Prayers, Rituals & Ceremonies | Authentic Gangajal from Gangotri Valley | Ideal for Hindu Traditions, Festivals & Devotional Use...",
    icon: amazon_logo,
    link: "https://amzn.to/4lOJz7t",
  },
  {
    id: "39",
    image: GheeDiya,
    heading1: "Ghee Diya",
    heading2: "Ghee Diya with Batti",
    text: "Pure Ghee Diya with Batti Pack of 100 Diyas | Pooja Room Items for Home | Wax Free | Ghee Wicks for Prayers, Rituals & Special Occasions | Burning Time: 30 mins...",
    icon: amazon_logo,
    link: "https://amzn.to/45pxDTG",
  },
  {
    id: "40",
    image: ShivCharitra,
    heading1: "Shiv Charitra aur Chalisa",
    heading2: "Shiv Chalisa",
    text: "Shiv Charitra Aivam Chalisa by Jagadguru Aagmacharya Yogiraj Rameshji Maharaj – Hindi...",
    icon: amazon_logo,
    link: "https://amzn.to/4ogGO0r",
  },
  {
    id: "41",
    image: shankh,
    heading1: "shankh",
    heading2: "shankh for Pooja",
    text: "shankh for Pooja | Baynavarti sankh | Vaamvarti Shankh for Pooja Blowing Original | Conch Shell Blowing shankh...",
    icon: amazon_logo,
    link: "https://amzn.to/4oayjDX",
  },
  {
    id: "42",
    image: shankh2,
    heading1: "Dakshinavarti shankh",
    heading2: "Natural Pooja Dakshinavarti Shankh Original",
    text: "Dakshinavarti shankh, Natural Pooja Dakshinavarti Shankh Original from Rameswaram...",
    icon: amazon_logo,
    link: "https://amzn.to/4kWoDKB",
  },
  {
    id: "43",
    image: ShankhaStand,
    heading1: "Shankha Stand",
    heading2: "Brass Shankha Stand",
    text: " Brass Shankha Stand for Puja, Sankha Stand for 4-7 inch Shank (Pack of 1)...",
    icon: amazon_logo,
    link: "https://amzn.to/4meSiQ8",
  },
  {
    id: "44",
    image: ghanti,
    heading1: "Brass Ghanti Pooja Bell",
    heading2: "Indian Traditional Carving, Premium Feel",
    text: "7 Inch Brass Ghanti Pooja Bell - Indian Traditional Carving, Premium Feel - Brass Hand Bell for Puja Items...",
    icon: amazon_logo,
    link: "https://amzn.to/4f7rFtX",
  },
];

const Maha_shivratri = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [getProduct, setGetProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  // 🔽 ADD: hook state/actions
  const {
    showModal,
    setShowModal,
    formData,
    setFormData,
    handleProductAnchorClick,
    handleSubmit,
  } = useUserData();

  useEffect(() => {
    const itemsRef = ref(db, "mahashivratri");
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const arr = Object.values(data);
        const formatted = arr.map((item) => ({
          id: item.id,
          image: item.image,
          heading1: item.heading,
          heading2: item.subHeading,
          text: item.text,
          link: item.link,
          icon: amazon_logo,
          Categories: item.Categories,
        }));

        const sorted = formatted.sort((a, b) => b.id - a.id);

        setGetProduct(sorted);
      } else {
        setGetProduct([]);
      }
      setLoading(false); // <-- data load hone ke baad
    });
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;

  return (
    <div style={{ padding: "20px" }}>
      {/* Section Heading */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px 0",
          textAlign: "center",
          gap: "20px",
        }}
      >
        <hr
          style={{
            width: isMobile ? "20%" : "35%",
            height: "2px",
            background: "#6B3A1D",
            border: "none",
          }}
        />
        <span
          style={{
            fontSize: isMobile ? "24px" : "36px",
            color: "#6B3A1D",
            fontFamily: "Georgia, serif",
            fontWeight: "bold",
          }}
        >
          Maha Shivratri Items
        </span>
        <hr
          style={{
            width: isMobile ? "20%" : "35%",
            height: "2px",
            background: "#6B3A1D",
            border: "none",
          }}
        />
      </div>

      {/* get product from firebase */}

      <div style={{ marginTop: "40px" }}>
        {loading ? (
          <div
            style={{
              textAlign: "center",
              fontSize: "20px",
              color: "#6B3A1D",
              padding: "40px",
            }}
          >
            Loading...
          </div>
        ) : getProduct.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              fontSize: "20px",
              color: "red",
              padding: "40px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            Product Not Found <RemoveShoppingCartIcon />
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: isTablet ? "30px" : "40px",
              cursor: "pointer",
              position: "relative",
            }}
          >
            {getProduct.map((item) => (
              <div
                key={item.id}
                style={{
                  width: isMobile ? "90%" : isTablet ? "45%" : "300px",
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#fff",
                  textAlign: "center",
                  transition: "all 0.3s ease-in-out",
                  position: "relative",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  onClick={(e) => handleProductAnchorClick(e, item.link)}
                >
                  <img
                    src={item.image}
                    alt={item.heading1}
                    style={{
                      width: "100%",
                      height: isMobile ? "250px" : "300px",
                      objectFit: "cover",
                      position: "relative",
                    }}
                  />
                  {item.Categories && (
                    <div
                      style={{
                        background: "#3A2517",
                        color: "#fff",
                        width: "auto",
                        padding: "0px 15px",
                        height: "40px",
                        borderRadius: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "20px",
                        fontWeight: 600,
                        position: "absolute",
                        top: 0,
                        right: 0,
                      }}
                    >
                      {item.Categories}
                    </div>
                  )}
                  <div style={{ padding: "15px" }}>
                    <h3
                      style={{
                        fontSize: isMobile ? "18px" : "20px",
                        color: "#6B3A1D",
                        marginBottom: "5px",
                        fontFamily: "Georgia, serif",
                      }}
                    >
                      {item.heading1}
                    </h3>
                    <h4
                      style={{
                        fontSize: isMobile ? "15px" : "17px",
                        color: "black",
                        marginBottom: "10px",
                        fontWeight: "bold",
                        fontFamily: "Georgia, serif",
                      }}
                    >
                      {item.heading2}
                    </h4>
                    <p
                      style={{
                        fontSize: isMobile ? "14px" : "15px",
                        color: "#555",
                        marginBottom: "10px",
                      }}
                    >
                      {item.text}
                    </p>

                    {/* Buy Link */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        marginTop: "10px",
                      }}
                    >
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          textDecoration: "none",
                          color: "#444",
                          fontWeight: "bold",
                          fontSize: isMobile ? "14px" : "16px",
                          gap: "8px",
                          justifyContent: "center",
                        }}
                        onClick={(e) => handleProductAnchorClick(e, item.link)}
                      >
                        <span>Buy</span>
                        <img
                          src={item.icon}
                          alt="amazon"
                          style={{
                            width: isMobile ? "50px" : "70px",
                            objectFit: "contain",
                          }}
                        />
                      </a>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Product Cards */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: isTablet ? "30px" : "40px",
          cursor: "pointer",
          marginTop: "50px",
        }}
      >
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            style={{
              width: isMobile ? "90%" : isTablet ? "45%" : "300px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
              textAlign: "center",
              transition: "all 0.3s ease-in-out",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.03)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              onClick={(e) => handleProductAnchorClick(e, item.link)}
            >
              <img
                src={item.image}
                alt={item.heading1}
                style={{
                  width: "100%",
                  height: isMobile ? "250px" : "300px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "15px" }}>
                <h3
                  style={{
                    fontSize: isMobile ? "18px" : "20px",
                    color: "#6B3A1D",
                    marginBottom: "5px",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  {item.heading1}
                </h3>
                <h4
                  style={{
                    fontSize: isMobile ? "15px" : "17px",
                    color: "black",
                    marginBottom: "10px",
                    fontWeight: "bold",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  {item.heading2}
                </h4>
                <p
                  style={{
                    fontSize: isMobile ? "14px" : "15px",
                    color: "#555",
                    marginBottom: "10px",
                  }}
                >
                  {item.text}
                </p>

                {/* Buy Link */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    marginTop: "10px",
                  }}
                >
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      textDecoration: "none",
                      color: "#444",
                      fontWeight: "bold",
                      fontSize: isMobile ? "14px" : "16px",
                      gap: "8px",
                    }}
                    onClick={(e) => handleProductAnchorClick(e, item.link)}
                  >
                    <span>Buy</span>
                    <img
                      src={item.icon}
                      alt="amazon"
                      style={{
                        width: isMobile ? "50px" : "70px",
                        objectFit: "contain",
                      }}
                    />
                  </a>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      {/* 🔽 ADD: reusable modal include (UI consistent) */}
      <UserDetailsModal
        showModal={showModal}
        setShowModal={setShowModal}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Maha_shivratri;
