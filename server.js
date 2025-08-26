// const express = require("express");
// const paapi = require("amazon-paapi");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.get("/products", async (req, res) => {
//   try {
//     const result = await paapi.searchItems({
//       keywords: req.query.keyword || "Rudraksha",
//       resources: [
//         "Images.Primary.Medium",
//         "ItemInfo.Title",
//         "Offers.Listings.Price",
//       ],
//       partnerTag: process.env.PARTNER_TAG,
//       partnerType: "Associates",
//       marketplace: "www.amazon.in",
//       accessKey: process.env.ACCESS_KEY,
//       secretKey: process.env.SECRET_KEY,
//     });

//     res.json(result);
//   } catch (err) {
//     console.error("Amazon API Error:", err.message);
//     res.status(500).json({ error: err.message });
//   }
// });

// app.listen(5000, () => {
//   console.log("✅ Server running on http://localhost:5000");
// });
