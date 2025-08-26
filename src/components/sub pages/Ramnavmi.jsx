import React, { useState, useEffect } from "react";
import amazon_logo from "../../assets/amazon_logo.jpg";
import { db } from "../../firebase"; // adjust path to your firebase.js
import { ref, onValue } from "firebase/database";

import fetchFirebaseProducts from "../Admin/Festivalpages/FetchFirebaseProducts";

import p1 from "../../assets/Ram_navmi/p1.jpg";
import p2 from "../../assets/Ram_navmi/p2.jpg";
import p3 from "../../assets/Ram_navmi/p3.jpg";
import p4 from "../../assets/Ram_navmi/p4.jpg";
import p5 from "../../assets/Ram_navmi/p5.jpg";
import p6 from "../../assets/Ram_navmi/p6.jpg";
import p7 from "../../assets/Ram_navmi/p7.jpg";
import p8 from "../../assets/Ram_navmi/p8.jpg";
import p9 from "../../assets/Ram_navmi/p9.jpg";
import p10 from "../../assets/Ram_navmi/p10.jpg";
import p11 from "../../assets/Ram_navmi/p11.jpg";
import p12 from "../../assets/Ram_navmi/p12.jpg";
import p13 from "../../assets/Ram_navmi/p13.jpg";
import p14 from "../../assets/Ram_navmi/p14.jpg";
import p15 from "../../assets/Ram_navmi/p15.jpg";
// import p1 from "../../assets/Ram_navmi/p1.jpg";
// import p1 from "../../assets/Ram_navmi/p1.jpg";
// import p1 from "../../assets/Ram_navmi/p1.jpg";
// import p1 from "../../assets/Ram_navmi/p1.jpg";
// import p1 from "../../assets/Ram_navmi/p1.jpg";
// import p1 from "../../assets/Ram_navmi/p1.jpg";
// import p1 from "../../assets/Ram_navmi/p1.jpg";
// import p1 from "../../assets/Ram_navmi/p1.jpg";
// import p1 from "../../assets/Ram_navmi/p1.jpg";
// import p1 from "../../assets/Ram_navmi/p1.jpg";
// import p1 from "../../assets/Ram_navmi/p1.jpg";

const featuredProducts = [
  {
    id: "1",
    image: p1,
    heading1: "Ram Darbar",
    heading2: "Ram Parivar Statue",
    text: "Ram Darbar Idol for Home Temple, Pooja Room, Diwali Gift| Ram Sita Murti | Ram Parivar Statue for Festivals, Blessings & Gifting | Suitable for Diwali, Dushhera...",
    icon: amazon_logo,
    link: "https://amzn.to/46xBkrF",
  },
  {
    id: "2",
    image: p2,
    heading1: "God Idols",
    heading2: "Ram Darbar Murti",
    text: "100% Pure Brass Ram Darbar Murti in Luxury Red Velvet Gift Box God Idols for Gifting | Best Wedding Gifts for Marriage Couple, Gifts for Couples...",
    icon: amazon_logo,
    link: "https://amzn.to/4fhWQTC",
  },
  {
    id: "3",
    image: p3,
    heading1: "Ram Lalla",
    heading2: "Metal Embossed Golden Idol",
    text: "Ram Lalla Ji Seated on Red Velvet Carpet Pooja Chowki Aasan Handcrafted Oxidized White Metal Embossed Golden Idol with Mala, Diya/ Oil Lamp Pooja Accessories for Ram Navmi, Vijay Dashmi, Diwali Poojan...",
    icon: amazon_logo,
    link: "https://amzn.to/4ml39Id",
  },
  {
    id: "4",
    image: p4,
    heading1: "Photo Frame",
    heading2: "Lord Ram ",
    text: "Lord Ram Photo Frame/Religious Murti For Worship/Pooja (Size, 5 X 7 Inch), Designed For Small Temples In Home/Flats. Photo Of Shri Ram For House Mandir, Ayodhya Wale, Gift Item - Wood...",
    icon: amazon_logo,
    link: "https://amzn.to/4fdA2UO",
  },
  {
    id: "5",
    image: p5,
    heading1: "Decoration Kit",
    heading2: "Shree Ram Janmotsav Banner",
    text: "Ram Navami Decoration Kit – 13 Pcs | Shree Ram Janmotsav Banner in Hindi with Bhagwa Flags, Valmiki, Shri Ram, Ayodhya Ram Mandir & Flower Cutouts for Pooja...",
    icon: amazon_logo,
    link: "https://amzn.to/4fdAX7O",
  },
  {
    id: "6",
    image: p6,
    heading1: "Dhawaj",
    heading2: "Bhagwa Jhanda",
    text: "Jai Shree Ram Flag - Ram Mandir Ayodhya Model Based Bhagwa Jhanda For Home, Office, Mandir Saffron Color Dhawaj Size 30 inch x 45 inch (Pack of 2)...",
    icon: amazon_logo,
    link: "https://amzn.to/41n5vhD",
  },
  {
    id: "7",
    image: p7,
    heading1: "Flag",
    heading2: "Kesari Pataka",
    text: "Ram Ji Flag for Home | Orange Flag of Jai Shri Ram Mandir Printed | Kesari Pataka | bhagwa Dwaj | Bhagwan Ramji ki dhwaja | kesari jhanda...",
    icon: amazon_logo,
    link: "https://amzn.to/44VoLVU",
  },
  {
    id: "8",
    image: p8,
    heading1: "Murti",
    heading2: "Ram Lalla",
    text: "Ram Lalla Idol Murti Ayodhya Model | Wooden MDF Shree Ram Lalla showpiece and Figurine for Home Decor & Gifts, Temple...",
    icon: amazon_logo,
    link: "https://amzn.to/4ldl5DL",
  },
  {
    id: "9",
    image: p9,
    heading1: "Mandir",
    heading2: "Ram Mandir Ayodhya",
    text: "Shree Ram Mandir Ayodhya Model Gift, Ram Mandir for Home Office Shop, 3D Shri Ram Darba...",
    icon: amazon_logo,
    link: "https://amzn.to/4lT0SUJ",
  },

  {
    id: "10",
    image: p10,
    heading1: "Dhanush",
    heading2: "Brass Dhanush for Pooja",
    text: "Brass Jai Shree Ram Dhanush for Home Decor Mandir Pooja Showpiece Car Dashboard | Bow and Arrow 4 Inch...",
    icon: amazon_logo,
    link: "https://amzn.to/45kRr9N",
  },
  {
    id: "11",
    image: p11,
    heading1: "Mantra Chanting Box",
    heading2: "Bhajan Chanting Box",
    text: "Shri Ram (Bhajan) Mantra Chanting Box (Portable)...",
    icon: amazon_logo,
    link: "https://amzn.to/4mkmEAy",
  },
  {
    id: "12",
    image: p12,
    heading1: "Book",
    heading2: "Ram Charitmanas",
    text: "Shri Ram Charitmanas Shriramcharitmanas Tulsidas : श्री राम चरितमानस (Awadhi Language)...",
    icon: amazon_logo,
    link: "https://amzn.to/45ewlKe",
  },
  {
    id: "13",
    image: p13,
    heading1: "Book",
    heading2: "Shri Ramcharitmanas",
    text: "Ramcharitmanas Geeta Press Gorakhpur | Ramayan Book In Hindi | Ramcharitmanas Hindi | Ram Charit Manas With Stand...",
    icon: amazon_logo,
    link: "https://amzn.to/4l4ZXiY",
  },
  {
    id: "14",
    image: p14,
    heading1: "Book Stand",
    heading2: " Book Stand",
    text: "Essentials Sheesham Wooden Hand Carved Holy Book Stand for Quran Bible Bhagwat Gita Ramayana & Guru Granth Sahib for Reading Rehal Stand 12 inch...",
    icon: amazon_logo,
    link: "https://amzn.to/40KtQOe",
  },
  {
    id: "15",
    image: p15,
    heading1: "Wooden Murti",
    heading2: "Wooden Lord Ram Ji Murti",
    text: "Shri Ram Idol for Ram Navami | Wooden Lord Ram Ji Murti for Home Temple & Pooja Mandir | Divine Ram Ji Statue for Spiritual Decor & Gifting...",
    icon: amazon_logo,
    link: "https://amzn.to/3IWi0KO",
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
];

const Ramnavmi = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [getProduct, setGetProduct] = useState([]);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const loadData = async () => {
      const firebaseData = await fetchFirebaseProducts();
      console.log(" Firebase se aaya data:", firebaseData);
    };
    loadData();
  }, []);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;
  // const ProductDisplay => ({ isMobile, isTablet }) => {

  useEffect(() => {
    const itemsRef = ref(db, "ramnavami"); // same path as AdminRamnavami
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      // const icon = { amazon_logo };
      if (data) {
        const arr = Object.values(data);
        // format according to your UI
        const formatted = arr.map((item) => ({
          id: item.id,
          image: item.image,
          heading1: item.heading,
          heading2: item.subHeading,
          text: item.text, // placeholder (optional)
          link: item.link,
          icon: amazon_logo,
          Categories: item.Categories,
        }));

        const sorted = formatted.sort((a, b) => b.id - a.id);

        setGetProduct(sorted);
      } else {
        setGetProduct([]);
      }
    });
  }, []);

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
          Ramnavmi Celebration Items
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
      {/* Product Cards */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: isTablet ? "30px" : "40px",
          cursor: "pointer",
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

      {/* getting data from firebase  */}

      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: isTablet ? "30px" : "40px",
          cursor: "pointer",
          marginTop: "40px",
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
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
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
                  >
                    <span>Buy</span>
                    <img
                      src={item?.icon}
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
    </div>
  );
};

export default Ramnavmi;
