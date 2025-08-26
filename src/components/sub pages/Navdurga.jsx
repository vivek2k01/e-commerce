import React, { useState, useEffect } from "react";
import amazon_logo from "../../assets/amazon_logo.jpg";

import BrassDurga from "../../assets/Durga/BrassDurga.jpg";
import durgaidol1 from "../../assets/Durga/Durga Idol1.jpg";
import durdaidol2 from "../../assets/Durga/DurgaIdol2.jpg";
import BrassDiya from "../../assets/Durga/BrassDiya.jpg";
import BrassDiya2 from "../../assets/Durga/BrassDiya2.jpg";
import durgaphoto from "../../assets/Durga/durgaphoto.jpg";
import PujaSamagri from "../../assets/Durga/PujaSamagri.jpg";
import LakshmiPoojaSet from "../../assets/Durga/LakshmiPoojaSet.jpg";
import laxmiyantra from "../../assets/Durga/LaxmiPyramid.jpg";
import DurgaYantra from "../../assets/Durga/DurgaYantra.jpg";
import chunari from "../../assets/Durga/Chunari.jpg";
import chunari1 from "../../assets/Durga/Chunari1.jpg";
import idolset from "../../assets/Durga/IdolSet.jpg";
import EcoFriendly from "../../assets/Durga/EcoFriendly.jpg";
import DhuniBurner from "../../assets/Durga/DhuniBurner.jpg";
import KalashMitti from "../../assets/Durga/KalashMitti.jpg";
import KalashMitti1 from "../../assets/Durga/KalashMitti1.jpg";
import MittiDiye from "../../assets/Durga/MittiDiya.jpg";
import MittiDiye1 from "../../assets/Durga/MittiDiya1.jpg";
import MittiDiye2 from "../../assets/Durga/MittiDiya2.jpg";
import Coconut from "../../assets/Durga/Coconut.jpg";
import aagarbatti from "../../assets/Durga/Aagarbatti.jpg";
import kumkum from "../../assets/Durga/kumkum.jpg";
import Shringar from "../../assets/Durga/Shringar.jpg";
import havankit from "../../assets/Durga/HawanKit.jpg";
import LaxmiPooja from "../../assets/Durga/LaxmiPooja.jpg";
import Shringar1 from "../../assets/Durga/Shringar1.jpg";
import Jewellery from "../../assets/Durga/JewellerySet.jpg";
import ThaliSet from "../../assets/Durga/ThaliSet.jpg";
import Chokki from "../../assets/Durga/choki.jpg";
import chokki1 from "../../assets/Durga/choki1.jpg";
import cloth from "../../assets/Durga/cloth.jpg";
import lota from "../../assets/Durga/lota.jpg";
import durgaphoto1 from "../../assets/Durga/durgaphoto1.jpg";
import durgaphoto2 from "../../assets/Durga/durgaphoto2.jpg";
import bartan from "../../assets/Durga/Mittibartan.jpg";
import brassdiya3 from "../../assets/Durga/Brassdiya3.jpg";
import Shringar2 from "../../assets/Durga/Shringar2.jpg";
import mukut from "../../assets/Durga/Jewellery.jpg";
import dress from "../../assets/Durga/Dress.jpg";
import DurgaIdol3 from "../../assets/Durga/DurgaIdol3.jpg";
import DurgaIdol4 from "../../assets/Durga/DurgaIdol4.jpg";
import DurgaIdol5 from "../../assets/Durga/DurgaIdol5.jpg";
import DurgaIdol6 from "../../assets/Durga/DurgaIdol6.jpg";
import DurgaIdol7 from "../../assets/Durga/DurgaIdol7.jpg";
import DurgaIdol8 from "../../assets/Durga/DurgaIdol8.jpg";
import DurgaIdol9 from "../../assets/Durga/DurgaIdol9.jpg";
import DurgaIdol10 from "../../assets/Durga/DurgaIdol10.jpg";
import jau from "../../assets/Durga/jau.jpg";
import Hangingidol from "../../assets/Durga/Hangingidol.jpg";
import KalashGhagra from "../../assets/Durga/KalashGhagra.jpg";
import gangajal from "../../assets/Durga/Gangajal.jpg";
import gangajal1 from "../../assets/Durga/Gangajal1.jpg";
import gomutra from "../../assets/Durga/CowUrine.jpg";
import GobarUpla from "../../assets/Durga/GobarUpla.jpg";
import poojakit from "../../assets/Durga/PoojaKit.jpg";
import LotusHanging from "../../assets/Durga/LotusHanging.jpg";
import NavDurgaphoto from "../../assets/Durga/NavDurgaphoto.jpg";
import Flowers from "../../assets/Durga/Flowers.jpg";
import Toran from "../../assets/Durga/Toran.jpg";
import MangoLeaves from "../../assets/Durga/MangoLeaves.jpg";
import ArtificialFlower from "../../assets/Durga/ArtificialFlower.jpg";
import Garland from "../../assets/Durga/Garland.jpg";
import NavDurgaWooden from "../../assets/Durga/NavDurgaWooden.jpg";
import Dandiya from "../../assets/Durga/Dandiya.jpg";
import Dandiya1 from "../../assets/Durga/Dandiya1.jpg";
import Dandiya2 from "../../assets/Durga/Dandiya2.jpg";
import Chowki from "../../assets/Durga/Chowki.jpg";

const featuredProducts = [
  {
    id: "1",
    image: BrassDurga,
    heading1: "Durga Maa Idol",
    heading2: "Brass Durga Murti",
    text: "Brass Durga Murti/Durga Maa Idol/Pital Durga MATA Statue - Antique Brass for Home/Temple/Office (Height: 6 cm, Weight: 130 GMS)...",
    icon: amazon_logo,
    link: "https://amzn.to/4l9hW83",
  },
  {
    id: "2",
    image: durgaidol1,
    heading1: "Brass Idol",
    heading2: "Shri Maa Durga Idol",
    text: "Ashtadhatu-Brass Shri Maa Durga Idol || Durga MATA Murti for Home Decor & Puja Room || Antique Statue of Goddess Durga (2.5 Inch Height)...",
    icon: amazon_logo,
    link: "https://amzn.to/4lUCbaI",
  },
  {
    id: "3",
    image: durdaidol2,
    heading1: "Maa Durga",
    heading2: "MATA Rani Idol",
    text: "Maa Durga MATA Ambe MATA Rani Sherawali Murti Idol Statue: Divine Home Decor and Spiritual Centerpiece - Symbol of Supreme Strength, Protection, and Fearlessness...",
    icon: amazon_logo,
    link: "https://amzn.to/3ISFDnx",
  },
  {
    id: "4",
    image: BrassDiya,
    heading1: "Brass Diya",
    heading2: "Brass Diya with Bell",
    text: "Ethnic Carved Peacock Design Brass Diya with Bell , Brass Antique Oil Lamp, Diyas for Home , Size - 8 Inches , Standard , Pack of 1...",
    icon: amazon_logo,
    link: "https://amzn.to/4lRNxfs",
  },
  {
    id: "5",
    image: BrassDiya2,
    heading1: "Brass Diya",
    heading2: "Brass Oil Diya with Base",
    text: "7 Inches Brass Oil Diya with Base, Diyas for Puja , Housewarming Gifts , Diya for Home Decor , Brass Oil Lamp , Diyas for Decoration...",
    icon: amazon_logo,
    link: "https://amzn.to/3GR4qIa",
  },
  {
    id: "6",
    image: durgaphoto,
    heading1: "Durga Maa Photo",
    heading2: "Photo Frame",
    text: "Durga MAA 9 ROOP Photo Frame for Navratri POOJAN (8.5x11) A4...",
    icon: amazon_logo,
    link: "https://amzn.to/3IPHwS5",
  },
  {
    id: "7",
    image: PujaSamagri,
    heading1: "Puja Samagri Kit",
    heading2: "Navratri pujan Samagri",
    text: "Navratri Puja Samagri Kit/Navdurga Puja Kit for Durga Pujan | Navratri Poojan Kit | Ghat sthapna Poojan Kit| Maa Laxmi-Ambe-Durga(30+ Items Kit)...",
    icon: amazon_logo,
    link: "https://amzn.to/40H1Efa",
  },
  {
    id: "8",
    image: LakshmiPoojaSet,
    heading1: "Poonaj Samagri",
    heading2: "Laxmi Pooja Items",
    text: "Lakshmi Pooja Set - Laxmi Pooja Kit - Laxmi Pooja Items - Diwali Pooja Kit - Laxmi Puja Samagri - Kuncham Set Items for Pooja...",
    icon: amazon_logo,
    link: "https://amzn.to/3GR4KGS",
  },
  {
    id: "9",
    image: laxmiyantra,
    heading1: "Shree Yantra",
    heading2: "Laxmi Pyramid Original",
    text: "Laxmi Pyramid Original Certified Gomati Chakra, Rudraksha, Cowrie Kodi Maha Laxmi Pyramid - 90 mm Large Orgonite Pyramid with Shree Yantra - Vastu Items for Good Luck, Money & Wealth...",
    icon: amazon_logo,
    link: "https://amzn.to/3JaJDjh",
  },
  {
    id: "10",
    image: DurgaYantra,
    heading1: "Durga Yantra",
    heading2: "Nav Durga Yantra",
    text: "Shri Nav Durga Yantra/Most Effective Goddess Shri Nau Devi/Nav Durga Copper Yantra...",
    icon: amazon_logo,
    link: "https://amzn.to/4mh06Rc",
  },
  {
    id: "11",
    image: chunari,
    heading1: "Chunari",
    heading2: "MATA Chunari Set",
    text: "Durga MATA Chunari Set - 9 Colors for 9 Days of Navratri | Hand-Embroidered with Golden Lace and Pearls - Navratri Special Puja, Decoration and Gifting (7×9)...",
    icon: amazon_logo,
    link: "https://amzn.to/45qBfou",
  },
  {
    id: "12",
    image: chunari1,
    heading1: "Chunari",
    heading2: "MATA Ki Chunri",
    text: "Devi MATA Ki Chunri(2 Metres, Big, Red, Net Cloth) Navratri Puja Chunari, Durga Maa Chunni for MATA Ki Chowki, Navaratri Decoration of Pooja...",
    icon: amazon_logo,
    link: "https://amzn.to/4l2aDyE",
  },
  {
    id: "13",
    image: idolset,
    heading1: "Idol Set",
    heading2: "Brass Nava Durga Idol Set",
    text: "Brass Nava Durga Idol Set - 4 Inch - Individual 9 Forms Bring Home Blessings (Set of 9)...",
    icon: amazon_logo,
    link: "https://amzn.to/3J8KAIR",
  },
  {
    id: "14",
    image: EcoFriendly,
    heading1: "Eco-Friendly Idol",
    heading2: "Durga Maa Ido",
    text: "Eco-Friendly Durga maa Idol Goddess Nav Durga MATA Statue Devi Sherawali MATA Murti for Puja...",
    icon: amazon_logo,
    link: "https://amzn.to/414PCN1",
  },
  {
    id: "15",
    image: DhuniBurner,
    heading1: "Dhuni Burne",
    heading2: "Handmade Natural Clay Dhoop",
    text: "Desi Handmade Natural Clay Dhoop Loban Dani/Dhuni Burner Holder/Pot Stand for Puja/Hawan/Dhuni [Shop/Office/Room/Gardan etc.] [Medium Size 100% Pure Mitti]...",
    icon: amazon_logo,
    link: "https://amzn.to/3H9R5L2",
  },
  {
    id: "16",
    image: KalashMitti,
    heading1: "Mitti Kalash ",
    heading2: "Kalash with Dhakkan",
    text: "Mitti Kalash with Dhakkan Clay/Terracotta Water Pot Kalash for Diwali, Marriage, Ganpati, Navratri Pooja Festivals and Decor. Pooja Kalash Handmade from Village...",
    icon: amazon_logo,
    link: "https://amzn.to/3ISHsRp",
  },
  {
    id: "17",
    image: KalashMitti1,
    heading1: " Mitti Kalash",
    heading2: "Mitti Kalash Hand Made",
    text: "Natural Mitti Kalash Hand Made with Mitti Round Shape Baked Mud...",
    icon: amazon_logo,
    link: "https://amzn.to/45202he",
  },
  {
    id: "18",
    image: MittiDiye,
    heading1: "Diya",
    heading2: "Mitti ke Diye",
    text: "Clay Small Diya ( 5.8 cm x 5 cm x 2.1 cm, Set of 30)...",
    icon: amazon_logo,
    link: "https://amzn.to/45al5yb",
  },
  {
    id: "19",
    image: MittiDiye1,
    heading1: "Mitti ke Diye",
    heading2: "Diya with Cow Ghee",
    text: "Pure Cow Ghee Diya for Puja - 60 Pieces, Upto 45 Minutes Burn Time, Ghee Blended Filled Clay Diya Batti, Ready to Use Diwali Diyas for Daily Pooja...",
    icon: amazon_logo,
    link: "https://amzn.to/4mmMnZj",
  },
  {
    id: "20",
    image: MittiDiye2,
    heading1: "Mitti ke Diye",
    heading2: "Diya for Puja",
    text: "Traditional Handmade Terracotta Clay Diya | Mitti Deepak Decorate for Pooja | Diya for Puja | Diya (Pack of 4)...",
    icon: amazon_logo,
    link: "https://amzn.to/4mnOLiG",
  },
  {
    id: "21",
    image: Coconut,
    heading1: "Nariyal",
    heading2: "Nariyal for Kalash",
    text: "Coconut for Kalash 1Pc...",
    icon: amazon_logo,
    link: "https://amzn.to/44TwPX7",
  },
  {
    id: "22",
    image: aagarbatti,
    heading1: "Agarbatti",
    heading2: "Lavender Agarbatti",
    text: "Lavender Incense Sticks | Agarbatti for Home Freshness, Positive Energy & Yoga Meditation | Handcrafted & Low Smoke | Burns 35-40 Minutes | Pooja Item for Home | Approx. 120 Sticks...",
    icon: amazon_logo,
    link: "https://amzn.to/45gCAxb",
  },
  {
    id: "23",
    image: kumkum,
    heading1: "Kumkum",
    heading2: "Kumkum Powder",
    text: "Kumkum Powder | Vibrant Red for Puja, Tilak, Festivals & Wedding Ceremonies | Non-Toxic, Easy to Apply & Fine Texture | Holy Occasions | 25g Pack...",
    icon: amazon_logo,
    link: "https://amzn.to/3UzZlqC",
  },
  {
    id: "24",
    image: Shringar,
    heading1: "Shringar",
    heading2: "MATA Rani 16 Shringar",
    text: "Navratri Pooja MATA Rani 16 Shringar/Poojan Samagri for Devi MATA/Hartaleeka teej/MATA solah Shringaar Kit/shringar Set...",
    icon: amazon_logo,
    link: "https://amzn.to/44U8VL5",
  },
  {
    id: "25",
    image: havankit,
    heading1: "Hawan Kit",
    heading2: "Complete Hawan Kit",
    text: "Complete Hawan Kit for All Pooja/Navratri, Vastu Shanti, Grahpravesh, Satyanarayan Puja / 7inch Aluminum Hawan Kund, 1Kg Pure Mango Wood, 400gm Hand Selected Hawan Samagri, 15pcs Gobar ke Uple...",
    icon: amazon_logo,
    link: "https://amzn.to/414TdL1",
  },
  {
    id: "26",
    image: LaxmiPooja,
    heading1: "Laxmi Pooja",
    heading2: "Laxmi Pooja Kit",
    text: " Rakt Gunja, Goamti Chakra, Kamal Gatta, Kodi - 11 Pieces for Pooja, Laxmi Pooja, Puja, Diwali Pooja...",
    icon: amazon_logo,
    link: "https://amzn.to/4md35Ky",
  },
  {
    id: "27",
    image: Shringar1,
    heading1: "Shringar",
    heading2: "9 Shringar Deviji ka",
    text: "Mata Ka Shringar 9 Deviji Shringar Puja Kit Pooja Set with Essentials for Puja Shringaar Navratri Pooja Mata Rani 16 Shringar/Poojan Samagri for Devi Mata/Hartaleeka teej/Mata solah Shringaar Kit/shringaar (Red) Set of 9...",
    icon: amazon_logo,
    link: "https://amzn.to/4l2Kvny",
  },
  {
    id: "28",
    image: Jewellery,
    heading1: "Jewellery",
    heading2: "Mata ji ke  Mukut, Necklace",
    text: " Handmade Golden Mukut, Necklace, ear rings Krishna Jewellery Set Ornaments for God/Devi Maa/Radha Rani/Laddu Gopal Diamond Shringar Set krishna set...",
    icon: amazon_logo,
    link: "https://amzn.to/4761zpe",
  },
  {
    id: "29",
    image: ThaliSet,
    heading1: "Thali",
    heading2: "Pooja Thali Set Brass",
    text: "Pooja Thali Set Brass Puja Thali Pital 8 Inch With Accessories Kuber Diya Ghanti Kalash Spoon Bowl Agarbatti Stand For Diwali Gifts Home Office Wedding Gift Items, 500 ml...",
    icon: amazon_logo,
    link: "https://amzn.to/4oeOW1d",
  },
  {
    id: "30",
    image: Chokki,
    heading1: "Chowkki",
    heading2: "Painted Marble Chowki",
    text: "Handicrafts Paradise (4 x 4 inch) Intricate Floral Painted Marble Chowki (Multicolour) Square, Home Mandir, Idols Statues Pratima, Bajot for God, Home Décor Showpiece...",
    icon: amazon_logo,
    link: "https://amzn.to/4fk2k0e",
  },
  {
    id: "31",
    image: chokki1,
    heading1: "Chowkki",
    heading2: "Pooja Chowki",
    text: "Minakari Pooja Chowki | Wooden Bajot - Set of 2 (6 Inch and 10 Inch/Golden) - for Pooja, Home Decor & Festivals...",
    icon: amazon_logo,
    link: "https://amzn.to/4mhiNV1",
  },
  {
    id: "32",
    image: cloth,
    heading1: "Cloth",
    heading2: "Devi maa ke poshak",
    text: "Navratri Special Red Color Durga Maa/MATA Rani/Devi maa poshak/Dress Set – Complete Traditional Outfit for Durga Puja |Size-06 inch Idol(3 inch Lehnga 2 inch Choli)...",
    icon: amazon_logo,
    link: "https://amzn.to/46A06r4",
  },
  {
    id: "33",
    image: lota,
    heading1: "Lota",
    heading2: "Brass lota",
    text: "Made in India Brass lota P. Ghat lota for All hindu's puja...",
    icon: amazon_logo,
    link: "https://amzn.to/4mE8sTx",
  },
  {
    id: "34",
    image: durgaphoto1,
    heading1: "Photo",
    heading2: "Mata Rani Photo",
    text: "Nav Durga Mata Rani Photo Painting With Photo Frame For Mandir/Temple Nav Durga Mata Rani Photo Frame (MDF & Fiber_12X18 Inches)...",
    icon: amazon_logo,
    link: "https://amzn.to/41jcFn0",
  },
  {
    id: "35",
    image: durgaphoto2,
    heading1: "Plastic Photo Frame",
    heading2: "Hindu Goddess Maa Bhavani",
    text: "Plastic Hindu Goddess Maa Bhavani Mata Durga Vaishano Devi Sheronwali Acrylic Rectangular Frame For Home, Office & Car Temple, Gold, Tabletop - 3.15X1.18 Inch...",
    icon: amazon_logo,
    link: "https://amzn.to/3IRXCKM",
  },
  {
    id: "36",
    image: bartan,
    heading1: "Bartan",
    heading2: "Mitti ke Bartan",
    text: "Mitti Kalash 1 Kalash, 1 Big Deepak, 2 Small Deepak,...",
    icon: amazon_logo,
    link: "https://amzn.to/3ILpH6H",
  },
  {
    id: "37",
    image: brassdiya3,
    heading1: "Diya",
    heading2: "Brass Panchdeep Diya",
    text: "Golden Brass Panchdeep Diya for 5 Cotton Wicks with Wooden Holder - Decorative Brass Diya for Spiritual Ceremonies, Home Decor - Gift for Diwali, Navratri Festivals...",
    icon: amazon_logo,
    link: "https://amzn.to/4feNckE",
  },
  {
    id: "38",
    image: Shringar2,
    heading1: "Shringaar",
    heading2: "Complete Shringaar set",
    text: "Mata Rani ji Beautiful Ornaments for Navratri/ Complete Shringaar set – Radha Rani's Adjustable Iskcon Style Hair for idols Shringar Accessory (Set of 9)...",
    icon: amazon_logo,
    link: "https://amzn.to/4m18RiY",
  },
  {
    id: "39",
    image: mukut,
    heading1: "Mukut",
    heading2: "Mukut For Mata ji",
    text: "God Jewellery Crown for All Gods and Goddesse...",
    icon: amazon_logo,
    link: "https://amzn.to/3IT4sjc",
  },
  {
    id: "40",
    image: dress,
    heading1: "Cloth",
    heading2: "MATA DurgaJi Embroidery Dress",
    text: "(for 5 inch Murti) HK Store's MATA DurgaJi Embroidery Dress for Navratri with 1 Mala and 1 Mukut | (Murti is not Included)...",
    icon: amazon_logo,
    link: "https://amzn.to/4fe282v",
  },
  {
    id: "41",
    image: DurgaIdol3,
    heading1: "Durga Maa Idol",
    heading2: "Devi Idol Statue",
    text: "Maa Durga Devi Idol Statue Sherawali MATA Rani Spiritual Puja Vastu Showpiece Figurine - Religious Murti Pooja Gift Item (10.5 X 7 INCH)...",
    icon: amazon_logo,
    link: "https://amzn.to/4miYBSM",
  },
  {
    id: "42",
    image: DurgaIdol4,
    heading1: "Murti",
    heading2: "Durga Maa Idol",
    text: "Marble Antique Durga Ma Sherawali MATA Murti Statue Vaishni Devi Idol for Pooja Room Home Temple 15 Inch (Solid Piece) (Multicolor)...",
    icon: amazon_logo,
    link: "https://amzn.to/4lPjhln",
  },
  {
    id: "43",
    image: DurgaIdol5,
    heading1: "Murti",
    heading2: "Durga Maa Idol",
    text: "Durga White Marble Statue| MATA Rani Murti for Puja House Temple| Divine Sherawali Maa Sitting on Lion Sculpture(10X8X3Inch)...",
    icon: amazon_logo,
    link: "https://amzn.to/3U568IQ",
  },
  {
    id: "44",
    image: DurgaIdol6,
    heading1: "Brass Idol",
    heading2: "Durga Maa Ido",
    text: "Pure Metal Gold Plated Astadhatu Sherawali Maa | Durga Idol sherawali MATA Murti Goddess for Pooja Room | Temple Mandir Decor Showpiece...",
    icon: amazon_logo,
    link: "https://amzn.to/3U8iaRI",
  },
  {
    id: "45",
    image: DurgaIdol7,
    heading1: "brass Idol",
    heading2: "Shri Durga Idol",
    text: "Astadhatu (8 Metals) Made Shri Durga Idol/Shri Ambe Maa Brass Idol/Shri Vaishno Devi Idol...",
    icon: amazon_logo,
    link: "https://amzn.to/479eSFt",
  },
  {
    id: "46",
    image: DurgaIdol8,
    heading1: "Murti",
    heading2: "Durga maa Idol",
    text: "Goddess Maa Durga Devi Idol | Durga maa Idol | Statue Sherawali MATA Rani Spiritual Puja Vastu Showpiece Figurine - Religious Murti Pooja Gift Item (28 x 15 x 7 cm)...",
    icon: amazon_logo,
    link: "https://amzn.to/4oby8bl",
  },
  {
    id: "47",
    image: DurgaIdol9,
    heading1: "Murti",
    heading2: "Durga maa Idol",
    text: "Maa Durga Devi Idol | Durga maa Idol | Statue Sherawali MATA Rani Spiritual Puja Vastu Showpiece Figurine - Religious Murti Pooja Gift Item (26 x 16 x 7 cm)...",
    icon: amazon_logo,
    link: "https://amzn.to/45sea4P",
  },
  {
    id: "48",
    image: DurgaIdol10,
    heading1: "Kali Mata ",
    heading2: "Prachand and Shayam Roop",
    text: "Kali Mata, Prachand and Shayam Roop Marble Dust Maa Murti Idols Statue Sculpture For Temple, Office, Mandir, Marble Dust and Washable Giftting Items (Black, 6.5 Inches)...",
    icon: amazon_logo,
    link: "https://amzn.to/4l0xuLj",
  },
  {
    id: "49",
    image: jau,
    heading1: "Jau",
    heading2: "Best Quality Jau",
    text: "Best Quality Bazar Barley Grain Natural and Rich Fiber Jau Seeds Pack of 1 KG...",
    icon: amazon_logo,
    link: "https://amzn.to/4mjntJV",
  },
  {
    id: "50",
    image: Hangingidol,
    heading1: "Maa Durga Face",
    heading2: "Shri Durga Face Wall Hanging Idol",
    text: "Brass Made Shri Durga Face Wall Hanging Idol/Durga MATA/Vaishno Devi MATA Face (Mukhota) Wall Hanging Idol to Protect Form All Negative Energies...",
    icon: amazon_logo,
    link: "https://amzn.to/4l4Gora",
  },
  {
    id: "51",
    image: KalashGhagra,
    heading1: "Kalash Ghagra",
    heading2: "Navaratri Kalash Ghagra Big",
    text: "Navaratri Kalash Ghagra Big/Paithani Saree/Mata Rani Poshak for Varalakshmi, Ma Laxmi, Goddess Durga, Radha, Gangaur/Chunri Patka Lehenga Dress/Margashirsha Devi Pooja...",
    icon: amazon_logo,
    link: "https://amzn.to/474cKib",
  },
  {
    id: "52",
    image: gangajal,
    heading1: "Gangajal",
    heading2: "Purest Holy Water Directly From Gangotri",
    text: "Gangajal The Purest Holy Water Directly From Gangotri Valley Approved By Govt. Of Uttrakhand For Puja Purposes 500Ml...",
    icon: amazon_logo,
    link: "https://amzn.to/46vFTmj",
  },
  {
    id: "53",
    image: gangajal1,
    heading1: "Gangajal",
    heading2: "Gangajal From 'BRAHMA KUND'",
    text: "2.5 L Pavitra Gangajal From 'BRAHMA KUND' Har Ki Pauri, Haridwar...",
    icon: amazon_logo,
    link: "https://amzn.to/4mlzq1Z",
  },
  {
    id: "54",
    image: gomutra,
    heading1: "Gomutra",
    heading2: "Desi Cow Urine",
    text: "Gomutra, Pure Natural Desi Cow Urine for Puja and Religious Rituals, 100 ml...",
    icon: amazon_logo,
    link: "https://amzn.to/41c6eSQ",
  },
  {
    id: "55",
    image: GobarUpla,
    heading1: "Gobar Upla",
    heading2: "100% Desi Kanda Gobar",
    text: "GIR GAUSHALA Handmade Gobar Upla Pack of 10 (Round 13 cm) | Upla Cow Dung for Pooja | 100% Desi Kanda Gobar | Cow Dung Cake for Havan, Puja Rituals...",
    icon: amazon_logo,
    link: "https://amzn.to/4ot9ljs",
  },
  {
    id: "56",
    image: poojakit,
    heading1: "Pooja Kit",
    heading2: "Pooja Samagri",
    text: "All in One Pooja Kit - Pooja Items for Special Festivals | Pooja Samagri for Diwali, Navratri, Dusshera, Hawan & Housewarming Pooja | Indian Festival Pooja Kit |Puja Kit with 25 Samagri Item...",
    icon: amazon_logo,
    link: "https://amzn.to/4l0uRZL",
  },
  {
    id: "57",
    image: LotusHanging,
    heading1: "Lotus",
    heading2: "Floral Wall Hangings",
    text: "Lotus Hanging 7 Pcs - Fabric,Floral Wall Hangings for Temple Decor, for Stage Decor, Handmade Wall Decoration, Hanging for Home...",
    icon: amazon_logo,
    link: "https://amzn.to/3Hcjr7k",
  },
  {
    id: "58",
    image: NavDurgaphoto,
    heading1: "Nav Durga",
    heading2: "Nav Durga Wooden",
    text: "Set of 9 Pieces Nav Durga Wooden MDF Set for Navratri Decoration for Home Temple...",
    icon: amazon_logo,
    link: "https://amzn.to/40FBLwj",
  },
  {
    id: "59",
    image: Flowers,
    heading1: "Flowers",
    heading2: "Artificial Flowers",
    text: "Artificial Flowers for Decoration - 12Pc(3.6ft), Money Plant Artificial Leaves- 2Pcs(8ft),...",
    icon: amazon_logo,
    link: "https://amzn.to/46vGy7h",
  },
  {
    id: "60",
    image: Toran,
    heading1: "Toran",
    heading2: "Handicraft Toran",
    text: "Handicraft Door Toran for Home Decoration and Office Decor|Door Hanging for Door Decoration, Thoranam...",
    icon: amazon_logo,
    link: "https://amzn.to/3GSbQuJ",
  },
  {
    id: "61",
    image: MangoLeaves,
    heading1: "Mango Leaves",
    heading2: "Flowers Decoration at Home",
    text: "Mango Leaves and Flowers Decoration at Home | Beautifully Crafted Artificial Flower | Easy Simple Backdrop (Yellow Flowers) (Pack of 12 PCS)...",
    icon: amazon_logo,
    link: "https://amzn.to/4o5nmDA",
  },
  {
    id: "62",
    image: ArtificialFlower,
    heading1: " Artificial Flower",
    heading2: "Artificial Garland for Home",
    text: "Artificial Garland for Home Decoration, 50 Inches Handcrafted Artificial Flower Garland for Sankranti Ugadi Varamahalakshmi Wedding Event...",
    icon: amazon_logo,
    link: "https://amzn.to/4m58ovO",
  },
  {
    id: "63",
    image: Garland,
    heading1: "Garland ",
    heading2: "Artificial Garland",
    text: "Artificial Garland for Home Decoration, 40 Inches Handcrafted Artificial Rose Flower Garland for Sankranti Ugadi Varamahalakshmi Wedding Event...",
    icon: amazon_logo,
    link: "https://amzn.to/4ffftHR",
  },
  {
    id: "64",
    image: NavDurgaWooden,
    heading1: "Nav Durga Maa",
    heading2: "Nav Durga Wooden Set",
    text: "Nav Durga Wooden MDF Set for Durga Pooja Navratri Decoration for Home & Decor, 40 mm, 20 mm...",
    icon: amazon_logo,
    link: "https://amzn.to/4loHhLr",
  },
  {
    id: "65",
    image: Dandiya,
    heading1: "Dandiya",
    heading2: "Multicolor Wooden Dandiya",
    text: "Creation Multicolor Wooden Dandiya Sticks for Dance Garba Sticks for Navratri Celebration Large Size 14.4 Inches...",
    icon: amazon_logo,
    link: "https://amzn.to/46AlRqJ",
  },
  {
    id: "66",
    image: Dandiya1,
    heading1: "Dandiya",
    heading2: "Wooden Dandiya Sticks",
    text: "Multicolor Sankheda Wooden Dandiya Sticks for Dance Garba Sticks for Navratri Celebration 14.4 Inches Large Size (Pack of 2 Pair)...",
    icon: amazon_logo,
    link: "https://amzn.to/44TCjRI",
  },
  {
    id: "67",
    image: Dandiya2,
    heading1: "Dandiya",
    heading2: "Wooden Dandiya Sticks",
    text: "Multicolor Wooden Dandiya Sticks for Dance Garba Sticks for Navratri Celebration with Lace Decoration 14.4 Inches Large Size (Pack of 2 Pair)...",
    icon: amazon_logo,
    link: "https://amzn.to/45cCGpw",
  },
  {
    id: "68",
    image: Chowki,
    heading1: "Chowki",
    heading2: "Puja Chowki",
    text: "Marble Rectangle Puja Chowki | Hand-Painted Kalash Peacock Art Design Small Marble Pooja Chowki for God Idols, Puja Mandir, Bajot and Decorations (Pack of 2,Size: 4 x 6 Inch)...",
    icon: amazon_logo,
    link: "https://amzn.to/45tqLVt",
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

const Navdurga = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
          Nav Gurga Pooja Items
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
                  height: isMobile ? "260px" : "350px",
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

export default Navdurga;
