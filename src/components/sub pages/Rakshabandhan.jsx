import React, { useState, useEffect } from "react";
import amazon_logo from "../../assets/amazon_logo.jpg";

import rakhi1 from "../../assets/rakshabandhan/Rakhi1.jpg";
import rakhi2 from "../../assets/rakshabandhan/Rakhi2.jpg";
import rakhi3 from "../../assets/rakshabandhan/Rakhi3.jpg";
import rakhi4 from "../../assets/rakshabandhan/Rakhi4.jpg";
import rakhi5 from "../../assets/rakshabandhan/Rakhi5.jpg";
import rakhi6 from "../../assets/rakshabandhan/rakhi6.jpg";
import rakhi7 from "../../assets/rakshabandhan/Rakhi7.jpg";
import rakhi8 from "../../assets/rakshabandhan/Rakhi8.jpg";
import rakhiwithdry from "../../assets/rakshabandhan/rakhiwithdry.jpg";
import AnmolRakhi from "../../assets/rakshabandhan/AnmolRakhi.jpg";
import RakhiwithChocolate from "../../assets/rakshabandhan/RakhiwithChocolate.jpg";
import rakhi9 from "../../assets/rakshabandhan/Rakhi9.jpg";
import rakhi10 from "../../assets/rakshabandhan/Rakhi10.jpg";
import rakhi11 from "../../assets/rakshabandhan/Rakhi11.jpg";
import rakhi12 from "../../assets/rakshabandhan/Rakhi12.jpg";
import rakhi13 from "../../assets/rakshabandhan/Rakhi13.jpg";
import rakhi14 from "../../assets/rakshabandhan/Rakhi14.jpg";
import rakhi15 from "../../assets/rakshabandhan/Rakhi15.jpg";
import rakhi16 from "../../assets/rakshabandhan/Rakhi16.jpg";
import rakhi17 from "../../assets/rakshabandhan/Rakhi17.jpg";
import Rakhi18 from "../../assets/rakshabandhan/Rakhi18.jpg";
import rakhi19 from "../../assets/rakshabandhan/Rakhi19.jpg";
import rakhi20 from "../../assets/rakshabandhan/Rakhi20.jpg";
import Rakhi21 from "../../assets/rakshabandhan/Rakhi21.jpg";
import gift from "../../assets/rakshabandhan/gift.jpg";
import Rakhi22 from "../../assets/rakshabandhan/Rakhi22.jpg";
import rakhi23 from "../../assets/rakshabandhan/Rakhi23.jpg";
import RakhiGiftHamper from "../../assets/rakshabandhan/RakhiGiftHamper.jpg";
import rakhi24 from "../../assets/rakshabandhan/Rakhi24.jpg";
import rakhi25 from "../../assets/rakshabandhan/Rakhi25.jpg";
import rakhi26 from "../../assets/rakshabandhan/Rakhi26.jpg";
import rakhi27 from "../../assets/rakshabandhan/Rakhi27.jpg";
import rakhi28 from "../../assets/rakshabandhan/Rakhi28.jpg";
import Rakhi29 from "../../assets/rakshabandhan/Rakhi29.jpg";
import rakhi30 from "../../assets/rakshabandhan/Rakhi30.jpg";
import Rakhi31 from "../../assets/rakshabandhan/Rakhi31.jpg";
import rakhi32 from "../../assets/rakshabandhan/Rakhi32.jpg";
import Rakhi33 from "../../assets/rakshabandhan/Rakhi33.jpg";
import rakhi34 from "../../assets/rakshabandhan/Rakhi34.jpg";
import rakhi35 from "../../assets/rakshabandhan/Rakhi35.jpg";
import Rakhi36 from "../../assets/rakshabandhan/Rakhi36.jpg";
import Rakhi37 from "../../assets/rakshabandhan/Rakhi37.jpg";
import Rakhi38 from "../../assets/rakshabandhan/Rakhi38.jpg";
import Rakhi39 from "../../assets/rakshabandhan/Rakhi39.jpg";
import Rakhi40 from "../../assets/rakshabandhan/Rakhi40.jpg";
import Rakhi41 from "../../assets/rakshabandhan/Rakhi41.jpg";
import Rakhi42 from "../../assets/rakshabandhan/Rakhi42.jpg";
import Rakhi43 from "../../assets/rakshabandhan/Rakhi43.jpg";
import Rakhi44 from "../../assets/rakshabandhan/Rakhi44.jpg";
import Rakhi45 from "../../assets/rakshabandhan/Rakhi45.jpg";
import Rakhi46 from "../../assets/rakshabandhan/Rakhi46.jpg";
import Rakhi47 from "../../assets/rakshabandhan/Rakhi47.jpg";
import Rakhi48 from "../../assets/rakshabandhan/Rakhi48.jpg";
import Rakhi49 from "../../assets/rakshabandhan/Rakhi49.jpg";
import nariyal from "../../assets/rakshabandhan/nariyal.jpg";
import Nariyalgotta from "../../assets/rakshabandhan/nariyalgotta.jpg";
import laldhaga from "../../assets/rakshabandhan/laldhaga.jpg";
import Rumal from "../../assets/rakshabandhan/Rumal.jpg";
import Thali from "../../assets/rakshabandhan/thali.jpg";
import bhagwanrakhi from "../../assets/rakshabandhan/bgwnrakhi.jpg";
import bhagwanrakhi1 from "../../assets/rakshabandhan/bgwnrakhi1.jpg";
import thali1 from "../../assets/rakshabandhan/thali1.jpg";
import lotta from "../../assets/rakshabandhan/lotta.jpg";
import sweets from "../../assets/rakshabandhan/sweets.jpg";

const featuredProducts = [
  {
    id: "1",
    image: rakhi1,
    heading1: "Rakhi",
    heading2: "Rakhi Combo",
    text: "Gold Plated Designer Floral Rakhi Combo (Set of 2) with Roli Chawal and Raksha Bandhan Greeting Card For Men...",
    icon: amazon_logo,
    link: "https://amzn.to/40IdUMz",
  },
  {
    id: "2",
    image: rakhi2,
    heading1: "Rakhi",
    heading2: "Rakhi Set of 5",
    text: "Rakhi Set of 5 for Brother Bhaiya Bhai Kids, Radhe Krishna Rakhi for Brother, Om Ganesha Rakhi, Rakhis for Rakshabandhan,...",
    icon: amazon_logo,
    link: "https://amzn.to/4m5awUk",
  },
  {
    id: "3",
    image: rakhi3,
    heading1: "Rakhi",
    heading2: "Rakhi for Brother Set of 2",
    text: "Rakhi for Brother Set of 2 with Fridge Magnet Gift Floral Kundan Rakhis for Bhaiya Bhai Boy Men Raksha Bandhan Designer rakhi Meenakari Rakhi, ...",
    icon: amazon_logo,
    link: "https://amzn.to/3JcI18E",
  },
  {
    id: "4",
    image: rakhi4,
    heading1: "Rakhi",
    heading2: "Rakhi Set for Brother and Bhabhi",
    text: "Rakhi Set for Brother and Bhabhi, Lumba Floral Rakhi Kundan Bracelet Rakhis for Bhaiya Bhabhi Raksha bandhan Couple Pearl Rakhis Set of 2 with Fridge Magnet Gift...",
    icon: amazon_logo,
    link: "https://amzn.to/40ETBQ8",
  },
  {
    id: "5",
    image: rakhi5,
    heading1: "Rakhi",
    heading2: "Rakhi Set for Brother",
    text: "Rakhi Set for Brother, Designer Floral Rakhi for Brother Set of 2 for Boy Men, Rakhis for Rakshabandhan, Raksha Bandhan Set for Bhaiya, Raksha Sutra for Boy Men...",
    icon: amazon_logo,
    link: "https://amzn.to/3IRAcW2",
  },

  {
    id: "6",
    image: rakhi6,
    heading1: "Rakhi",
    heading2: "Trendy Floral Design",
    text: "Rakhi Trendy Floral Design Gold Plated AD Stones & Pearls Combo Rakhi for Brother With Roli Chawal & Greeting Card| Set of 2...",
    icon: amazon_logo,
    link: "https://amzn.to/46vf4yB",
  },
  {
    id: "7",
    image: rakhi7,
    heading1: "Rakhi",
    heading2: "Rakhi Set",
    text: "Combo of 10 Rakhi Set for Men With Roli Chawal Best Wishes Greeting Card Rakhi for Brother...",
    icon: amazon_logo,
    link: "https://amzn.to/4ojnJe4",
  },
  {
    id: "8",
    image: rakhi8,
    heading1: "Rakhi",
    heading2: "Handmade Rakhis",
    text: "Handmade Kundan & Pearls Designer Meenakari Gold Plated Premium Rakhi for Brother, Roli Chawal & Greeting Card|Rakhi for Brother...",
    icon: amazon_logo,
    link: "https://amzn.to/44Uc8dF",
  },
  {
    id: "9",
    image: rakhiwithdry,
    heading1: "Rakhi With Dry Fruits",
    heading2: "Rakhi Gift For Brother",
    text: "Rakhi Gift For Brother Set Of 3 Rakhi For Brother Rakhi For Brother With Gift Dry Fruits Gift Pack Rakhi With Dry Fruits Pack Of 3 Dryfruits Walnut Almonds Krishna Rakhi Set 3...",
    icon: amazon_logo,
    link: "https://amzn.to/3UBVHwr",
  },
  {
    id: "10",
    image: AnmolRakhi,
    heading1: "Rakhi With Gift",
    heading2: "Chocolate Coated Almonds & Cashews",
    text: "7 Items Combo Pack - Chocolate Coated Almonds & Cashews - Four packets of Dry Fruits with Roli, Chawal...",
    icon: amazon_logo,
    link: "https://amzn.to/4lV9jPG",
  },
  {
    id: "11",
    image: RakhiwithChocolate,
    heading1: "Rakhi with Chocolate",
    heading2: "Chocolate Combo Gift Set",
    text: "Rakhi for Brother with Chocolate Combo Gift Set - Set of 2 Designer Rakhi for Brother Bhaiya with 2 Hershey's Kisses Chocolates and Roli Chawal, 200 grams...",
    icon: amazon_logo,
    link: "https://amzn.to/45aQeBJ",
  },
  {
    id: "12",
    image: rakhi9,
    heading1: "Rakhi",
    heading2: "Set of 2 rakhi",
    text: "Set of 2 rakhi set for brother with roli chawal | Rudraksha Bracelet for Men | rakshabandhan rakhi for Brother, Bhaiya, Bhai | Brown with Tilak Material...",
    icon: amazon_logo,
    link: "https://amzn.to/4l61VQg",
  },
  {
    id: "13",
    image: rakhi10,
    heading1: "Rakhi",
    heading2: "Set of 5 Rakhi",
    text: "Set of 5 Red & Golden Om Symbol and Lord Ganesha Designer Religious Rakhi with Roli Chawal Pack and Best Bro Ever Fridge Magnet - Rakhi for Brothe...",
    icon: amazon_logo,
    link: "https://amzn.to/46FGphL",
  },
  {
    id: "14",
    image: rakhi11,
    heading1: "Rakhi",
    heading2: "Set of 10 Rakhi",
    text: "Set of 10 Rakhi with Greeting Card and Tilak Set Combo | Best Rakhi for Brother...",
    icon: amazon_logo,
    link: "https://amzn.to/4of18is",
  },
  {
    id: "15",
    image: rakhi12,
    heading1: "Rakhi",
    heading2: "Rakhis with Roli",
    text: "Rakhis with Roli Chawal Pack - Rakhi for Brother, Bhaiya, Bhai...",
    icon: amazon_logo,
    link: "https://amzn.to/458N5lR",
  },
  {
    id: "16",
    image: rakhi13,
    heading1: "Rakhi",
    heading2: "Premium Rakhi with Chocolate",
    text: "Premium Rakhi For Brother With Chocolate Gift Hamper, Rakhi With Cadbury Dairy Milk, Pack of 2 Designer Rakhi For brother ...",
    icon: amazon_logo,
    link: "https://amzn.to/45byAxT",
  },
  {
    id: "17",
    image: rakhi14,
    heading1: "Rakhi",
    heading2: "Handcrafted Designe Rakhi",
    text: "Set Of 5 Rakhi For Brothers, Bhabhi, Kids And Adults Handcrafted Designe Rakhi For Bhai With Fridge Magnet Best Gift Hamper...",
    icon: amazon_logo,
    link: "https://amzn.to/3H4rt2g",
  },
  {
    id: "18",
    image: rakhi15,
    heading1: "Designer Rakhi",
    heading2: "Peacock Rakhi",
    text: "Designer Rakhi Set for Brother Bhaiya Bhabhi | Peacock Rakhi for Bhaiya Bhabhi Raksha Bandhan Couple Set of 2 with Fridge Magnet Gift...",
    icon: amazon_logo,
    link: "https://amzn.to/4l92ysn",
  },
  {
    id: "19",
    image: rakhi16,
    heading1: "Rakhi Giftbox",
    heading2: " Rakhi with Gifts",
    text: "Rakhi Giftbox for Brother | 9 Inclusions rakhi gift hamper for brother and bhabhi | 2 Combo Rudraksha & Ocean Gaze Rakhi | Farmley Dry Fruit Mix, Party Mix | Eat Better Millet Namkeen| Greeting Card...",
    icon: amazon_logo,
    link: "https://amzn.to/44X8mjQ",
  },
  {
    id: "20",
    image: rakhi17,
    heading1: "Rakhi",
    heading2: "Rakhi with Bappa",
    text: "Premium Peacock Rakhi for Brother/Bhaiya/Men/Sister/Bhabhi/Kids with Cute Ganesha Idol for Car Dashboard...",
    icon: amazon_logo,
    link: "https://amzn.to/4ffVKYj",
  },
  {
    id: "21",
    image: Rakhi18,
    heading1: "Rakhi",
    heading2: "Premium Rakhi with Roli Chawal",
    text: "Traditional Kundan & Pearls Designer Meenakari Gold Plated Premium Rakhi for Brother With Roli Chawal & Greeting Card | Rakhi for Brother/Bhaiya/Bhai/Men|Rakhi Combo-Set of 2...",
    icon: amazon_logo,
    link: "https://amzn.to/44Y7ifq",
  },
  {
    id: "22",
    image: rakhi19,
    heading1: "Rakhi",
    heading2: "Iconic Designer Rakhi",
    text: "Iconic Designer Kundan Meenakari Red Green Gold Plated Premium Rakhi for Brother With Roli Chawal & Greeting Card|Rakhi for Brother...",
    icon: amazon_logo,
    link: "https://amzn.to/4ofQiJb",
  },
  {
    id: "23",
    image: rakhi20,
    heading1: "Rakhi",
    heading2: "Set of 4 Designer Rakhi",
    text: "Set of 4 Designer Floral, Pearls, Diamonds, Designer Rakhis with Ferrero Rocher and Pack, Raksha Bandhan Greeting Card - Rakhi Gift Hamper for Brother...",
    icon: amazon_logo,
    link: "https://amzn.to/4l62N7o",
  },
  {
    id: "24",
    image: Rakhi21,
    heading1: "Rakhi",
    heading2: "Rakhi for Brother",
    text: "Set of 2 Designer Rakhi for Brother | Combo with ‘My Brother Is Awesome’ Fridge Magnet, Tilak Set (Roli-Chawal), and Greeting Card ...",
    icon: amazon_logo,
    link: "https://amzn.to/3U9FgYa",
  },
  {
    id: "25",
    image: gift,
    heading1: "Rakhi & Chocolates",
    heading2: "2 Rakhi With Chocolates",
    text: "Chocolates Gift Pack Rakhi For Brother Set Of 2 Rakhi With Chocolates 2 Rakhi With Chocolates Gift Pack Chocolates Gift Set Of 2 Rakhi With Chocolate Pack Of 24 Rakhi Set 2...",
    icon: amazon_logo,
    link: "https://amzn.to/44W9Lan",
  },
  {
    id: "26",
    image: Rakhi22,
    heading1: "Rakhi",
    heading2: "Combo Rakhi for Brother",
    text: "Unique Butterfly Design Gold Plated AD Stones & Beads Studded Green Combo Rakhi for Brother with Roli Chawal & Greeting Card|Set of 2...",
    icon: amazon_logo,
    link: "https://amzn.to/45uQ9tS",
  },
  {
    id: "27",
    image: rakhi23,
    heading1: "Rakhi",
    heading2: "Evil Eye Rakhi",
    text: "Evil Eye Bracelet Rakhi | Set of 2, Hand Bracelet Rakhi , Infinitive Evil Eye Rakhis for Men Brother with Best Wishes Card...",
    icon: amazon_logo,
    link: "https://amzn.to/3UBtGoK",
  },
  {
    id: "28",
    image: RakhiGiftHamper,
    heading1: "Rakhi Gift Hamper",
    heading2: "rakhi & Roasted Sweet",
    text: "Rakhi Gift Hamper | 9 item Rakhi Hamper For Brother | Roasted Sweet Snacks, Berries, Hazelnut Dry-Fruit Laddoos, A pair of Rakhii, Roli Chawal, Stickers | Rakhi Set For Brother...",
    icon: amazon_logo,
    link: "https://amzn.to/4oeKlvX",
  },
  {
    id: "29",
    image: rakhi24,
    heading1: "Rakhi Hamper",
    heading2: "Rakhi with Dhoodh Barfi",
    text: "Rakhi Hamper For Brother Cookies Sweets and Chocolates Rakhi Set of 2 with Roli & Rice with Chocolate Raksha Bandhan Gift Hamper...",
    icon: amazon_logo,
    link: "https://amzn.to/45i2Nvj",
  },
  {
    id: "30",
    image: rakhi25,
    heading1: "Rakhi with Gift",
    heading2: "Raksha Bandhan Celebration Combo Kit",
    text: "Pooja Thali Gift for Brother – Rakhi set for Brother Set of 10, Silver Color Pooja Coin & Greeting Card, Gift for Bhai, Bhabhi & Kids, Traditional Raksha Bandhan Celebration Combo Kit 2025...",
    icon: amazon_logo,
    link: "https://amzn.to/3Hb7FtS",
  },
  {
    id: "31",
    image: rakhi26,
    heading1: "Rakhi Hamper",
    heading2: "Rakhi With Dry Fruits Hamper",
    text: "Set Of 2 Rakhi Gift Hamper Rakhi For Brother Rakhi For Brother Combo Rakhi Hamper Rakhi With Dry Fruits Red L9 Tray Walnut Apricot Almonds...",
    icon: amazon_logo,
    link: "https://amzn.to/45qIbC6",
  },
  {
    id: "32",
    image: rakhi27,
    heading1: "Rakhi",
    heading2: "Premium Rudraksha Trishul Bracelet Rakh",
    text: "Rakhi for Brother - Set of 2 Premium Rudraksha Trishul Bracelet Rakhi for Brother Bhaiya Kids Boys Men with Greeting Card and Roil Chawal Tika...",
    icon: amazon_logo,
    link: "https://amzn.to/3U6Oa8L",
  },
  {
    id: "33",
    image: rakhi28,
    heading1: "Rakhi",
    heading2: "Kids Rakhi (Set of 2)",
    text: "Stylish Meenakari Helicopter and Bike Kids Rakhi (Set of 2) Gifts for Brother, Sister with Roli Chawal and Greeting Card...",
    icon: amazon_logo,
    link: "https://amzn.to/40Lncay",
  },
  {
    id: "34",
    image: Rakhi29,
    heading1: "Rakhi",
    heading2: "Kids Rakhi",
    text: "Stylish Kids Rakhi Bracelet (Set of 2) with Roli Chawal and Greeting Card...",
    icon: amazon_logo,
    link: "https://amzn.to/4lRd0Wh",
  },
  {
    id: "35",
    image: rakhi30,
    heading1: "Cartoon Rakhi",
    heading2: "LED Light Kids Rakhi",
    text: "Cartoon LED Light Kids Rakhi Toy Boy Girl, Slap Band Cartoon Wrist Band with LED Light Up Great Birthday Gift Toys for Kids (Assorted Color and Model) (2 Pack)...",
    icon: amazon_logo,
    link: "https://amzn.to/3UE5AtC",
  },
  {
    id: "36",
    image: Rakhi31,
    heading1: "Kids Rakhi",
    heading2: "Kids Rakhi Bracelet",
    text: "Stylish Kids Rakhi Bracelet with Roli Chawal and Greeting Card...",
    icon: amazon_logo,
    link: "https://amzn.to/4fbFnvQ",
  },
  {
    id: "37",
    image: rakhi32,
    heading1: "Cartoon Rakhi",
    heading2: "Rakhi for Brother Kids",
    text: "Pack of 1 Rakhi for Brother Kids Wrist Band for Boys and Girls Spinning Slap Band Cute Cartoon Bracelet Wrist Band with LED Light Up, Great Birthday Return Gift Toys for Kids Boys Girls...",
    icon: amazon_logo,
    link: "https://amzn.to/4odyq1x",
  },
  {
    id: "38",
    image: Rakhi33,
    heading1: "Rakhi",
    heading2: "Rakhi for Kids",
    text: "Rakhi for Kids - Set of 2 Premium Bro Rakhi for Brother Kid Boys Baby with Greeting Card and Roli Chawal - Rakhis for Rakshabandhan...",
    icon: amazon_logo,
    link: "https://amzn.to/4mFy56r",
  },
  {
    id: "39",
    image: rakhi34,
    heading1: "Rakhi",
    heading2: "Rakhi for Kids",
    text: "Space Shuttle Rakhi for Kids Brother Boys Girls Sister | Raksha Bandhan Kids Rakhi for Bhai Bhaiya | Best Bro Ever Fridge Magnet | Roli Chawal Pack...",
    icon: amazon_logo,
    link: "https://amzn.to/4l8JKJH",
  },
  {
    id: "40",
    image: rakhi35,
    heading1: "Rakhi",
    heading2: "Religious Lord Rakhi",
    text: "Set of 2 Multicolor Religious Lord Krishna & Lord Hanuman Designer Kids Rakhis, Best Bro Ever Fridge Magnet with Roli Chawal Pack - Rakhis for Brothers...",
    icon: amazon_logo,
    link: "https://amzn.to/4mjBqaX",
  },
  {
    id: "41",
    image: Rakhi36,
    heading1: "Rakhi",
    heading2: "Kids Rakhi",
    text: "To The Nines Kids Rakhi For Brother With Tilak Material and Greeting Card - Pack of 4 Kids Rakhi...",
    icon: amazon_logo,
    link: "https://amzn.to/4moi2JT",
  },
  {
    id: "42",
    image: Rakhi37,
    heading1: "Rakhi",
    heading2: "Kids Cartoon Rakhis",
    text: " Pack of 2 Kids Cartoon Rakhis for Bhaiya Raksha Bandhan Kids Rakhi Set Rakhis Rakhi with You are My Hero Fridge Magnet & Roli Tilak...",
    icon: amazon_logo,
    link: "https://amzn.to/3IUu3Z4",
  },
  {
    id: "43",
    image: Rakhi38,
    heading1: "Kids Rakhi",
    heading2: "Kids Rakhi With Cadbury Celebration",
    text: "Set of 2 Kids Rakhi For Boys With Gifts Kids Rakhi With Cadbury Celebration Chocolates Pack And Stationary Gift Set, 350 Grams...",
    icon: amazon_logo,
    link: "https://amzn.to/4oayNKp",
  },
  {
    id: "44",
    image: Rakhi39,
    heading1: "Astronaut Rakhi",
    heading2: "Chocolate & Space Stationery Kit Gift",
    text: "Astronaut Rakhi for Kids Boy with Chocolate & Space Stationery Kit Gift Hamper for Brother Kids Rakhi Combo Set Toys for Brother Chocolates Gift Pack...",
    icon: amazon_logo,
    link: "https://amzn.to/3UIdqSU",
  },
  {
    id: "45",
    image: Rakhi40,
    heading1: "Rakhi With Gift",
    heading2: "Rakhi with Mug Gift Combo",
    text: "Rakhi for Brother and Bhabhi with Mug Gift Combo, Kundan Rakhi with Mug for Bhaiya Bhabhi Rakhi Set of 2, King Bhaiya Queen Bhabhi Quote Printed Mug Rakshabandhan Rakhi with Gift...",
    icon: amazon_logo,
    link: "https://amzn.to/41hmeD3",
  },
  {
    id: "46",
    image: Rakhi41,
    heading1: "Rakhi with Tortoise",
    heading2: "Rakhi for Brother and Bhabhi",
    text: "Rakhi for Brother and Bhabhi Rakhi Set of 2 for Vastu Gift Tortoise with Plate and Rakhi Gift for Brother,Rakhi and Lumba Set Boy & Girl | Male & Female...",
    icon: amazon_logo,
    link: "https://amzn.to/45eLbAm",
  },
  {
    id: "47",
    image: Rakhi42,
    heading1: "Designer Rakhi",
    heading2: "Peacock Rakhi for Bhaiya Bhabhi",
    text: "Designer Rakhi Set for Brother Bhaiya Bhabhi | Peacock Rakhi for Bhaiya Bhabhi Raksha Bandhan Couple Set of 2 with Fridge Magnet Gift, Rakshabandhan Greeting Card, Tilak Set...",
    icon: amazon_logo,
    link: "https://amzn.to/4meMwxS",
  },
  {
    id: "48",
    image: Rakhi43,
    heading1: "Rakhi with Sweets",
    heading2: "Rakhi for Brother and Bhabhi",
    text: "Rakhi for Brother and Bhabhi with Chocolate and Sweets Gift Hamper - Lumba Rakhi Set of 2 for Bhai Bhabhi with Kaju Katli Chocolate Card and Tikka...",
    icon: amazon_logo,
    link: "https://amzn.to/45ppJd7",
  },
  {
    id: "49",
    image: Rakhi44,
    heading1: "Rakhi",
    heading2: "Designer Lumba Rakhi for Bhabhi",
    text: "Rakhi for Brother and Bhabhi Set of 2 Designer Lumba Rakhi for Bhabhi Kundan Pearl for Bhaiya Boy Rakshabandhand Couple...",
    icon: amazon_logo,
    link: "https://amzn.to/44TMGVE",
  },
  {
    id: "50",
    image: Rakhi45,
    heading1: "Rakhi with Gift",
    heading2: "Rakhi set for brother",
    text: "Rakhi for brother with chocolate/rakhi set for brother/rakhi for brother and bhabi/rakhi gift for brother/rakhi gift hamper for brother...",
    icon: amazon_logo,
    link: "https://amzn.to/45s7EuS",
  },
  {
    id: "51",
    image: Rakhi46,
    heading1: "Rakhi with Gift",
    heading2: "Rakhi with Coffee Mug Card Tikka",
    text: "Rakhi for Brother with Gift - Pearl Rakhi for Brother Bhaiya Men Boys Kids with Printed Coffee Mug Card Tikka - Rakhi's for Raksha Bandhan...",
    icon: amazon_logo,
    link: "https://amzn.to/4lZVu2u",
  },
  {
    id: "52",
    image: Rakhi47,
    heading1: "Premium Rakhi",
    heading2: "Rakhi With Gifts",
    text: "Men Rakhi Gifts For Brother - Premium Rakhi With Rakshabandhan Wooden Pen Stand Greeting Card- Rakhi For Brother...",
    icon: amazon_logo,
    link: "https://amzn.to/4l8Tnbc",
  },
  {
    id: "53",
    image: Rakhi48,
    heading1: "Rakhi with Gift",
    heading2: "Rakhi with Pack of 6",
    text: "Rakhi for Brother with Printed Ceramic Mug,Showpiece & Keychain Combo |Pack of 6 (Greeting Card,Roli Chawal,Rakhi,Printed Mug,Keychain,Showpiece)...",
    icon: amazon_logo,
    link: "https://amzn.to/40FOYFp",
  },
  {
    id: "54",
    image: Rakhi49,
    heading1: "Rakhi",
    heading2: "Rakhi with Gift Hamper",
    text: "Rakhi Gift Hamper for Brother Rawfruit's Handcrafted Potli Pack of 4 Cashew Almond Pistachios Raisins 495 Grams with Thali DryFruits Combo Pack Dry Fruits...",
    icon: amazon_logo,
    link: "https://amzn.to/4oaBprH",
  },
  {
    id: "55",
    image: nariyal,
    heading1: "Nariyal",
    heading2: "Nariyal ",
    text: "Rich Watery Worship Coconut|Whole Shri Phal|Used For Pooja Ganpati Navratri Diwali Holi Special Ocassions(1 Pieces)...",
    icon: amazon_logo,
    link: "https://amzn.to/4mlO1dN",
  },
  {
    id: "56",
    image: Nariyalgotta,
    heading1: "Nariyal Gotta",
    heading2: "Dry Coconut",
    text: "Dry Coconut/Copra/Nariyal Halves (200 Gram), Fresh...",
    icon: amazon_logo,
    link: "https://amzn.to/46FPhUB",
  },
  {
    id: "57",
    image: laldhaga,
    heading1: "Lal Dhaaga",
    heading2: "Kalewa",
    text: "Lal Dhaga 100% Religious | 20 Meter...",
    icon: amazon_logo,
    link: "https://amzn.to/4fltV14",
  },
  {
    id: "58",
    image: Rumal,
    heading1: "Hand Rumal",
    heading2: "Cotton Rumal",
    text: "Cotton 12 Piece Men's Handkerchief Set - White...",
    icon: amazon_logo,
    link: "https://amzn.to/3U6UgGb",
  },
  {
    id: "59",
    image: Thali,
    heading1: "Rakhi & Thali",
    heading2: "Gift Combo Rakhi Set of 4",
    text: "Rakhi for Brother Bhabhi Kids with Gift Combo Rakhi Set of 4 Rakhi with Pooja Thali Gift Set, Designer Rakhi for Bhaiya Bhahi with Pooja Thali Set...",
    icon: amazon_logo,
    link: "https://amzn.to/3U21Yl0",
  },
  {
    id: "60",
    image: bhagwanrakhi,
    heading1: "Bhagwan Rakhi",
    heading2: "Mouli Rakhi",
    text: "Hindu Religious bhagwan Rakhi Door Rakhi marwadi Pooja rakhi Mouli Wrist Thread Band/Mouli Rakhi/Raksha Sutra 50 Piece Rakhi...",
    icon: amazon_logo,
    link: "https://amzn.to/4l6cPFG",
  },
  {
    id: "61",
    image: bhagwanrakhi1,
    heading1: "Bhagwan Rakhi",
    heading2: "raksha sutra Rakhi",
    text: "24 piece raksha sutra Marwadi rakhi for family, puja and laddu gopal and all bhagwan in home mandir...",
    icon: amazon_logo,
    link: "https://amzn.to/45dGCGi",
  },
  {
    id: "62",
    image: thali1,
    heading1: "Thali for Rakhi",
    heading2: "Tilak Decorative Platter Set",
    text: "Handicraft Storeroom Handmade Pooja Thali/Tilak Decorative Platter Set for Laxmi/Ganesh Pooja (multiround Small Golden Pooja thali)...",
    icon: amazon_logo,
    link: "https://amzn.to/4mjHZKD",
  },
  {
    id: "63",
    image: lotta,
    heading1: "Brass Lota",
    heading2: "Pooja Kalash Lota",
    text: "Brass Pooja Kalash Lota/Pooja Article/Pooja Item for Pooja and Decoration (650 ml) (4.25 INCH)...",
    icon: amazon_logo,
    link: "https://amzn.to/40F6AkQ",
  },
  {
    id: "64",
    image: sweets,
    heading1: "Sweets",
    heading2: "Sweets with Rakhi",
    text: "Sweets Chana Badam 200g and Kachori 160g Raksha Bandhan Gift Combo for Brother with Evil Eye Rakhi Set of 2 with Roli Rice...",
    icon: amazon_logo,
    link: "https://amzn.to/4mkQhlh",
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
const Rakshabandhan = () => {
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
          Rakshabandhan Celebration Items
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
    </div>
  );
};

export default Rakshabandhan;
