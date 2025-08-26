import React, { useState, useEffect } from "react";
import amazon_logo from "../../assets/amazon_logo.jpg";

import balgopal1 from "../../assets/krishnajanmashtmi/balgopal1.jpg";
import balgopal2 from "../../assets/krishnajanmashtmi/balgopal2.jpg";
import balgopal3 from "../../assets/krishnajanmashtmi/balgopal3.jpg";
import p1 from "../../assets/krishnajanmashtmi/p1.jpg";
import balgopal4 from "../../assets/krishnajanmashtmi/balgopal4.jpg";
import balgopal5 from "../../assets/krishnajanmashtmi/balgopal5.jpg";
import balgopal6 from "../../assets/krishnajanmashtmi/balgopal6.jpg";
import balgopal7 from "../../assets/krishnajanmashtmi/balgopal7.jpg";
import balgopal8 from "../../assets/krishnajanmashtmi/balgopal8.jpg";
import balgopal9 from "../../assets/krishnajanmashtmi/balgopal9.jpg";
import balgopal10 from "../../assets/krishnajanmashtmi/balgopal10.jpg";
import balgopal11 from "../../assets/krishnajanmashtmi/balgopal11.jpg";
import balgopal12 from "../../assets/krishnajanmashtmi/balgopal12.jpg";
import p14 from "../../assets/krishnajanmashtmi/p14.jpg";
import p15 from "../../assets/krishnajanmashtmi/p15.jpg";
import p16 from "../../assets/krishnajanmashtmi/p16.jpg";
import p17 from "../../assets/krishnajanmashtmi/p17.jpg";
import p18 from "../../assets/krishnajanmashtmi/p18.jpg";
import p19 from "../../assets/krishnajanmashtmi/p19.jpg";
import p20 from "../../assets/krishnajanmashtmi/p20.webp";
import p21 from "../../assets/krishnajanmashtmi/p21.jpg";
import p22 from "../../assets/krishnajanmashtmi/p22.jpg";
import p23 from "../../assets/krishnajanmashtmi/p23.jpg";
import p24 from "../../assets/krishnajanmashtmi/p24.jpg";
import p25 from "../../assets/krishnajanmashtmi/p25.jpg";
import p26 from "../../assets/krishnajanmashtmi/p26.jpg";
import p27 from "../../assets/krishnajanmashtmi/p27.jpg";
import p28 from "../../assets/krishnajanmashtmi/p28.jpg";
import p29 from "../../assets/krishnajanmashtmi/p29.jpg";
import p30 from "../../assets/krishnajanmashtmi/p30.jpg";
import p31 from "../../assets/krishnajanmashtmi/p31.jpg";
import p32 from "../../assets/krishnajanmashtmi/p32.jpg";
import p33 from "../../assets/krishnajanmashtmi/p33.jpg";
import p34 from "../../assets/krishnajanmashtmi/p34.jpg";
import p35 from "../../assets/krishnajanmashtmi/p35.jpg";
import p36 from "../../assets/krishnajanmashtmi/p36.jpg";
import p37 from "../../assets/krishnajanmashtmi/p37.jpg";
import p38 from "../../assets/krishnajanmashtmi/p38.jpg";
import p39 from "../../assets/krishnajanmashtmi/p39.jpg";
import p40 from "../../assets/krishnajanmashtmi/p40.jpg";
import p41 from "../../assets/krishnajanmashtmi/p41.jpg";
import p42 from "../../assets/krishnajanmashtmi/p42.jpg";
import p43 from "../../assets/krishnajanmashtmi/p43.jpg";
import p44 from "../../assets/krishnajanmashtmi/p44.jpg";
import p45 from "../../assets/krishnajanmashtmi/p45.jpg";
import p46 from "../../assets/krishnajanmashtmi/p46.jpg";
import p47 from "../../assets/krishnajanmashtmi/p47.jpg";
import p48 from "../../assets/krishnajanmashtmi/p48.jpg";
import p49 from "../../assets/krishnajanmashtmi/p49.jpg";
import p50 from "../../assets/krishnajanmashtmi/p50.jpg";
import p51 from "../../assets/krishnajanmashtmi/p51.jpg";
import p52 from "../../assets/krishnajanmashtmi/p52.jpg";
import p53 from "../../assets/krishnajanmashtmi/p53.jpg";
import p54 from "../../assets/krishnajanmashtmi/p54.jpg";
import p55 from "../../assets/krishnajanmashtmi/p55.jpg";
import p56 from "../../assets/krishnajanmashtmi/p56.jpg";
import p57 from "../../assets/krishnajanmashtmi/p57.jpg";
import p58 from "../../assets/krishnajanmashtmi/p58.jpg";
import p59 from "../../assets/krishnajanmashtmi/p59.jpg";
import p60 from "../../assets/krishnajanmashtmi/p60.jpg";
import p61 from "../../assets/krishnajanmashtmi/p61.jpg";
import p62 from "../../assets/krishnajanmashtmi/p62.jpg";
import p63 from "../../assets/krishnajanmashtmi/p63.jpg";
import p64 from "../../assets/krishnajanmashtmi/p64.jpg";
import p65 from "../../assets/krishnajanmashtmi/p65.jpg";
import p66 from "../../assets/krishnajanmashtmi/p66.jpg";
import p67 from "../../assets/krishnajanmashtmi/p67.jpg";
import p68 from "../../assets/krishnajanmashtmi/p68.jpg";
import p69 from "../../assets/krishnajanmashtmi/p69.jpg";
import p70 from "../../assets/krishnajanmashtmi/p70.jpg";
import p71 from "../../assets/krishnajanmashtmi/p71.jpg";
import p72 from "../../assets/krishnajanmashtmi/p72.jpg";
// import p1 from "../../assets/krishnajanmashtmi/p1.jpg";
// import p1 from "../../assets/krishnajanmashtmi/p1.jpg";
// import p1 from "../../assets/krishnajanmashtmi/p1.jpg";

const featuredProducts = [
  {
    id: "1",
    image: balgopal1,
    heading1: "Brass Idol",
    heading2: "Laddu Gopal Statue",
    text: "Brass Bal Krishna Idol Laddu Gopal Figure Statue Makhanchor Sculpture Janamashtami Special for Home Temple...",
    icon: amazon_logo,
    link: "https://amzn.to/3INFlyt",
  },
  {
    id: "2",
    image: balgopal2,
    heading1: "Bal Gopal",
    heading2: "Ashtadhatu-Brass Bal Gopal Murti",
    text: "Ashtadhatu-Brass Laddu Gopal Idol (Designing and Painting Laddu Gopal Ji) (2 Inch Height)...",
    icon: amazon_logo,
    link: "https://amzn.to/3UBD6R8",
  },
  {
    id: "3",
    image: balgopal3,
    heading1: "Bal Gopal",
    heading2: "Brass Bal Gopal Idol",
    text: "Brass Bal Gopal Idol with Butter Ball Statue, Lord Krishna ladoo Gopal Murti, Idol for Home Decoration Temple Pooja 4.5 Inch...",
    icon: amazon_logo,
    link: "https://amzn.to/4laXB2b",
  },
  {
    id: "4",
    image: p1,
    heading1: "Bal Gopal Statue",
    heading2: "Pital Brass Murti with Dress",
    text: "Laddu Gopal Statue Pital Brass Murti with Dress Combo for Kanha Ji, Bal Gopal Statue (Ladoo Gopal Assorted Dress Gaddi Combo (lg1a), 2 no.)...",
    icon: amazon_logo,
    link: "https://amzn.to/4fcRSY5",
  },
  {
    id: "5",
    image: balgopal4,
    heading1: "Bal Gopal",
    heading2: "Sawariya Laddoo Gopal",
    text: "Black Laddu Gopal Murti |Ladoo Gopal | Sawariya Laddoo Gopal | Bal Gopal | Ladu Gopal Idol in Brass/Idol, Krishna Ji...",
    icon: amazon_logo,
    link: "https://amzn.to/3U8phJV",
  },
  {
    id: "6",
    image: balgopal5,
    heading1: "Bal Gopal",
    heading2: "Laddu Gopal Murti",
    text: "Laddu Gopal Murti with Heavy Dress and All Accessories Size 6 | Ladoo Gopal | Laddoo Gopal | Bal Gopal | Thakurji | Ladu Gopal Idol in Brass | Krishna with Face Makeup, Idol...",
    icon: amazon_logo,
    link: "https://amzn.to/457xYJy",
  },
  {
    id: "7",
    image: balgopal6,
    heading1: "Baby Krishna Statue",
    heading2: "laddu Gopal Idol",
    text: "laddu Gopal Idol | Metal Bal Gopal Murti for Home mandir | Baby Krishna Statue for Janamashtmi | Thakur Ji | Ladoo Gopal | God Kanhaiya for Temple (Size 7)...",
    icon: amazon_logo,
    link: "https://amzn.to/3H8mehY",
  },
  {
    id: "8",
    image: balgopal7,
    heading1: "Kishna ji",
    heading2: "Laddu Gopal Idol",
    text: "India Metal Laddu Gopal Idol, 9 x 7.5 x 2.5 Inches, Golden, Religious...",
    icon: amazon_logo,
    link: "https://amzn.to/4od1yG3",
  },
  {
    id: "9",
    image: balgopal8,
    heading1: "Bal Gopal",
    heading2: "Makhan Chor Statue",
    text: "Krishna Makhan Chor Statue Figurine Showpiece for Home Temple, Living Room & Pooja Decor | Lord Krishna Idol Showpiece for Housewarming Gift for Janmashtmi (10cm, Purple Finish)...",
    icon: amazon_logo,
    link: "https://amzn.to/4ff6YMR",
  },
  {
    id: "10",
    image: balgopal9,
    heading1: "Marble Idol Krishna",
    heading2: "Baby Krishna Idol",
    text: " Laddu Gopal Murti Baby Krishna Idol Marble Dust Makhan Krishan Statue for Home Decoration Items Wedding Gift Positive Envirnement Birthday Gift...",
    icon: amazon_logo,
    link: "https://amzn.to/45dugxQ",
  },
  {
    id: "11",
    image: balgopal10,
    heading1: "Bal Gopal",
    heading2: "Handcrafted Laddu Gopal Murti",
    text: "Lord Krishna Idol, Handcrafted Laddu Gopal Murti Sculpture, Baby Krishna Statue for Home Decor- Ladoo Gopal Murti Krishna Idol - 4 Inch...",
    icon: amazon_logo,
    link: "https://amzn.to/4ocUXvq",
  },
  {
    id: "12",
    image: balgopal11,
    heading1: "Radha Krishna Idol",
    heading2: "Peacock Design Radha Krishna Idol",
    text: "Metal Peacock Design Radha Krishna Idol Decorative Showpiece Statue for Puja Room Home Office Desk Decoration Gift Items (7 x 5 Inches) Gold...",
    icon: amazon_logo,
    link: "https://amzn.to/40MjjlM",
  },
  {
    id: "13",
    image: balgopal12,
    heading1: "Jugal Jodi",
    heading2: "Laddu Gopal and Bal Radha Rani",
    text: "Big Jugal Jodi Laddu Gopal and Bal Radha Rani Murti l Ladoo Gopal l Laddoo Gopal l Bal Gopal l Ladu Gopal Idol in Brass...",
    icon: amazon_logo,
    link: "https://amzn.to/45idoX7",
  },
  {
    id: "14",
    image: p14,
    heading1: "Krishna",
    heading2: "Maa Yashoda with Krishna",
    text: "Maa Yashoda Binding Baby Krishna Idol-Damodar Leela-Hindu God and Goddess Idol/Statue/Murti/Figurine(5.5)-Polyster Resin-Multicolour 1 pcs Set...",
    icon: amazon_logo,
    link: "https://amzn.to/4lRnHbn",
  },
  {
    id: "15",
    image: p15,
    heading1: "Radha Krishna",
    heading2: "Gift Items",
    text: "Radha Krishna Gift with Cow Calf Statue Murti Idol for Home Decoration, Gift Items for Anniversary,Wedding,House Warming,Return Gift...",
    icon: amazon_logo,
    link: "https://amzn.to/4ockzse",
  },
  {
    id: "16",
    image: p16,
    heading1: "Laddu Gopal Idol",
    heading2: "Bal Gopal",
    text: "Marble Laddu Gopal Idol, 10.16cm, Multicolour, 1 Bal Krishna Idol With Chowk...",
    icon: amazon_logo,
    link: "https://amzn.to/3JacJiM",
  },
  {
    id: "17",
    image: p17,
    heading1: "Laddu Gopal Jhula",
    heading2: "Krishna Hindola Palana",
    text: "Metal Swing Laddu Gopal Jhula,Krishna Hindola Palana,Decorative Laddu Gopal for Temple Pooja,Showpiece Figurines,Religious Idol Gift Article...",
    icon: amazon_logo,
    link: "https://amzn.to/3Hg1Knk",
  },
  {
    id: "18",
    image: p18,
    heading1: "Bal Gopal",
    heading2: "Pital Brass Murti with Dress",
    text: "Medium Size Laddu Gopal Statue Pital Brass Murti with Dress Combo for Kanha Ji (Medium, Golden)...",
    icon: amazon_logo,
    link: "https://amzn.to/4kYzQdn",
  },
  {
    id: "19",
    image: p19,
    heading1: "Dahi Hand",
    heading2: " Designer Dahi Hand",
    text: "Laddu Gopal Beautiful Designer Dahi Handi/Maakhan Matki for Janmashtami/Small Size/Multicolour / 2 Pcs / RK_1533...",
    icon: amazon_logo,
    link: "https://amzn.to/3IRWSFC",
  },
  {
    id: "20",
    image: p20,
    heading1: "Kamdhenu Cow",
    heading2: "Big Handcrafted Statue",
    text: "Creation Dust Polyresin Decorative Marble Kamdhenu Cow and Calf Big Handcrafted Statue, 6-inch, Multicolour...",
    icon: amazon_logo,
    link: "https://amzn.to/4lOswSZ",
  },
  {
    id: "21",
    image: p21,
    heading1: "Jhulla",
    heading2: "Palana Metal Statue Gold",
    text: "Laddu Gopal on Jhulla Palana Metal Statue Gold Plated Decor Your Home,Office Metal Krishna Murti,Showpiece Figurines,Religious Idol Gift Article...",
    icon: amazon_logo,
    link: "https://amzn.to/45lqhzI",
  },
  {
    id: "22",
    image: p22,
    heading1: "Sihasan",
    heading2: "Sihasan Ladoo Gopal",
    text: "Handcrafted Krishna Ladoo Gopal/Laddu Bal Gopal White Metal Sihasan, Religious Puja Gifts and, Showpiece - (10 Cm X 8 Cm X 18 Cm)...",
    icon: amazon_logo,
    link: "https://amzn.to/4meWhMw",
  },
  {
    id: "23",
    image: p23,
    heading1: "Krishna Statue",
    heading2: "Home Decor and Gift",
    text: "Krishna Idol for Home Decor and Gift | Krishna Statue | Home Decor Item Color- Multi size-15X9X18.5 CM...",
    icon: amazon_logo,
    link: "https://amzn.to/4ofgCmA",
  },
  {
    id: 24,
    image: p24,
    heading1: "Singhasan",
    heading2: "Ladoo Gopal Pooja Chowki Sihasan",
    text: "Wooden Singhasan for Laddu Gopal Ganesha Krishna God Idols | Decorative Ladoo Gopal Pooja Chowki Sihasan for Home Temple Mandir Puja Idol Showpieces Decoration Gifts Items (5 x 3 x 5)...",
    icon: amazon_logo,
    link: "https://amzn.to/46Bgwzt",
  },
  {
    id: "25",
    image: p25,
    heading1: "Krishan with Kamdhenu",
    heading2: "Cow with Krishna Idol",
    text: "Lord Cow Krishna Idol Statue murti Krishan with Kamdhenu Hindu God Religious Showpiece (Set of 1)...",
    icon: amazon_logo,
    link: "https://amzn.to/41f8bhk",
  },
  {
    id: "26",
    image: p26,
    heading1: "Radha-Krishna",
    heading2: "Radha-Krishna ji Statue",
    text: "Lord Radha-Krishna ji Statue for Home Temple puja Room mandir Decoration Items, Krishna Idol, Ladoo Gopal Murti - 18 cm...",
    icon: amazon_logo,
    link: "https://amzn.to/45dMiA6",
  },
  {
    id: "27",
    image: p27,
    heading1: "Decoration Items",
    heading2: "Toys for Laddu Gopal Idol",
    text: "Kanha Ji ke Khilone Mandir Decoration Items Toys for Laddu Gopal Idol, Sofa Table Set, Bhog Thali, Jutti...",
    icon: amazon_logo,
    link: "https://amzn.to/3U6z4jD",
  },
  {
    id: "28",
    image: p28,
    heading1: "Pillow Set",
    heading2: "Ladoo Gopal Singasan",
    text: "Super Soft Satin Laddu Gopal/Head Masand and Pillow Set | Ladoo Gopal Singasan for Pooja Mandir Krishna Sofa Asan (PE_02 Pink) - with Free Exciting Gift for Kanha Ji...",
    icon: amazon_logo,
    link: "https://amzn.to/46wxRcV",
  },
  {
    id: "29",
    image: p29,
    heading1: "Singhasan",
    heading2: "Singhasan For Laddu Gopal",
    text: "Aluminum God Singhasan (4 x 2.5 x 2.5 inch, Gold), Small (DFBS147-Small), Aluminium, Religion;Birds...",
    icon: amazon_logo,
    link: "https://amzn.to/4mgHZed",
  },
  {
    id: "30",
    image: p30,
    heading1: "Krishna Dress",
    heading2: "Poshak Combo for Janmashtami",
    text: "Laddu Gopal Dress Set Size 4 Poshak Combo for Janmashtami Khanaji, Ladoo Gopal Big Size Murti, Krishna Dress (Mix Colors) Set of 2...",
    icon: amazon_logo,
    link: "https://amzn.to/4l1LZOL",
  },
  {
    id: "31",
    image: p31,
    heading1: "Radha Krishna Murti",
    heading2: "Radha Krishna Statue",
    text: "Marble Dust Radha Krishna Murti (8 inch, Medium Size) | Gemstone Zircon Studded Radha Krishna Statue | Resin Radha Krishna Idol | Radhe Krishna ki Murti for Pooja, White, Religious...",
    icon: amazon_logo,
    link: "https://amzn.to/4fdIvYa",
  },
  {
    id: "32",
    image: p32,
    heading1: "Winter Dress",
    heading2: "Poshak for Small Size Khanaji",
    text: "Handcrafted Laddu Gopal Winter Dress Size 0-1 Cloth Poshak for Small Size Khanaji Murti (Set of 4)...",
    icon: amazon_logo,
    link: "https://amzn.to/4l7monJ",
  },
  {
    id: "33",
    image: p33,
    heading1: "Eyes Pair",
    heading2: "Eyes Pair of 12 Pairs",
    text: "Laddu Gopal Netra/Eyes Pair of 12 Pairs (24 Netra) for Laddu Gopal Size 2 and 3 Each netras Pair of 6 Without Glue...",
    icon: amazon_logo,
    link: "https://amzn.to/4m05x7I",
  },
  {
    id: "34",
    image: p34,
    heading1: "Palna",
    heading2: "Jhula",
    text: " Aluminium Laddu Gopal Idol, 8 x 6.5 x 2.5, Golden...",
    icon: amazon_logo,
    link: "https://amzn.to/46wyD9P",
  },
  {
    id: "35",
    image: p35,
    heading1: "Janmashtami Shringar",
    heading2: "Mor Mukut Mala Combo",
    text: "Laddu Gopal ji Mor Mukut Mala Combo Janmashtami Shringar Set with 6 Item Bansuri, Kundal, Kade, Chhari, Mukut, Mala for Krishna Idol for...",
    icon: amazon_logo,
    link: "https://amzn.to/4ogpxUT",
  },
  {
    id: "36",
    image: p36,
    heading1: "Gaddi Bed",
    heading2: "Laddu Bal Gopal Bister",
    text: "Super Soft Laddu Bal Gopal Bister/Bedding Set - Laddu Gopal Gaddi Bed - Head Pillow Set | Ladoo Gopal Singasan/Krishna Sofa Aasan - with Free Exciting Gift for Kanha Ji...",
    icon: amazon_logo,
    link: "https://amzn.to/4mlfUma",
  },
  {
    id: "37",
    image: p37,
    heading1: "Carry Basket",
    heading2: "Handcrafted Tokri for Kanha Ji",
    text: "Ladoo Gopal Carry Basket with Adjustable Mosquito Net Beautiful Handcrafted Tokri for Kanha Ji for upto Size 5 (Murti not Included)...",
    icon: amazon_logo,
    link: "https://amzn.to/41hyFyJ",
  },
  {
    id: "38",
    image: p38,
    heading1: "Hairs",
    heading2: "Designer Hairs",
    text: "Radha Rani Designer Hairs/ Designer Hairs (Only 1Pcs) (Size 4NO) and Also Suitable for (5 inch Murti)...",
    icon: amazon_logo,
    link: "https://amzn.to/3U968HP",
  },
  {
    id: "39",
    image: p39,
    heading1: "Sakhiya",
    heading2: "Radha Rani with Sakhi",
    text: "Sakhi Set Shree Mati Radha Rani with ASHT Sakhi for Pooja, Decoration & Gift by The Kanha Store (4 INCH), Religious...",
    icon: amazon_logo,
    link: "https://amzn.to/40IP0MG",
  },
  {
    id: "40",
    image: p40,
    heading1: "Radha Krishna",
    heading2: "Mix Brass Idol",
    text: "Astadhatu Mix Brass Made Radha Krishna Idol/Golden Radha Black Krishna puja Idol (10 cm), Idol...",
    icon: amazon_logo,
    link: "https://amzn.to/3UIsUGw",
  },
  {
    id: "41",
    image: p41,
    heading1: "Decoration Items",
    heading2: "Krishna Janmashtami",
    text: "Multicolor Happy Janmashtami Banner - 1Pc Krishna Janmashtami Decoration Items, Decorative Items for Krishna Janmashtami, Janmastami Decoration Items, Krishna Ashtami Decoration...",
    icon: amazon_logo,
    link: "https://amzn.to/3JajbX2",
  },
  {
    id: "42",
    image: p42,
    heading1: "Makhan Madhani",
    heading2: "Makhan Madhani",
    text: "Laddu Gopal Wooden Makhan Madhani – Handmade Janmashtami Decorative Matki (6.6 Inch, Brown Color)...",
    icon: amazon_logo,
    link: "https://amzn.to/3UIt8NS",
  },
  {
    id: "43",
    image: p43,
    heading1: "Janmashtami Decorations Items",
    heading2: "Photo Booth Props",
    text: "16 Pcs Janmashtami Photo Booth Props with 1 Set Paper Banner / Janmashtami Decorations Items / Photoshoot Props for Janmashtami (Pack of 17)...",
    icon: amazon_logo,
    link: "https://amzn.to/4mmwK49",
  },
  {
    id: "44",
    image: p44,
    heading1: "Peacock Feather",
    heading2: "Real Natural Peacock Peacock Feather",
    text: "10Pcs Real Natural Peacock Peacock Feather Original Feathers 10-12 inch for DIY Craft Floral Arrangements,Wedding,Home and Party Decorations Feathers (Pack of 10 Pcs)...",
    icon: amazon_logo,
    link: "https://amzn.to/3J9AMhM",
  },
  {
    id: "45",
    image: p45,
    heading1: "Decoration Item",
    heading2: "Cutout Set for Janmashtami Decoration",
    text: "Krishna Leela MDF Cutout Set for Janmashtami Decoration - Panghat Leela, Jail Janm Leela, Kaliya Naag Mardan, Putna Vadh, Cheer Haran, Makhan Chori Leela, Kans Vadh (Set of 10 Pcss)...",
    icon: amazon_logo,
    link: "https://amzn.to/44VMqpb",
  },
  {
    id: "46",
    image: p46,
    heading1: "Decoration Item",
    heading2: "Paper Fans for Decoration",
    text: "Propz Paper Fans for Decoration - Pack of 6 Pcs Paper Fan Decoration Set for Birthday | Paper's Decorations Item | Haldi Decorations Items | Multicolour (Cardstock)...",
    icon: amazon_logo,
    link: "https://amzn.to/4lV67DH",
  },
  {
    id: "47",
    image: p47,
    heading1: "Govardhan Parvat",
    heading2: "Krishna Leela with Gawal Se",
    text: "Wooden MDF Govardhan Parvat Jhaki Leela Set/Krishna Leela with Gawal Set/Idols Figurine for Janmashtami, Goverdhan Pooja, Home Temple Decoration (Small) (5 x 7 Inch)...",
    icon: amazon_logo,
    link: "https://amzn.to/4ffbquZ",
  },
  {
    id: "48",
    image: p48,
    heading1: "Decoration Items",
    heading2: " Krishna Cutout for Decoration",
    text: "Krishna Janmashtami Decoration Items -12Pcs Multicolor Krishna Cutout for Decoration, Decorative Items for Krishna Janmashtami, Krishna Jayanthi Decoration Backdrop (Cardstock)...",
    icon: amazon_logo,
    link: "https://amzn.to/4m0aptw",
  },
  {
    id: "49",
    image: p49,
    heading1: "Dahi Handi",
    heading2: "Dahi Handi",
    text: " Laddu Gopal Ji Toy Dahi Handi for God Krishna (Ladoo Gopal Dress Accessories)...",
    icon: amazon_logo,
    link: "https://amzn.to/40FhJ5a",
  },
  {
    id: "50",
    image: p50,
    heading1: "Raasleela Set",
    heading2: "Krishna with Radha & Gopi Raasleela",
    text: "Raas Set – Wooden MDF Krishna with Radha & Gopi Raasleela for Janmashtami Decoration [ Multicolor ] | by The Kanha Store (4 Inch)...",
    icon: amazon_logo,
    link: "https://amzn.to/4lZ8WDE",
  },
  {
    id: "51",
    image: p51,
    heading1: "Curtain Cloth",
    heading2: "Backdrop Cloth for Pooja",
    text: "Backdrop Cloth for Pooja Decoration Traditional Background Curtain Cloth for Festival. (Washable Fabric)...",
    icon: amazon_logo,
    link: "https://amzn.to/40K0u2D",
  },
  {
    id: "52",
    image: p52,
    heading1: "Toran",
    heading2: "Artificial Flower",
    text: "Artificial Flower Garland 4 Pcs, Toran for Main Door with Side Hanging | Size 5.5 Feet | Multipurpose Floral Wall/Door Hangings...",
    icon: amazon_logo,
    link: "https://amzn.to/4fhQFPq",
  },
  {
    id: "53",
    image: p53,
    heading1: "Decor Items",
    heading2: "Hanging Flowers",
    text: "Artificial Plastic Fake Hanging Flowers String Garland for Home Decor Items Pooja Room Decoration, Office Decor, Garden Decor, Haldi Decoration (Green) (1 Piece)...",
    icon: amazon_logo,
    link: "https://amzn.to/4lddXat",
  },
  {
    id: "54",
    image: p54,
    heading1: "Thali Set",
    heading2: "Laddu Gopal Bhog Thali",
    text: "Pooja Thali Set Brass Small 7 Inch Laddu Gopal Bhog Thali for Janmashtami Decoration Puja Item Festival Puja Krishna Bhog Thali Set...",
    icon: amazon_logo,
    link: "https://amzn.to/45axTEU",
  },
  {
    id: "55",
    image: p55,
    heading1: "Decor Items",
    heading2: "Hanging Flowers",
    text: "Lilly Tassel Hangings for Wedding Decoration,Temple Decoration, I Tassel with Marigold,Easy Simple Backdrop (Pack of 6 Pcs) (Yellow Flowers), 50 mm...",
    icon: amazon_logo,
    link: "https://amzn.to/4l2rIbT",
  },
  {
    id: "56",
    image: p56,
    heading1: "Pooja kit",
    heading2: "Essential item Set",
    text: "Organic Krishna Janmashtami Pooja kit Set with all Essential item Set of 24 Items...",
    icon: amazon_logo,
    link: "https://amzn.to/4off9Nd",
  },
  {
    id: "57",
    image: p57,
    heading1: "Janmashtmi Dress",
    heading2: "Dress for Baby Boy",
    text: "Shri Krishna Dress for Baby Boy & Girl, Janmashtmi Dress with Diaper-friendly Dhoti & Dupatta, Mor Pankh Mukut...",
    icon: amazon_logo,
    link: "https://amzn.to/4fkWHyI",
  },
  {
    id: "58",
    image: p58,
    heading1: "Janmashtami Pooja Samagri",
    heading2: "Pooja Samagri Kit",
    text: "WORSHIP SPECIAL-Krishna Janmashtami Pooja Samagri Kit|Laddugopal Ji Kanha Ji Thakur Ji Laddu Gopal Pujan Samagri...",
    icon: amazon_logo,
    link: "https://amzn.to/45ffeYu",
  },
  {
    id: "59",
    image: p59,
    heading1: "Accessories",
    heading2: "Shringar & Pooja Set",
    text: "Kishan Ji Complete costume Shringar & Pooja Set for Janmashtami – Includes Dress, Mukut, Flute, Mala, Bansuri, Mor Pankh, Jewellery & Accessories – Ideal for Krishna Idol Decoration...",
    icon: amazon_logo,
    link: "https://amzn.to/4lV0uVQ",
  },
  {
    id: "p60",
    image: p60,
    heading1: "Mukut",
    heading2: "Crowns for Bal Gopal",
    text: "Laddu Gopal Mukut Set of 6 | Handmade Decorative Crowns for Bal Gopal | Traditional Shringar Accessories for Krishna Ji Idol | Fits Size 0 to 6 | Ideal for Daily Wear, Janmashtami & Pooja (Size-2)...",
    icon: amazon_logo,
    link: "https://amzn.to/4l2tnhD",
  },
  {
    id: "61",
    image: p61,
    heading1: "Krishna Dress",
    heading2: "Baby Krishna Dress for Janmashtami",
    text: "Krishna Dress for Kids, Baby Krishna Dress for Janmashtami with Krishna Mukut, Peacock Feather & Flute Embroidered Krishna Costume for Girl & Boy, 3 Months-8 Years...",
    icon: amazon_logo,
    link: "https://amzn.to/3U5qmlR",
  },
  {
    id: "62",
    image: p62,
    heading1: "Mor Pankh",
    heading2: "Fancy Mor Chadi",
    text: "Mor Pankh Tilak Stick Set of 6 | Decorative Fancy Mor Chadi for Laddu Gopal, Deity Worship, Art & Craft, Home Decor, Good Luck Feather Stick for Temple & Festivals...",
    icon: amazon_logo,
    link: "https://amzn.to/45tXwlk",
  },
  {
    id: "63",
    image: p63,
    heading1: "Asan",
    heading2: "Multi-Coloured Round Asan",
    text: "6 * 6 Inch Decorative Laddu Gopal Ji Aashan Set, Multi-Coloured Round Asan with Paisley Border, Religious Altar Decoration, Pack of 4...",
    icon: amazon_logo,
    link: "https://amzn.to/4lU3AJE",
  },
  {
    id: "64",
    image: p64,
    heading1: "Dress for Kids",
    heading2: "Makhan Chor Costume",
    text: "Krishna Dress for Kids – Janmashtami Makhan Chor Costume – Cotton Dhoti Kurta with Mukut, Mala, Earrings, Bajuband, Kamarband & Flute – Ethnic Outfit for Boys...",
    icon: amazon_logo,
    link: "https://amzn.to/457ZU1j",
  },
  {
    id: "65",
    image: p65,
    heading1: "Jhula",
    heading2: "Laddu Gopal jhula",
    text: "Wood Pooja Crafts Handmade Designer Laddu Gopal jhula/Bal Gopal Swing Palana / 0, 1, 2 no. laddu Gopal jhula...",
    icon: amazon_logo,
    link: "https://amzn.to/4mfpwPa",
  },
  {
    id: "66",
    image: p66,
    heading1: "Wooden Jhula",
    heading2: "Jhula for Laddu Gopal",
    text: "Laddu Gopal- Beautiful Elegent Wooden jhula bal Gopal, Thakur ji, kanha ji Handicrafted Swing Jhula for Laddu Gopal Krishna Janmashtami (Laddu Gopal-0,1,2.)...",
    icon: amazon_logo,
    link: "https://amzn.to/45vPHM0",
  },
  {
    id: "67",
    image: p67,
    heading1: "Jhula",
    heading2: "Swing for Krishna Janmashtami",
    text: "Wooden Laddu Gopal Jhula – Classic Decorated Swing for Krishna Janmashtami | Direct from Vrindavan to Your Home | Pooja & Mandir Decor...",
    icon: amazon_logo,
    link: "https://amzn.to/478auXc",
  },
  {
    id: "68",
    image: p68,
    heading1: "Jhula",
    heading2: "Jhula for Janmashtami",
    text: "Decorative Laddu Gopal Jhula for Janmashtami – Peacock Design Swing for Bal Gopal | Krishna Jhula for Home Temple | Divine Wooden Handcrafted Jhula for God Idol | Festival & Pooja Decoratio...",
    icon: amazon_logo,
    link: "https://amzn.to/4l6EXZ0",
  },
  {
    id: "69",
    image: p69,
    heading1: "Palna with Peacock Design",
    heading2: "Palna for Laddu Gopal Ji",
    text: "Metal laddu Gopal Jhula Palna for Laddu Gopal Ji, Krishna Swing Palna with Peacock Design Decorative Showpiece, Radha Rani (for 0 to 3 Number)...",
    icon: amazon_logo,
    link: "https://amzn.to/4lWy2TL",
  },
  {
    id: "70",
    image: p70,
    heading1: "flute",
    heading2: "flute for kids",
    text: "krishna decorative flute for kids best for janmasthmi cosplay costumes (Pack of 1)...",
    icon: amazon_logo,
    link: "https://amzn.to/455a4y8",
  },
  {
    id: "71",
    image: p71,
    heading1: "flute",
    heading2: "Kanha ji Bansuri",
    text: "2 Pcs Bamboo Flute |Kanha ji Bansuri | Natural Medium Scale | for Professional/Beginner Basuri | Traditional flute with Peacock feather | Kishna ji Murli For Janmashtami 16 inch...",
    icon: amazon_logo,
    link: "https://amzn.to/3UCAKl8",
  },
  {
    id: "72",
    image: p72,
    heading1: "Asan",
    heading2: "Laddu Gopal Bethak",
    text: "Sofa for Laddu Gopal Ji Size 0, 1, 2, 3 Number (Model- 1)| Laddu Gopal Bethak|Sofa for Gopal Ji | Round Singhasan Kanha Ji with Extra 2 Pillows | Bal Gopal Asan...",
    icon: amazon_logo,
    link: "https://amzn.to/44XVIRF",
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
];
const Krishna_janmashtami = () => {
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
          Krishna Janmashtami Items
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

export default Krishna_janmashtami;
