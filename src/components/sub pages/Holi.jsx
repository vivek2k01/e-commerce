import React, { useState, useEffect } from "react";
import amazon_logo from "../../assets/amazon_logo.jpg";

import { db } from "../../firebase";
import { ref, onValue } from "firebase/database";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

import p1 from "../../assets/holi/p1.jpg";
import p2 from "../../assets/holi/p2.jpg";
import p3 from "../../assets/holi/p3.jpg";
import p4 from "../../assets/holi/p4.jpg";
import p5 from "../../assets/holi/p5.jpg";
import p6 from "../../assets/holi/p6.jpg";
import p7 from "../../assets/holi/p7.jpg";
import p8 from "../../assets/holi/p8.jpg";
import p9 from "../../assets/holi/p9.jpg";
import p10 from "../../assets/holi/p10.jpg";
import p11 from "../../assets/holi/p11.jpg";
import p12 from "../../assets/holi/p12.jpg";
import p13 from "../../assets/holi/p13.jpg";
import p14 from "../../assets/holi/p14.jpg";
import p15 from "../../assets/holi/p15.jpg";
import p16 from "../../assets/holi/p16.jpg";
import p17 from "../../assets/holi/p17.webp";
import p18 from "../../assets/holi/p18.jpg";
import p19 from "../../assets/holi/p19.jpg";
import p20 from "../../assets/holi/p20.jpg";
import p21 from "../../assets/holi/p21.jpg";
import p22 from "../../assets/holi/p22.jpg";
import p23 from "../../assets/holi/p23.jpg";
import p24 from "../../assets/holi/p24.jpg";
import p25 from "../../assets/holi/p25.jpg";
import p26 from "../../assets/holi/p26.jpg";
import p27 from "../../assets/holi/p27.jpg";
import p28 from "../../assets/holi/p28.jpg";
import p29 from "../../assets/holi/p29.jpg";
import p30 from "../../assets/holi/p30.webp";
import p31 from "../../assets/holi/p31.jpg";
import p32 from "../../assets/holi/p32.jpg";
import p33 from "../../assets/holi/p33.jpg";
import p34 from "../../assets/holi/p34.jpg";
import p35 from "../../assets/holi/p35.jpg";
import p36 from "../../assets/holi/p36.jpg";
import p37 from "../../assets/holi/p37.jpg";
import p38 from "../../assets/holi/p38.jpg";
import p39 from "../../assets/holi/p39.jpg";
import p40 from "../../assets/holi/p40.jpg";
import p41 from "../../assets/holi/p41.jpg";
import p42 from "../../assets/holi/p42.jpg";
import p43 from "../../assets/holi/p43.jpg";
import p44 from "../../assets/holi/p44.jpg";
import p45 from "../../assets/holi/p45.jpg";
import p46 from "../../assets/holi/p46.jpg";
import p47 from "../../assets/holi/p47.jpg";
import p48 from "../../assets/holi/p48.jpg";
import p49 from "../../assets/holi/p49.jpg";
import p50 from "../../assets/holi/p50.jpg";
import p51 from "../../assets/holi/p51.jpg";
import p52 from "../../assets/holi/p52.jpg";
// import p53 from "../../assets/holi/p53.jpg";
// import p54 from "../../assets/holi/p54.webp";
// import p55 from "../../assets/holi/p55.jpg";
// import p56 from "../../assets/holi/p56.jpg";
// import p57 from "../../assets/holi/p57.jpg";
// import p58 from "../../assets/holi/p58.jpg";
// import p59 from "../../assets/holi/p59.jpg";
// import p60 from "../../assets/holi/p60.jpg";

const featuredProducts = [
  {
    id: "1",
    image: p1,
    heading1: "Gulal",
    heading2: "Eco-Friendly Gulal",
    text: "Holi Herbal Gulal Colors for Festivals Non-Toxic Food Grade Eco-Friendly Skin Safe Vibrant Rangoli Powder for Holi...",
    icon: amazon_logo,
    link: "https://amzn.to/4mnqitI",
  },
  {
    id: "2",
    image: p2,
    heading1: "Chemical-Free Color",
    heading2: "Organic & Herbal Gulal",
    text: "Organic Gulal | Red Green Saffron Yellow Pink | Holi Gulal | Organic & Herbal Gulal | Eco-Friendly Chemical-Free Skin-Friendly Colors for a Safe Holi ...",
    icon: amazon_logo,
    link: "https://amzn.to/46KoaaP",
  },
  {
    id: "3",
    image: p3,
    heading1: "Balloons",
    heading2: "Quick Water Filling",
    text: "Pack of 6 (222 Balloons) Holi Water Balloon/Quick Water Filling Balloons for Kids Boys, Girls - Festival Summer Fun - Gift Item for Family, Friends, Children | Water Balloons for Holi...",
    icon: amazon_logo,
    link: "https://amzn.to/456tUuq",
  },
  {
    id: "4",
    image: p4,
    heading1: "Wigs",
    heading2: "Hair Wigs for Kids",
    text: "Colorful Wigs for Holi Party - 3 Pcs Holi Wig for Kids, Hair Wigs for Men, Holi Wig for Women, Colourful Hair for Holi, Holi Accessories for Hair, Jo...",
    icon: amazon_logo,
    link: "https://amzn.to/4oFVAy3",
  },
  {
    id: "5",
    image: p5,
    heading1: "Goggles",
    heading2: "Funky Holi Goggles",
    text: "Happy Holi Goggles - Set of 6 Pcs, Holi Party Eyewear, Holi Goggles for Kids, Funky Holi Goggles for Women and Men, Colorful Holi Theme Glasses for Holi Festival, Goggles for Holi...",
    icon: amazon_logo,
    link: "https://amzn.to/3HkvAak",
  },
  {
    id: "6",
    image: p6,
    heading1: "Pichkari",
    heading2: "Bubble Gun",
    text: "Pichkari and Bubble Gun | Big Holi Pichkari with High Pressure Mechanism for Long Throw | Includes 4 Vibrant Holi Colours + Bubble Solution (Random Colour)...",
    icon: amazon_logo,
    link: "https://amzn.to/4m05cSd",
  },
  {
    id: "7",
    image: p7,
    heading1: "Water Pumping",
    heading2: "Balloon Pump",
    text: "Holi Water Balloon Pump Kit with 200 Colorful Water Balloons Easy to Use Water Pumping Station Perfect for Holi and Summer Outdoor Fun for Kids (Assorted)...",
    icon: amazon_logo,
    link: "https://amzn.to/4mvYFi9",
  },
  {
    id: "8",
    image: p8,
    heading1: "Decoration Items",
    heading2: " Holi Decoration Items",
    text: "My First Holi Decorations Combo | Holi Decoration Items for Holi Party - My First Holi Photo Booth Props & Paper Banner - Happy Spring Indian Colors Festival Photo Booth (Pack Of 18)...",
    icon: amazon_logo,
    link: "https://amzn.to/3IW6Yp4",
  },
  {
    id: "9",
    image: p9,
    heading1: "Cylinder",
    heading2: "Gulal Bottle",
    text: "Holi Color Gulal Bottle/Cylinder - Holi Gulal Mini || Holi Herbal Gulal - Skin Friendly | Organic Herbal Color Celebration, Photoshoots, Festivals (Herbal Bottle Qty 2)...",
    icon: amazon_logo,
    link: "https://amzn.to/4opn62t",
  },
  {
    id: "10",
    image: p10,
    heading1: "Decorative Items",
    heading2: "Dolls Designer Plate",
    text: "Handmade Dolls Designer Plate for Holi Colours Holder Home Decorative Items for Holi Festival Celebration and Gift Purpose Holi_thali-03...",
    icon: amazon_logo,
    link: "https://amzn.to/45rue5X",
  },
  {
    id: "11",
    image: p11,
    heading1: "Bucket With Pickari",
    heading2: "For Pooja ",
    text: "Radha Krishna Printed Bucket Pickari For Holi Celebration Thali Handmade Dolls Designer PlateFfor Holi Colours Holder Home Decorative Items for Holi Festival Celebration and Gift Purpose...",
    icon: amazon_logo,
    link: "https://amzn.to/4m8hCaQ",
  },
  {
    id: "12",
    image: p12,
    heading1: "Dress with pagdi",
    heading2: "Laddu Gopal Dress",
    text: "Laddu Gopal ji Holi Festival Special Very Beautiful Dress with pagdi (Multicolour) nd mtki,pichkari for kanha ji Krishna Idol Size-6...",
    icon: amazon_logo,
    link: "https://amzn.to/3J5MRVf",
  },
  {
    id: "13",
    image: p13,
    heading1: "Holi with Krishna ji",
    heading2: "Decorative Platter Set",
    text: "Traditional Holi Festival Decorative Platter Set with Dolls,Colourful Bottles, Bowls for Colours (NF-Holi-PL05)...",
    icon: amazon_logo,
    link: "https://amzn.to/47eOBpd",
  },
  {
    id: "14",
    image: p14,
    heading1: "t-Shorts",
    heading2: "t-Shorts for Girls",
    text: "Fancy Dress For Holi t-Shirts for Girls...",
    icon: amazon_logo,
    link: "https://amzn.to/45AnwLY",
  },
  {
    id: "15",
    image: p15,
    heading1: "t-Shorts",
    heading2: " Bura na Mano Holi Hai",
    text: "Happy Holi Tshirt | Celebrate Holi with Festive Vibes | Bura na Mano Holi Hai| Round Neck | Holi Printed Premium Holi Festival TShirts for Boys and Girls...",
    icon: amazon_logo,
    link: "https://amzn.to/4fli7eW",
  },
  {
    id: "16",
    image: p16,
    heading1: " Jumpsuit",
    heading2: " Jumpsuit for Baby",
    text: "Cute Pals Happy Holi Baby Boy Girl Dress Bodysuit Jumpsuit Romper, Cotton Blend Onesie with Colourful Festival Design...",
    icon: amazon_logo,
    link: "https://amzn.to/4fsf451",
  },
  {
    id: "17",
    image: p17,
    heading1: "Toy",
    heading2: "Pichkari",
    text: "Water Pump Pipe Guns Pistol Holi Gun Holi Pichkari Pitsol Toys for Holi Water Gun for Boys Girls Brand: Sesonby (Multi)...",
    icon: amazon_logo,
    link: "https://amzn.to/4lcW0c4",
  },
  {
    id: "18",
    image: p18,
    heading1: "Oil",
    heading2: "Coconut Oil pure",
    text: "Virgin Cold Pressed Coconut Oil - 5 Litre...",
    icon: amazon_logo,
    link: "https://amzn.to/3ULrpr8",
  },
  {
    id: "19",
    image: p19,
    heading1: "Organic Oil",
    heading2: "Hair and Skin Care Pure Oil",
    text: "Bio Organic Extra Virgin Organic Cold Pressed Coconut Oil for Hair and Skin Care Pure Oil Extracted from Freshly Dried Coconuts (200ml)...",
    icon: amazon_logo,
    link: "https://amzn.to/46KpUkn",
  },
  {
    id: "20",
    image: p20,
    heading1: "Non Toxic",
    heading2: "Soft Skin Friendly",
    text: "Organic Holi Gulal Color | 4 Seasons Colours | Non Toxic, Easy to Remove, Soft Skin Friendly | Pack of 4-50gm *4 | Holi Gift Pack for Family, Party...",
    icon: amazon_logo,
    link: "https://amzn.to/4m4KaSI",
  },
  {
    id: "21",
    image: p21,
    heading1: "Holika",
    heading2: "Pujan Samagri",
    text: "Holika Dahan Puja Samagri...",
    icon: amazon_logo,
    link: "https://amzn.to/3J3YSur",
  },
  {
    id: "22",
    image: p22,
    heading1: "Samagri",
    heading2: "Holi Puja Samagri",
    text: "Making Worship Special - Holi Puja Samagri| Holika Dahan Pooja Kit | Falgun purnima Pooja | Holi Pujan | With scented and Herbal Gulal...",
    icon: amazon_logo,
    link: "https://amzn.to/4lgsp1k",
  },
  {
    id: "23",
    image: p23,
    heading1: "Havan",
    heading2: "Mango Wood",
    text: "Holika Dahan or Hawan Yagya Pure Mango Havan Dahen Wood (490 Grams)...",
    icon: amazon_logo,
    link: "https://amzn.to/456mCH1",
  },
  {
    id: "24",
    image: p24,
    heading1: "Dung Mala",
    heading2: "Pure Cow Dung Mala",
    text: "Pure Source India Natural and Pure Cow Dung Mala for Hawan | Pooja Samagri |Holi Puja |Holika Dahan/Upla/badkula/Natural Gobar ki Uple | Kande ki mala (4cm x 1cm- 50 Pieces)...",
    icon: amazon_logo,
    link: "https://amzn.to/46P7TS9",
  },
  {
    id: "25",
    image: p25,
    heading1: "Mala",
    heading2: "Badkulle",
    text: "Cow Dung Badkulla/Cake Mala for Holi/Gobar Badkulle/Holi Pooja Article Badkulle Pack of 21/Pack of 21 (21 badkulle in 1 Mala)+1 Suraj+1 Chand+1 Nariyal+1 Moli+1 Sabut Haldi Gant...",
    icon: amazon_logo,
    link: "https://amzn.to/4mt5L6V",
  },
  {
    id: "26",
    image: p26,
    heading1: "Abir Gulal",
    heading2: "Natural Holi Colours",
    text: "Holi Colours Organic, Holi Colours Set, Abir Gulal for Holi, Pooja, Pack Natural Holi Colours of Red,Pink,Green,Yellow,Blue (50gram) x7Pack...",
    icon: amazon_logo,
    link: "https://amzn.to/4olKv4K",
  },
  {
    id: "27",
    image: p27,
    heading1: "Toy",
    heading2: "Toy",
    text: "Sau Rang Laddu Gopal Meenakari Plate for Holi with Balti Pichkari (Symbolic Toy only) and 2 Empty Bowls. Material Plastic...",
    icon: amazon_logo,
    link: "https://amzn.to/4muC45q",
  },
  {
    id: "28",
    image: p28,
    heading1: "Gulal",
    heading2: "Natural Fragrance Eco-Friendly",
    text: "Holi Herbal Gulal Colors for Festivals Non-Toxic Natural Fragrance Eco-Friendly Skin Safe Vibrant Shades Soft Rangoli Powder for Holi Navratri Diwali Pooja Mandir Decor (Pack of 4)...",
    icon: amazon_logo,
    link: "https://amzn.to/40UUG6q",
  },
  {
    id: "29",
    image: p29,
    heading1: "Water Gun",
    heading2: "Holi Water Toy Gun",
    text: "150 ML Capacity Long Range High Air Pressure Spray Water Gun (18x10cm) for Summer Swimming Pool Party Holi Water Toy Gun for Girls Boys Kids 3+, Multi...",
    icon: amazon_logo,
    link: "https://amzn.to/45n59sA",
  },
  {
    id: "30",
    image: p30,
    heading1: "Water Gun",
    heading2: "Pichkari",
    text: "Holi Pichkari Water Gun for Kids Backpack Tank Holi Water Gun with 1 Pk Gulal and 100 Balloons - Boys and Girls (Nova Tank)...",
    icon: amazon_logo,
    link: "https://amzn.to/4lXuKzq",
  },
  {
    id: "31",
    image: p31,
    heading1: "Water Gun Holi Pichkari",
    heading2: "Kids Holi Cartoon Character",
    text: "Forty Wings Kids Holi Cartoon Character Blue Round Tank Bag Holi Water Gun Holi Pichkari Water Pistol with Single Balloon Bunch for Kids Girls Boys...",
    icon: amazon_logo,
    link: "https://amzn.to/4mw86OG",
  },
  {
    id: "32",
    image: p32,
    heading1: "Pichkari",
    heading2: "Toy Gun for Kids",
    text: "Pack of 2 Handheld Children Beach Outdoor Swimming Pool Party Squirt Holi Water Mini Toy Gun for Girls Boys Kids 3+...",
    icon: amazon_logo,
    link: "https://amzn.to/3UienkT",
  },
  {
    id: "33",
    image: p33,
    heading1: "Pichkari",
    heading2: " Water Gun for Kids",
    text: "Holi Pichkari Water Gun for Kids Backpack Tank Holi Water Gun with 1 Pk Gulal and 100 Balloons (Nova Tank) Assorted - Zest 4 Toyz...",
    icon: amazon_logo,
    link: "https://amzn.to/3J14eXr",
  },
  {
    id: "34",
    image: p34,
    heading1: "Pichkari",
    heading2: "Water Gun Water Tank Pichkari",
    text: "Brown Leaf High Pressure Pipe Holi Pichkari Water Gun Water Tank Pichkari Toy for Kids Holi & Pool Party Fun(1 Pichkari 6 Magic Balloon 100 Water Balloon)...",
    icon: amazon_logo,
    link: "https://amzn.to/3H1UkUV",
  },
  {
    id: "35",
    image: p35,
    heading1: "Pichkari",
    heading2: "Pichkari Toy for Kids",
    text: "Pressure Gun Holi Pipe Pichkari Water Tank Water Gun Pichkari Toy for Kids Holi & Summer Pool Party Fun (2 Pichkari 200 Water Balloon)...",
    icon: amazon_logo,
    link: "https://amzn.to/4myhEbP",
  },
  {
    id: "36",
    image: p36,
    heading1: "Pichkari",
    heading2: "Cartoon Toys Pichkari",
    text: "1 Plastic Holi Pichkari Cartoon Toys Pressure Water Gun Squirt Pistol Water Play Toy for Kids + 4 Holi Colours Powder + Party Krish Mask for Holi Celebration...",
    icon: amazon_logo,
    link: "https://amzn.to/45oboMW",
  },
  {
    id: "37",
    image: p37,
    heading1: "Holi Color",
    heading2: "Gulal",
    text: "Tota Herbal Gulal Poppers Natural Rangoli Holi Color Powder Gulal, Skin-Safe and Non-Toxic (Assorted Colours) - Pack of 4...",
    icon: amazon_logo,
    link: "https://amzn.to/40RStZx",
  },
  {
    id: "38",
    image: p38,
    heading1: "Cylinder",
    heading2: "Gulal Cylinder",
    text: "2 Kilogram. Holi Color Gulal Cylinder -XX- Organic Gulal Cylinder - Eco Friendly Color (Random Color Will be Given)...",
    icon: amazon_logo,
    link: "https://amzn.to/45uK2VA",
  },
  {
    id: "39",
    image: p39,
    heading1: "Spary",
    heading2: " Spray Holi Color",
    text: "Premium Tota Thunder Snow Spary for Holi with Gulal Gun Spray Holi Color Powder Natural Skin Friendly Holi Color (Pack of 3) Holi Colour Herbal Gulal Spray Bottle Multicolor...",
    icon: amazon_logo,
    link: "https://amzn.to/3ULYnaT",
  },
  {
    id: "40",
    image: p40,
    heading1: "Holi Gulal",
    heading2: "Eco-Friendly Chemical-Free",
    text: "Organic Gulal | Red Green Saffron Yellow Pink | Holi Gulal | Organic & Herbal Gulal | Eco-Friendly Chemical-Free Skin-Friendly Colors for a Safe Holi | Combo Pack of 5 (100gm Each)...",
    icon: amazon_logo,
    link: "https://amzn.to/4lgXl1B",
  },
  {
    id: "41",
    image: p41,
    heading1: "Magic Color",
    heading2: "Herbal Holi Colorus",
    text: "Non-Toxic Herbal Holi Colorus Magic Holi Colors Pack of 2...",
    icon: amazon_logo,
    link: "https://amzn.to/4olMXIu",
  },
  {
    id: "42",
    image: p42,
    heading1: "Chemical Free",
    heading2: "Made with Beetroot, Saffron, Neem",
    text: "Holi Colors Gulal Combo | Pack of 3 | Rangoli Color | Made with Beetroot, Saffron, Neem | Flour Based Natural Rang | Chemical Free | 75g Each | Pink | Yellow | Green | Organic | Safe for Skin...",
    icon: amazon_logo,
    link: "https://amzn.to/3HokCRf",
  },
  {
    id: "43",
    image: p43,
    heading1: "Gulaal",
    heading2: "Natural Gulaal Collection",
    text: "Phool Rang Utsav Natural Gulaal Collection - 3 Vibrant Colors of Skin-Safe Gulaal (100 gm Each) with Kesar Badam Thandai Powder, Kimirica Shower Gel & Holi Greeting Card...",
    icon: amazon_logo,
    link: "https://amzn.to/4le1Aek",
  },
  {
    id: "44",
    image: p44,
    heading1: "Organic Gulal",
    heading2: "Skin-Friendly Herbal Gulal",
    text: "Holi Organic Gulal Colour | 100% Natural and Skin-Friendly Herbal Gulal | Dhol Dhamaka Pack | Celebrate Holi 2025 with Nirmalaya...",
    icon: amazon_logo,
    link: "https://amzn.to/3Ugi5LS",
  },
  {
    id: "45",
    image: p45,
    heading1: "Scented Candles",
    heading2: "Holika Dahan Candles",
    text: "Holi Special HOLIKA Dahan Scented Candles| Festivals Candles|Holika Dahan Candles (Holi Special HOLIKA Dahan Candle Set of 1)...",
    icon: amazon_logo,
    link: "https://amzn.to/3HcxDNO",
  },
  {
    id: "46",
    image: p46,
    heading1: " Hiranyakashipu",
    heading2: "Bhakta Prahlad Stories Books",
    text: "Jeene Ki Raah Shrimadbhagvadgita + Bhakta Prahlad Stories Books – Bhakta Prahlad | Holika Dahan | Hiranyakashipu | Narasimha | Bhakti | Vrat | Utsav | Teerth | Puran | Sankirtan | (Set Of 2 Books In Hindi)...",
    icon: amazon_logo,
    link: "https://amzn.to/3GZfMtJ",
  },
  {
    id: "47",
    image: p47,
    heading1: "Holika Dahan",
    heading2: "Born fire",
    text: "fire Wood for Cooking Pizza, Roti, Fire Pit, Lohri, Holika Dahan, Born fire, Hawan and Used in Other Religious Purpose Pack of 1KG Medium Size...",
    icon: amazon_logo,
    link: "https://amzn.to/3HlMiWP",
  },
  {
    id: "48",
    image: p48,
    heading1: "Happy Holi",
    heading2: "Wall Sticker",
    text: "Festival of Colour/Holika Dahan-Happy Holi/Holi Party Special Wall Sticker Self-Adhesive, Waterproof Vinyl Sticker Multicolour Size...",
    icon: amazon_logo,
    link: "https://amzn.to/3UczZz9",
  },
  {
    id: "49",
    image: p49,
    heading1: "Popcorn",
    heading2: "Dhani",
    text: "Maanki Poped Jowar/Ready To Eat Popcorn Dhani/Puffed Jovar Dhani, 500g",
    icon: amazon_logo,
    link: "https://amzn.to/4forIln",
  },
  {
    id: "50",
    image: p50,
    heading1: "Coconut",
    heading2: "Nariyal",
    text: "Coconut || Nariyal || Nariyal For Pooja || 1 Piece Nariyal",
    icon: amazon_logo,
    link: "https://amzn.to/4myBS5p",
  },
  {
    id: "51",
    image: p51,
    heading1: "Sweet",
    heading2: "Batasha",
    text: "Marwadi Rajasthani Testy Sweet Batasha/Batase for Pooja - 900 Grams",
    icon: amazon_logo,
    link: "https://amzn.to/46Pcfst",
  },
  {
    id: "52",
    image: p52,
    heading1: "Holi Hampers",
    heading2: "Gujiya Box🤤🤤",
    text: "Gifts Holi Sweets/ Holi Gift/ Holi Hampers/ Holi Sweets Healthy Wheat Gujiya Box (800 g)|Sweets|Sweets Gift Pack",
    icon: amazon_logo,
    link: "https://amzn.to/45hA7SV",
  },
  // {
  //   id: "",
  //   image: "",
  //   heading1: "",
  //   heading2: "",
  //   text: "",
  //   icon: amazon_logo,
  //   link: "",
  // },
  // {
  //   id: "",
  //   image: "",
  //   heading1: "",
  //   heading2: "",
  //   text: "",
  //   icon: amazon_logo,
  //   link: "",
  // },
];
const Holi = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [getProduct, setGetProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const itemsRef = ref(db, "holi");
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
          Holi Celebration Items
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

export default Holi;
