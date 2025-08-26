import React, { useState, useEffect } from "react";
import amazon_logo from "../../assets/amazon_logo.jpg";

import p1 from "../../assets/Homedecore/p1.jpg";
import p2 from "../../assets/Homedecore/p2.jpg";
import p3 from "../../assets/Homedecore/p3.jpg";
import p4 from "../../assets/Homedecore/p4.jpg";
import p5 from "../../assets/Homedecore/p5.jpg";
import p6 from "../../assets/Homedecore/p6.jpg";
import p7 from "../../assets/Homedecore/p7.jpg";
import p8 from "../../assets/Homedecore/p8.jpg";
import p9 from "../../assets/Homedecore/p9.jpg";
import p10 from "../../assets/Homedecore/10.jpg";
import p11 from "../../assets/Homedecore/p11.jpg";
import p12 from "../../assets/Homedecore/p12.jpg";
import p13 from "../../assets/Homedecore/p13.jpg";
import p14 from "../../assets/Homedecore/p14.jpg";
import p15 from "../../assets/Homedecore/p15.webp";
import p16 from "../../assets/Homedecore/p16.jpg";
import p17 from "../../assets/Homedecore/p17.jpg";
import p18 from "../../assets/Homedecore/p18.jpg";
import p19 from "../../assets/Homedecore/p19.jpg";
import p20 from "../../assets/Homedecore/p20.jpg";
import p21 from "../../assets/Homedecore/p21.jpg";
import p22 from "../../assets/Homedecore/p22.jpg";
import p23 from "../../assets/Homedecore/p23.jpg";
import p24 from "../../assets/Homedecore/p24.jpg";
import p25 from "../../assets/Homedecore/p25.jpg";
import p26 from "../../assets/Homedecore/p26.jpg";
import p27 from "../../assets/Homedecore/p27.jpg";
import p28 from "../../assets/Homedecore/p28.jpg";
import p29 from "../../assets/Homedecore/p29.jpg";
import p30 from "../../assets/Homedecore/p30.jpg";
import p31 from "../../assets/Homedecore/p31.jpg";
import p32 from "../../assets/Homedecore/p32.jpg";
import p33 from "../../assets/Homedecore/p33.jpg";
import p34 from "../../assets/Homedecore/p34.jpg";
import p35 from "../../assets/Homedecore/p35.jpg";
import p36 from "../../assets/Homedecore/p36.jpg";
import p37 from "../../assets/Homedecore/p37.jpg";
import p38 from "../../assets/Homedecore/p38.jpg";
import p39 from "../../assets/Homedecore/p39.jpg";
import p40 from "../../assets/Homedecore/p40.jpg";
import p41 from "../../assets/Homedecore/p41.jpg";
import p42 from "../../assets/Homedecore/p42.jpg";
import p43 from "../../assets/Homedecore/p43.jpg";
import p44 from "../../assets/Homedecore/p44.jpg";
import p45 from "../../assets/Homedecore/p45.jpg";
import p46 from "../../assets/Homedecore/p46.jpg";
import p47 from "../../assets/Homedecore/p47.jpg";
import p48 from "../../assets/Homedecore/p48.jpg";
import p49 from "../../assets/Homedecore/p49.webp";
import p50 from "../../assets/Homedecore/p50.webp";
import p51 from "../../assets/Homedecore/p51.jpg";
import p52 from "../../assets/Homedecore/p52.jpg";
import p53 from "../../assets/Homedecore/p53.jpg";
import p54 from "../../assets/Homedecore/p54.jpg";
import p55 from "../../assets/Homedecore/p55.jpg";
import p56 from "../../assets/Homedecore/p56.jpg";
// import p57 from "../../assets/Homedecore/p57.jpg";
// import p58 from "../../assets/Homedecore/p58.jpg";

const featuredProducts = [
  {
    id: "1",
    image: p1,
    heading1: "Key Hanger",
    heading2: "Key Hanger for Wall Decor",
    text: "Premium Wooden Key Holder for Home/Office Decor/Key Hanger for Wall Decor,Decorative Item for Home (Cute Krishna)...",
    icon: amazon_logo,
    link: "https://amzn.to/3HowUZW",
  },
  {
    id: "2",
    image: p2,
    heading1: "Buddha",
    heading2: "Moon Buddha Statue",
    text: "Meditating Moon Buddha Statue Showpiece (Bronze), 20.3 x 7.6 Cm...",
    icon: amazon_logo,
    link: "https://amzn.to/4lfbkFf",
  },
  {
    id: "3",
    image: p3,
    heading1: "Flute Idol",
    heading2: "Krishnaji Divine Hands Idol",
    text: "Lord Krishna Hands with Flute Idol (Small Size) | Krishnaji Divine Hands Idol with Flute and Peacock Feather | Krishna Statue for Car Dashboard & Griha Pravesh Gift...",
    icon: amazon_logo,
    link: "https://amzn.to/456uurY",
  },
  {
    id: "4",
    image: p4,
    heading1: "Krishna Night Lamp",
    heading2: "3D  Optical Illusion Night Lamp",
    text: "MURLIDHAR Krishna 3D Optical Illusion Night Lamp | RGB 7 Colors Auto Changing LED Plug and Play Night Light | Office Day Light, for Home Best for Gift, Multi Colour...",
    icon: amazon_logo,
    link: "https://amzn.to/3UE4U7P",
  },
  {
    id: "5",
    image: p5,
    heading1: "LED Lamps",
    heading2: "Bal Gopal",
    text: "Acrylic God LED Lamps - Spread Tranquility with These Engraved God Photo Frame with Light,God Idols,God Statue for Pooja Room & Home Decor|Diwali Gifts,Corporate Gifts (Bal Gopal),Clear...",
    icon: amazon_logo,
    link: "https://amzn.to/4m6f6lk",
  },
  {
    id: "6",
    image: p6,
    heading1: "Gramophone",
    heading2: "Square Gramophone Showpiece",
    text: "Premium Sparkle Square Gramophone Showpiece - 23 cm (Brass, Brown, Gold) (Black, Gold) (Black, Gold)...",
    icon: amazon_logo,
    link: "https://amzn.to/4mT0Nkn",
  },
  {
    id: "7",
    image: p7,
    heading1: "Sand Timer",
    heading2: "Hourglass Pink Sand",
    text: "Brass Sand Timer Wood Base With Compass Nautical, Hanging Sand Clock 2 Min Hourglass Pink Sand Best For Gift Home & Office Decor...",
    icon: amazon_logo,
    link: "https://amzn.to/40V9Ybp",
  },
  {
    id: "8",
    image: p8,
    heading1: "Vase Glass",
    heading2: "Planter Hydroponics Vase Glass",
    text: "Desktop Glass Planter Hydroponics Vase Glass Propagation Station With Modern Creative Geometric Metal Frame Test Tube Vase For Home Office Decor Table Top (Set Of 2), Blue...",
    icon: amazon_logo,
    link: "https://amzn.to/41sjZgb",
  },
  {
    id: "9",
    image: p9,
    heading1: "Decor Items",
    heading2: "Penguin set for gift",
    text: "6 Pcs Penguin Miniature Decor Items Set For Unique Gift,Home,Living Room,Office,Restaurant Decor,Military Showpiece,Perfect Valentine Decoration Items (Cute Penguin Miniature), Multicolour...",
    icon: amazon_logo,
    link: "https://amzn.to/47luYff",
  },
  {
    id: "10",
    image: p10,
    heading1: "Artificial Plants",
    heading2: "Durable Plastic Plants",
    text: "Artificial Plants with Pot|Realistic Looking| Multi Variety |Durable Plastic | No Maintenance | Home Decor | Dimensions: 5 cm X 13 cm (Pack of 8)...",
    icon: amazon_logo,
    link: "https://amzn.to/3J7kq9B",
  },
  {
    id: "11",
    image: p11,
    heading1: "Artificial Plant Pots",
    heading2: "Plants with Pot Set of 3",
    text: "Set of 3 Artificial Plant Pots Faux Plants with Pot Set of 3 Small Size Studio Plants for Home Decor, Living Room, Balcony, (Green) Plastic...",
    icon: amazon_logo,
    link: "https://amzn.to/4fy75U2",
  },

  {
    id: "12",
    image: p12,
    heading1: "Wall Hangings",
    heading2: "Decorative Items for Home",
    text: "Wall Hangings For Home Decoration | Home Decoration Items for Living Room | Decorative Items for Home | Home Decor Items for Living Room...",
    icon: amazon_logo,
    link: "https://amzn.to/3JmqECq",
  },
  {
    id: "13",
    image: p13,
    heading1: "Decore Item",
    heading2: " Cone Pot 3 Piece",
    text: "Preety Floral Flower and Leaf in Cone Pot 3 Piece UV Textured Multi-Effect Self adheshive Painting 17 Inch X 17 Inch SANFHX141,Multicolour...",
    icon: amazon_logo,
    link: "https://amzn.to/46MDALR",
  },
  {
    id: "14",
    image: p14,
    heading1: "Hanging Decor",
    heading2: "Handmade Gingko Leaf 3D Wall Art",
    text: "Metal Wall Art Sunburst Handmade Gingko Leaf 3D Wall Art Set of 3 | Antique Sculpture and Hanging Decor for Living Room | Bedroom | Home and Office (Golden) -3 Pieces...",
    icon: amazon_logo,
    link: "https://amzn.to/46P2dHO",
  },
  {
    id: "15",
    image: p15,
    heading1: "Tree Lamp",
    heading2: "Decorative Light for Home",
    text: "36 LED Pearl Bonsai Tree Lamp with Touch Switch | USB & Battery Operated Decorative Light for Home, Bedroom, Festival, Gift Use (Warm White, Pack of 1)...",
    icon: amazon_logo,
    link: "https://amzn.to/45FNQV4",
  },
  {
    id: "16",
    image: p16,
    heading1: "Home Decor Item",
    heading2: "Wedding Festive Housewarming Gift",
    text: "Set of 3 Metal Figurine Dancers Home Decor Item for Living Room, Bedroom, Wedding Festive Housewarming Gift Showpiece Rajasthani Dancing Dolls...",
    icon: amazon_logo,
    link: "https://amzn.to/4fBdQ7y",
  },
  {
    id: "17",
    image: p17,
    heading1: "Decor Items",
    heading2: " Wind Chimes for Home",
    text: "Paradigm Pictures Wind Chimes for Home || Home Decor Items (Golden Color)...",
    icon: amazon_logo,
    link: "https://amzn.to/4lmd9Qt",
  },
  {
    id: "18",
    image: p18,
    heading1: "Décor Items",
    heading2: "Wind Chimes",
    text: "Evil Eye Wind Chimes for Living Room and Bedroom – Home Décor Items for Hanging Decoration, Wall Décor and Showpieces | Perfect Housewarming and Gift Items for Women Silver, 5-Pipe...",
    icon: amazon_logo,
    link: "https://amzn.to/3UmeXy5",
  },
  {
    id: "19",
    image: p19,
    heading1: "Decorative Bird's",
    heading2: "Bird's Wall Hanging",
    text: "Handicraft Colorfully Decorative Bird's Wall Hanging Set of 6-Multicolor...",
    icon: amazon_logo,
    link: "https://amzn.to/3HrGzPn",
  },
  {
    id: "20",
    image: p20,
    heading1: "Wall Decor",
    heading2: "Hanging Decoration",
    text: "Wall Hanging Decoration | Home Decor for Living Room | Wall Decor Items | Cir-Set-43...",
    icon: amazon_logo,
    link: "https://amzn.to/3Hhg27u",
  },
  {
    id: "21",
    image: p21,
    heading1: "Flower Stands",
    heading2: "Plant Stand Tall Indoor",
    text: "Modern Metal Floor Flower Stands Planter for Living Room Bedroom Display Plant Stand Tall Indoor Plant Stand with Planter Pot -Set of 3 gold...",
    icon: amazon_logo,
    link: "https://amzn.to/4mxw1gA",
  },
  {
    id: "22",
    image: p22,
    heading1: "Flower Pot Stand",
    heading2: "Iron Plant Pot Display Rack",
    text: "Multi-Tiered Metal Flower Pot Stand - Indoor 6 Layer 7 Tier Iron Plant Pot Display Rack Plant Pot Holder Tall Plant Flower Shelf for Living Room Balcony Living room & Court Garden...",
    icon: amazon_logo,
    link: "https://amzn.to/3UkJrAC",
  },
  {
    id: "23",
    image: p23,
    heading1: "Modern Plant Pot",
    heading2: " Pineapple Texture Pot",
    text: "Metal Indoor Pineapple Texture Golden Planter, Modern Plant Pot for Living Room Balcony Office Décor Ideal for Gifting on Birthday, Anniversary 5.3 (Height) × 6.1 (Dia) (Plants not Included)...",
    icon: amazon_logo,
    link: "https://amzn.to/45GkBRV",
  },
  {
    id: "24",
    image: p24,
    heading1: "Pots",
    heading2: "Golden Metal Pots",
    text: "Fluted Metal Indoor Planters with Stands for Table Top and Floor | Living Room Drawing Room Balcony Office Plant Pots | Set of 2 Golden Metal planters with Stands (Plants not Included)...",
    icon: amazon_logo,
    link: "https://amzn.to/4malmsq",
  },
  {
    id: "25",
    image: p25,
    heading1: "Wall Decoration",
    heading2: "Memories Wall Hanging",
    text: "Photo Frames For Wall Decoration | Wall Decoration Items for Living Room |Memories Wall Hanging | Unique Home Decor Items | Photo Hanging Clips And Rope | Room Decor Items...",
    icon: amazon_logo,
    link: "https://amzn.to/3HnQQfm",
  },
  {
    id: "26",
    image: p26,
    heading1: "Fairy Lights",
    heading2: "Wall Decor Items",
    text: "Room Decor Items, Home Decor for Living Room, Fairy Lights(40ft Long) Wall Decor Items for Bedroom, Home Decor for Living Room, Aesthetic Stuff (4 Green Vines & 1 LED Light)...",
    icon: amazon_logo,
    link: "https://amzn.to/45qwxpC",
  },
  {
    id: "27",
    image: p27,
    heading1: "White Horses",
    heading2: "7 Running Horse Statue",
    text: "Decorative Marble 7 Running Horse Statue, White Horses on Golden Wave Base, 45 cm | Elegant Home Decor Accent for Living Room, Office, Hall, & Shelf...",
    icon: amazon_logo,
    link: "https://amzn.to/3HmE2Gd",
  },
  {
    id: "28",
    image: p28,
    heading1: "Metal Sconces",
    heading2: "Vintage Wall Sconce with Glass",
    text: "Wall Light Fixtures, Oil Rubbed Rust Finish Indoor Vintage Wall Sconce with Glass Shade Farmhouse Metal Sconces for Bedroom Living Room Cafe, (Cage Cylinder)...",
    icon: amazon_logo,
    link: "https://amzn.to/41zyvCW",
  },
  {
    id: "29",
    image: p29,
    heading1: "Bell",
    heading2: "Door Bell Pair",
    text: "Elephant Face Wall & Door Brass Decorative Bell Pair, Elephant Hangings for Decoration (300g Each)....",
    icon: amazon_logo,
    link: "https://amzn.to/47m3h62",
  },
  {
    id: "30",
    image: p30,
    heading1: "Warm White",
    heading2: "Up/Down Wall Light",
    text: "LED Outdoor Up/Down Wall Light - 6W, Warm White, (4 Multi-Directional Beams), IP65 Waterproof Aluminum Body, Pack of 1 (2-Year Warranty)...",
    icon: amazon_logo,
    link: "https://amzn.to/4lgAu6g",
  },
  {
    id: "31",
    image: p31,
    heading1: "Wall decor",
    heading2: "Positive Energy Decorative Showpiece",
    text: " Wooden Peacock Feather Dream Catcher for Positive Energy Decorative Showpiece Wall Hanging, Wall decor , Bedroom, Living Room Decor, Wall Vastu (18/45 cm) Black...",
    icon: amazon_logo,
    link: "https://amzn.to/3J7ReiU",
  },
  {
    id: "32",
    image: p32,
    heading1: "Evil Eye",
    heading2: "Evil Eye Wall Hanging",
    text: "Vastu Feng Shui Evil Eye Wall Hanging With for Good Luck Prosperity Zodaic Success Health Wealth Office Home Decor & Car (Three Horse)...",
    icon: amazon_logo,
    link: "https://amzn.to/4fCV8fF",
  },
  {
    id: "33",
    image: p33,
    heading1: "Wall lamp",
    heading2: "Decorative Light for Indoor",
    text: "Designer Home Decorative Modern Wall lamp for Living Room, Bedside, Bedroom, Decorative Light for Indoor Application Without Bulb (Pine Wood, Beige) Wall Light...",
    icon: amazon_logo,
    link: "https://amzn.to/46NUTvV",
  },
  {
    id: "34",
    image: p34,
    heading1: "Toran",
    heading2: "Handmade Toran for Main Door",
    text: "Door Hanging Bandanwar Toran 36 Inch - Latest Home Decor Item Toran for Main Door Handmade Traditional Bandarwal Diwali Decoration Item, Festival,Home Decor, Diwali Festive Decor...",
    icon: amazon_logo,
    link: "https://amzn.to/4lm5KAV",
  },
  {
    id: "35",
    image: p35,
    heading1: "Toran",
    heading2: "Toran for Door",
    text: "Toran/Bandanwar for Home Decoration and Office, Round Embroidery Work and Pom Pom Mogra Flower Toran Decoration Hanging/Bandarwal/Toran for Door | Size 38 Inch...",
    icon: amazon_logo,
    link: "https://amzn.to/3Hp56ED",
  },
  {
    id: "36",
    image: p36,
    heading1: "3D LED",
    heading2: "Home Decoration LED Lights",
    text: "3D LED Night Lamp with Plug Smart Sensor auto On/Off and Color Change Mushroom Flowers Beautiful Illumination Home Decoration Lights for Bedroom Corridor (Multicolour) (Single Pack)...",
    icon: amazon_logo,
    link: "https://amzn.to/3UjgeG4",
  },
  {
    id: "37",
    image: p37,
    heading1: "Wall Lamp",
    heading2: "Round LED Wall Light",
    text: "Deer Wall Lamp – Round LED Wall Light with Golden Deer Decor | 3 Color Modes | Modern Decorative Wall Mounted Lights for Living Room, Bedroom, Hallway & Home Interior Decor...",
    icon: amazon_logo,
    link: "https://amzn.to/3J4v2WN",
  },
  {
    id: "38",
    image: p38,
    heading1: "Mudda",
    heading2: "Wooden Small Mudda",
    text: "Mudda House Handmade Sarkanda Wooden Small 1 Mudda Chair & 1 Stool Set (Wood, Beige)...",
    icon: amazon_logo,
    link: "https://amzn.to/46NpkT2",
  },
  {
    id: "39",
    image: p39,
    heading1: "Muddha",
    heading2: "Bamboo Sitting Chair",
    text: "Eco-Friendly Handicraft Cane Wood Bar Bamboo Sitting Chair/Muddha/Mudda/Rattan/Muddi/Manjola for Outdoor/Indoor/Furnishing Multi Color: Set of 1...",
    icon: amazon_logo,
    link: "https://amzn.to/3URsqOw",
  },
  {
    id: "40",
    image: p40,
    heading1: "Mudda",
    heading2: "Pouf for Office Home",
    text: "Pouffes Sitting Stool for Living Room, Mudda Puffy Wooden Ottoman Stools, Pouffe Footstool, Pouf for Office Home Decoration & Dressing Table Sofa Chair, Combo 18x18x32 Inch, Jaipuri...",
    icon: amazon_logo,
    link: "https://amzn.to/45NBeKD",
  },
  {
    id: "41",
    image: p41,
    heading1: "Holder",
    heading2: "Foldable Stand with Book & Shoe",
    text: "6-Layer Plastic Shoe Rack for Home – Stackable & Adjustable Shoe Organizer Shelf for Entryway, Bedroom & Corner Use | Space-Saving Foldable Stand with Book & Shoe Storage Slots...",
    icon: amazon_logo,
    link: "https://amzn.to/46Hmw9Y",
  },
  {
    id: "42",
    image: p42,
    heading1: "Shoes Rack",
    heading2: "Portable Shoes Rack with Dustproof Door",
    text: "Plastic Shoes Rack for Home, 3-Door 6-Shelf Portable Shoes Rack with Dustproof Door for Heels/Slippers/Boots, DIY Multi-Purpose Shoe Organizer, White...",
    icon: amazon_logo,
    link: "https://amzn.to/4mxDP1S",
  },
  {
    id: "43",
    image: p43,
    heading1: "Night Lamp",
    heading2: "Touch Control Color-Changing LED Light",
    text: "Rechargeable Silicone Pear Night Lamp, Touch Control Color-Changing LED Light with 7 Colors, Multicolor Kids’ Bedroom Decor, Ideal Baby Gift (Warm White)...",
    icon: amazon_logo,
    link: "https://amzn.to/40XfCJZ",
  },
  {
    id: "44",
    image: p44,
    heading1: "Photo Frame",
    heading2: "Decorative Picture Frame",
    text: "Set of 5 – Wooden Photo Frame for Wall Decoration/Decorative Picture Frame For Living Room and Bedroom - 5 x 7 Wood Photo Frames– Blue, Pink, Yellow, White and Turquoise...",
    icon: amazon_logo,
    link: "https://amzn.to/458lNNT",
  },
  {
    id: "45",
    image: p45,
    heading1: "Owl",
    heading2: "Owl Family",
    text: "Golden Owl Family (Mother & Child) for Home Decor (Pack of 1, Golden)...",
    icon: amazon_logo,
    link: "https://amzn.to/4mrL7nI",
  },
  {
    id: "46",
    image: p46,
    heading1: "Mirror",
    heading2: "Hanging Glass Mirror",
    text: "Handmade Cotton Macrame Wall Hanging Glass Mirror With Boho Fringes, Bohemian Art Decorative Aina For Make-Up, Living Room, Bedroom, Off-White, Dia 18 Inches, Style 30, Framed, Round...",
    icon: amazon_logo,
    link: "https://amzn.to/4fxi93E",
  },
  {
    id: "47",
    image: p47,
    heading1: "Mirror",
    heading2: " Mirror for Bedroom, Bathroom",
    text: "Home Deco Handmade Wooden Antique Frame Round Wall-Mounted Mirror, Mirror for Bedroom, Bathroom, Living Room, Wall Basin, Study Room, Office, Brown (18 Inches Round, Framed)...",
    icon: amazon_logo,
    link: "https://amzn.to/4766fvB",
  },
  {
    id: "48",
    image: p48,
    heading1: "Mirror",
    heading2: "Wall Mount Mirror",
    text: "Eye Shaped Wooden Decorative Wall Mount Mirror for Living Room Home Décor (Eye) (Flower Wenge)...",
    icon: amazon_logo,
    link: "https://amzn.to/4oJs7mT",
  },
  {
    id: "49",
    image: p49,
    heading1: "Stickers",
    heading2: "Decal Mural Wall Stickers",
    text: "African Lady(TL) Mulitcolor Removable Decor Mural Wall Stickers Decal Mural Wall Stickers Decal...",
    icon: amazon_logo,
    link: "https://amzn.to/3J50Z11",
  },
  {
    id: "50",
    image: p50,
    heading1: "Decor Wall",
    heading2: "Wall Art",
    text: "Live Love Laugh MDF Plaque Painted Cutout Ready To Hang Home Decor Wall Art, Valentine Day Gift -Black...",
    icon: amazon_logo,
    link: "https://amzn.to/45qhgFc",
  },
  {
    id: "51",
    image: p51,
    heading1: "Wall Art",
    heading2: "Wall Decore",
    text: "Cactus & Succulent Wooden Wall Art Set – 4-Piece Black Laser-Cut Botanical Decor – Modern Minimalist Plant Panels for Living Room, Bedroom, or Office...",
    icon: amazon_logo,
    link: "https://amzn.to/3J5vRP4",
  },
  {
    id: "52",
    image: p52,
    heading1: "LED Wall Lamp",
    heading2: "Spiral Shape Light",
    text: "Spiral Shape Golden Modern Wall Light for Home, LED Wall Lamp with 3 Color Lighting (Cool/Warm/Natural White), Perfect for Hall, Bedroom, Pack of 1...",
    icon: amazon_logo,
    link: "https://amzn.to/4lk8grc",
  },
  {
    id: "53",
    image: p53,
    heading1: "Clock",
    heading2: "Handcrafted Double Side Clock",
    text: "Vintage Clock Handcrafted Double Side Clock / 6 Inch Size / Brass Finish...",
    icon: amazon_logo,
    link: "https://amzn.to/4onIJ3j",
  },
  {
    id: "54",
    image: p54,
    heading1: "Clock",
    heading2: "Analog Wall Clock",
    text: "Home Decoration European Analog Wall Clock Crystal Luxury Living Room Creative Personality Art,Metal,Blue,Birds...",
    icon: amazon_logo,
    link: "https://amzn.to/4fwgBa4",
  },
  {
    id: "55",
    image: p55,
    heading1: "Clock",
    heading2: "Pendulum Wall Clock",
    text: "Wooden and Brass Ring Large Pendulum Wall Clock for Living Room Home Decorations (Size: 12 x 3 x 20 Inch | Stylish Clock | Color: (Brown)...",
    icon: amazon_logo,
    link: "https://amzn.to/40SLtLV",
  },
  {
    id: "56",
    image: p56,
    heading1: "Desk Clock",
    heading2: "Cute Simple Design Clock",
    text: "Analog Alarm Clocks,Retro Backlight Cute Simple Design Small Desk Clock W/Night Light,Silent Non-Ticking,Battery Powered,for Kids,Bedroom(Green)-Alloy Steel...",
    icon: amazon_logo,
    link: "https://amzn.to/4maG8Z0",
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
const Homedecore = () => {
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
          Home Decore Items
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

export default Homedecore;
