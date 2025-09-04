import React, { useState, useEffect } from "react";
import amazon_logo from "../../assets/amazon_logo.jpg";
import { db } from "../../firebase";
import { ref, onValue } from "firebase/database";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
// 🔽 ADD: reusable hook + modal
import { useUserData } from "../../components/useUserData";
import UserDetailsModal from "../UserDetailsModal";

import p1 from "../../assets/chhathPuja/p1.jpg";
import p2 from "../../assets/chhathPuja/p2.jpg";
import p3 from "../../assets/chhathPuja/p3.jpg";
import p4 from "../../assets/chhathPuja/p4.jpg";
import p5 from "../../assets/chhathPuja/p5.jpg";
import p6 from "../../assets/chhathPuja/p6.jpg";
import p7 from "../../assets/chhathPuja/p7.webp";
import p8 from "../../assets/chhathPuja/p8.jpg";
import p9 from "../../assets/chhathPuja/p9.jpg";
import p10 from "../../assets/chhathPuja/p10.jpg";
import p11 from "../../assets/chhathPuja/p11.jpg";
import p12 from "../../assets/chhathPuja/p12.jpg";
import p13 from "../../assets/chhathPuja/p13.jpg";
import p14 from "../../assets/chhathPuja/p14.jpg";
import p15 from "../../assets/chhathPuja/p15.jpg";
import p16 from "../../assets/chhathPuja/p16.jpg";
import p17 from "../../assets/chhathPuja/p17.jpg";
import p18 from "../../assets/chhathPuja/p18.jpg";
import p19 from "../../assets/chhathPuja/p19.jpg";
import p20 from "../../assets/chhathPuja/p20.jpg";
import p21 from "../../assets/chhathPuja/p21.jpg";
import p22 from "../../assets/chhathPuja/p22.jpg";
import p23 from "../../assets/chhathPuja/p23.webp";
import p24 from "../../assets/chhathPuja/p24.jpg";
import p25 from "../../assets/chhathPuja/p25.jpg";
import p26 from "../../assets/chhathPuja/p26.jpg";
import p27 from "../../assets/chhathPuja/p27.jpg";
import p28 from "../../assets/chhathPuja/p28.webp";
import p29 from "../../assets/chhathPuja/p29.jpg";
import p30 from "../../assets/chhathPuja/p30.jpg";
import p31 from "../../assets/chhathPuja/p31.jpg";
import p32 from "../../assets/chhathPuja/p32.jpg";
import p33 from "../../assets/chhathPuja/p33.jpg";
import p34 from "../../assets/chhathPuja/p34.jpg";
import p35 from "../../assets/chhathPuja/p35.jpg";
import p36 from "../../assets/chhathPuja/p36.jpg";
import p37 from "../../assets/chhathPuja/p37.jpg";
import p38 from "../../assets/chhathPuja/p38.jpg";
import p39 from "../../assets/chhathPuja/p39.jpg";
import p40 from "../../assets/chhathPuja/p40.jpg";

const featuredProducts = [
  {
    id: "1",
    image: p1,
    heading1: "Soop",
    heading2: "CHHAT Pooja SOOP",
    text: "Handmade Brass Soop/Sup Supali Muram/Moram for Chhath Puja/CHHAT Pooja SOOP/Brass Kula/Brass Muram/Brass Winnowing-Fan...",
    icon: amazon_logo,
    link: "https://amzn.to/4lhjiO2",
  },
  {
    id: "2",
    image: p2,
    heading1: "Daura",
    heading2: "Bamboo Basket",
    text: "Generic Traditional Multicolor Bamboo Basket (15 inch x 15 inch x 3 inch)...",
    icon: amazon_logo,
    link: "https://amzn.to/3J6y5xw",
  },
  {
    id: "3",
    image: p3,
    heading1: "Winnowing Basket",
    heading2: "soop",
    text: "Handwoven Bamboo Fan Winnowing Basket, Traditional Design, Natural Brown with Green Pattern, Decorative Storage...",
    icon: amazon_logo,
    link: "https://amzn.to/40WIxOp",
  },
  {
    id: "4",
    image: p4,
    heading1: "Basket",
    heading2: "Dauri || Daura",
    text: "Bamboo Round Basket (Handmade)||Natural Eco-Friendly||(11.8 X 3.94 Inches)...",
    icon: amazon_logo,
    link: "https://amzn.to/4oEpHpw",
  },
  {
    id: "5",
    image: p5,
    heading1: "Soop",
    heading2: "Multi-Purpose Bamboo Tray",
    text: "Bamboo Muram | Supli | Soop | Sup | Chhat | Moram | Mara | Multi-Purpose Bamboo Tray | Festival Use | A++ Grade, ~L:27 x W:33 x H:9 cm x 2 Pcs...",
    icon: amazon_logo,
    link: "https://amzn.to/4fpGhoJ",
  },
  {
    id: "6",
    image: p6,
    heading1: "Sindoor",
    heading2: "Orange Kumkum ",
    text: "Natural Orange Kumkum Sindoor Powder For Women Puja Tilak Suhaag Sindoor, No Side Effects & Hair Fall (500 Gm, Pack Of 1) Organic Hanuman Ji & Chhat Pooja Kumkum...",
    icon: amazon_logo,
    link: "https://amzn.to/41hhe1x",
  },
  {
    id: "7",
    image: p7,
    heading1: "Camphor",
    heading2: "Camphor 50G Jar",
    text: "Bhimseni (Original)Chunk Camphor 50G Jar - Pack Of 1 | 100% Organic | For Puja, Aromatherapy & Air Freshener | Sweet Fragrance...",
    icon: amazon_logo,
    link: "https://amzn.to/4fqzuuQ",
  },
  {
    id: "8",
    image: p8,
    heading1: "Chauki",
    heading2: "Patla for Pooja",
    text: "Garden Of Arts Worship House Small Wood/Meena Chauki/Patla/Pooja bajot/moti bajot/chorang/Gift Article/puja Item (4 x 4 INCH) Golden...",
    icon: amazon_logo,
    link: "https://amzn.to/3H0yO2T",
  },
  {
    id: "9",
    image: p9,
    heading1: "Suhaag Sindur",
    heading2: "Sindoor Powder with Box",
    text: "Natural Organic Orange Sindoor Powder 10gm A++ Grade with Kumkum box and stick For Women Suhaag Sindur With Natural Sindoor Weddings, And Chhat Pooja Chemical-Free, COMBO OFFER...",
    icon: amazon_logo,
    link: "https://amzn.to/45tMQlJ",
  },
  {
    id: "10",
    image: p10,
    heading1: "Brass Thali",
    heading2: "Pooja Thali Set",
    text: "Pure Glossy Brass Puja/Pooja Thali Set with Ganti/Bell, Diya and Dice Shape Incense/Agarbatti Holder Perfect for Gifting, Diwali, Aarti, Rakhi, Karwchauth, Onam, Home and Office (Medium, 4)...",
    icon: amazon_logo,
    link: "https://amzn.to/3J3ow2u",
  },
  {
    id: "11",
    image: p11,
    heading1: "Thali Cover",
    heading2: "Thalposh Cloth",
    text: "16inch, Combo of 2 Thali Cover for Prasad Plate, Karvachauth Pooja Festival, Wedding Decoration Floral Lace Shagun Thaal Cover with Golden Frill, White and Red Round Thalposh Cloth...",
    icon: amazon_logo,
    link: "https://amzn.to/45mwpYp",
  },
  {
    id: "12",
    image: p12,
    heading1: "Diya",
    heading2: "Mitti Ke Diye",
    text: "Set of 5 Design (Fancy) Wedding Ceremony Item | Mud Sakori, Decorated with Red Cloth | Experience The Divine Touch | Tradition with Handcrafted...",
    icon: amazon_logo,
    link: "https://amzn.to/4fpKn09",
  },
  {
    id: "13",
    image: p13,
    heading1: "Kalash",
    heading2: " Nariyal Lota and Indi",
    text: "Stainless Steel Decorative Kalash with Nariyal Lota and Indi Traditional Wedding Items (Set No.1)...",
    icon: amazon_logo,
    link: "https://amzn.to/4lfoty0",
  },
  {
    id: "14",
    image: p14,
    heading1: "Batti",
    heading2: "Gol Batti",
    text: "Wicks for Diya, Diya GOL batti for puja Batti for Diya for Diwali, Chhat (Cotton Wicks) - 250 GMS...",
    icon: amazon_logo,
    link: "https://amzn.to/45n7nZ7",
  },
  {
    id: "15",
    image: p15,
    heading1: "Diya",
    heading2: "Diya for Puja and Festivals",
    text: "Handmade Terracotta Clay Diya for Puja and Festivals | Clay Diya for Karthigai Deepam | Agalvilakku | karthika Deepam Pack of : (10)...",
    icon: amazon_logo,
    link: "https://amzn.to/4m8bgs7",
  },
  {
    id: "16",
    image: p16,
    heading1: "Diya",
    heading2: "Handmade Earthen Lamps",
    text: "Diya -Set of 12 Clay Diya for Diwali Puja – Handmade Earthen Lamps for Home Temple Decoration | Eco-Friendly Traditional Diyas...",
    icon: amazon_logo,
    link: "https://amzn.to/4fqT2iL",
  },
  {
    id: "17",
    image: p17,
    heading1: "Big Diya",
    heading2: "Mitti ka Diya",
    text: "Big size clay diya Clay Traditional terracotta Handmade Clay Mitti ka Diya Deepak oil ghee lamp for Diwali aarti Navratri Puja Dussehra Pooja chhath puja...",
    icon: amazon_logo,
    link: "https://amzn.to/4lZocAp",
  },
  {
    id: "18",
    image: p18,
    heading1: "Akhand Diya",
    heading2: "Adjustable Wick Oil Lamp",
    text: "Brass Akhand Diya Combo Pack of 2 – 6.5 Inch | Adjustable Wick Oil Lamp with Borosilicate Chimney | Pooja, Mandir, Diwali Gift Item...",
    icon: amazon_logo,
    link: "https://amzn.to/45nuGlE",
  },
  {
    id: "19",
    image: p19,
    heading1: "Dhoop Dan",
    heading2: "MDhooni",
    text: "Clay Diya/Dhoop Dan With Handle (Peach)...",
    icon: amazon_logo,
    link: "https://amzn.to/47hpv9c",
  },
  {
    id: "20",
    image: p20,
    heading1: "laddo charpai",
    heading2: "Charpai",
    text: "Wooden Gopal Charpai Cot Small Gift Item laddo charpai khat for Pooja Ghar& Home Decoration Bal Krishna Antique Decor God Puja at Office Workspace (7 inch)...",
    icon: amazon_logo,
    link: "https://amzn.to/45lD8BJ",
  },
  {
    id: "21",
    image: p21,
    heading1: "Chatai",
    heading2: "Floor Mat",
    text: "Korai Grass G1 Ivory Floor Mat, 6 X 4 Feet Double Korai waving (Blue)...",
    icon: amazon_logo,
    link: "https://amzn.to/4maW7X4",
  },
  {
    id: "22",
    image: p22,
    heading1: "terracotta Diya",
    heading2: "Handmade Clay Mitti ka Diya",
    text: "Plate diya Elephant design Big large size Clay Diya terracotta color Handmade Clay Mitti ka Diya Deepak oil ghee lamp for Diwali aarti Navratri Puja Dussehra Pooja chhath puja ,15 ×15×6 CM...",
    icon: amazon_logo,
    link: "https://amzn.to/3Uh6rAk",
  },
  {
    id: "23",
    image: p23,
    heading1: "Cloth for Mandir",
    heading2: "Pooja Cloth",
    text: "Yellow, White, Black Pooja Cloth, Pooja Cloth, Pooja Cloth for Mandir, Cotton Pooja Cloth, Pooja Ka Kapda, Kapda for Mandir, Pooja Ashni, Pooja Chunri, Puja Cloth (Yellow)...",
    icon: amazon_logo,
    link: "https://amzn.to/4maXc14",
  },
  {
    id: "24",
    image: p24,
    heading1: "Turmeric Sticks",
    heading2: "Haldi Ki Gadd",
    text: "HERBAL FRESH Dried Turmeric Sticks,50 grams, Haldi Kadi, Haldi Gatiya, Sabut Haldi,(pack of 1 x 50 grams)...",
    icon: amazon_logo,
    link: "https://amzn.to/47lH9Zx",
  },
  {
    id: "25",
    image: p25,
    heading1: "Betel Nut",
    heading2: "Kaddi Supari",
    text: "Puja Supari Sabut 50 Gr - Areca Nut - Betel Nut | FSSAI, GMP, ISO Certified...",
    icon: amazon_logo,
    link: "https://amzn.to/3J9GPD7",
  },
  {
    id: "26",
    image: p26,
    heading1: "Kalawa",
    heading2: "Moli Sacred Thread",
    text: "Pooja Kalawa Moli Sacred Thread,Shudh Dhaga Pack Of 4 Red&Yellow Raksha Sutra/Nada Chhadi/Thread Roll...",
    icon: amazon_logo,
    link: "https://amzn.to/3IXGe7F",
  },
  {
    id: "27",
    image: p27,
    heading1: "Janeu",
    heading2: "Pure Cotton Janeu",
    text: "Cotton Janeu Sacred Thread for Puja – Mota Dhaga Upanayan Thread for Brahmins | Pure Cotton Janeu for Rituals, Worship, and Spiritual Blessings (Pack of 10 Pcs)...",
    icon: amazon_logo,
    link: "https://amzn.to/3Ukg2Xb",
  },
  {
    id: "28",
    image: p28,
    heading1: "Kande",
    heading2: "Desi Gau ke kande",
    text: "100% Desi Cow Dung Cake/Kande (Pack of 16) for havan Pooja, Handmade Desi Gau ke kande/Upla/uplay for Religious Purpose-490g...",
    icon: amazon_logo,
    link: "https://amzn.to/45ny7sy",
  },
  {
    id: "29",
    image: p29,
    heading1: "Sugercane",
    heading2: "Sugercane Plant",
    text: "THE GREEN VIEW GARDENS__ SUGERCANE PLANT | Philipine Black Sugercane Plant | SUGARCANE SEEDLING PLANT | A021...",
    icon: amazon_logo,
    link: "https://amzn.to/458PNt3",
  },
  {
    id: "30",
    image: p30,
    heading1: "Thekua",
    heading2: "Deshi Ghee ka Thekua",
    text: "Thekua 450 Grams | Handmade Cookies by DFC | Thekua is Prepared From White Til, Coconut, Deshi Ghee Fennel Seed, Sujee, Whole Wheat Flour & Jaggery | Energy Boosting | Hunger Relief...",
    icon: amazon_logo,
    link: "https://amzn.to/40XbJVw",
  },
  {
    id: "31",
    image: p31,
    heading1: "Thekua",
    heading2: "Bihari Sweet Thekua",
    text: "Crispy Thekua by Piku Bites Homemade Cookies | Bihari Sweet Snacks Biscuits (400GM); prepared using Maida, Sugar, Ghee, Suji, White Til, Sauf, Cardamom, Kismis, Dry Dates, Dry Coconut, etc....",
    icon: amazon_logo,
    link: "https://amzn.to/41qrLHp",
  },
  {
    id: "32",
    image: p32,
    heading1: "Sancha",
    heading2: "Khajoor Mould Sancha",
    text: "Traditional Desi Thekua/Khajoor Mould Sancha Brown...",
    icon: amazon_logo,
    link: "https://amzn.to/4mqa8ja",
  },
  {
    id: "33",
    image: p33,
    heading1: "Khajoor Mould",
    heading2: "Thekua Sancha",
    text: "Premium Handmade Pure Sheesham Wood Thekua Khajoor Mould (Thekua Sancha) Pack of 1 Piece (10 Inch)...",
    icon: amazon_logo,
    link: "https://amzn.to/3J60p3m",
  },
  {
    id: "34",
    image: p34,
    heading1: "Mould",
    heading2: "Thekua Sanecha",
    text: "Made in India Thekua/Khajoor Mould (Thekua Sanecha) Pack of 1 Big Size and 1 Small Size (Medium) (Extra Large)...",
    icon: amazon_logo,
    link: "https://amzn.to/41qs84L",
  },
  {
    id: "35",
    image: p35,
    heading1: "Turmeric Plant",
    heading2: "Live Plants",
    text: "Live Plants Nursery Garden Haldi, Turmeric, Curcuma (Yellow) - Plant...",
    icon: amazon_logo,
    link: "https://amzn.to/45okGZ4",
  },
  {
    id: "36",
    image: p36,
    heading1: "KACCHI HALDI",
    heading2: "ROOTS RAW TURMERIC",
    text: "KACCHI HALDI FRESH ROOTS RAW TURMERIC 100% CHEMICAL FREE NATURAL IMMUNITY BOOSTER TURMERIC SEEDS KHACHI HALDI (450 GM) | LIVE HOME GARDEN PLANT SEEDS...",
    icon: amazon_logo,
    link: "https://amzn.to/4muPVc3",
  },
  {
    id: "37",
    image: p37,
    heading1: "Banana Plant",
    heading2: "Live Banana",
    text: "Live Banana (Kela) Plant | Baromasi Fruit Giving | Booster Soil Used in 4 Inch Pot | Pack of 1 | Size : 10 Inch to 20 Inch...",
    icon: amazon_logo,
    link: "https://amzn.to/4mAnHwI",
  },
  {
    id: "38",
    image: p38,
    heading1: "Nariyal",
    heading2: "Nariyal For Puja",
    text: "Nariyal || Coconut || Nariyal for Pooja ...",
    icon: amazon_logo,
    link: "https://amzn.to/41yh1H5",
  },
  {
    id: "39",
    image: p39,
    heading1: "Desi Gur",
    heading2: "Jaggery Organic Cubes Bellam",
    text: "Desi Gur Gudd,Hand made Jaggery Cubes 900gms, Pure Natural, No Preservatives Added, Jaggery Cube, Gud Jaggery, Jaggery Organic Cubes Bellam Nattu Sakkarai 900 Grams...",
    icon: amazon_logo,
    link: "https://amzn.to/4fB3UuD",
  },
  {
    id: "40",
    image: p40,
    heading1: "Sattu",
    heading2: "Roasted Bengal Gram Atta",
    text: "Chana Sattu Flour/Atta| Patented Cold Pressed Flour | Slow Ground | Roasted Bengal Gram Atta| High Protein | Sattu Drink Powder | Gluten Free | 1 kg...",
    icon: amazon_logo,
    link: "https://amzn.to/4m3gTaK",
  },
  // {
  //   id: "",
  //   image: "",
  //   heading1: "",
  //   heading2: "",
  //   text: "...",
  //   icon: amazon_logo,
  //   link: "",
  // },
  // {
  //   id: "",
  //   image: "",
  //   heading1: "",
  //   heading2: "",
  //   text: "...",
  //   icon: amazon_logo,
  //   link: "",
  // },
];
const ChhathPuja = () => {
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
    const itemsRef = ref(db, "chhathpuja");
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
          Chhath Puja Celebration Items
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

export default ChhathPuja;
