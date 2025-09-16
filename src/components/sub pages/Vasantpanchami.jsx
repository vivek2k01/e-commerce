import React, { useState, useEffect } from "react";
import amazon_logo from "../../assets/amazon_logo.jpg";
import { db } from "../../firebase";
import { ref, onValue } from "firebase/database";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
// 🔽 ADD: reusable hook + modal
import { useUserData } from "../../components/useUserData";
import UserDetailsModal from "../UserDetailsModal";

import p1 from "../../assets/Vasantpanchami/p1.jpg";
import p2 from "../../assets/Vasantpanchami/p2.jpg";
import p3 from "../../assets/Vasantpanchami/p3.jpg";
import p4 from "../../assets/Vasantpanchami/p4.jpg";
import p5 from "../../assets/Vasantpanchami/p5.jpg";
import p6 from "../../assets/Vasantpanchami/p6.jpg";
import p7 from "../../assets/Vasantpanchami/p7.jpg";
import p8 from "../../assets/Vasantpanchami/p8.webp";
import p9 from "../../assets/Vasantpanchami/p9.webp";
import p10 from "../../assets/Vasantpanchami/p10.jpg";
import p11 from "../../assets/Vasantpanchami/p11.jpg";
import p12 from "../../assets/Vasantpanchami/p12.jpg";
import p13 from "../../assets/Vasantpanchami/p13.jpg";
import p14 from "../../assets/Vasantpanchami/p14.webp";
import p15 from "../../assets/Vasantpanchami/p15.webp";
import p16 from "../../assets/Vasantpanchami/p16.jpg";
import p17 from "../../assets/Vasantpanchami/p17.jpg";
import p18 from "../../assets/Vasantpanchami/p18.webp";
import p19 from "../../assets/Vasantpanchami/p19.webp";
import p20 from "../../assets/Vasantpanchami/p20.jpg";
import p21 from "../../assets/Vasantpanchami/p21.webp";
import p22 from "../../assets/Vasantpanchami/p22.webp";
import p23 from "../../assets/Vasantpanchami/p23.webp";
import p24 from "../../assets/Vasantpanchami/p24.jpg";
import p25 from "../../assets/Vasantpanchami/p25.webp";
import p26 from "../../assets/Vasantpanchami/p26.jpg";
import p27 from "../../assets/Vasantpanchami/p27.jpg";
import p28 from "../../assets/Vasantpanchami/p28.webp";

const featuredProducts = [
  {
    id: "1",
    image: p1,
    heading1: "Pooja Kit",
    heading2: "Saraswati Pujan Samagri",
    text: "Saraswati Puja Samagri Kit for Basant Panchami/Saraswati Pujan/Basant Panchami Pooja/Vasant Panchami Puja (45+ Items) with Detailed Puja Vidhi in Hindi",
    icon: amazon_logo,
    link: "https://amzn.to/4m5zTph",
  },
  {
    id: "2",
    image: p2,
    heading1: "Brass Idol",
    heading2: "Saraswati Ji Sitting Murti",
    text: "Brass 3 Inch Mata Sharada Playing Veena Idol For Home School Diwali Puja Gifting Goddess Saraswati Ji Sitting Murti Goddess Savitri Feng Shui For Vasant Panchami Pooja Maa Sarasvati Blessing Statue",
    icon: amazon_logo,
    link: "https://amzn.to/45EQwCf",
  },
  {
    id: "3",
    image: p3,
    heading1: "Meena Vadak Statue",
    heading2: "Maa Saraswati Murti",
    text: "Handicraft 7 Inches Beautiful Maa Saraswati Murti Sculpture Hindu Goddess Saraswati Ji Murti God Idol for Knowledge Meena Vadak Statue, Teachers Day Gift (Marble), Multicolor, Idol",
    icon: amazon_logo,
    link: "https://amzn.to/4frgZGF",
  },
  {
    id: "4",
    image: p4,
    heading1: "Idol",
    heading2: "Maa Saraswati Statue",
    text: "Pure Gold Coated White Saraswati Idol - Maa Saraswati Statue, Genuine 3 inch Saraswati Murti Small on Lotus with Veena - Handcrafted by Skilled Indian Artisan",
    icon: amazon_logo,
    link: "https://amzn.to/3GZi9Na",
  },
  {
    id: "5",
    image: p5,
    heading1: "Photo",
    heading2: "Saraswati Maa Photo",
    text: "Saraswati Maa UV Textured Home Decorative Gift Item Framed Painting 14 inch x 11 inch",
    icon: amazon_logo,
    link: "https://amzn.to/3UNnha6",
  },
  {
    id: "6",
    image: p6,
    heading1: "Pooja Kit",
    heading2: "Poojan Samagri",
    text: "Maa Saraswati Pooja Samagri/Kit",
    icon: amazon_logo,
    link: "https://amzn.to/4opyGe1",
  },
  {
    id: "7",
    image: p7,
    heading1: "Veena Playing Idol",
    heading2: "Saraswati Maa Murty",
    text: "Brass 4 Inches Saraswati Maa Murty II Goddess of Wisdom & Learning – Veena Playing Idol for Puja, Home Mandir & Gift",
    icon: amazon_logo,
    link: "https://amzn.to/4mxWB9n",
  },
  {
    id: "8",
    image: p8,
    heading1: "Kalash",
    heading2: "Kalash for Pooja",
    text: "Brass Kalash for Puja (Copper Kalash, 800 ML)",
    icon: amazon_logo,
    link: "https://amzn.to/3UepafZ",
  },
  {
    id: "9",
    image: p9,
    heading1: "Kalash",
    heading2: "Kalash for Pooja",
    text: " Kalash Design (Regular) Wedding Ceremony Item",
    icon: amazon_logo,
    link: "https://amzn.to/3GZiBek",
  },
  {
    id: "10",
    image: p10,
    heading1: "Diya",
    heading2: "Mitti Ke Diye",
    text: "Set of 5 Design (Fancy) Wedding Ceremony Item | Mud Sakori, Decorated with Red Cloth | Experience The Divine Touch | Tradition with Handcrafted Worshipping Product",
    icon: amazon_logo,
    link: "https://amzn.to/4monRHT",
  },
  {
    id: "11",
    image: p11,
    heading1: "Kalash",
    heading2: "Pooja Kalash",
    text: "Handicraft Decorative Kalash for Pooja | Lota | Kalash for Festive and Pooja| Pooja Kalash for Home (Pooja Kalash)",
    icon: amazon_logo,
    link: "https://amzn.to/45AGGkV",
  },
  {
    id: "12",
    image: p12,
    heading1: "Agarbatti Stick",
    heading2: " Natural Agarbatti Stick",
    text: "Incense Sticks – 40 Natural Agarbatti Stick for Pooja Needs | Free Wooden Stand | Traditional Sacred Aroma for Meditation, Pooja & Spiritual Cleansing | 100% Organic",
    icon: amazon_logo,
    link: "https://amzn.to/46NxVoQ",
  },
  {
    id: "13",
    image: p13,
    heading1: "Dhoop Stick",
    heading2: "Pooja Dhoop Sticks",
    text: "Premium Jar 5x100Gm | No Bamboo | No Charcoal | Dhoop Stick | Dhup | Pooja Dhoop Sticks (5 Flavours) Pack of 5 Jar Rose, MOGRA, Sandal, GUGGAL, LOBAN",
    icon: amazon_logo,
    link: "https://amzn.to/3GZjaVu",
  },
  {
    id: "14",
    image: p14,
    heading1: "Dhuni Cups",
    heading2: "Sambrani Hawan Dhoop",
    text: "Cow Panchgavya Dhuni Cups (Empty), Sambrani Hawan Dhoop Cups (50 Pieces)",
    icon: amazon_logo,
    link: "https://amzn.to/4fuAiPy",
  },
  {
    id: "15",
    image: p15,
    heading1: "Bress Diya",
    heading2: "Diya for Puja",
    text: "Om and Swastik Symbol Decorative Brass Diya - Akhand Diya for Puja - Diya for Diwali, Navratri - Brass Diya for Pooja Room, Home Temple Decor - Diwali Diya - Diwali Decoration Item",
    icon: amazon_logo,
    link: "https://amzn.to/4oEWVVM",
  },
  {
    id: "16",
    image: p16,
    heading1: "Diye",
    heading2: "Traditional Diye",
    text: "Natural Clay Traditional Diwali Ke Diye | Earthen Clay Diya | Mitti Ka Diva | Diyas for Pooja (Set of 12)",
    icon: amazon_logo,
    link: "https://amzn.to/4fuAuOM",
  },
  {
    id: "17",
    image: p17,
    heading1: "Loban",
    heading2: "Loban Solid Crystals",
    text: "Kasturi Loban Solid Crystals Jar Super Premium A Grade for Dhoop Havan Natural Air Purifier Pack of 1 100 gm",
    icon: amazon_logo,
    link: "https://amzn.to/4fvHL0O",
  },
  {
    id: "18",
    image: p18,
    heading1: "Camphor",
    heading2: "Bhimseni Camphor",
    text: "Bhimseni (Rose) Camphor 100g Jar - Pack of 1 | 100% Pure | for Puja, Aromatherapy & Air Freshener | Sweet Fragrance",
    icon: amazon_logo,
    link: "https://amzn.to/4lcu9st",
  },
  {
    id: "19",
    image: p19,
    heading1: "Dani",
    heading2: "Dani Burner Holder",
    text: "Desi Handmade Natural Clay Dhoop Loban Dani/Dhuni Burner Holder/Pot Stand for Puja/Hawan/Dhuni with Handle [Medium Size 100% Pure Mitti]",
    icon: amazon_logo,
    link: "https://amzn.to/4fnCjwS",
  },
  {
    id: "20",
    image: p20,
    heading1: "Diya with Batti",
    heading2: "Ghee Wicks for Prayers",
    text: "Pure Ghee Diya with Batti Pack of 100 Diyas | Pooja Room Items for Home | Wax Free | Ghee Wicks for Prayers, Rituals & Special Occasions | Burning Time: 30 mins",
    icon: amazon_logo,
    link: "https://amzn.to/3UVMb7v",
  },
  {
    id: "21",
    image: p21,
    heading1: "Cotton Wicks",
    heading2: "Gol Batti For Diya",
    text: "Phool Batti Round Cotton Wicks For Diya, Gol Batti For Puja, 2100 Pieces (Pack Of 1, White)",
    icon: amazon_logo,
    link: "https://amzn.to/3UP6PpT",
  },
  {
    id: "22",
    image: p22,
    heading1: "Diya Batti",
    heading2: "Pooja Ghee Batti",
    text: "Phool Batti Cow Ghee Diya Batti for Puja, 30 min Burning Time, 100% Wax Free Pooja Ghee Batti for Home Decoration, Festivals & Religious Rituals | Readymade Cotton Wicks (100)",
    icon: amazon_logo,
    link: "https://amzn.to/4mAKGru",
  },
  {
    id: "23",
    image: p23,
    heading1: "Chowki",
    heading2: "Marble Chowki for Puja",
    text: "Floral Art Design Marble Pooja Chowki for God | Handcrafted Marble Chowki for Puja Home Mandir, Idols Sitting, Pratima Murti (Pack of 2, Size: 4 x 4 Inch)",
    icon: amazon_logo,
    link: "https://amzn.to/3UQPZXI",
  },
  {
    id: "24",
    image: p24,
    heading1: "Chowki",
    heading2: "Wooden Chowki",
    text: "Brass Pooja Chowki| Wooden Chowki| Puja Bajot - 13 Inch (Golden) for Home Decor & Gifts",
    icon: amazon_logo,
    link: "https://amzn.to/4om59C1",
  },
  {
    id: "25",
    image: p25,
    heading1: "Chowki",
    heading2: "Wooden Puja Chowki",
    text: "Handcrafted Wooden Puja Chowki | Stool for Puja Idols |Wooden Puja Chowki Table for Festivals. Length 12 x Width 12 x Height 6 inch, Red",
    icon: amazon_logo,
    link: "https://amzn.to/4oqoceg",
  },
  {
    id: "26",
    image: p26,
    heading1: "Kumkum Holder",
    heading2: "Akshat Haldi Dibbi",
    text: "Chandan Roli/Tika Chopda Set/Chawal Akshat Haldi Dibbi/Kumkum Holder Box with Lid Brass Brass (Gold)",
    icon: amazon_logo,
    link: "https://amzn.to/4ooigSX",
  },
  {
    id: "27",
    image: p27,
    heading1: "Thali Set",
    heading2: "Brass Pooja Thali",
    text: "Pure Brass Pooja Thali Set with Floral Vines Embossed Design, Religious Spiritual Item, Home Temple, DIameter-10.1 Inch",
    icon: amazon_logo,
    link: "https://amzn.to/3UkaLyP",
  },
  {
    id: "28",
    image: p28,
    heading1: "Traditional Mala",
    heading2: " Garland for Photos",
    text: "Mala for Photo Frames and God Idols, Garland for Photos of Loved Ones, Traditional Mala for Ancestors and Pitra, Pooja Room (Purple, Pack of 1)",
    icon: amazon_logo,
    link: "https://amzn.to/40U4spm",
  },
];

const Vasantpanchami = () => {
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
    const itemsRef = ref(db, "vasantpanchami");
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
          margin: "45px 0",
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
          Vasant Panchami Celebration Items
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
          marginTop: "40px",
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

export default Vasantpanchami;
