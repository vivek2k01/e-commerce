import React, { useState, useEffect } from "react";
// 🔽 ADD: reusable hook + modal
import { useUserData } from "../../components/useUserData";
import UserDetailsModal from "../UserDetailsModal";

import { db } from "../../firebase";
import { ref, onValue } from "firebase/database";

import shivratri from "../../assets/mahashivratri1.jpg";
import ganeshchaturthi from "../../assets/ganeshchaturthi1.jpg";
import navdurgapooja from "../../assets/nav_durgapooja.jpg";
import diwali from "../../assets/diwali.jpg";
import holi from "../../assets/holi.jpg";
import ramnavami from "../../assets/ramnavmi.jpg";
import krishjanmastmi from "../../assets/krishnajanmashtmi.jpg";
import rakhi from "../../assets/rakhi.jpg";
import teej from "../../assets/teej.jpg";
import homedecore from "../../assets/homedecore1.jpg";
import icon from "../../assets/amazon_logo.jpg";
import mukhi from "../../assets/1mukhi.jpg";
import mukhi2 from "../../assets/mukhi2.jpg";
import mukhi3 from "../../assets/mukhi3.jpg";
import mukhi4 from "../../assets/mukhi4.jpg";
import mukhi5 from "../../assets/mukhi5.jpg";
import mukhi6 from "../../assets/mukhi6.jpg";
import mukhi7 from "../../assets/mukhi7.jpg";
import mukhi8 from "../../assets/mukhi8.jpg";
import mukhi10 from "../../assets/mukhi10.jpg";
import mukhi11 from "../../assets/mukhi11.jpg";
import somanth from "../../assets/somanth.jpg";
import mahakal from "../../assets/mahakal.jpg";
import chhatpooja from "../../assets/chhatpooja.jpg";
import karwachouth from "../../assets/karwachouth.jpg";
import omkar from "../../assets/omkar.jpg";
import kashivishwnath from "../../assets/kashivishwnath.jpg";
import hanumanjynti from "../../assets/hanumanjaynati.jpg";
import vanshntpanchmi from "../../assets/vashntpanchami.jpg";
import makarshakranti from "../../assets/makarshkranti.jpg";
import trambkeshwar from "../../assets/tambkeshwar.jpg";
import bhimasankar from "../../assets/bhimasankar.jpg";
import nageshwar from "../../assets/nageshwar.jpg";
import mallikarajun from "../../assets/mallikarajun.jpg";
import kedarnath from "../../assets/kedarnath.jpg";
import rameshwar from "../../assets/rameshwar.jpg";
import baithnath from "../../assets/baithnath.jpg";
import grishneshwar from "../../assets/ghishneshwar.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { NavLink } from "react-router-dom";

const history = [
  {
    id: "1",
    heading: "Somnath Mahadev",
    image: somanth,
    text: "The Somnath Temple, located in Gujarat, is one of the twelve Jyotirlingas of Lord Shiva and holds immense spiritual significance. It has been destroyed and rebuilt several times throughout history, symbolizing resilience and devotion. The original temple is believed to have been built in ancient times, with references in texts dating back to the Rigveda. The present structure was reconstructed in 1951 under the leadership of Sardar Vallabhbhai Patel.",
  },
  {
    id: "2",
    heading: "Mahakaleshwar Ujjain",
    image: mahakal,
    text: "Mahakal, a fierce form of Lord Shiva, is worshipped at the Mahakaleshwar Jyotirlinga in Ujjain, Madhya Pradesh. It is one of the twelve Jyotirlingas and holds great significance in Hinduism. The temple is especially known for its unique Bhasma Aarti, where sacred ash is offered to the deity every morning.",
  },
  {
    id: "3",
    heading: "Omkareshwar Jyotirlinga",
    image: omkar,
    text: "Omkareshwar is one of the twelve revered Jyotirlingas of Lord Shiva, located on Mandhata Island in the Narmada River, Madhya Pradesh. The island is uniquely shaped like the sacred ‘ॐ’ symbol, enhancing its spiritual importance. Devotees visit Omkareshwar for peace, blessings, and spiritual enlightenment.",
  },
  {
    id: "4",
    heading: "Mallikarjuna Jyotirlinga",
    image: mallikarajun,
    text: "Mallikarjuna Jyotirlinga, located in Srisailam, Andhra Pradesh, is one of the twelve sacred Jyotirlingas of Lord Shiva. It represents the divine unity of Lord Shiva and Goddess Parvati. The temple is situated on the banks of the Krishna River and is a major pilgrimage site in South India.",
  },
  {
    id: "5",
    heading: "Nageshwar Jyotirlinga",
    image: nageshwar,
    text: "Nageshwar Jyotirlinga is located near Dwarka in Gujarat and is one of the twelve Jyotirlingas dedicated to Lord Shiva. It symbolizes protection from evil and is believed to grant freedom from all poisons — physical and spiritual. The temple features a towering statue of Lord Shiva and attracts devotees from across India.",
  },
  {
    id: "6",
    heading: "Bhimashankar Jyotirlinga",
    image: bhimasankar,
    text: "Bhimashankar Jyotirlinga is located in the Sahyadri hills of Maharashtra and is one of the twelve sacred Jyotirlingas of Lord Shiva. Surrounded by dense forests, it is also a rich biodiversity hotspot and part of a wildlife sanctuary. The temple holds great spiritual significance and is associated with the legend of Lord Shiva defeating the demon Bhima.",
  },
  {
    id: "7",
    heading: "Trimbakeshwar Jyotirlinga",
    image: trambkeshwar,
    text: "Trimbakeshwar Jyotirlinga is located in Trimbak near Nashik, Maharashtra, and is one of the twelve Jyotirlingas of Lord Shiva. The temple is unique as it houses three lingas representing Brahma, Vishnu, and Mahesh (Shiva). It is also the origin of the sacred Godavari River and a major site for Hindu rituals and pilgrimages.",
  },
  {
    id: "8",
    heading: "Grishneshwar Jyotirlinga",
    image: grishneshwar,
    text: "Grishneshwar Jyotirlinga is located near the Ellora Caves in Maharashtra and is the twelfth of the twelve Jyotirlingas of Lord Shiva. The temple is known for its beautiful architecture and spiritual significance. It is believed that devotion at this shrine grants peace, prosperity, and liberation from negative energies.",
  },
  {
    id: "9",
    heading: "Rameshwaram Jyotirlinga",
    image: rameshwar,
    text: "Rameshwaram Jyotirlinga, located in Tamil Nadu, is one of the twelve sacred Jyotirlingas dedicated to Lord Shiva. It is believed to have been established by Lord Rama before crossing to Lanka, making it both a Shaiva and Vaishnava pilgrimage site. The temple is renowned for its long corridors and sacred water tanks used for ritual purification.",
  },
  {
    id: "10",
    heading: "Kedarnath Jyotirlinga",
    image: kedarnath,
    text: "Kedarnath Jyotirlinga is located in the Himalayas of Uttarakhand and is one of the twelve revered Jyotirlingas of Lord Shiva. Situated at a high altitude, it is accessible only during specific months due to extreme weather. The temple holds deep spiritual significance and is a key site in the Char Dham Yatra.",
  },
  {
    id: "11",
    heading: "Kashi Vishwanath Jyotirlinga",
    image: kashivishwnath,
    text: "Kashi Vishwanath Jyotirlinga is located in Varanasi, Uttar Pradesh, and is one of the most sacred Jyotirlingas of Lord Shiva. It is believed that a visit to this temple leads to liberation (moksha) and spiritual awakening. The temple, situated on the banks of the Ganga, is a major center of devotion, culture, and history.",
  },
  {
    id: "12",
    heading: "Baba Baidyanath Jyotirlinga",
    image: baithnath,
    text: "Baba Baidyanath Jyotirlinga, also known as Vaijnath, is located in Deoghar, Jharkhand, and is one of the twelve Jyotirlingas of Lord Shiva. It is believed that Lord Shiva himself acted as a healer (Vaidya) here to cure Ravana's injuries. The temple attracts millions of devotees, especially during the Shravana month, for its spiritual and healing significance.",
  },
];
const MostValuableProduct = [
  {
    id: "1",
    heading: "1 Mukhi Rudraksha",
    image: mukhi,
    link: "https://amzn.to/4mcYLer",
    icon: icon,
  },
  {
    id: "2",
    heading: "2 Mukhi Rudraksha",
    image: mukhi2,
    link: "https://amzn.to/4lKZXWt",
    icon: icon,
  },
  {
    id: "3",
    heading: "3 Mukhi Rudraksha",
    image: mukhi3,
    link: "https://amzn.to/3H0TOq5",
    icon: icon,
  },
  {
    id: "4",
    heading: "4 Mukhi Rudraksha",
    image: mukhi4,
    link: "https://amzn.to/45jRDqR",
    icon: icon,
  },
  {
    id: "5",
    heading: "5 Mukhi Rudraksha",
    image: mukhi5,
    link: "https://amzn.to/4fqQLo5",
    icon: icon,
  },
  {
    id: "6",
    heading: "6 Mukhi Rudraksha",
    image: mukhi6,
    link: "https://amzn.to/45l5wVK",
    icon: icon,
  },
  {
    id: "7",
    heading: "7 Mukhi Rudraksha",
    image: mukhi7,
    link: "https://amzn.to/4f4k7bn",
    icon: icon,
  },
  {
    id: "8",
    heading: "8 Mukhi Rudraksha",
    image: mukhi8,
    link: "https://amzn.to/4mgyA6K",
    icon: icon,
  },
  {
    id: "9",
    heading: "10 Mukhi Rudraksha",
    image: mukhi10,
    link: "https://amzn.to/3H3NAFQ",
    icon: icon,
  },
  {
    id: "10",
    heading: "11 Mukhi Rudraksha",
    image: mukhi11,
    link: "https://amzn.to/40CKLSS",
    icon: icon,
  },
];

const festival = [
  {
    id: "1",
    image: shivratri,
    heading: "Maha Shivratri",
    link: "/Maha_shivratri",
  },
  {
    id: "2",
    image: ganeshchaturthi,
    heading: "Ganesh Chaturthi",
    link: "/Ganesh_Chaturthi",
  },
  {
    id: "3",
    image: navdurgapooja,
    heading: "Nav Durga Puja",
    link: "/Navdurga",
  },
  { id: "4", image: diwali, heading: "Diwali", link: "/Diwali" },
  { id: "5", image: holi, heading: "Holi", link: "/Holi" },
  { id: "6", image: ramnavami, heading: "Ram Navami", link: "/ramnavmi" },
  {
    id: "7",
    image: krishjanmastmi,
    heading: "Krishna Janmashtami",
    link: "/Krishna_janmashtami",
  },
  { id: "8", image: rakhi, heading: "Rakhsabandhan", link: "/Rakshabandhan" },
  { id: "9", image: teej, heading: "Teej", link: "/Teej" },
  {
    id: "10",
    image: karwachouth,
    heading: "Karwa Chauth",
    link: "/Karwachauth",
  },
  {
    id: "11",
    image: chhatpooja,
    heading: "Chhath Puja",
    link: "/ChhathPuja",
  },
  {
    id: "12",
    image: hanumanjynti,
    heading: "Hanuman Jayanti",
    link: "/Hanumanjayanti",
  },
  {
    id: "13",
    image: vanshntpanchmi,
    heading: "Vasant Panchami",
    link: "/Vasantpanchami",
  },
  {
    id: "14",
    image: makarshakranti,
    heading: "Makar Sankranti / Pongal /Gudi Padwa",
    link: "/Makarsankranti",
  },
  {
    id: "15",
    image: homedecore,
    heading: "Home Decore",
    link: "/Homedecore",
  },
];

// const images = [backphoto1, somnath1, somnath2, somnath3];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);

  // alert//
  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      alert(
        "Welcome to the website! 🙏This website is Affliated Page by Amazon."
      );
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  // ended
  // 🔽 ADD: hook state/actions
  const {
    showModal,
    setShowModal,
    formData,
    setFormData,
    handleProductAnchorClick,
    handleSubmit,
  } = useUserData();

  // Firebase se images laana
  useEffect(() => {
    const imgRef = ref(db, "coverPhotos");
    onValue(imgRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const imgArray = Object.entries(data).map(([id, item]) => ({
          id,
          url: item.url,
          link: item.link,
        }));
        setImages(imgArray);
      } else {
        setImages([]);
      }
    });
  }, []);

  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [images]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getColumns = () => {
    if (windowWidth < 600) return 1;
    if (windowWidth < 1024) return 3;
    return 5;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % history.length);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % history.length);
  };

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + history.length) % history.length);
  };

  // if (images.length === 0) {
  //   return <p style={{ textAlign: "center" }}>No images found...</p>;
  // }

  return (
    <div>
      {images.length === 0 ? (
        <p style={{ textAlign: "center" }}></p>
      ) : (
        <a
          href={images[currentSlide]?.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) =>
            handleProductAnchorClick(e, images[currentSlide]?.link)
          }
        >
          <img
            src={images[currentSlide]?.url}
            alt="Slider"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "600px",
              objectFit: "cover",
              transition: "opacity 1s ease-in-out",
              cursor: images[currentSlide]?.link ? "pointer" : "default",
              marginTop: "57px",
            }}
          />
        </a>
      )}

      {/* Festival Title */}
      <SectionTitle title="Hindu Festival's" windowWidth={windowWidth} />

      {/* Festival Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${getColumns()}, 1fr)`,
          gap: "20px",
          padding: "0 20px 40px 20px",
        }}
      >
        {festival?.map((item) => (
          <div>
            <NavLink to={item.link} style={{ textDecoration: "none" }}>
              <div
                key={item.id}
                style={{
                  background: "#f3ece7",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  padding: "10px",
                  textAlign: "center",
                  fontFamily: "Georgia, serif",
                  fontWeight: "bold",
                  color: "#4b2d1a",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 20px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
                }}
              >
                {item?.image ? (
                  <img
                    src={item.image}
                    alt={item.heading}
                    style={{
                      width: "100%",
                      height: "280px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      marginBottom: "10px",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      height: "120px",
                      background: "#ddd",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontStyle: "italic",
                      color: "#777",
                      marginBottom: "10px",
                    }}
                  >
                    No Image
                  </div>
                )}
                <div
                  style={{
                    fontSize: windowWidth < 500 ? "14px" : "16px",
                  }}
                >
                  {item?.heading}
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>

      {/* MVP Title */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          gap: "5px",
        }}
      >
        <SectionTitle title="Most Valuable Product" windowWidth={windowWidth} />
        <h4
          style={{
            fontSize:
              windowWidth < 500 ? "14px" : windowWidth < 768 ? "18px" : "22px",
            fontWeight: "normal",
            margin: 0,
            paddingBottom: "10px",
          }}
        >
          Every Rudraksha is certified
        </h4>
      </div>

      {/* MVP Products Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${getColumns()}, 1fr)`,
          gap: "20px",
          padding: "0 20px 40px 20px",
        }}
      >
        {MostValuableProduct.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              gap: "20px",
            }}
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                textDecoration: "none",
              }}
              onClick={(e) => handleProductAnchorClick(e, item.link)}
            >
              <div
                style={{
                  background: "#fff",
                  borderRadius: "50%",
                  overflow: "hidden",
                  width: "100%",
                  height: "280px",
                  textAlign: "center",
                  fontFamily: "Georgia, serif",
                  fontWeight: "bold",
                  color: "#4b2d1a",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 20px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
                }}
              >
                <img
                  src={item.image}
                  alt={item.heading}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </a>
            <span
              style={{
                fontWeight: "600",
                fontFamily: "Georgia, serif",
              }}
            >
              {item.heading}
            </span>
          </div>
        ))}
      </div>
      {/* hestory */}
      <SectionTitle
        title="History about 12 jyotirlinga"
        windowWidth={windowWidth}
      />
      <div
        style={{
          width: "80%",
          margin: "auto",
          textAlign: "center",
          position: "relative",
        }}
      >
        {history.map((item, index) => (
          <div
            key={item.id}
            style={{
              display: current === index ? "flex" : "none",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              padding: "20px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              flexDirection: window.innerWidth < 768 ? "column" : "row",
              alignItems: "center",
              gap: "20px",
              transition: "all 0.5s ease-in-out",
              minHeight: "300px", // Fixed height
              height: "100%", // Allow inner flexibility
              flexWrap: "wrap", // Responsive support
            }}
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.heading}
                style={{
                  width: "180px",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "50%", // Makes it circular
                  border: "4px solid #eee",
                }}
              />
            )}
            <div style={{ textAlign: "left", flex: 1 }}>
              <h2 style={{ color: "#3A2517" }}>{item.heading}</h2>
              <p
                style={{
                  marginTop: "15px",
                  fontSize: "1.05rem",
                  lineHeight: "1.6",
                }}
              >
                {item.text}
              </p>
            </div>
          </div>
        ))}

        {/* 🔽 ADD: reusable modal include (UI consistent) */}
        <UserDetailsModal
          showModal={showModal}
          setShowModal={setShowModal}
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />

        {/* Navigation Buttons */}
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onClick={goPrev}
            style={{
              marginRight: "10px",
              padding: "10px 20px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#3A2517",
              color: "#ddd",
              cursor: "pointer",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <ArrowBackIcon /> Prev
          </button>
          <button
            onClick={goNext}
            style={{
              padding: "10px 20px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#3A2517",
              color: "#ddd",
              cursor: "pointer",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            Next
            <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

const SectionTitle = ({ title, windowWidth }) => (
  <div
    style={{
      display: "flex",
      flexDirection: windowWidth < 768 ? "column" : "row",
      alignItems: "center",
      justifyContent: "center",
      margin: "20px",
      textAlign: "center",
      gap: windowWidth < 768 ? "10px" : "20px",
    }}
  >
    <hr
      style={{
        width: windowWidth < 768 ? "60%" : "30%",
        height: "2px",
        background: "#6B3A1D",
        border: "none",
      }}
    />
    <span
      style={{
        fontSize: windowWidth < 768 ? "24px" : "36px",
        color: "#6B3A1D",
        fontFamily: "Georgia, serif",
        fontWeight: "bold",
      }}
    >
      {title}
    </span>
    <hr
      style={{
        width: windowWidth < 768 ? "60%" : "30%",
        height: "2px",
        background: "#6B3A1D",
        border: "none",
      }}
    />
  </div>
);

export default Home;
