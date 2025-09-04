import React, { useState, useEffect } from "react";
import amazon_logo from "../../assets/amazon_logo.jpg";
import { db } from "../../firebase";
import { ref, onValue } from "firebase/database";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
// 🔽 ADD: reusable hook + modal
import { useUserData } from "../../components/useUserData";
import UserDetailsModal from "../UserDetailsModal";

import ganeshidol from "../../assets/Ganesh_Chaturthi/bress_ganesh.jpg";
import gansesh_idol from "../../assets/Ganesh_Chaturthi/ganesh_Idol.jpg";
import GanpatiFigurine from "../../assets/Ganesh_Chaturthi/GanpatiFigurine.jpg";
import BrassGanesha from "../../assets/Ganesh_Chaturthi/BrassGanesha.jpg";
import LordGanesha from "../../assets/Ganesh_Chaturthi/LordGanesha.jpg";
import LakshmiGanesha from "../../assets/Ganesh_Chaturthi/LakshmiGanesha.jpg";
import GaneshBhagwan from "../../assets/Ganesh_Chaturthi/GaneshBhagwan.jpg";
import GaneshMurti from "../../assets/Ganesh_Chaturthi/GaneshMurti.jpg";
import LaxmiGaneshIdol from "../../assets/Ganesh_Chaturthi/LaxmiGaneshIdol.jpg";
import PureBrassGanesha from "../../assets/Ganesh_Chaturthi/PureBrassGanesha.jpg";
import EcoFriendlyGanesha from "../../assets/Ganesh_Chaturthi/EcoFriendlyGanesha.jpg";
import ClayforGanpati from "../../assets/Ganesh_Chaturthi/ClayforGanpati.jpg";
import Ganeshji from "../../assets/Ganesh_Chaturthi/Ganeshji.jpg";
import LordGaneshaStatue from "../../assets/Ganesh_Chaturthi/LordGaneshaStatue.jpg";
import HangingWallGanesha from "../../assets/Ganesh_Chaturthi/HangingWallGanesha.jpg";
import LaxmiGaneshSaraswati from "../../assets/Ganesh_Chaturthi/LaxmiGaneshSaraswati.jpg";
import MittiGaneshIdol from "../../assets/Ganesh_Chaturthi/MittiGaneshIdol.jpg";
import GaneshaRiddhiSiddhi from "../../assets/Ganesh_Chaturthi/GaneshaRiddhiSiddhi.jpg";
import MittiGaneshmurti from "../../assets/Ganesh_Chaturthi/MittiGaneshmurti.jpg";
import EcoFriendlyMud from "../../assets/Ganesh_Chaturthi/EcoFriendlyMud.jpg";
import Mushak from "../../assets/Ganesh_Chaturthi/Mushak.jpg";
import GaneshMittiIdol from "../../assets/Ganesh_Chaturthi/GaneshMittiIdol.jpg";
import GanpatiMurti from "../../assets/Ganesh_Chaturthi/GanpatiMurti.jpg";
import EcoFriendlyGanesh1 from "../../assets/Ganesh_Chaturthi/EcoFriendlyGanesh1.jpg";
import EcoFriendlyHandcrafted from "../../assets/Ganesh_Chaturthi/EcoFriendlyHandcrafted.jpg";
import MittiGanpati from "../../assets/Ganesh_Chaturthi/MittiGanpati.jpg";
import GaneshaMurti from "../../assets/Ganesh_Chaturthi/GaneshaMurti.jpg";
import GaneshaMurti1 from "../../assets/Ganesh_Chaturthi/GaneshaMurti1.jpg";
import ClayGanesh from "../../assets/Ganesh_Chaturthi/ClayGanesh.jpg";
import HandcraftedGanpati from "../../assets/Ganesh_Chaturthi/HandcraftedGanpati.jpg";
import EcoFriendlyGanesh2 from "../../assets/Ganesh_Chaturthi/EcoFriendlyGanesh2.jpg";
import MittiGaneshIdol1 from "../../assets/Ganesh_Chaturthi/MittiGaneshIdol1.jpg";
import EcoFriendlyHandcrafted1 from "../../assets/Ganesh_Chaturthi/EcoFriendlyGanesh1.jpg";
import MandapTent from "../../assets/Ganesh_Chaturthi/MandapTent.jpg";
import Artificialgendaphool from "../../assets/Ganesh_Chaturthi/Artificialgendaphool.jpg";
import WhiteNetCurtain from "../../assets/Ganesh_Chaturthi/WhiteNetCurtain.jpg";
import WhiteCube from "../../assets/Ganesh_Chaturthi/WhiteCube.jpg";
import DecorationSetup from "../../assets/Ganesh_Chaturthi/DecorationSetup.jpg";
import DecorationItems from "../../assets/Ganesh_Chaturthi/DecorationItems.jpg";
import GanpatiLeaf from "../../assets/Ganesh_Chaturthi/GanpatiLeaf.jpg";
import LotusHangin from "../../assets/Ganesh_Chaturthi/LotusHangin.jpg";
import Mushak1 from "../../assets/Ganesh_Chaturthi/Mushak1.jpg";
import PujaSamagri from "../../assets/Ganesh_Chaturthi/PujaSamagri.jpg";
import PujaSamagri1 from "../../assets/Ganesh_Chaturthi/PujaSamagri1.jpg";
import PujaSamagri2 from "../../assets/Ganesh_Chaturthi/PujaSamagri2.jpg";
import GanpatiYantra from "../../assets/Ganesh_Chaturthi/GanpatiYantra.jpg";
import Chowki from "../../assets/Ganesh_Chaturthi/Chowki.jpg";
import BaithakAasan from "../../assets/Ganesh_Chaturthi/BaithakAasan.jpg";
import LotusAasan from "../../assets/Ganesh_Chaturthi/LotusAasan.jpg";
import ShubhLabh from "../../assets/Ganesh_Chaturthi/ShubhLabh.jpg";
import Plasticmandap from "../../assets/Ganesh_Chaturthi/Plasticmandap.jpg";
import Chowki1 from "../../assets/Ganesh_Chaturthi/Chowki1.jpg";
import PoojaThaliSet from "../../assets/Ganesh_Chaturthi/PoojaThaliSet.jpg";
import Chowki2 from "../../assets/Ganesh_Chaturthi/Chowki2.jpg";
import Pagdi from "../../assets/Ganesh_Chaturthi/Pagdi.jpg";
import Phoolbatti from "../../assets/Ganesh_Chaturthi/Phoolbatti.jpg";
import VelvetUparna from "../../assets/Ganesh_Chaturthi/VelvetUparna.jpg";
import ModakMaker from "../../assets/Ganesh_Chaturthi/ModakMaker.jpg";
import Pheta from "../../assets/Ganesh_Chaturthi/Pheta.jpg";
import janeu from "../../assets/Ganesh_Chaturthi/Janeu.jpg";
import Ganeshaphoto from "../../assets/Ganesh_Chaturthi/Ganeshaphoto.jpg";
import Ganeshaphoto1 from "../../assets/Ganesh_Chaturthi/Ganeshaphoto1.jpg";
import Aarti from "../../assets/Ganesh_Chaturthi/Aarti.jpg";
import ArtificialRose from "../../assets/Ganesh_Chaturthi/ArtificialRose.jpg";

const featuredProducts = [
  {
    id: "1",
    image: ganeshidol,
    heading1: "Ganesha Idol",
    heading2: "Ganesha Idol in Pure Brass",
    text: "Ganesh Murti for Pooja Mandir Decor or Return Gifts for Pooja | 3.5x4x7 cm | 1 Piece...",
    icon: amazon_logo,
    link: "https://amzn.to/3IT6i3O",
  },
  {
    id: "2",
    image: gansesh_idol,
    heading1: "Ganesh Idol",
    heading2: "Ganesh Statue Handcrafte",
    text: "Ganesha Idol Ganesh Statue Handcrafted Ganesha Lord Home Temple Decor Gift Item (Lotus Ganesha 4 inch)...",
    icon: amazon_logo,
    link: "https://amzn.to/40GLDWy",
  },
  {
    id: "3",
    image: GanpatiFigurine,
    heading1: "Lord Ganesha",
    heading2: "Silver Plated Lord Ganesha",
    text: "Silver Plated Lord Ganesha for Diwali Gifts Home Decor - Ganpati Figurine - God of Luck & Success (Size: 3.5 Inches)...",
    icon: amazon_logo,
    link: "https://amzn.to/3H7Mh8Z",
  },
  {
    id: "4",
    image: BrassGanesha,
    heading1: "Brass Ganesha",
    heading2: "Pure Brass Ganesha Idol",
    text: "100% Pure Brass Ganesha Idol (Size: 5.5 cm) | Pital Ganesh Murti for Pooja Room, Home Decor, Office Desk and Car Dashboard | Vinayagar Statue for Diwali Puja...",
    icon: amazon_logo,
    link: "https://amzn.to/45aV5mC",
  },
  {
    id: "5",
    image: LordGanesha,
    heading1: "Lord Ganesha",
    heading2: "Lord Ganesha Idol",
    text: "Lord Ganesha Idol for Home Decor – 6 Inch Small Ganesha Idol | Handmade Ganesh Murti | Ganesha Idols for Home & Office | Spiritual Gift & Decorative Ganesha Idols...",
    icon: amazon_logo,
    link: "https://amzn.to/4mj2KWI",
  },
  {
    id: "6",
    image: LakshmiGanesha,
    heading1: "Lakshmi and Ganesha",
    heading2: "Brass Lakshmi and Ganesha Idol",
    text: "Brass Lakshmi and Ganesha Ganesh Murti Idol Statue Idol Statue Sculpture Height - 7 inches...",
    icon: amazon_logo,
    link: "https://amzn.to/475Ee76",
  },
  {
    id: "7",
    image: GaneshBhagwan,
    heading1: "Ganesh Bhagwan",
    heading2: "Brass Ganesh Bhagwan Idol",
    text: "Brass Ganesh Bhagwan Idol Ganesha Statue Ganpati Murti for Home Entrance Decor Diwali Gift Ganesha with Large Ear Gold Color Height 6.5 Inch...",
    icon: amazon_logo,
    link: "https://amzn.to/3UIkkYl",
  },
  {
    id: "8",
    image: GaneshMurti,
    heading1: "Lord Ganesha",
    heading2: "Gold Plated Lord Ganesha",
    text: "Gold Plated Lord Dagdusheth Ganesha Idol for Car Dashboard | Ganesh Murti for Home Decor, Gifting & Pooja Room - Resin (Multicolor - 3.5 Inches)...",
    icon: amazon_logo,
    link: "https://amzn.to/4lPuh25",
  },
  {
    id: "9",
    image: LaxmiGaneshIdol,
    heading1: "Laxmi Ganesh Idol",
    heading2: "Brass Laxmi Ganesh Idol",
    text: "Brass Laxmi Ganesh Idol (2) | Hindu God Statue for Home Temple, Office & Pooja | Diwali Gift, Housewarming, Wedding & Corporate Gift | Handmade Religious Murti for Mandir & Decor...",
    icon: amazon_logo,
    link: "https://amzn.to/4mn4KNW",
  },
  {
    id: "10",
    image: PureBrassGanesha,
    heading1: "Brass Ganesha Idol",
    heading2: "100% Pure Brass Ganesha Idol",
    text: "100% Pure Brass Ganesha Idol (Size: 8.7 cm) | Pital Ganesh Murti for Pooja Room, Home Decor, Office Desk and Car Dashboard | Vinayagar Statue for Diwali Puja...",
    icon: amazon_logo,
    link: "https://amzn.to/40Kntuq",
  },
  {
    id: "11",
    image: EcoFriendlyGanesha,
    heading1: "Eco Friendly",
    heading2: "Eco Friendly Ganesha Idol",
    text: "Eco Friendly Ganesha Idol, Ganpati murti for Home visarjan, Water Soluble Ganpati Idol (8.6 Inches, Lalbagh)...",
    icon: amazon_logo,
    link: "https://amzn.to/4f9tvdO",
  },
  {
    id: "12",
    image: ClayforGanpati,
    heading1: "Clay for Ganpati",
    heading2: "Organic Clay for Ganpati Idol",
    text: "4kg Organic Clay for Ganpati Idol, Statue & Pot Making | Natural Ready-to-Use Mitti for Ganesha Murti, Diwali Diya, DIY Art & Craft Projects...",
    icon: amazon_logo,
    link: "https://amzn.to/3H9hhFu",
  },
  {
    id: "13",
    image: Ganeshji,
    heading1: "Ganesh ji",
    heading2: "Ganpati Bappa Shoeflower",
    text: "Ganesh ji Ganpati Bappa Shoeflower Idol for Car Dashboard, House Warming, Puja Ghar, Diwali, Gifting 4 inch...",
    icon: amazon_logo,
    link: "https://amzn.to/46sStmi",
  },
  {
    id: "14",
    image: LordGaneshaStatue,
    heading1: "Lord Ganesha",
    heading2: "Premium Decorative Lord Ganesha",
    text: "Premium Decorative Lord Ganesha Statue & Idols for Home, Office, and Pooja for Festivals, Weddings, and Special Occasions, Multicolor...",
    icon: amazon_logo,
    link: "https://amzn.to/4miBCas",
  },
  {
    id: "15",
    image: HangingWallGanesha,
    heading1: "Showpiece Lord Ganesha",
    heading2: "Hanging Wall Ganesha Idol",
    text: "Metal Hanging Wall Kiran Ganesha Idol Ganpati Figurine Showpiece Lord Ganesha for Home Décor Gifting, Brass Finish, 23 cm...",
    icon: amazon_logo,
    link: "https://amzn.to/4fjIbr8",
  },
  {
    id: "16",
    image: LaxmiGaneshSaraswati,
    heading1: "Laxmi Ganesh Saraswati",
    heading2: "Laxmi Ganesh Saraswati Idol",
    text: "Laxmi Ganesh Saraswati Idol Diya Oil Lamp Deepak - Metal Lakshmi Ganesha Showpiece Statue - Traditional Diya for Diwali Puja - Diwali Home Decoration Items Gifts...",
    icon: amazon_logo,
    link: "https://amzn.to/40HRT0k",
  },
  {
    id: "17",
    image: MittiGaneshIdol,
    heading1: "Eco-Friendly Ganesha",
    heading2: "Mitti Ganesh Idol",
    text: "Mitti Ganesh Idol | Eco-Friendly Handcrafted Mud/Clay Ganesh Murti | Ganpati Figurine for Visarjan | Biodegradable Lotus Ganesha Statue | Ganesh Chaturthi...",
    icon: amazon_logo,
    link: "https://amzn.to/4l0Yb2g",
  },
  {
    id: "18",
    image: GaneshaRiddhiSiddhi,
    heading1: "Ganesha with Riddhi Siddhi",
    heading2: "Ganesha with Riddhi Siddhi",
    text: "Metal Lord Ganesha Riddhi Siddhi Chhatra Statue God Ganesh Ganpati Sitting Idol Sculpture Good Luck & Success for Home Gifts Decor(Size: 7.5 x 6 Inches)...",
    icon: amazon_logo,
    link: "https://amzn.to/4ouOzjx",
  },
  {
    id: "19",
    image: MittiGaneshmurti,
    heading1: "Eco-Friendly Handcrafted",
    heading2: "Mitti Ganesh Idol",
    text: "Mitti Ganesh Idol | Eco-Friendly Handcrafted Mud/Clay Ganesh Murti | Ganpati Figurine for Visarjan | Biodegradable Mushak Ganesha Statue | Ganesh Chaturth (Regular Quality)...",
    icon: amazon_logo,
    link: "https://amzn.to/3IRVBhR",
  },
  {
    id: "20",
    image: EcoFriendlyMud,
    heading1: "Eco-Friendly  Ganesh",
    heading2: "Mitti Ganesh Idol",
    text: "Mitti Ganesh Idol | Eco-Friendly Mud/Clay 4 Bhuja Colorful Ganesh Murti | Ganpati Figurine for Visarjan | Biodegradable Ganesha Statue...",
    icon: amazon_logo,
    link: "https://amzn.to/40KrwGZ",
  },
  {
    id: "21",
    image: Mushak,
    heading1: "Mushak",
    heading2: "Mouse with Modak",
    text: "Gold-Plated Mushak (Mooshak) Mouse with Modak | Black Terracotta Finish | Mouse Idol | Vehicle (Vahana) of Lord Ganesha | 2.5 Inch Height ...",
    icon: amazon_logo,
    link: "https://amzn.to/41dfnum",
  },
  {
    id: "22",
    image: GaneshMittiIdol,
    heading1: "Ganesh Mitti Idol",
    heading2: "Eco Friendly",
    text: "Eco Friendly Biodegradable Ganesh Mitti Idol, Ganpati Statue for Ganpati Visarjan Home Decor Mati Ganesh Water Soluble Clay Idol (Size: 10 inches.) ...",
    icon: amazon_logo,
    link: "https://amzn.to/4mgMsxs",
  },
  {
    id: "23",
    image: GanpatiMurti,
    heading1: "Ganpati Murti",
    heading2: "Eco Friendly Ganesha",
    text: "Eco Friendly Ganesha Idol, Ganpati Murti For Home Visarjan, Water Soluble Ganpati Idol (7.5 Inches, Pagdi Ganesh Half Paint, Fantasy, Multicolour)...",
    icon: amazon_logo,
    link: "https://amzn.to/44SARPx",
  },
  {
    id: "24",
    image: EcoFriendlyGanesh1,
    heading1: "Clay Ganesha Murti",
    heading2: "Eco-Friendly Ganesh",
    text: "Eco-Friendly Ganesh Idol for Visarjan | 21 cm Clay Ganesha Murti | Water Soluble, Handcrafted with Natural Colors | Includes Roli-Chawal & Marigold Seeds...",
    icon: amazon_logo,
    link: "https://amzn.to/473M4Oz",
  },
  {
    id: "25",
    image: EcoFriendlyHandcrafted,
    heading1: "Ganpati Murti Biodegradable",
    heading2: "Eco Friendly Handcrafted",
    text: "Eco Friendly Handcrafted Clay/Mud Dagdusheth Ganpati Murti Biodegradable Kacchi Mitti Ganesha Water Soluble Ganesh Idol for Ganpati Visarjan (H : 9 Inches.)...",
    icon: amazon_logo,
    link: "https://amzn.to/4mkyhYt",
  },
  {
    id: "26",
    image: MittiGanpati,
    heading1: " Mitti Ganpati Statue",
    heading2: "Eco Friendly Biodegradable",
    text: "Eco Friendly Biodegradable Ganesha Idol, Mitti Ganpati Statue for Visarjan at Home, Water Soluble Ganesh Clay Idol...",
    icon: amazon_logo,
    link: "https://amzn.to/47cFIfM",
  },
  {
    id: "27",
    image: GaneshaMurti,
    heading1: "Clay Ganesha Murti",
    heading2: "Eco-Friendly Ganpati",
    text: "Eco-Friendly Ganpati Idol – 8.5 Inch Biodegradable Clay Ganesha Murti for Visarjan at Home | Kachi Mitti Natural Water-Soluble Ganesh Statue for Ganesh Chaturthi...",
    icon: amazon_logo,
    link: "https://amzn.to/45z6yN5",
  },
  {
    id: "28",
    image: GaneshaMurti1,
    heading1: "Eco-Friendly",
    heading2: "Eco-Friendly Ganesh Idol",
    text: "Eco-Friendly Ganesh Idol cm Clay Ganesha Murti for Home & Visarjan | Biodegradable, Water Soluble with Pooja Kit & Marigold Seeds | Handmade Ganpati Ido...",
    icon: amazon_logo,
    link: "https://amzn.to/451M66U",
  },
  {
    id: "29",
    image: ClayGanesh,
    heading1: "Eco Friendly Ganesh",
    heading2: "Eco Friendly Clay Ganesh",
    text: "Eco Friendly Clay Ganesh Idol for Ganesh Chaturthi 7 Inch | Water Soluble | Ganesh Chaturthi Idol | Clay Ganesha Idol...",
    icon: amazon_logo,
    link: "https://amzn.to/475dDHd",
  },
  {
    id: "30",
    image: HandcraftedGanpati,
    heading1: "Eco-Friendly Ganpati",
    heading2: "Eco-Friendly Handcrafted",
    text: "Eco-Friendly Handcrafted Ganpati Idol – 8 Inch Biodegradable Kacchi Mitti Ganesha Murti | Water-Soluble Clay/Mud Statue for Visarjan...",
    icon: amazon_logo,
    link: "https://amzn.to/3UBCUkV",
  },
  {
    id: "31",
    image: EcoFriendlyGanesh2,
    heading1: "Eco Friendly Ganpati",
    heading2: "Eco Friendly Handcrafted",
    text: "Eco Friendly Handcrafted Clay/Mud Ganpati Murti Biodegradable Kacchi Mitti Ganesha Water Soluble Ganesh Idol for Ganpati Visarjan...",
    icon: amazon_logo,
    link: "https://amzn.to/45qpf6q",
  },
  {
    id: "32",
    image: MittiGaneshIdol1,
    heading1: "Eco-Friendly Ganesh",
    heading2: "Mitti Ganesh Idol",
    text: "Mitti Ganesh Idol | Eco-Friendly Mud/Clay 4 Bhuja Mukut Ganesh Murti | Ganpati Figurine for Visarjan | Biodegradable Ganesha Statue...",
    icon: amazon_logo,
    link: "https://amzn.to/3U79niZ",
  },
  {
    id: "33",
    image: EcoFriendlyHandcrafted1,
    heading1: "Eco Friendly Ganpati",
    heading2: "Eco Friendly Handcrafted",
    text: "Eco Friendly Handcrafted Clay/Mud Ganpati Murti Biodegradable Kacchi Mitti Ganesha Water Soluble Ganesh Idol for Ganpati Visarjan...",
    icon: amazon_logo,
    link: "https://amzn.to/3U4Ghkd",
  },
  {
    id: "34",
    image: MandapTent,
    heading1: "Mandap",
    heading2: "Pooja Decoration Mandap",
    text: "25Pcs Pooja Decoration Mandap Tent Pandal with Marigold Garlands for Ganesh Chaturthi Home Decor Cubical Mandap...",
    icon: amazon_logo,
    link: "https://amzn.to/4oarG4q",
  },
  {
    id: "35",
    image: Artificialgendaphool,
    heading1: "Artificial phool",
    heading2: "Artificial genda phool",
    text: "Artificial genda phool for Decoration Flowers for Decoration Garland with Bell for Diwali & Festivals | 5 Feet Long 10 Pcs with 2 Diya (Orange+ Yellow)...",
    icon: amazon_logo,
    link: "https://amzn.to/41dAvAE",
  },
  {
    id: "36",
    image: WhiteNetCurtain,
    heading1: "White Net Curtain",
    heading2: "White Net Curtain For Decoration",
    text: "White Net Curtain For Decoration with Fairy Lights (9m), White Canopy Tent For Decorations, Birthday Backdrop For Decoration...",
    icon: amazon_logo,
    link: "https://amzn.to/46zDpDw",
  },
  {
    id: "37",
    image: WhiteCube,
    heading1: "Mandapam Stand Ganesh",
    heading2: "Tent For Ganesh Mandapam",
    text: "Mandap Tent For Ganesh Mandapam Stand Ganesh Chaturthi, Janamshtami Backdrop Frame for Pooja and Festivals Home Decor Cubical for Durga Pooja, Ganesh Chaturthi (20 Inch Cube)...",
    icon: amazon_logo,
    link: "https://amzn.to/4faGQ5I",
  },
  {
    id: "38",
    image: DecorationSetup,
    heading1: "Ganpati Decoration Setup",
    heading2: "Decoration Setup for Home",
    text: " Ganpati Decoration Setup for Home, Multicolor Backdrop Decorations with Marigold and Pom Pom Hangings, Fairy Lights, Janmashtami, Varalakshmi, Haldi, Backdrop Cloth for Decoration Pooja...",
    icon: amazon_logo,
    link: "https://amzn.to/44WySK0",
  },
  {
    id: "39",
    image: DecorationItems,
    heading1: "Ganpati Decoration Items",
    heading2: "Pooja Room Decor Items",
    text: "Ganpati Decoration Items | Pooja Room Decor Items | Backdrop for Ganpati Mandap with Net Curtains and LED Lights for Decoration (Lotus+NET)...",
    icon: amazon_logo,
    link: "https://amzn.to/3U5bDXV",
  },
  {
    id: "40",
    image: GanpatiLeaf,
    heading1: "Temple Decoration Led Lights ",
    heading2: "Ganpati Leaf Led Lights",
    text: "Ganpati Leaf Led Lights for Home Decoration - 12LED, 8 Flashing Mode, Pooja Room Decoration Items, Temple Decoration Items for Home, String Lights for Balcony...",
    icon: amazon_logo,
    link: "https://amzn.to/4lnbuul",
  },
  {
    id: "41",
    image: LotusHangin,
    heading1: "Lotus",
    heading2: "Hanging Lotus",
    text: "Lotus Hanging 5 Pcs| Floral Wall Hangings for Temple Decor -Showpieces for Stage Decor| Wall Decoration with Pink Lotus Buds Hanging for Home Decor,Diwali,Festival Décor| 4 Ft Each|...",
    icon: amazon_logo,
    link: "https://amzn.to/44SJolx",
  },
  {
    id: "42",
    image: Mushak1,
    heading1: "Mushak",
    heading2: "Gold-Plated Mushak",
    text: "Gold-Plated Mushak (Mooshak) Mouse with Modak | Orange Terracotta Finish | Mouse Idol | Vehicle (Vahana) of Lord Ganesha | 2.5 Inch Height | Home Decor, Mandir Pooja Room, Office Desk...",
    icon: amazon_logo,
    link: "https://amzn.to/457gZXF",
  },
  {
    id: "43",
    image: PujaSamagri,
    heading1: "Pujan Samagri Kit",
    heading2: "Ganesh Chaturthi Puja Item",
    text: "Ganesh Chaturthi Puja Samagri Kit – Traditional Complete Puja Set with 35 Sacred Items | Ganpati Puja Essentials for Rituals and Offerings at Home...",
    icon: amazon_logo,
    link: "https://amzn.to/4l4WuRo",
  },
  {
    id: "44",
    image: PujaSamagri1,
    heading1: "Pujan Samagri",
    heading2: "Ganesh Chaturthi Pujan Samagri ",
    text: "Ganesh Chaturthi Pooja Kit – 35 Premium Puja Samagri Essentials for Ganpati Puja at Home & Office – Ready‑to‑Use kit for Puja with Puja Vidhi Book...",
    icon: amazon_logo,
    link: "https://amzn.to/3GO9IEj",
  },
  {
    id: "45",
    image: PujaSamagri2,
    heading1: "Puja Samagri",
    heading2: "Ganesh Chaturthi Puja Samagri",
    text: "Ganesh Puja Samagri Kit for Ganesh Pujan/Ganpati Pooja Kit/Ganesh Chaturthi Puja/Ganesh Pooja with Mitti(Clay) Ganesh Murti(17 Items)...",
    icon: amazon_logo,
    link: "https://amzn.to/41dnkzI",
  },
  {
    id: "46",
    image: GanpatiYantra,
    heading1: "Ganpati Yantra",
    heading2: "Ganpati Yantra",
    text: "Ganpati Yantra - Gold Plated Copper (for Removing Obstacles) - (4 x 4 inches, Gold)...",
    icon: amazon_logo,
    link: "https://amzn.to/4oc10jR",
  },
  {
    id: "47",
    image: Chowki,
    heading1: "Chowki",
    heading2: " Chowki for Idols Statues Pratima",
    text: "Handicrafts Paradise (4 x 4 inch) Intricate Floral Painted Marble Chowki (Multicolour) Square, Home Mandir, Idols Statues Pratima, Bajot for God...",
    icon: amazon_logo,
    link: "https://amzn.to/4fmWU4A",
  },
  {
    id: "48",
    image: BaithakAasan,
    heading1: "Baithak Aasan",
    heading2: "Ganpati Baithak Aasan",
    text: "Home Ganpati Baithak Aasan/Ganpati Rumal/Embroidered Puja Cloth/Puja Assan/Puja Chowki Assan/,Size- 18 * 18 Inch, Pack of 3 Piece...",
    icon: amazon_logo,
    link: "https://amzn.to/45qdj4B",
  },
  {
    id: "49",
    image: LotusAasan,
    heading1: "Lotus Aasan",
    heading2: "Kamal Aasan Cloth",
    text: " Lotus Aasan (Red) – Kamal Aasan Cloth for Pooja, Idol Base | Lakshmi, Gauri Ganpati, Saraswati Devi, Durga Maa, Varalakshmi, Ganesh | Navratri, Diwali...",
    icon: amazon_logo,
    link: "https://amzn.to/3IWIhZr",
  },
  {
    id: "50",
    image: ShubhLabh,
    heading1: "Shubh Labh",
    heading2: "Decorative Traditional Shubh Labh",
    text: "Shubh Labh with Assorted Gift Box – Decorative Traditional Festive Gift Set for Diwali, Housewarming, Pooja & Return Gifts – Auspicious Indian Gift Combo...",
    icon: amazon_logo,
    link: "https://amzn.to/4mjgMrm",
  },
  {
    id: "51",
    image: Plasticmandap,
    heading1: "Plastic Mandap",
    heading2: "Multipurpose Folding Square Mandap",
    text: "PVC Plastic Multipurpose Folding Square Backdrop Mandap for Ganpati Decoration (2 feet x 2 feet)...",
    icon: amazon_logo,
    link: "https://amzn.to/4fhGDxG",
  },
  {
    id: "52",
    image: Chowki1,
    heading1: "Handicrafts Paradise",
    heading2: "Pooja Chowki Bajot",
    text: "Handicrafts Paradise (4 x 4 inch) Kalash Design Marble Pooja Chowki Bajot for God, Home Mandir, Idols Statues Pratima, Home Décor Showpiece...",
    icon: amazon_logo,
    link: "https://amzn.to/45gwkFH",
  },
  {
    id: "53",
    image: PoojaThaliSet,
    heading1: "Pooja Thali Set",
    heading2: "Brass Pooja Thali",
    text: "8-Inch Plain Brass Pooja Thali Set with Diyas, Kumkum Bowls, Agarbatti Stand & Accessories...",
    icon: amazon_logo,
    link: "https://amzn.to/4mndzr1",
  },
  {
    id: "54",
    image: Chowki2,
    heading1: "Pooja Chowki",
    heading2: "Wooden Pooja Chowki",
    text: "Wooden Minakari Pooja Chowki | Decorative Wooden Bajot | Flower Design Choki for Pooja at Home, Wedding, Festivals & Gifts, 6 Inch Golden...",
    icon: amazon_logo,
    link: "https://amzn.to/4oaxnPQ",
  },
  {
    id: "55",
    image: Pagdi,
    heading1: "Ganpati Pagdi",
    heading2: "Royal Ethnic Pagdi",
    text: "Traditional Ganpati Pagdi Pheta – Royal Ethnic Fabric Crown with Feather, Moti Latkan, Adjustable Headgear for Ganesh Idol (Inch 5 to 12 Inch Idol)...",
    icon: amazon_logo,
    link: "https://amzn.to/473XP7F",
  },
  {
    id: "56",
    image: Phoolbatti,
    heading1: "Phool Batti",
    heading2: "Puja Hand Made Round Batti",
    text: "Cotton Raw Long Wicks Ghee Diya Batti for Puja Hand Made Round Shape Aarti Phool batti Pure White Color Pooja Batti (Pack of 200 Pieces with Plastic Box)...",
    icon: amazon_logo,
    link: "https://amzn.to/4lUzPbS",
  },
  {
    id: "57",
    image: VelvetUparna,
    heading1: "Velvet Uparna",
    heading2: "Gauri Ganpati Shela",
    text: "Ganeshji Velvet Uparna/Gauri Ganpati Shela/Laxmi Chunari Patka Poshak – Designer Vastra for Statue & Idol – Velvet Material – Length: 30 Inches (Set of 2)...",
    icon: amazon_logo,
    link: "https://amzn.to/46u3Wly",
  },
  {
    id: "58",
    image: ModakMaker,
    heading1: "Aluminium Modak Maker",
    heading2: "Mold Combo",
    text: "Aluminium Modak Maker Mold Combo for Ganpati Festival | Multi-Purpose Mould for Modak, Momos, Gujiya | Perfect for Home-Made Delicacies | Ideal for Ganesh Chaturthi Celebrations...",
    icon: amazon_logo,
    link: "https://amzn.to/4moqgBT",
  },
  {
    id: "59",
    image: Pheta,
    heading1: "Pheta and Dupatta",
    heading2: "Ganpati Pheta and Dupatta srt",
    text: "Ganpati Pheta and Dupatta Set - Embrodery and Stone work for Ganesh Idols of height 2 to 3 ft Diameter 4 inches with adjustable base and string to tie...",
    icon: amazon_logo,
    link: "https://amzn.to/45siLUE",
  },
  {
    id: "60",
    image: janeu,
    heading1: "Janeu",
    heading2: "Cotton Janeu",
    text: "Cotton Sacred Thread (White) Pooja Janeu Yagnopaveeth Yagnopavit Janava Janawa 10Pcs...",
    icon: amazon_logo,
    link: "https://amzn.to/3U0haiy",
  },
  {
    id: "61",
    image: Ganeshaphoto,
    heading1: "Ganpati Photo Framed",
    heading2: "Ganapathi Hanging Wall Painting",
    text: "Laminations Lord Ganesha Ganesh Ganpati Ganapathi Hanging Wall Painting Framed Home Decor (Wood,Matte,Gold,Small Size,6 x 8 Inch)...",
    icon: amazon_logo,
    link: "https://amzn.to/44SN9aD",
  },
  {
    id: "62",
    image: Ganeshaphoto1,
    heading1: "Ganesh Photo",
    heading2: "24K Gold Plated Photo Ganesh",
    text: "Wooden Wall Mount Square Framed 24K Gold Plated Mangal Murti Lord Ganesh Ganpati Photo For Home Office Puja Ghar Worship Use 10X10 Inch...",
    icon: amazon_logo,
    link: "https://amzn.to/4oebLlM",
  },
  {
    id: "63",
    image: Aarti,
    heading1: "Aarti Book",
    heading2: "Aarti Sangrah",
    text: "Hardcover Aarti Sangrah in Hindi | Vibrant Art Paper Edition:Huge Collection of 50 Aarti in Hind...",
    icon: amazon_logo,
    link: "https://amzn.to/3UDtXaO",
  },
  {
    id: "64",
    image: ArtificialRose,
    heading1: "Artificial Rose",
    heading2: "Artificial Garland Rose",
    text: "Artificial Garland for Home Decoration, 30 Inches Handcrafted Artificial Rose Flower Garland for Sankranti Ugadi Varamahalakshmi Wedding Event...",
    icon: amazon_logo,
    link: "https://amzn.to/45rVwtQ",
  },
];

const Ganesh_Chaturthi = () => {
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
    const itemsRef = ref(db, "ganeshchaturthi");
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
          Ganesh Chaturthi Pooja Items
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

export default Ganesh_Chaturthi;
