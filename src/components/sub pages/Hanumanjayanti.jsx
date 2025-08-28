import React, { useState, useEffect } from "react";
import amazon_logo from "../../assets/amazon_logo.jpg";

import { db } from "../../firebase";
import { ref, onValue } from "firebase/database";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

import p1 from "../../assets/Hanumanjayanti/p1.jpg";
import p2 from "../../assets/Hanumanjayanti/p2.jpg";
import p3 from "../../assets/Hanumanjayanti/p3.jpg";
import p4 from "../../assets/Hanumanjayanti/p4.jpg";
import p5 from "../../assets/Hanumanjayanti/p5.jpg";
import p6 from "../../assets/Hanumanjayanti/p6.jpg";
import p7 from "../../assets/Hanumanjayanti/p7.jpg";
import p8 from "../../assets/Hanumanjayanti/p8.jpg";
import p9 from "../../assets/Hanumanjayanti/p9.jpg";
import p10 from "../../assets/Hanumanjayanti/p10.jpg";
import p11 from "../../assets/Hanumanjayanti/p11.jpg";
import p12 from "../../assets/Hanumanjayanti/p12.jpg";
import p13 from "../../assets/Hanumanjayanti/p13.jpg";
import p14 from "../../assets/Hanumanjayanti/p14.jpg";
import p15 from "../../assets/Hanumanjayanti/p15.jpg";
import p16 from "../../assets/Hanumanjayanti/p16.jpg";
import p17 from "../../assets/Hanumanjayanti/p17.jpg";
import p18 from "../../assets/Hanumanjayanti/p18.jpg";
import p19 from "../../assets/Hanumanjayanti/p19.jpg";
import p20 from "../../assets/Hanumanjayanti/p20.jpg";
import p21 from "../../assets/Hanumanjayanti/p21.jpg";
import p22 from "../../assets/Hanumanjayanti/p22.jpg";
import p23 from "../../assets/Hanumanjayanti/p23.jpg";
import p24 from "../../assets/Hanumanjayanti/p24.jpg";
import p25 from "../../assets/Hanumanjayanti/p25.jpg";
import p26 from "../../assets/Hanumanjayanti/p26.webp";
import p27 from "../../assets/Hanumanjayanti/p27.webp";
import p28 from "../../assets/Hanumanjayanti/p28.jpg";
import p29 from "../../assets/Hanumanjayanti/p29.jpg";
import p30 from "../../assets/Hanumanjayanti/p30.jpg";
import p31 from "../../assets/Hanumanjayanti/p31.jpg";
import p32 from "../../assets/Hanumanjayanti/p32.jpg";
import p33 from "../../assets/Hanumanjayanti/p33.jpg";
import p34 from "../../assets/Hanumanjayanti/p34.jpg";
import p35 from "../../assets/Hanumanjayanti/p35.jpg";
import p36 from "../../assets/Hanumanjayanti/p36.jpg";
import p37 from "../../assets/Hanumanjayanti/p37.jpg";
import p38 from "../../assets/Hanumanjayanti/p38.jpg";
import p39 from "../../assets/Hanumanjayanti/p39.jpg";
import p40 from "../../assets/Hanumanjayanti/p40.jpg";
// import p41 from "../../assets/Hanumanjayanti/p41.jpg";
// import p42 from "../../assets/Hanumanjayanti/p42.jpg";
// import p43 from "../../assets/Hanumanjayanti/p43.jpg";
// import p44 from "../../assets/Hanumanjayanti/p44.jpg";
// import p45 from "../../assets/Hanumanjayanti/p45.jpg";
// import p46 from "../../assets/Hanumanjayanti/p46.jpg";
// import p47 from "../../assets/Hanumanjayanti/p47.jpg";
// import p48 from "../../assets/Hanumanjayanti/p48.jpg";
// import p49 from "../../assets/Hanumanjayanti/p49.jpg";
// import p50 from "../../assets/Hanumanjayanti/p50.jpg";
// import p51 from "../../assets/Hanumanjayanti/p51.jpg";
// import p52 from "../../assets/Hanumanjayanti/p52.jpg";

const featuredProducts = [
  {
    id: "1",
    image: p1,
    heading1: "Hanuman Idol",
    heading2: "Handmade Lord Hanuman Murti",
    text: "Hanuman Murti | 1 Feet Hanuman Idol for Home | Handmade Lord Hanuman Ji Ki Murti – Antique Bronze Finish Religious Sculpture for Home Decor & Gift",
    icon: amazon_logo,
    link: "https://amzn.to/4or8XBI",
  },
  {
    id: "2",
    image: p2,
    heading1: "Panchmukhi Hanuman",
    heading2: "Brass Hanuman Statue",
    text: "Panchmukhi Hanuman Idol for Home Temple | Brass Hanuman Statue for Pooja, Vastu, Protection | 5 Faced Hanuman Murti for Gift & Home Decor - Hindu God Figurine",
    icon: amazon_logo,
    link: "https://amzn.to/46FsOH8",
  },
  {
    id: "3",
    image: p3,
    heading1: "Hanuman Jii Murti",
    heading2: "Panchmukhi Hanuman",
    text: "Panchmukhi Hanuman Murti | Embrace Ultimate Protection with Gold Plated Panchmukhi Hanuman Statue | Bajrangbali Idol for Temple, Mandir, Pooja, Car, Home and Office",
    icon: amazon_logo,
    link: "https://amzn.to/45mJvVh",
  },
  {
    id: "4",
    image: p4,
    heading1: "Statue",
    heading2: "Hanuman Ji Idol",
    text: "Handicraft Polyresin Panchmukhi Hanuman Ji Murti Statue for Pooja | Hanuman Ji Idol | Figurines Sculpture Bajrang Bali Idol (7 x 4 Inches)",
    icon: amazon_logo,
    link: "https://amzn.to/3Ho1L8S",
  },
  {
    id: "5",
    image: p5,
    heading1: "Clay Idol",
    heading2: "Panchmukhi Hanuman Ji",
    text: "Panchmukhi Hanuman Ji, Clay Idol to Protect from Shani and All Kind of Negative Energy (Beige, 5 x 3 x 8.5 inch)",
    icon: amazon_logo,
    link: "https://amzn.to/3HlmIRU",
  },
  {
    id: "6",
    image: p6,
    heading1: "Wall hanging",
    heading2: "Home Decor Items",
    text: "Wooden Jai Shree Ram Hanuman Mantra Wall hanging for Wall Decor | Home Decor Items | Size 19X9 Inches",
    icon: amazon_logo,
    link: "https://amzn.to/3UQSNUI",
  },
  {
    id: "7",
    image: p7,
    heading1: "Vastu",
    heading2: "Shri Hanuman Yantra",
    text: "Panchmukhi Hanuman Yantra Vastu Remedies for South, Sw Facing Main Door Home, Office, Business, Factory, Entrance Protection and Safeguard from Evil Eyes (3 x 3 Inch, Copper)",
    icon: amazon_logo,
    link: "https://amzn.to/4m7eoo4",
  },
  {
    id: "8",
    image: p8,
    heading1: "Gada",
    heading2: "Gada",
    text: "Hanuman Ji's Gada- Tum Rakshak Kahu ko Darna (Orange, 3.5 inches)",
    icon: amazon_logo,
    link: "https://amzn.to/4fwBZMA",
  },
  {
    id: "9",
    image: p9,
    heading1: "Wall Poster",
    heading2: "Hanuman Ji Religious Quotes Posters",
    text: "Hanuman Ji Mantra Wall Posters - Hanuman Ji Religious Quotes Posters - Lord Hanuman Ji Mantra Frames - Hanuman Ji Wall Framed Posters - Set of 1 Frame - 12x18 Inch",
    icon: amazon_logo,
    link: "https://amzn.to/3UQSV6E",
  },
  {
    id: "10",
    image: p10,
    heading1: "Flag",
    heading2: "Bhagwa Dhwaja",
    text: "Flying Bhagwa Bajrang Balli Hanuman Ji Jai Shree Ram Printed Flag Pataka Dhwaj Dhwaja Jhanda Big Size Indoor and Outdoor Size (30X40 Inch) (1)",
    icon: amazon_logo,
    link: "https://amzn.to/4mwrfQq",
  },
  {
    id: "11",
    image: p11,
    heading1: "Chola",
    heading2: "Hanuman Ji Chola",
    text: "Hanuman Ji Chola with Silver Bark Sindoor,Janau, Chameli Oil with Flag for Home/Temple/Festive Occassions",
    icon: amazon_logo,
    link: "https://amzn.to/3UhDHHH",
  },
  {
    id: "12",
    image: p12,
    heading1: "Idol",
    heading2: "Flying Hanuman Ji",
    text: "Hindu God Hanuman murti Flying Hanuman Ji Idol for & Home Temple Car Hanging for Rear Mirror",
    icon: amazon_logo,
    link: "https://amzn.to/4m9SxfG",
  },
  {
    id: "13",
    image: p13,
    heading1: "Chola",
    heading2: "vastra",
    text: "Hanuman ji Chola/vastra/Squire disiner Chola (Large)[18in]",
    icon: amazon_logo,
    link: "https://amzn.to/4m54AL6",
  },
  {
    id: "14",
    image: p14,
    heading1: "Painting",
    heading2: "Hanuman Wall Photo",
    text: "Hanuman Painting -Synthetic Wood, 27x30.5x1cm, Multicolour",
    icon: amazon_logo,
    link: "https://amzn.to/3J3ua4M",
  },
  {
    id: "15",
    image: p15,
    heading1: "Bajrangbali",
    heading2: "Bajrangbali Dhyan Mudra",
    text: "Hanuman Ji Murti Lord Bajrangbali Dhyan Mudra Meditation for Home Car Dashboard Decorative Showpiece - 11 cm (Resin, Gold) Gift",
    icon: amazon_logo,
    link: "https://amzn.to/4fwnIPY",
  },
  {
    id: "16",
    image: p16,
    heading1: "Chola",
    heading2: "Bajrangbali Handmade Dress",
    text: "Hanuman Ji warm Chola/Dress/Poshak/Vastra | Bajrangbali Handmade Dress Embroidered in Soft Velvet Fabric for winter Color Red/Orange",
    icon: amazon_logo,
    link: "https://amzn.to/46Ncbte",
  },
  {
    id: "17",
    image: p17,
    heading1: "book",
    heading2: "Hanuman Chalisa",
    text: "Hanuman Chalisa: Premium Hardback pocket book (English and Hindi), Hanuman ji ki Aarti, Bajrang Baan, Hindu Gods, Divine gift for daily chanting",
    icon: amazon_logo,
    link: "Bajrangbali Handmade Dress",
  },
  {
    id: "18",
    image: p18,
    heading1: "Murti",
    heading2: "Hanuman Jii Murti",
    text: "Colorful Polyresin Standing Lord Hanuman Statue with Mace - Auspicious Religious God Idol for Home, Office, Temple for Hanuman Jayanti Festival and Devotees",
    icon: amazon_logo,
    link: "https://amzn.to/3JnDGzB",
  },
  {
    id: "19",
    image: p19,
    heading1: "Lord Hanuman",
    heading2: "Lord Mahavir Statue",
    text: "God Hanuman Car Dashboard Lord Mahavir Statue Bajrangbali Spiritual Puja Vastu Religious Pooja Gift Item & Murti for Mandir/Temple/Home Decor/Office/Study Table",
    icon: amazon_logo,
    link: "https://amzn.to/3UOkmOx",
  },

  {
    id: "20",
    image: p20,
    heading1: "Pooja Item",
    heading2: "Pooja Kit For Hanuman Ji",
    text: "Shri Shyama Small Hanuman G Pooja Kit For Hanuman Ji pooja Special",
    icon: amazon_logo,
    link: "https://amzn.to/3JogKAc",
  },
  {
    id: "21",
    image: p21,
    heading1: "Chola Kit",
    heading2: "Complete Pooja Prayer Kit",
    text: "Hanuman Chola Kit ||Hanuman Ji 15 Items Pooja Kit, Complete Pooja Prayer Kit|| 1 Hanuman Chola kit",
    icon: amazon_logo,
    link: "https://amzn.to/3GZ5euE",
  },
  {
    id: "22",
    image: p22,
    heading1: "Resin Statue",
    heading2: "Bal Hanuman",
    text: "Polyresin Bal Hanuman Ji Handcrafted Resin Statue for Home and Office Decor, Dashboard, Temple,Gift Item, Living Room, Pooja Room",
    icon: amazon_logo,
    link: "https://amzn.to/4opmFVX",
  },
  {
    id: "23",
    image: p23,
    heading1: "Wall Hanging Hanuman Ji",
    heading2: "Printed Wooden Wall Art",
    text: "Quotes printed Wall Hanging Hanuman Ji Mantra Printed Wooden Wall Art Decor for Home Decoration With Adjustable Rope Decorative Item",
    icon: amazon_logo,
    link: "https://amzn.to/4oreZCC",
  },
  {
    id: "24",
    image: p24,
    heading1: "Bahubali Hanuman Ji",
    heading2: "Bajrangbali Idol",
    text: "Bahubali Hanuman Sculpture Bahubali Hanuman Ji for Car Dashboard, Home Decor, Pooja Room, Office Table, Wall Decor, Bajrangbali Idol Statue Showpiece, Decoration Gift Item",
    icon: amazon_logo,
    link: "https://amzn.to/4oEGWae",
  },
  {
    id: "25",
    image: p25,
    heading1: "Sindoor Powder",
    heading2: " Orange Sindoor for Pooja",
    text: "Hanumanji Chola Sindoor- 100g Pack | 100% Pure Sindoor Powder for Bajrangbali | Bright Orange Sindoor for Pooja, Tilak & Religious Rituals",
    icon: amazon_logo,
    link: "https://amzn.to/4fp5YG9",
  },
  {
    id: "26",
    image: p26,
    heading1: "Chameli Oil",
    heading2: "Jasmine Oil for Chola Poojan",
    text: "Chameli Oil for Hanuman Puja – 200ml | Pure Jasmine Oil for Chola Poojan, Hawan, Spiritual Healing, Diya Lighting & Hindu Rituals Chameli Oil For Hanuman Ji Chola",
    icon: amazon_logo,
    link: "https://amzn.to/45oNgJW",
  },
  {
    id: "27",
    image: p27,
    heading1: "Photo",
    heading2: "Shri Ram Darbar",
    text: "Lord Shri Ram, Laxman, Sita and Hanuman Hindu God Wooden Photo Frame (23x32cm, Multicolour)Rectangular, Wall Mount",
    icon: amazon_logo,
    link: "https://amzn.to/4moeeJf",
  },
  {
    id: "28",
    image: p28,
    heading1: "Photo Frame",
    heading2: "Hanuman Ji",
    text: "Lord Ram Sita With Hanuman Ji Photo Frame For Wall Mounted Painting (10 * 13.5 Inch)",
    icon: amazon_logo,
    link: "https://amzn.to/45CeXAi",
  },
  {
    id: "29",
    image: p29,
    heading1: "Aagarbatti",
    heading2: "100% Natural Fragrance",
    text: "White Sage Incense Sticks for Pooja, Puja, Meditation & Daily Use – 100% Natural Fragrance | Pack of 120 | Herbal Scent for Positivity, Relaxation & Energy Cleansing | Burn Time: 20–25 Minutes",
    icon: amazon_logo,
    link: "https://amzn.to/4m6amMN",
  },
  {
    id: "30",
    image: p30,
    heading1: "Oil With Batti",
    heading2: "Mustard Oil",
    text: "Mustard Pooja Oil WIth DIya Batti 220 ML For Hawan, Jagrata Akhandjyot Diya Pooja Oil God Worship 100% Pure 220 ML",
    icon: amazon_logo,
    link: "https://amzn.to/46QRJHX",
  },
  {
    id: "31",
    image: p31,
    heading1: "Aagarbatti",
    heading2: "Incense Sticks",
    text: "Sandalwood Incense Sticks 250g (Approx. 135 Handmade Sticks) with Free Holder | 45 Min Burn | Natural Charcoal-Free Agarbatti for Meditation, Yoga, Aromatherapy, Relaxation",
    icon: amazon_logo,
    link: "https://amzn.to/4fwO04E",
  },
  {
    id: "32",
    image: p32,
    heading1: "Eco-Friendly Plate",
    heading2: "Kamaal Patta Thali",
    text: "Kamaal Patta Thali/Plate Eco-Friendly (13 Inch, 30 Pieces) – Plain – Biodegradable Leaf Plate for Daily Use – (Plain)",
    icon: amazon_logo,
    link: "https://amzn.to/3UhOhyp",
  },
  {
    id: "33",
    image: p33,
    heading1: "Tulsi Mala",
    heading2: "Hanuman Ji Pendant",
    text: "BHAGESHWAR DHAM Tulsi Mala Hanuman Ji Pendant Kanthi Wood Mala",
    icon: amazon_logo,
    link: "https://amzn.to/45jcaKZ",
  },
  {
    id: "34",
    image: p34,
    heading1: "Locket",
    heading2: "Hanuman Ji Handmade Locket",
    text: "Women Wooden Carving Shree Bageshwar Balaji Dham Hanuman Ji Handmade Locket With Ram Carving And Tulsi Beads Mal",
    icon: amazon_logo,
    link: "https://amzn.to/4lhCjA0",
  },
  {
    id: "35",
    image: p35,
    heading1: "Prasad",
    heading2: "Gur Chana",
    text: "Gur Chana | Gud Coated Chane | Jaggery Coated Roasted Chickpeas | Premium Gur Channa",
    icon: amazon_logo,
    link: "https://amzn.to/4mwpWAU",
  },
  {
    id: "36",
    image: p36,
    heading1: "Prasad",
    heading2: "Roasted chana",
    text: "Roasted chana Bengal Gram Chickpeas/Bhuna Chana 1 KG",
    icon: amazon_logo,
    link: "https://amzn.to/3GZb7rK",
  },
  {
    id: "37",
    image: p37,
    heading1: "Prasad",
    heading2: "Organic Gud",
    text: "Organic Jaggery Cubes 900gm [Pure, Natural, No Preservatives Added], Jaggery Cube, Gud Jaggery, Jaggery Organic Cubes",
    icon: amazon_logo,
    link: "https://amzn.to/455jzPi",
  },
  {
    id: "38",
    image: p38,
    heading1: "Nariyal",
    heading2: "Coconut",
    text: "Nariyal || Coconut || Nariyal For Pooja || Sudh Nariyal || Kalash Nariyal",
    icon: amazon_logo,
    link: "https://amzn.to/455jD1u",
  },
  {
    id: "39",
    image: p39,
    heading1: "Chironji",
    heading2: "Suger Balls",
    text: "Sugar Balls | Ram Dana | Kasi Sweet Balls | khanchana for Prasad (250gm)",
    icon: amazon_logo,
    link: "https://amzn.to/3Ja38sl",
  },
  {
    id: "40",
    image: p40,
    heading1: "Charna Paduka",
    heading2: " Pawan Putra Hanuman",
    text: "Hanuman Ji Pocket Temple Charna Paduka Bajrang Bali | Gold Plated Box God Idol Bhagwan | Religious Gift | Diwali Gift Item | Pawan Putra Hanuman Jayanti",
    icon: amazon_logo,
    link: "https://amzn.to/41v0R1d",
  },
  //   {
  //     id: "",
  //     image: "",
  //     heading1: "",
  //     heading2: "",
  //     text: "",
  //     icon: amazon_logo,
  //     link: "",
  //   },
];

const Hanumanjayanti = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [getProduct, setGetProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const itemsRef = ref(db, "Hanuman Jayanti");
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
          Hanuman Jayanti Celebration Items
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
    </div>
  );
};

export default Hanumanjayanti;
