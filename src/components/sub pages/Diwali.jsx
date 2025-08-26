import React, { useState, useEffect } from "react";
import amazon_logo from "../../assets/amazon_logo.jpg";

import p1 from "../../assets/Diwali/p1.jpg";
import p2 from "../../assets/Diwali/p2.webp";
import p3 from "../../assets/Diwali/p3.jpg";
import p4 from "../../assets/Diwali/p4.webp";
import p5 from "../../assets/Diwali/p5.jpg";
import p6 from "../../assets/Diwali/p6.jpg";
import p7 from "../../assets/Diwali/p7.jpg";
import p8 from "../../assets/Diwali/p8.jpg";
import p9 from "../../assets/Diwali/p9.jpg";
import p10 from "../../assets/Diwali/p10.jpg";
import p11 from "../../assets/Diwali/p11.jpg";
import p12 from "../../assets/Diwali/p12.jpg";
import p13 from "../../assets/Diwali/p13.jpg";
import p14 from "../../assets/Diwali/p14.jpg";
import p15 from "../../assets/Diwali/p15.jpg";
import p16 from "../../assets/Diwali/p16.jpg";
import p17 from "../../assets/Diwali/p17.jpg";
import p18 from "../../assets/Diwali/p18.jpg";
import p19 from "../../assets/Diwali/p19.jpg";
import p20 from "../../assets/Diwali/p20.jpg";
import p21 from "../../assets/Diwali/p21.jpg";
import p22 from "../../assets/Diwali/p22.jpg";
import p23 from "../../assets/Diwali/p23.jpg";
import p24 from "../../assets/Diwali/p24.jpg";
import p25 from "../../assets/Diwali/p25.jpg";
import p26 from "../../assets/Diwali/p26.jpg";
import p27 from "../../assets/Diwali/p27.jpg";
import p28 from "../../assets/Diwali/p28.jpg";
import p29 from "../../assets/Diwali/p29.jpg";
import p30 from "../../assets/Diwali/p30.jpg";
import p31 from "../../assets/Diwali/p31.jpg";
import p32 from "../../assets/Diwali/p32.jpg";
import p33 from "../../assets/Diwali/p33.webp";
import p34 from "../../assets/Diwali/p34.jpg";
import p35 from "../../assets/Diwali/p35.jpg";
import p36 from "../../assets/Diwali/p36.jpg";
import p37 from "../../assets/Diwali/p37.jpg";
import p38 from "../../assets/Diwali/p38.webp";
import p39 from "../../assets/Diwali/p39.jpg";
import p40 from "../../assets/Diwali/p40.jpg";
import p41 from "../../assets/Diwali/p41.jpg";
import p42 from "../../assets/Diwali/p42.jpg";
import p43 from "../../assets/Diwali/p43.jpg";
import p44 from "../../assets/Diwali/p44.jpg";
import p45 from "../../assets/Diwali/p45.jpg";
import p46 from "../../assets/Diwali/p46.jpg";
import p47 from "../../assets/Diwali/p47.jpg";
import p48 from "../../assets/Diwali/p48.jpg";
import p49 from "../../assets/Diwali/p49.jpg";
import p50 from "../../assets/Diwali/p50.jpg";
import p51 from "../../assets/Diwali/p51.jpg";
import p52 from "../../assets/Diwali/p52.jpg";
import p53 from "../../assets/Diwali/p53.jpg";
import p54 from "../../assets/Diwali/p54.webp";
import p55 from "../../assets/Diwali/p55.jpg";
import p56 from "../../assets/Diwali/p56.jpg";
import p57 from "../../assets/Diwali/p57.jpg";
import p58 from "../../assets/Diwali/p58.jpg";
import p59 from "../../assets/Diwali/p59.jpg";
import p60 from "../../assets/Diwali/p60.jpg";
import p61 from "../../assets/Diwali/p61.jpg";
import p62 from "../../assets/Diwali/p62.jpg";
import p63 from "../../assets/Diwali/p63.jpg";
import p64 from "../../assets/Diwali/p64.jpg";
import p65 from "../../assets/Diwali/p65.jpg";
import p66 from "../../assets/Diwali/p66.jpg";
import p67 from "../../assets/Diwali/p67.jpg";
import p68 from "../../assets/Diwali/p68.jpg";
import p69 from "../../assets/Diwali/p69.jpg";
import p70 from "../../assets/Diwali/p70.jpg";
import p71 from "../../assets/Diwali/p71.jpg";
import p72 from "../../assets/Diwali/p72.jpg";
import p73 from "../../assets/Diwali/p73.jpg";
import p74 from "../../assets/Diwali/p74.jpg";
import p75 from "../../assets/Diwali/p75.jpg";
import p76 from "../../assets/Diwali/p76.jpg";
import p77 from "../../assets/Diwali/p77.jpg";
import p78 from "../../assets/Diwali/p78.jpg";
import p79 from "../../assets/Diwali/p79.jpg";
import p80 from "../../assets/Diwali/p80.jpg";
import p81 from "../../assets/Diwali/p81.jpg";
import p82 from "../../assets/Diwali/p82.jpg";
import p83 from "../../assets/Diwali/p83.jpg";
import p84 from "../../assets/Diwali/p84.jpg";
import p85 from "../../assets/Diwali/p85.jpg";
import p86 from "../../assets/Diwali/p86.jpg";
import p87 from "../../assets/Diwali/p87.webp";
import p88 from "../../assets/Diwali/p88.jpg";
import p89 from "../../assets/Diwali/p89.jpg";
import p90 from "../../assets/Diwali/p90.jpg";
import p91 from "../../assets/Diwali/p91.jpg";
import p92 from "../../assets/Diwali/p92.jpg";
import p93 from "../../assets/Diwali/p93.jpg";
import p94 from "../../assets/Diwali/p94.webp";
import p95 from "../../assets/Diwali/p95.jpg";
import p96 from "../../assets/Diwali/p96.jpg";
import p97 from "../../assets/Diwali/p97.jpg";
import p98 from "../../assets/Diwali/p98.jpg";
import p99 from "../../assets/Diwali/p99.jpg";
import p100 from "../../assets/Diwali/p100.jpg";
import p101 from "../../assets/Diwali/p101.jpg";
import p102 from "../../assets/Diwali/p102.webp";
import p103 from "../../assets/Diwali/p103.jpg";
import p104 from "../../assets/Diwali/p104.jpg";
import p105 from "../../assets/Diwali/p105.jpg";
import p106 from "../../assets/Diwali/p106.jpg";
import p107 from "../../assets/Diwali/p107.jpg";
import p108 from "../../assets/Diwali/p108.jpg";
import p109 from "../../assets/Diwali/p109.jpg";
import p110 from "../../assets/Diwali/p110.jpg";
import p111 from "../../assets/Diwali/p111.jpg";
import p112 from "../../assets/Diwali/p112.jpg";
// import p81 from "../../assets/Diwali/p81.jpg";

const featuredProducts = [
  {
    id: "1",
    image: p1,
    heading1: "Pujan Samagri",
    heading2: "Complete Puja Set",
    text: "Diwali Puja Kit | Laxmi-Ganesh Pooja Kit with Poster | Diwali Pujan Samagri for Home and Office | Complete Puja Set | 38 Items in Pack...",
    icon: amazon_logo,
    link: "https://amzn.to/3Hg1Dbx",
  },
  {
    id: "2",
    image: p2,
    heading1: "Puja Samagri",
    heading2: "Laxmi Poojan Kit",
    text: "Diwali Laxmi Pujan Premium Puja Samagri Kit - 47 Holy Essentials for Auspicious Diwali Celebration | Traditional Pooja Essentials...",
    icon: amazon_logo,
    link: "https://amzn.to/4oms4gC",
  },
  {
    id: "3",
    image: p3,
    heading1: "Samagri",
    heading2: "Laxmi Pooja Item",
    text: "THE DIVINE Mix Pack of White-Black-Yellow Kori, Red Gunja, Gomti Chakra, Kamal Gatta, Good Luck Three Coin, Rudraksh, Laxmi Gutika Cash Box Vastu Remedy for Home Office & Pooja...",
    icon: amazon_logo,
    link: "https://amzn.to/3UDsAZJ",
  },
  {
    id: "4",
    image: p4,
    heading1: "Shri Yantra",
    heading2: "Shri Yantra",
    text: "Shree Yantra sri shri Yantra 27 x 27 cm...",
    icon: amazon_logo,
    link: "https://amzn.to/4flmDdB",
  },
  {
    id: "5",
    image: p5,
    heading1: "Diya",
    heading2: "Colorful Diya Set",
    text: "Clay 12 Diyas Diya Deepak Earthen Assorted Colorful Set - Diwali Decoration Puja - Handpainted Diya for Home Indoor Outdoor Diwali Design Handmade Mix Color (Set of 12)...",
    icon: amazon_logo,
    link: "https://amzn.to/4laCyg9",
  },
  {
    id: "6",
    image: p6,
    heading1: "Pooja Samagri",
    heading2: "Laxmi-Ganesh Pooja kit",
    text: "Diwali Puja Kit/Laxmi-Ganesh Pooja kit with Laxmi-Ganesh-Sarswati Poster & Kuber Yantra, Diwali Pooja Combo | Complete Pooja Samagri Kit for Navratri, Ganesh Chaturthi and Diwali Pooja...",
    icon: amazon_logo,
    link: "https://amzn.to/3IT740F",
  },
  {
    id: "7",
    image: p7,
    heading1: "Paduka",
    heading2: "Metal Laxmi Charan",
    text: "Laxmi Charan Paduka || Metal Laxmi Charan || Laxmi Charan with Plate for Diwali Pooja | Laxmi Paule for Door Pooja Item, vastu Items for Home...",
    icon: amazon_logo,
    link: "https://amzn.to/4ohIlmN",
  },
  {
    id: "8",
    image: p8,
    heading1: "Tortoise",
    heading2: "Brass Tortoise With Plate",
    text: "Tortoise for Good Luck | Brass Tortoise with Plate, Small Size, Brass, Gold Colour, 1 Set, Religious...",
    icon: amazon_logo,
    link: "https://amzn.to/3Ha5aIq",
  },
  {
    id: "9",
    image: p9,
    heading1: "Pooja Thali",
    heading2: "Thali Set for Diwali",
    text: "Metal Laxmi Ganesh Pooja Thali Set for Diwali Pooja with Cow Krishna and Hanuman Ji for Home and Office Gift Item...",
    icon: amazon_logo,
    link: "https://amzn.to/3GSa5xH",
  },
  {
    id: "10",
    image: p10,
    heading1: " Floating Flowers",
    heading2: "Diyas Set-Traditional",
    text: "Home Decor Golden Metal Handcrafted Designer Diya Urli for Diwali Diyas Set-Traditional Decorative Bowl for Floating Flowers and Tea Light Candles, Diwali Urli...",
    icon: amazon_logo,
    link: "https://amzn.to/46IbVf0",
  },
  {
    id: "11",
    image: p11,
    heading1: "Murti",
    heading2: "Laxmi Ganesh murti",
    text: "Laxmi Ganesh murti Idol Ganesha Diya puja Deepak - Metal Lakshmi Ganesh Statue - Diwali Home Decoration Items - Lakshmi Ganesh for Diwali Showpiece Oil Lamp...",
    icon: amazon_logo,
    link: "https://amzn.to/4mkSkWw",
  },
  {
    id: "12",
    image: p12,
    heading1: "Murti",
    heading2: "Lakshmi Ganesh Saraswati Idol",
    text: "Lakshmi Ganesh Saraswati Idol Diya Oil Lamp Showpiece Decoration Items for Home Decor Puja Room Temple - Birthday Wedding Housewarming Gifts (Multi, 23 cm X 12.7 cm)...",
    icon: amazon_logo,
    link: "https://amzn.to/4frgahg",
  },
  {
    id: "13",
    image: p13,
    heading1: "Coins",
    heading2: "Lakshmi Kubera Coins",
    text: "Lakshmi Kubera Coins 27 Nos Brass | Kubera Pooja Coins 27 Nos | Kubera Coins 27 Nos (Brass, 2.5 cm Diameter X 0.1 cm Thick) (Gold Colour)...",
    icon: amazon_logo,
    link: "https://amzn.to/3J5BHQp",
  },
  {
    id: "14",
    image: p14,
    heading1: "Diya",
    heading2: "Diya Steps",
    text: "5 Steps Decorative Brass Diya for Puja & Gifting...",
    icon: amazon_logo,
    link: "https://amzn.to/4fmXSxr",
  },
  {
    id: "15",
    image: p15,
    heading1: "Lights for Home",
    heading2: "Warm White Fairy Lights",
    text: "14 LED Crystal Star, 10 Feet Warm White Fairy Lights for Home,Mandir,Pooja Room, Deepawali & Diwali Decoration, Christmas Tree Decoration,Festival Decorative Lights...",
    icon: amazon_logo,
    link: "https://amzn.to/3UISuv4",
  },
  {
    id: "16",
    image: p16,
    heading1: "Star Light",
    heading2: "Multi Color Star Curtain",
    text: "Plastic Multi Color Star Curtain Led Light For Diwali Christmas Wedding - 2.5 Meter (1 Curtain, 138 Led, 6+6 Star), Diwali Star Light Curtain, Diwali Led Lights, Best Gift For Diwali...",
    icon: amazon_logo,
    link: "https://amzn.to/4lXHeHf",
  },
  {
    id: "17",
    image: p17,
    heading1: "Leaf LED",
    heading2: "Lights with Leaf Design",
    text: "Leaf LED Curtain String Lights with Leaf Design | Warm White Decorative Fairy Lights for Bedroom, Living Room, Window, Wall, Wedding, Festival, Party & Home Décor (1 Pc, Plug Powered)...",
    icon: amazon_logo,
    link: "https://amzn.to/450B3fI",
  },
  {
    id: "18",
    image: p18,
    heading1: "LED String Copper Lights",
    heading2: "Diya Shape Lights",
    text: "Diya Shape Diwali String Lights, LED String Copper Lights with 14 Hanging Diyas (3.5m), Diya Diwali Fairy Lights Indoor Outdoor for Home Decoration (Warm White)...",
    icon: amazon_logo,
    link: "https://amzn.to/3IYMlIO",
  },
  {
    id: "19",
    image: p19,
    heading1: "Home Decoration",
    heading2: "Led String Fairy Light",
    text: "10M 100 Led String Fairy Light Powered by Battery Box and Remote, 8 Mode Functions Copper Wire for Home Decoration Birthday Home Decoration Festival Rice (Warm White) - Battery not Included...",
    icon: amazon_logo,
    link: "https://amzn.to/4lfV2vL",
  },
  {
    id: "20",
    image: p20,
    heading1: "Plants",
    heading2: "Artificial Potted Plants",
    text: "Artificial Potted Plants, 8 Pack Artificial Plastic Eucalyptus Plants Small Indoor Potted Houseplants, Small Faux Plants for Home Decor Bathroom Office Farmhouse (Set 0F 8)...",
    icon: amazon_logo,
    link: "https://amzn.to/45BxInu",
  },
  {
    id: "21",
    image: p21,
    heading1: "Jhadu",
    heading2: "Handcraft Jhadu",
    text: "Kusha Grass Jhadu for Home Temple/Mandir/Pooja Ghar/Diwali Pooja Unique Handcraft Dry Dates Grass Broom for Home Garden Outdoor Floor Area Cleaning (12 Inch, Brown)...",
    icon: amazon_logo,
    link: "https://amzn.to/3UeT6Zs",
  },
  {
    id: "22",
    image: p22,
    heading1: "Photo",
    heading2: "Ashtalakshmi Kuber Photo",
    text: "Lakshmi Kubera Laxmi Devi Ashtalakshmi Kuber Wall Painting Framed Home Decor (Wood,Matte,Gold,Small Size,6 x 8 Inch)...",
    icon: amazon_logo,
    link: "https://amzn.to/3UK8BIV",
  },
  {
    id: "23",
    image: p23,
    heading1: "Photo",
    heading2: "Laxmi Ganesh Saraswati",
    text: "Laxmi Ganesh Saraswati with ashta laxmi | God Photo for Pooja | Hindu Bhagwan Devi Devta Photo | God Photo Frames | Wall D?cor Photo Frame | Photo Frame (lgs with ASHT laxmi)...",
    icon: amazon_logo,
    link: "https://amzn.to/4moK0Fh",
  },
  {
    id: "24",
    image: p24,
    heading1: "Prashad",
    heading2: "Batasha",
    text: "Indian Sweet Batasha, Traditional |Sugar Batasha for Puja | Sugar Drop Candy | Pooja Prashad-200gm...",
    icon: amazon_logo,
    link: "https://amzn.to/3IYT2uf",
  },
  {
    id: "25",
    image: p25,
    heading1: "Eco Friendly Murti",
    heading2: "Laxmi Ganesh Ji Idol",
    text: "Laxmi Ganesh Ji Idol for Diwali Puja Small Eco Friendly Pair for Home Office Diwali Puja Religious God Handmade Terracotta Colorful Mitti Clay Sculpture Statue...",
    icon: amazon_logo,
    link: "https://amzn.to/41jnAxa",
  },
  {
    id: "26",
    image: p26,
    heading1: "Terracotta Clay Idol",
    heading2: "Laxmi Ganesh Pair Murti",
    text: "Laxmi Ganesh Pair Murti Mitti Terracotta Clay Idol Statue Showpiece (12.7 Cm X 7.6 Cm) - Decoration Items For Home Decor Mandir Temple Pooja Room Table Office Gifts, Multicolour...",
    icon: amazon_logo,
    link: "https://amzn.to/41rUoE6",
  },
  {
    id: "27",
    image: p27,
    heading1: "Feet Idols",
    heading2: "Silver Feet Idols",
    text: "Silver Laxmi Feet Idols for Hindu Worship, 5 cm Large Size...",
    icon: amazon_logo,
    link: "https://amzn.to/3UfG4uD",
  },
  {
    id: "28",
    image: p28,
    heading1: "Fish Idol",
    heading2: "Fish Idol with Astdhatu",
    text: "Pure Silver Fish Idol with Astdhatu Laxmi Yantra (Combo) for puja | chandi ki machli/Fish for Astrological and lal kitab Remedy | Silver Fish for vastu, Pooja (wt. 1 Gram) Laxmi Fish...",
    icon: amazon_logo,
    link: "https://amzn.to/3IZxAFG",
  },
  {
    id: "29",
    image: p29,
    heading1: "Tortoise",
    heading2: "Kachua Solid Idol",
    text: "Pure Silver Tortoise/Turtle/Kachua Solid Idol with Beautiful Design|for Home, Temple, God Idol for Pooja Room,Good Luck Gift|999 Purity|2gms...",
    icon: amazon_logo,
    link: "https://amzn.to/4m9BQ4c",
  },
  {
    id: "30",
    image: p30,
    heading1: "Dry Fruits",
    heading2: "Dry Fruits for Pooja",
    text: "Special Mini Jumbo Dry Fruits Gift Box 900gms/ Export Quality...",
    icon: amazon_logo,
    link: "https://amzn.to/4lU9lam",
  },
  {
    id: "31",
    image: p31,
    heading1: "Terracotta Clay Diyas",
    heading2: "Matki Diya",
    text: "24 Matki Diya for Puja Diwali Decoration Terracotta Clay Diyas Tealight Candles Christmas Xmas Decoration Items for Home (Set of 24)...",
    icon: amazon_logo,
    link: "https://amzn.to/3J0En1R",
  },
  {
    id: "32",
    image: p32,
    heading1: "Plastic Diya",
    heading2: "Reusable Transparent Hard Plastic",
    text: "3D Reflection Reusable Transparent Hard Plastic Multicolor Floating Oil Diya Deepak for Diwali Decoration and Gifts (Set of 12)...",
    icon: amazon_logo,
    link: "https://amzn.to/4ld33S3",
  },
  {
    id: "33",
    image: p33,
    heading1: "Assorted Design",
    heading2: "Rangoli Making Stencils",
    text: "12 Assorted Design Circle Rangoli Making Stencils Set for Diwali Decoration (Round, Multi-Colored)...",
    icon: amazon_logo,
    link: "https://amzn.to/4mpOLOO",
  },
  {
    id: "34",
    image: p34,
    heading1: "Floor Decoration",
    heading2: "Rangoli Making Stencils",
    text: "Ready to Draw Rangoli Making Stencils - Plastic Stencils for Floor Decoration (4x4 inches - Set of 16)...",
    icon: amazon_logo,
    link: "https://amzn.to/3HjfdL9",
  },
  {
    id: "35",
    image: p35,
    heading1: "Powder",
    heading2: "Rangoli Colour",
    text: "10 Rangoli Colour Powder Tube Kit, Diwali Decoration Items Bottles Tools Floor Art Rang Design Creativity for Navratri Pongal Pooja Mandir Decor (Pack of 10 Bottles)...",
    icon: amazon_logo,
    link: "https://amzn.to/4fjosYq",
  },
  {
    id: "36",
    image: p36,
    heading1: "Powder",
    heading2: "Rangoli Colours",
    text: "Rangoli Colours Powder Bottles for Floor Decorations - Pack of 10 Rangoli Powder Bottles Used for Decoration of Diwali,...",
    icon: amazon_logo,
    link: "https://amzn.to/4mpPoYG",
  },
  {
    id: "37",
    image: p37,
    heading1: "Powder",
    heading2: "Rangoli Colors",
    text: "Rangoli Colors Powder for Floor Decorations - Pack of 10 Muggu Powder Used for Decoration of Diwali, Navaratri,Pongal, Puja Mandir and Festival...",
    icon: amazon_logo,
    link: "https://amzn.to/3IZAgTE",
  },
  {
    id: "38",
    image: p38,
    heading1: "Diya LED",
    heading2: "Diya Fairy Light",
    text: "Diya LED String Lights for Decoration – 4 Meter, 14 Warm Yellow LEDs, Ganpati Decoration Light, Decorative Diya Fairy Light for Diwali, Pooja Room...",
    icon: amazon_logo,
    link: "https://amzn.to/4lYpuLP",
  },
  {
    id: "39",
    image: p39,
    heading1: "Pital Pooja Thali",
    heading2: "Puja Thali Set",
    text: "Brass Puja Thali Set with Blue Gift Box 8 Inch Pital Pooja Plate Dhup Dan Kalash Spoon Ghanti Bowl Kuber Diya Kangura Plate for Diwali Home Mandir Office Wedding Return Gifts...",
    icon: amazon_logo,
    link: "https://amzn.to/4fq0KKj",
  },
  {
    id: "40",
    image: p40,
    heading1: "Agarbatti",
    heading2: "Oudh, Chandan & Loban",
    text: "Agarbatti Zipper Pack - Oudh, Chandan & Loban (125 Gm x 3) Hand-Rolled Premium Incense Sticks | Long-Lasting Fragrance | Ideal for Pooja, Meditation & Home Use...",
    icon: amazon_logo,
    link: "https://amzn.to/4fmNnuj",
  },
  {
    id: "41",
    image: p41,
    heading1: "Dhoop Sticks",
    heading2: "Handcrafted Dhoop Batti",
    text: "Cycle Pure Bansuri Bambooless Dhoop Sticks for Pooja | 100g Each, Pack of 4 | Chandan, Guggal, Loban, Rose Fragrances | Handcrafted Dhoop Batti for Pooja, Meditation, and Daily Use...",
    icon: amazon_logo,
    link: "https://amzn.to/3Uacuqr",
  },
  {
    id: "42",
    image: p42,
    heading1: "Dhoop Cones",
    heading2: "Incense Cones-Soumya Chandan Fragrance",
    text: "PHOOL LUXURY INCENSE Ayodhya Incense Cones-Soumya Chandan Fragrance|Special Pooja Pack Flowers Offered At Ayodhya Temples|Pack Of 40 Dhoop Cones|No Charcoal&Chemical...",
    icon: amazon_logo,
    link: "https://amzn.to/46CLxTG",
  },
  {
    id: "43",
    image: p43,
    heading1: "Dhuni Havan Cup",
    heading2: "Sambrani Dhoop Cups",
    text: "Satguru Organic Cow Dung Panchgavya Dhuni Havan Cup & Sambrani Dhoop Cups- Jatamassi, Loban, Guggal(Fragrance Havan) for Daily Navratri Diwali Puja Removes Negative Energy(Brown) Colour (Pack of 50)...",
    icon: amazon_logo,
    link: "https://amzn.to/4l64IbX",
  },
  {
    id: "44",
    image: p44,
    heading1: "Camphor",
    heading2: "Aromatic for Pooja",
    text: "Bhimseni Camphor - 100 GMS/Camphor for Pooja/100% Pure Brass Kapoor/Aromatic for Pooja, Meditation, Havan, Room Freshener/Pure & Natural Pacha Kapoor (Rose Fragrance, 100 gm)...",
    icon: amazon_logo,
    link: "https://amzn.to/45C3uRa",
  },
  {
    id: "45",
    image: p45,
    heading1: "Burner",
    heading2: "Camphor Burner",
    text: "Camphor Burner/Essential Oil Diffuser/Electric Diffuser for Fragrance/Kapur Dani for Pooja, Meditation, Havan/Kappor Stand for Home, Office (Pack of 1) Wood...",
    icon: amazon_logo,
    link: "https://amzn.to/3IYYGwA",
  },
  {
    id: "46",
    image: p46,
    heading1: "Toran",
    heading2: "Toran for Diwali",
    text: "Toran with Multi Color Ring Fancy Toran for Diwali, Main Door Decoration Banderwal, Door Hangings for Home Decoration- 40 Inch Size...",
    icon: amazon_logo,
    link: "https://amzn.to/41mfOTc",
  },
  {
    id: "47",
    image: p47,
    heading1: "Torans",
    heading2: "Home Decoration",
    text: "Torans for Entrance Door, Toran for Home Decoration, Mandir Decorations Items, Toran with Side Hanging, Door Decoration Items Hanging, thoranam for Entrance Door Visit the Divyakosh Store...",
    icon: amazon_logo,
    link: "https://amzn.to/45zisaB",
  },
  {
    id: "48",
    image: p48,
    heading1: "Torans",
    heading2: "Handmade Door Hanging",
    text: "Traditional Multi Zula Pearl Plastic Beads Handmade Door Hanging/Bandarwal/Toran for Door, Traditional Bandarwal for Door, (37 inch Length), Multicolor, Medium...",
    icon: amazon_logo,
    link: "https://amzn.to/456u5G8",
  },
  {
    id: "49",
    image: p49,
    heading1: "Wall Decor",
    heading2: "Handicraft Wall Hanging",
    text: "Traditional Round Floral Design Diwali Decoration Wall Decor Handicraft Wall Hanging - 1 Piece, Multicolour...",
    icon: amazon_logo,
    link: "https://amzn.to/45lrBCq",
  },
  {
    id: "50",
    image: p50,
    heading1: "Wall Decor",
    heading2: "Wall Hanging For Entrance",
    text: "Traditional Wall Decor Todla For Home Decor/Wall Hanging For Entrance(Set Of 2) (RND-Peacock01), 40 Centimeters,Multicolour...",
    icon: amazon_logo,
    link: "https://amzn.to/3IYr025",
  },
  {
    id: "51",
    image: p51,
    heading1: "Wall Hanging Decoration",
    heading2: "Peacock Art Wooden Wall",
    text: "Decorative Peacock Art Wooden Wall Hanging Decoration Items for Home | Bedroom | Mdf Designer Artwork for Living Room | Ideal Gift | Stylish Modern Decor Item for Hall (WH_9904N) (Set of 3)...",
    icon: amazon_logo,
    link: "https://amzn.to/40RyzxF",
  },
  {
    id: "52",
    image: p52,
    heading1: "Charan Paduka",
    heading2: "Charan Paduka",
    text: "Lakshmi Charan Paduka Stickers for Home Office Puja Ghar Temple - Diwali Decoration Items for Home Decor...",
    icon: amazon_logo,
    link: "https://amzn.to/454pwMu",
  },
  {
    id: "53",
    image: p53,
    heading1: "Hall Decoration",
    heading2: "Diwali Decoration Items",
    text: "Swastik for Home Corridor, Living Room, Hall Decoration, Pack of 6, Diwali Decoration Items for Home Decor...",
    icon: amazon_logo,
    link: "https://amzn.to/4ogDe6h",
  },
  {
    id: "54",
    image: p54,
    heading1: "Home Decoration",
    heading2: "Decorative Diya",
    text: "Yellow Theme Rangoli Mats for Home Decoration,Set of 7, Decorative Diya, Diwali Gift Diya's, Deepak, Candles, Home Decoration Tea Light...",
    icon: amazon_logo,
    link: "https://amzn.to/3UgxgER",
  },
  {
    id: "55",
    image: p55,
    heading1: "Pujan Samagri",
    heading2: "Complete Deepawali Pooja Saman",
    text: "101 Items Diwali Pujan Samagri for Home and Office Complete Deepawali Pooja Saman for Daily & Festival Rituals Laxmi-Ganesh Poojan kit with Pooja Vidhi Book...",
    icon: amazon_logo,
    link: "https://amzn.to/3JhBXMc",
  },
  {
    id: "56",
    image: p56,
    heading1: "Aasan",
    heading2: "Aasan Cloth",
    text: "Designer Velvet Embroidered Pooja Aasan Cloth 8x10 inch Yellow | Chowki Aasan for God Idol | Mandir Table Altar Cover for Temple, Puja Shelf, Diwali Decoration Pack 0f 4...",
    icon: amazon_logo,
    link: "https://amzn.to/4mlfJHA",
  },
  {
    id: "57",
    image: p57,
    heading1: "Kamal Gatta",
    heading2: "Lotus Seeds",
    text: "21 Pieces Kamal Gatta Seed/Lotus Seeds/Rosary of Kamalgatta Diwali Pooja Samagri Kit...",
    icon: amazon_logo,
    link: "https://amzn.to/4lgkFfQ",
  },
  {
    id: "58",
    image: p58,
    heading1: "Gunja",
    heading2: "Pooja Samagri Diwali",
    text: "Pooja Samagri Diwali/Navratri/Durga/Laxmi Pujan Item for Office, Home, Temple Etc. for Prosperity, Wealth & Good Luck (Rakt Gunja/Chirmi)...",
    icon: amazon_logo,
    link: "https://amzn.to/46IlFpt",
  },
  {
    id: "59",
    image: p59,
    heading1: "Yagya Samagri",
    heading2: "Hawan Cups (15 pcs",
    text: "Organic Hawan Samagri/Hawan Cups (15 pcs) | Yagya Samagri | Samagri Cups | Agnihotra Kit | Hawan Samagri Cups for Home & Office Pooja with 1 Handcrafted Clay Mini Hawan Kund - Pack of 1...",
    icon: amazon_logo,
    link: "https://amzn.to/3U9JM98",
  },

  {
    id: "60",
    image: p60,
    heading1: "Gomati Chakra",
    heading2: "Gomati Chakra",
    text: "Pooja Samagri Gomati Chakra/Gomathi Chakram for Blessings Laxmi/Mahalaxmi on Diwali Puja (Off White) -Set of 4 Pieces...",
    icon: amazon_logo,
    link: "https://amzn.to/4mNfipR",
  },
  {
    id: "61",
    image: p61,
    heading1: "Kalawa",
    heading2: "Cotton Pooja moli ",
    text: "Red Thread Kalawa Nadachadi Cotton Wrist Band Pooja moli | Raksha Sutra for Pujan, Havan, Worship, Diwali, Holy Hindu Puja Ceremony, Havan Yagya and Pooja Samagri (20meter)...",
    icon: amazon_logo,
    link: "https://amzn.to/47eRd6w",
  },
  {
    id: "62",
    image: p62,
    heading1: "Aasan",
    heading2: "Swastik Design Aasan",
    text: "Premium Range Of Pooja Accessories (15x15 Inch) Swastik Design Red Velvet Pooja Aasan Cloth/Kapda/Embroidered Puja Chowki Cloth for Home Mandir, Temple, God & Goddess Assan-Pack of 1...",
    icon: amazon_logo,
    link: "https://amzn.to/4on79tE",
  },
  {
    id: "63",
    image: p63,
    heading1: "Garland",
    heading2: "Cardamom Garland",
    text: "Cardamom Garland, Green, Religious Decoration, Hanging Ornament, Diwali, Multiple occasions (Religious & Secular), Cardamom...",
    icon: amazon_logo,
    link: "https://amzn.to/3HfEZA6",
  },
  {
    id: "64",
    image: p64,
    heading1: "Diya",
    heading2: "Swastik Diya",
    text: "Always Together Traditional Brass Swastik Diya with Velvet Box for Pooja, Diwali, Home Decor, Return Gift, Temple Decoration...",
    icon: amazon_logo,
    link: "https://amzn.to/45y68HI",
  },
  {
    id: "65",
    image: p65,
    heading1: "Kalash",
    heading2: "Spiritual Kalash",
    text: "The Spiritual Living Kalash Showpiece for Pooja Room Decor | Diwali Decor Items | 2 Inch | Decorative Items for Mandir | Temple | Silver & Golden | Mangal Kalash with Coconut | Vastu...",
    icon: amazon_logo,
    link: "https://amzn.to/3IZRLTQ",
  },
  {
    id: "66",
    image: p66,
    heading1: "Rangoli",
    heading2: "Rangoli Tool Se",
    text: "Pooja Ghar Rangoli Tool Set – Complete Kit for Unique and Beautiful Rangoli Designs | Home & Festival Decoration...",
    icon: amazon_logo,
    link: "https://amzn.to/45m7LqO",
  },
  {
    id: "67",
    image: p67,
    heading1: "Kalash",
    heading2: "Copper Lota",
    text: "Copper Kalash, Lota, Small Size Rajashahi Ghanti for Daily Pooja, Diwali Pooja, Festivals, Marriage (150 Ml)...",
    icon: amazon_logo,
    link: "https://amzn.to/4lgyNFL",
  },
  {
    id: "68",
    image: p68,
    heading1: "Brass Idol",
    heading2: "Lakshmi Vishnu Idol",
    text: "Brass Lakshmi Vishnu Idol God Goddess Statues Religious Deity Laxmi Vishnu Resting On Sheshnaag 4 Inches...",
    icon: amazon_logo,
    link: "https://amzn.to/4lgAx1L",
  },
  {
    id: "69",
    image: p69,
    heading1: "Idol",
    heading2: "Laxmi Idol",
    text: "Marble Finishing Maa Goddess Laxmi Idol Statue, Pack of 1 (Multicolor)...",
    icon: amazon_logo,
    link: "https://amzn.to/4omtpDO",
  },

  {
    id: "70",
    image: p70,
    heading1: "Ashtalakshmi",
    heading2: " Ashta Lakshmi Set with Wooden Table",
    text: "Goddess Ashtalakshmi | Ashta Lakshmi Set with Wooden Table Frame for Diwali Pooja Mandir Temple | Gold Color Idol | 2 Inches Height | Perfect for Office Decor,...",
    icon: amazon_logo,
    link: "https://amzn.to/455n6ND",
  },
  {
    id: "71",
    image: p71,
    heading1: "Diwali Pooja",
    heading2: "Gold Coated Ganesh Laxmi",
    text: "Pure Gold Coated Ganesh Laxmi For Diwali Pooja Box - Premium Gold Laxmi Ganesh for Diwali Pooja Box - Auspicious Pocket Temple with Charan Paduka (4X4 inches)...",
    icon: amazon_logo,
    link: "https://amzn.to/3J2xJYQ",
  },
  {
    id: "72",
    image: p72,
    heading1: "Chowki",
    heading2: "Pooja Chowki Bajot",
    text: "Handicrafts Paradise (4 x 4 inch) Kalash Design Marble Pooja Chowki Bajot for God, Home Mandir, Idols Statues Pratima, Home Décor Showpiece...",
    icon: amazon_logo,
    link: "https://amzn.to/4m0zcxh",
  },
  {
    id: "73",
    image: p73,
    heading1: "Door Latkan",
    heading2: "Laxmi Ganesh Wall Hanging",
    text: "Set of 4 Laxmi Ganesh Wall Hanging Door Latkan Toran with Bells (Multi, 22.8 cm) Navratri Decoration Item for Home Decor Main Door Entrance Pooja Room Home Decor Temple Decorations...",
    icon: amazon_logo,
    link: "https://amzn.to/45zBuh4",
  },
  {
    id: "74",
    image: p74,
    heading1: "Door Hangings",
    heading2: "Shubh Labh",
    text: "Shubh Labh Hangings (1 Pair), Jharokha Laxmi Ganesh Ji for Door Decoration|Festival Door Hangings for Home,Temple & Pooja|Decorative Home...",
    icon: amazon_logo,
    link: "https://amzn.to/47hiG7z",
  },
  {
    id: "75",
    image: p75,
    heading1: "Home Decoration",
    heading2: "Swastik Latkans",
    text: "Door Hangings For Home Decoration|Pack Of 2 Swastik Latkans Door Hanging Ganesh And Laxmi Ji Shubh-Labh|Temple Decoration Items...",
    icon: amazon_logo,
    link: "https://amzn.to/47cmtDe",
  },
  {
    id: "76",
    image: p76,
    heading1: "Poojan Chowki",
    heading2: "Rajwadi Chowki",
    text: "Peacock Designed Wooden Meenakari Rajwadi Chowki/Patla | Wooden patla for puja-8.50x 11x 2.50 Inch - Diwali Decorations Items, Pooja chowki for Diwali...",
    icon: amazon_logo,
    link: "https://amzn.to/3JjUYxx",
  },
  {
    id: "77",
    image: p77,
    heading1: "Aasan",
    heading2: "Kamal Aasan",
    text: "Lotus Aasan (Pink) / Lotus Kamal Aasan for Varlaxmi Saraswati Devi Margshirsha Durga Maa Lakshmi Ganpati Idol Pooja/Navratri Diwali Festival...",
    icon: amazon_logo,
    link: "https://amzn.to/4mwr73x",
  },
  {
    id: "78",
    image: p78,
    heading1: "Brass Statue",
    heading2: "Laxmi with Owl",
    text: "Brass Statue Goddess Laxmi with Owl for Puja Mandir Temple MATA Laxmi Murti Religious Gifts...",
    icon: amazon_logo,
    link: "https://amzn.to/3J60gN7",
  },
  {
    id: "79",
    image: p79,
    heading1: "Wall Sticker",
    heading2: "Laxmi Kalash",
    text: "God/Religion/Bhagwan ji Wall Sticker | New Modern Art & Trendy Multicolour Vinyl Wall Stickers for Home,Office, Living Room, Bedroom, Pooja Ghar, Home Decoration Items...",
    icon: amazon_logo,
    link: "https://amzn.to/46I1ojW",
  },
  {
    id: "80",
    image: p80,
    heading1: "Idol",
    heading2: "Metal Lord Idil",
    text: "Metal Lord Ganesh and Maa Lakshmi, Sarswati Idol 12 cm Golden, 1 Piece...",
    icon: amazon_logo,
    link: "https://amzn.to/4onbtJo",
  },
  {
    id: "81",
    image: p81,
    heading1: "Handcrafted",
    heading2: "Shubh Labh Door Hanging",
    text: "Decorative Handcrafted Wooden Shubh Labh Door Hangings Showpiece for Diwali, Wedding Or House Warming | Size 12 cm x 12 cm, Yellow - Colour (2 Piece)...",
    icon: amazon_logo,
    link: "https://amzn.to/4ojIg1Q",
  },
  {
    id: "82",
    image: p82,
    heading1: "Ashta Laxmi",
    heading2: "Mahalakshmi Photo Frame",
    text: "24K Gold Plated Ashta Laxmi, Mahalakshmi Photo Frame Charan Paduka With Pooja item, Return Gifts for Housewarming, Ashta Laxmi...",
    icon: amazon_logo,
    link: "https://amzn.to/4lbN5Ys",
  },
  {
    id: "83",
    image: p83,
    heading1: "Bells",
    heading2: "Hanging Bells",
    text: "Brass Hanging Bells (Laxmi_Ganesh, Gold)...",
    icon: amazon_logo,
    link: "https://amzn.to/4lbNkTm",
  },
  {
    id: "84",
    image: p84,
    heading1: "Necklace",
    heading2: "Jewellery For Gods",
    text: " 5 Ganesh Ganpati Necklace Haar Of Pearls & Gems Set For Home Mandir Decoration Jewellery For Gods Length 2-2.5-3 Inches For Women...",
    icon: amazon_logo,
    link: "https://amzn.to/45m9g8q",
  },
  {
    id: "85",
    image: p85,
    heading1: "Diya",
    heading2: "Arti PanchMukhi Diya",
    text: "Brass Pancharti Diya Special for Navratri Pooja Arti PanchMukhi Five Fcae Dia Oil Lamp for Home and Mandir Decoration...",
    icon: amazon_logo,
    link: "https://amzn.to/4m4d4SV",
  },
  {
    id: "86",
    image: p86,
    heading1: "Toran",
    heading2: " Marigold Flower",
    text: "Fabric Marigold Flower With Moti Toran, Bandarwal Door Hanging, 94 Cm...",
    icon: amazon_logo,
    link: "https://amzn.to/4lUtRaS",
  },
  {
    id: "87",
    image: p87,
    heading1: "Door Decoration",
    heading2: "Artificial Marigold Garland",
    text: "10 Pcs Indian Handmade Artificial Marigold Garland Flowers for Decoration Long for Door Decoration Toran Genda Phool for Wedding/Festivals...",
    icon: amazon_logo,
    link: "https://amzn.to/4fnpXER",
  },
  {
    id: "88",
    image: p88,
    heading1: "Door Hanging",
    heading2: "Handmade Plastic Toran",
    text: "Size - 48 Inch / 4FT Handmade Plastic Beads MarigoldTraditional Door Hanging/Bandarwal/Toran for Door, Traditional Bandarwal, Torans for Entrance Door,...",
    icon: amazon_logo,
    link: "https://amzn.to/4ons1AZ",
  },
  {
    id: "89",
    image: p89,
    heading1: "Hanging Toran",
    heading2: "Shubh Labh",
    text: "Shubh Labh Door Hangings for Diwali Decoration Door, Hanging Toran, Door Bandarwal, Shubh Labh Bandarwal, Door Hanging Wall Hanging for Diwali Decoration...",
    icon: amazon_logo,
    link: "https://amzn.to/41mtRbo",
  },
  {
    id: "90",
    image: p90,
    heading1: "Grains",
    heading2: "Grains For Pooja",
    text: "SundarLaxmi Seven Assorted Grains - 700 Gram (100G Each) | 7 Dhan | Dhaan | Sapt Dhany For Pooja...",
    icon: amazon_logo,
    link: "https://amzn.to/4m6mPjq",
  },
  {
    id: "91",
    image: p91,
    heading1: "Batti",
    heading2: "Long Batti",
    text: "Namaskar Diya Batti Long Cotton Wicks for Pooja, White (3 inch)...",
    icon: amazon_logo,
    link: "https://amzn.to/3J1X6dh",
  },
  {
    id: "92",
    image: p92,
    heading1: "Chunri",
    heading2: "Chunri",
    text: "Mata Rani Small Net Chunri with Shiny Border - Pack of 2 Piece (Red)10inch...",
    icon: amazon_logo,
    link: "https://amzn.to/45kchWS",
  },
  {
    id: "93",
    image: p93,
    heading1: "Coconut",
    heading2: "Nariyal",
    text: "Nariyal || Coconut || Nariyal For Kalash || 1 Peace Nariyal For Pooja...",
    icon: amazon_logo,
    link: "https://amzn.to/4fvWHMw",
  },
  {
    id: "94",
    image: p94,
    heading1: "Dhooni Cup",
    heading2: "Dhoop Loban",
    text: "Desi Handmade Natural Clay Dhoop Loban Dani/Dhuni Burner Holder/Pot Stand for Puja/Hawan/Dhuni...",
    icon: amazon_logo,
    link: "https://amzn.to/3Ug8GE3",
  },
  {
    id: "95",
    image: p95,
    heading1: "Sugarcane",
    heading2: "Live Plant",
    text: "Sugarcane, Saccharum officinarum, ganna,Black sugar cane, akh,Healthy Live Plant Actual Plant Height .1 ft to 2 ft, (4 Sticck)...",
    icon: amazon_logo,
    link: "https://amzn.to/4mltnKO",
  },
  {
    id: "96",
    image: p96,
    heading1: "Sweet",
    heading2: "Soan Papdi",
    text: "Soan Papdi 500g | Instant Ready To Eat - Delicious Crispy & Flaky | Indian Sweets Gift Pack | Made With Fresh Almonds and Pistachio | Indian Traditional Soan Papdi | Great Sweets Gift Box...",
    icon: amazon_logo,
    link: "https://amzn.to/4osdlRk",
  },
  {
    id: "97",
    image: p97,
    heading1: "Mithai",
    heading2: "Sweets Gifts Box",
    text: "Dryfruit Mithai, Sweets Gifts Box For Diwali Gifting, Festive Gifting, 400 gm...",
    icon: amazon_logo,
    link: "https://amzn.to/4mtxfJN",
  },
  {
    id: "98",
    image: p98,
    heading1: "Barfis",
    heading2: "Dryfruit Sweets",
    text: "Gifts Assorted Box of Barfis, Dryfruit Sweets 800 GMS |Sweets|Sweets Gift Pack|Diwali Sweets|Indian Mithai|Diwali Sweets Gift Box|...",
    icon: amazon_logo,
    link: "https://amzn.to/4frLNHw",
  },
  {
    id: "99",
    image: p99,
    heading1: "Kaju Katlis",
    heading2: "Diwali Sweets Special",
    text: "Diwali Gifts Sweets-Assorted Kaju Katlis, 500 GMS|Sweets|Sweets Gift Pack|Diwali Sweets|Indian Mithai|Diwali Sweets Gift Box|Sweets Gift Box...",
    icon: amazon_logo,
    link: "https://amzn.to/4fqMAII",
  },
  {
    id: "100",
    image: p100,
    heading1: "Gujiya",
    heading2: "Gujiya Sweets",
    text: "Kesar Gujia 400g | Gujiya Sweets | Indian Mithai | Fresh Indian Traditional Mithai | Holi Gift Hamper | Fresh Products | Royal Saffron Flavor | Festive Sweet Gift Box | Mithai for All Occasion...",
    icon: amazon_logo,
    link: "https://amzn.to/3UJTEqb",
  },
  {
    id: "101",
    image: p101,
    heading1: "Murti",
    heading2: "Brass Luxmi Goddes Idol",
    text: "Brass Laxmi Murti Lakshmi Wall Hanging Idol Luxmi Goddess Lakshmi Sitting on Lotus Statue in Blessing Postures for Home Puja Mandir Temple Height 12 Inch...",
    icon: amazon_logo,
    link: "https://amzn.to/45sNT5w",
  },
  {
    id: "102",
    image: p102,
    heading1: "Brass Idol",
    heading2: "Lakshmi Devi Idol",
    text: "100% Pure Brass Lakshmi Devi Idol (8.4 CM) | Laxmi Idol for Pooja Room, Home Decor, Car Dashboard or Office Desk | | Varalakshmi Puja Idol |...",
    icon: amazon_logo,
    link: "https://amzn.to/47cY1l5",
  },
  {
    id: "103",
    image: p103,
    heading1: "Idol",
    heading2: "Laxmi Ganesh Idol",
    text: "Brass Ganesha Laxmi Ganesh Lakshmi Bhagwan Idol Sitting on Lotus Ganpati Murti Statue for Home Office Puja Success Décor Gift 5 Inches...",
    icon: amazon_logo,
    link: "https://amzn.to/4mr2i8V",
  },
  {
    id: "104",
    image: p104,
    heading1: "Murti",
    heading2: "Laxmi Idol",
    text: "Lakshmi on Lotus | Laxmi Goddess Murti Idol Statue Sculpture Figurine - Resin - 11 Inches - Multi...",
    icon: amazon_logo,
    link: "https://amzn.to/46HXlnD",
  },
  {
    id: "105",
    image: p105,
    heading1: "Chowki",
    heading2: "Choki for Pooja",
    text: "Chowki Set of 2 (6 Inch and 8 Inch/Golden) - Religious Meenakari Choki for Festivals, Puja, Home Decor and Gifts...",
    icon: amazon_logo,
    link: "https://amzn.to/4fsVBBc",
  },
  {
    id: "106",
    image: p106,
    heading1: "Diya",
    heading2: "Handmade Mitti Deepak",
    text: "Traditional Terracotta Clay Diya | Handmade Mitti Deepak for Diwali Pooja Decoration | Natural Oil Lamps for Festivals, Temple, Home Decor (Pack of 6 Piece)...",
    icon: amazon_logo,
    link: "https://amzn.to/4fm2pAh",
  },
  {
    id: "107",
    image: p107,
    heading1: "Diya",
    heading2: "Mitti Ka Diya",
    text: "Square Shaped Traditional Clay Diya/Teracotta Diya/Mitti Ka Diya for Festival/Pooja/Diwali/Durga Pooja/Ganesh Chaturthi - Pack of 6...",
    icon: amazon_logo,
    link: "https://amzn.to/3JkbU73",
  },
  {
    id: "108",
    image: p108,
    heading1: "Diya",
    heading2: "Mitti Diya",
    text: "Traditional Handmade Terracotta Clay Big Size Mitti Diya Multi Colour, 1 Piece for Diwali, Pooja Room, Temple, Mandir and Home Decoration...",
    icon: amazon_logo,
    link: "https://amzn.to/3HjHDVs",
  },
  {
    id: "109",
    image: p109,
    heading1: "Temple",
    heading2: "Laxmi Ganesh",
    text: "Laxmi Ganesh Diwali Hatri with 5 Traditional Diyas – Festival Pooja Decoration for Home, Temple & Gifting – Handcrafted Religious Décor (Multicolor)...",
    icon: amazon_logo,
    link: "https://amzn.to/41omdgG",
  },
  {
    id: "110",
    image: p110,
    heading1: "Hamper",
    heading2: "Dry Fruits",
    text: "Dry Fruits Hamper Diwali Gift Box Diwali Gifts For Family Diwali Gifts Dry Fruits Gift Box Diwali Gift For Kids Lid L9 Basic Cashew Almond Pistachio Walnut Gift For Diwali...",
    icon: amazon_logo,
    link: "https://amzn.to/3ULOAl9",
  },
  {
    id: "111",
    image: p111,
    heading1: "Gujia",
    heading2: "Sweet Somas",
    text: "Dry Coconut Karanji (Pack of 2 - 200gm Each) | Narlachi Karanji/Gujia | Gujiya Sweet | Sweet Somas | Sweet Dry Snack | Crunchy & Tasty | Ready to Eat Snacks | Traditional Handmade Sweet...",
    icon: amazon_logo,
    link: "https://amzn.to/4lcsPG0",
  },
  {
    id: "112",
    image: p112,
    heading1: "Hamper",
    heading2: "Diwali Gift Hamper",
    text: "Gifts - Bhakar Wadi and Soan Papdi Hamper|Gift Hamper| Diwali Gift Hamper|Food Hampers|Gourmet Hampers|...",
    icon: amazon_logo,
    link: "https://amzn.to/4opAwvh",
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
];
const Diwali = () => {
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
          Diwali Celebration Items
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

export default Diwali;
