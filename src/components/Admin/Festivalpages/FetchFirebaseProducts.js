// fetchFirebaseProducts.js
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase"; // 🔥 apne firebase config ka sahi path de

// ✅ Ye function firebase se data fetch karega
const FetchFirebaseProducts = async () => {
  try {
    const snapshot = await getDocs(collection(db, "ramnavami")); // ramnavami = collection name
    const products = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
export default FetchFirebaseProducts;
