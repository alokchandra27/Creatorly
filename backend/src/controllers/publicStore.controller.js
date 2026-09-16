const storeModel = require("../models/store.model");
const productModel = require("../models/product.model");

async function getSellerStoreByStoreName(req, res) {
  try {
    const { storeName } = req.params;
    console.log("Fetching public store page for storeName:", storeName);

    // 1. Pehle check karo kya main Store Table mein koi document hai
    let storeProfile = await storeModel.findOne({
      storeName: { $regex: new RegExp(`^${storeName}$`, "i") }
    }).select("-createdAt -updatedAt -__v ");

    let sellerId = null;
    let finalStoreData = {};

    if (storeProfile) {
      sellerId = storeProfile.sellerId;
      finalStoreData = {
        storeName: storeProfile.storeName,
        bio: storeProfile.storeDescription || storeProfile.bio || "",
        profileImage: storeProfile.profileImage?.url || "",
        storeLogo: storeProfile.storeLogo?.url || "",
        bannerImage: storeProfile.bannerImage?.url || "",
        instagramUsername: storeProfile.instagramUsername || "",
        instagramLink: storeProfile.instagramLink || "",
        whatsappNumber: storeProfile.whatsappNumber || ""
      };
    } else {
      // 🌟 BACKUP FLOW: Agar store table khali hai, toh pehle check karo kya kisi product mein yeh storeName save hai!
      console.log("Store Table mein data nahi mila, Products table se fallback dynamic lookup ho raha hai...");
      const sampleProduct = await productModel.findOne({
        storeName: { $regex: new RegExp(`^${storeName}$`, "i") }
      });

      if (!sampleProduct) {
        return res.status(404).json({ message: "Shop profile not found anywhere in database." });
      }

      sellerId = sampleProduct.sellerId;
      finalStoreData = {
        storeName: sampleProduct.storeName,
        bio: "Welcome to my handicraft shop!",
        profileImage: "",
        storeLogo: "",
        bannerImage: "",
        instagramUsername: "",
        instagramLink: "",
        whatsappNumber: ""
      };
    }

    // 2. Us seller ke saare active products laao
    const products = await productModel.find({
      sellerId: sellerId,
      isDeleted: false
    }).select("-isDeleted -deletedAt -__v -createdAt -updatedAt");

    // 3. Response deliver karein
    res.status(200).json({
      message: "Public store data fetched successfully",
      store: finalStoreData,
      products: products
    });

  } catch (error) {
    console.error("Error fetching public store page:", error);
    return res.status(500).json({ 
      message: "Internal server error while loading shop page", 
      error: error.message 
    });
  }
}

module.exports = {
  getSellerStoreByStoreName,
};
