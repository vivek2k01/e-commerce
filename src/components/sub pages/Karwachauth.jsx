import React, { useState, useEffect } from "react";
import amazon_logo from "../../assets/amazon_logo.jpg";
import { db } from "../../firebase";
import { ref, onValue } from "firebase/database";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
// 🔽 ADD: reusable hook + modal
import { useUserData } from "../../components/useUserData";
import UserDetailsModal from "../UserDetailsModal";

import p1 from "../../assets/Karwachauth/p1.jpg";
import p2 from "../../assets/Karwachauth/p2.jpg";
import p3 from "../../assets/Karwachauth/p3.jpg";
import p4 from "../../assets/Karwachauth/p4.jpg";
import p5 from "../../assets/Karwachauth/p5.jpg";
import p6 from "../../assets/Karwachauth/p6.jpg";
import p7 from "../../assets/Karwachauth/p7.jpg";
import p8 from "../../assets/Karwachauth/p8.jpg";
import p9 from "../../assets/Karwachauth/p9.jpg";
import p10 from "../../assets/Karwachauth/p10.jpg";
import p11 from "../../assets/Karwachauth/p11.jpg";
import p12 from "../../assets/Karwachauth/p12.jpg";
import p13 from "../../assets/Karwachauth/p13.jpg";
import p14 from "../../assets/Karwachauth/p14.jpg";
import p15 from "../../assets/Karwachauth/p15.jpg";
import p16 from "../../assets/Karwachauth/p16.jpg";
import p17 from "../../assets/Karwachauth/p17.jpg";
import p18 from "../../assets/Karwachauth/p18.jpg";
import p19 from "../../assets/Karwachauth/p19.jpg";
import p20 from "../../assets/Karwachauth/p20.jpg";
import p21 from "../../assets/Karwachauth/p21.jpg";
import p22 from "../../assets/Karwachauth/p22.jpg";
import p23 from "../../assets/Karwachauth/p23.jpg";
import p24 from "../../assets/Karwachauth/p24.jpg";
import p25 from "../../assets/Karwachauth/p25.jpg";
import p26 from "../../assets/Karwachauth/p26.jpg";
import p27 from "../../assets/Karwachauth/p27.jpg";
import p28 from "../../assets/Karwachauth/p28.jpg";
import p29 from "../../assets/Karwachauth/p29.jpg";
import p30 from "../../assets/Karwachauth/p30.jpg";
import p31 from "../../assets/Karwachauth/p31.jpg";
import p32 from "../../assets/Karwachauth/p32.jpg";
import p33 from "../../assets/Karwachauth/p33.jpg";
import p34 from "../../assets/Karwachauth/p34.jpg";
import p35 from "../../assets/Karwachauth/p35.jpg";
import p36 from "../../assets/Karwachauth/p36.jpg";
import p37 from "../../assets/Karwachauth/p37.jpg";
import p38 from "../../assets/Karwachauth/p38.webp";
import p39 from "../../assets/Karwachauth/p39.jpg";
import p40 from "../../assets/Karwachauth/p40.jpg";
// import p41 from "../../assets/Karwachauth/p41.jpg";

const featuredProducts = [
  {
    id: "1",
    image: p1,
    heading1: "Thali Set",
    heading2: "Pooja Stainless",
    text: " Karwachauth Thali Set - Karwachauth Pooja Stainless Steel Thali Set - Channi/Lota/Diya/Bowls/Kalash...",
    icon: amazon_logo,
    link: "https://amzn.to/4fnuMhL",
  },
  {
    id: "2",
    image: p2,
    heading1: "Decorative Pooja Thali",
    heading2: "Stainless Steel Thali Set",
    text: "Karwa Chauth Traditional and Decorative Pooja Thali Set | Stainless Steel Thali Set | Lota, Kalash, Diya, and Bowls | Trafitional Poooja Thalis | Channi Lota Included (Pattern 9)...",
    icon: amazon_logo,
    link: "https://amzn.to/4mtaqFX",
  },
  {
    id: "3",
    image: p3,
    heading1: "Puja samagri",
    heading2: "Designer Mitti ka Karwa",
    text: "karwachauth puja New Designer Mitti ka Karwa Designer Chalni Designer karwachauth Puja samagri Set of 2 for karwachauth Pooja...",
    icon: amazon_logo,
    link: "https://amzn.to/4lcFqcg",
  },
  {
    id: "4",
    image: p4,
    heading1: "Puja samagri",
    heading2: "Puja samagri for karwachauth",
    text: "karwachauth Puja Designer Mitti ka Karwa Designer Chalni Designer karwachauth Puja samagri for karwachauth Pooja !! Challan and Karwa !! karwachauth thali set...",
    icon: amazon_logo,
    link: "https://amzn.to/3J1jzHu",
  },
  {
    id: "5",
    image: p5,
    heading1: "Photo",
    heading2: " Karva Chauth and Ahoi Mata",
    text: "Karwa chauth Karva Chauth and Ahoi Mata ahoi ashtami Calendar/Poster Combo 12x18 inches...",
    icon: amazon_logo,
    link: "https://amzn.to/46K8XXm",
  },
  {
    id: "6",
    image: p6,
    heading1: "Book",
    heading2: "Vrat Katha Book",
    text: "Karva Chauth Vrat Katha Book (Ganesh Ji & Shiv Ji Ki Aarti Sahit (Fully Laminated) (Book Size - 14*20 Cm)...",
    icon: amazon_logo,
    link: "https://amzn.to/3Jm8Ebl",
  },
  {
    id: "7",
    image: p7,
    heading1: "Lota",
    heading2: "Karwa Chauth Lota",
    text: "Decorative Round Heavy Brass Karwa Chauth Lota Golden and Red Lota for Pooja, Festival, Diwali...",
    icon: amazon_logo,
    link: "https://amzn.to/47g2wLI",
  },
  {
    id: "8",
    image: p8,
    heading1: "Handicraft Thali",
    heading2: "Marble Puja Thali",
    text: "Handicraft Kingdom Marble Puja Thali for Aarti| Designer Decorative Round Shape Home Décor Pooja Plate Set for Office| Approx Size (9 inch) & Wt (810 gm) Pack of 5...",
    icon: amazon_logo,
    link: "https://amzn.to/3Jj6ppc",
  },
  {
    id: "9",
    image: p9,
    heading1: "Velvet THAALPOSH",
    heading2: "Prasad Thali Cover",
    text: "Combo of 2 Round Velvet THAALPOSH/Puja aasan for God Mandir/Prasad Thali Cover with moti Work for Diwali, Navratri, karwa chauth and Various Puja Rituals 18 inches Red & Pink...",
    icon: amazon_logo,
    link: "https://amzn.to/45E7il2",
  },
  {
    id: "10",
    image: p10,
    heading1: "Thaalposh",
    heading2: "Thaal Cover",
    text: "The Bride Made Round Velvet Thaalposh thaal Cover with moti Work for Diwali, Navratri, karwa chauth Shagun Wedding Pooja Karvachothand Various Puja Rituals 22 inches Maroon Colour...",
    icon: amazon_logo,
    link: "https://amzn.to/4lXzmWg",
  },
  {
    id: "11",
    image: p11,
    heading1: "Thali Set",
    heading2: " Puja Thalis for Karwa Chauth",
    text: "Handcrafted Decorative 6 Pc Complete Karwachauth Thali Set Puja Thalis for Karwa Chauth Poojan Thali for Diwali Navratri Varalakshmi Lakshmi Ganesh Aarti...",
    icon: amazon_logo,
    link: "https://amzn.to/4muH5Li",
  },
  {
    id: "12",
    image: p12,
    heading1: "Karwachauth",
    heading2: "Karwachauth Steel Thali Set",
    text: "Karwa Chauth Complete Thali Set | Indian Traditional Handcrafted Designer Karwachauth Steel Thali Set | Thali with Lota, Channi, Diya, Roli, Calendar and Story Book (Multicolor)...",
    icon: amazon_logo,
    link: "https://amzn.to/4muGskP",
  },
  {
    id: "13",
    image: p13,
    heading1: "Puja Samagri Kit",
    heading2: "Steel Thali Set",
    text: "Karwa Chauth Puja Samagri Kit - 30+ Items Including 6-Piece Stainless Steel Thali Set for MATA Pooja | Complete NavShringaar Saman for Vrat Katha, Karwa Chauth Pooja Kit Design- 1...",
    icon: amazon_logo,
    link: "https://amzn.to/4on4pwj",
  },
  {
    id: "14",
    image: p14,
    heading1: "Coconut",
    heading2: "Nariyal",
    text: "Coconut || Nariyal || Nariyal For Pooja || 1 Piece Nariyal",
    icon: amazon_logo,
    link: "https://amzn.to/45gWNmo",
  },
  {
    id: "15",
    image: p15,
    heading1: "Pooja Thali",
    heading2: "Handcrafted Karwa Chauth Thali",
    text: "Brown and Golden Decorative Handcrafted Stainless Steel Karwa Chauth Pooja Thali Set with Plate, Chalni, Lota & Chunri - Karva Chauth Puja Thali Set...",
    icon: amazon_logo,
    link: "https://amzn.to/45lRBh7",
  },
  {
    id: "16",
    image: p16,
    heading1: "16 Shringaar",
    heading2: "Artificial Jewelry Set",
    text: "16 Solah Shringaar Set Multipurpose Artificial Jewelry Set with Every Essential for Mataji Deviji Navratri Diwali Karwachauth Puja Set...",
    icon: amazon_logo,
    link: "https://amzn.to/3HhRDP4",
  },

  {
    id: "17",
    image: p17,
    heading1: "Chalni",
    heading2: "Chalni",
    text: "Karwa Chauth Channi | Sieve for Karwachauth Vrat | Chalni for Vrat | Red with Gold Accents, Multicolored Feathers - (Red)...",
    icon: amazon_logo,
    link: "https://amzn.to/3J36CwT",
  },

  {
    id: "18",
    image: p18,
    heading1: "Channi",
    heading2: "Channi for Karwachauth",
    text: "Karwachauth Stainless Steel sieves for Puja | Karwachauth Handcrafted Red Puja/Pooja Decorative Channi/Sieve Steel (1 Pieces, Red)...",
    icon: amazon_logo,
    link: "https://amzn.to/41sNu1q",
  },
  {
    id: "19",
    image: p19,
    heading1: "Karwachauth Set",
    heading2: "Karwa",
    text: "Premium Handcrafted Multicolor Clay Karwa |Karwachauth Set | Clay Karwa Pooja Set | Karwachatuh Puja Set | Home Decor | Gift Item (1 Pcs Kalash Set 1 Colourful Diya and 1 Pcs Natural Diya)...",
    icon: amazon_logo,
    link: "https://amzn.to/46KSulE",
  },
  {
    id: "20",
    image: p20,
    heading1: "16 Shringaar",
    heading2: "Artificial Jewelry Set",
    text: "16 Solah Shringaar Set Multipurpose Artificial Jewelry Set with Every Essential for Mataji Deviji Navratri Diwali Karwachauth Puja Set...",
    icon: amazon_logo,
    link: "https://amzn.to/457InpO",
  },
  {
    id: "21",
    image: p21,
    heading1: "Karwa",
    heading2: "Mitti ka  Karwa",
    text: "Karwa || karwaChauth Karwa (1 Pieces) with Beautiful Handicraft Work (red)...",
    icon: amazon_logo,
    link: "https://amzn.to/46FpBr5",
  },
  {
    id: "22",
    image: p22,
    heading1: "Karwa",
    heading2: "Karwachauth",
    text: "Karwachauth Puja Thali Set of 5 Shringaar Items - Karwa, Channi, Diya, Karwa Book & Photo, Purely Handmade and Decorated Fancy Karwa Set Made by Clay (Muticolour)...",
    icon: amazon_logo,
    link: "https://amzn.to/45KaUkz",
  },
  {
    id: "23",
    image: p23,
    heading1: "KarwaChauth",
    heading2: "KarwaChauth Thali Set",
    text: "Decorative Stainless Steel Designer KarwaChauth Thali Set Combo With 11 Pooja Samagri Kit - Traditional Karvachauth Gift for Wife, Sister, Mother, Women...",
    icon: amazon_logo,
    link: "https://amzn.to/4oooP85",
  },

  {
    id: "24",
    image: p24,
    heading1: "Diya",
    heading2: "Diya with Batti",
    text: "Pure Cow Ghee Diya with Batti – Pack of 100 | Ready-to-Use Wax-Free Ghee Wicks for Puja, Aarti & Festivals | 30-Min Burn Time | Pooja Essentials for Home, Temple & Rituals...",
    icon: amazon_logo,
    link: "https://amzn.to/455dl1N",
  },
  {
    id: "25",
    image: p25,
    heading1: "Lota",
    heading2: "Brass Lota",
    text: "Traditional Brass Lota | Kalash |Sombu | Theertha Sembu | Vessel |Jug | Karwachauth | Diwali | Mandir...",
    icon: amazon_logo,
    link: "https://amzn.to/4lcHfpC",
  },
  {
    id: "26",
    image: p26,
    heading1: "Chunnari",
    heading2: "Chunni",
    text: "Mata Rani Chunri/Chunni/Phatka for Mandir Pooja, Kanya Pujan and Navratri Festival...",
    icon: amazon_logo,
    link: "https://amzn.to/4m0h6eR",
  },
  {
    id: "27",
    image: p27,
    heading1: "Dupatta",
    heading2: "Heavy Gota Patti Work Dupatta",
    text: "Jaipuri Rajasthani Women's Tapeta Art silk bandhej Dupatta with Heavy Gota Patti Work (free size) (Red Heavy Bandhej)...",
    icon: amazon_logo,
    link: "https://amzn.to/3J3e4ba",
  },
  {
    id: "28",
    image: p28,
    heading1: "Chunri",
    heading2: "Chunri",
    text: "Rennial Bhandhej Marwari Broch Chunri & Piliya...",
    icon: amazon_logo,
    link: "https://amzn.to/3J0Nyzf",
  },
  {
    id: "29",
    image: p29,
    heading1: "Jewellery",
    heading2: "Artificial Jewellery",
    text: "Necklace Set for Women...",
    icon: amazon_logo,
    link: "https://amzn.to/4lgAYcu",
  },

  {
    id: "30",
    image: p30,
    heading1: "Jewellery",
    heading2: "Necklace Set",
    text: "Latest Stylish 18k Gold Plated Traditional Kundan Necklace Jewellery Set for Women...",
    icon: amazon_logo,
    link: "https://amzn.to/45jCa98",
  },
  {
    id: "31",
    image: p31,
    heading1: "Bangles",
    heading2: "Traditional Pearl Bangles",
    text: "Gold Plated Traditional Pearl Bangles for Women...",
    icon: amazon_logo,
    link: "https://amzn.to/4msNB5h",
  },
  {
    id: "32",
    image: p32,
    heading1: "Design Sticker",
    heading2: "Mehndi Stencil",
    text: "Unique Mehndi Stencil for Bridal Henna Tattoo | Easy to Use in 4 Steps | Mehandi Design Sticker for Women, Girls and Kids...",
    icon: amazon_logo,
    link: "https://amzn.to/45newsg",
  },
  {
    id: "33",
    image: p33,
    heading1: "Mehndi",
    heading2: "Mehndi Cones",
    text: "Mehendi Cone for Hand Designing, Henna Mehandi, Bridal Mehndi Cones for Wedding, Dulhan Mehndi, 12 Pieces in a Box...",
    icon: amazon_logo,
    link: "https://amzn.to/45o6TSE",
  },
  {
    id: "34",
    image: p34,
    heading1: "Mehendi",
    heading2: "Mehendi Cones",
    text: "Organics Natural Bridal Henna Mehendi Cones For Hand, Feet And Body Designs Fine Detailing With Long Lasting Dark Red Brown Colour Stain (Pack of 1)...",
    icon: amazon_logo,
    link: "https://amzn.to/3Ugp47y",
  },
  {
    id: "35",
    image: p35,
    heading1: "Sindoor Box",
    heading2: " Kumkum Box",
    text: "Golden Treasure Beautiful Handcrafted Gifting Sindoor Kumkum Box, Handmade Traditional Haldi Sindoor...",
    icon: amazon_logo,
    link: "https://amzn.to/46JxA6z",
  },
  {
    id: "36",
    image: p36,
    heading1: "Sindoor Dani",
    heading2: "Sindoor Box",
    text: "Wooden Handmade Round Sindoor Box with Meena Work Refillable Case Multicolour H 19 W 6 L 5 cm (Sindoor Dani Red)...",
    icon: amazon_logo,
    link: "https://amzn.to/3J1njsy",
  },
  {
    id: "37",
    image: p37,
    heading1: "Sindoor Box",
    heading2: "Sindoor Moti Dibbi",
    text: "Handicraft Fancy Sindoor Box for Gift with Tilak Stick | Pooja Articles Gifting Sindoor Moti Dibbi - kumkum Box with Beautiful Stick for Multi-Purpose...",
    icon: amazon_logo,
    link: "https://amzn.to/4fzJBxF",
  },
  {
    id: "38",
    image: p38,
    heading1: "Dhuni",
    heading2: "Dhuni Burner Holder",
    text: "Desi Handmade Natural Clay Dhoop Loban Dani/Dhuni Burner Holder/Pot Stand for Puja/Hawan/Dhuni [Shop/Office/Room/Gardan etc.] [Medium Size 100% Pure Mitti]...",
    icon: amazon_logo,
    link: "https://amzn.to/3UMSKcB",
  },
  {
    id: "39",
    image: p39,
    heading1: "Incense",
    heading2: "Aagarbati",
    text: "Mangaldeep Sugriha Mosquito Repellant Incense - Citronella (40 Sticks)...",
    icon: amazon_logo,
    link: "https://amzn.to/4lj6IxV",
  },
  {
    id: "40",
    image: p40,
    heading1: "Diya",
    heading2: "Deepak Oil Lamp",
    text: "Brass Diya Diwali Decoration Items for Home décor Gift Deepak Oil Lamp for Diwali Decoration Item, Daily Puja & Other Religious Rituals | Home Décor | Deepak for Home, Office & Temples ...",
    icon: amazon_logo,
    link: "https://amzn.to/40TDi21",
  },
  //   {
  //     id: "",
  //     image: "",
  //     heading1: "",
  //     heading2: "",
  //     text: "...",
  //     icon: amazon_logo,
  //     link: "",
  //   },
];
const Karwachauth = () => {
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
    const itemsRef = ref(db, "Karwachauth");
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
          Karwachauth Celebration Items
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

export default Karwachauth;
