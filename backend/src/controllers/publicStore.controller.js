const storeModel = require("../models/store.model");
const productModel = require("../models/product.model");

async function getSellerStoreByStoreName(req, res) {
  try {
    const { storeName } = req.params;
    console.log("Fetching public store page for storeName:", storeName);

    // 1. Pehle check karo kya main Store Table mein koi document hai
    let storeProfile = await storeModel
      .findOne({
        storeName: { $regex: new RegExp(`^${storeName}$`, "i") },
      })
      .select("-createdAt -updatedAt -__v ");

    console.log("IMAGE DATA:", {
      profileImage: storeProfile?.profileImage,
      storeLogo: storeProfile?.storeLogo,
      bannerImage: storeProfile?.bannerImage,
    });

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
        whatsappNumber: storeProfile.whatsappNumber || "",
        facebookUsername: storeProfile.facebookUsername || "",
        facebookLink: storeProfile.facebookLink || "",
        address: storeProfile.address || "",
        ourStory: storeProfile.ourStory || "",
      };

      
    } else {
      // 🌟
      console.log(
        "Store profile is not found in storeModel, checking productModel for any product with this storeName...",
      );

      const sampleProduct = await productModel.findOne({
        storeName: { $regex: new RegExp(`^${storeName}$`, "i") },
      });

      if (!sampleProduct) {
        return res
          .status(404)
          .json({ message: "Shop profile not found anywhere in database." });
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
        whatsappNumber: "",
      };
    }

    // 2. Us seller ke saare active products laao
    const products = await productModel
      .find({
        sellerId: sellerId,
        isDeleted: false,
      })
      .select("-isDeleted -deletedAt -__v -createdAt -updatedAt");

    // 3. Response deliver karein
    res.status(200).json({
      message: "Public store data fetched successfully",
      store: finalStoreData,
      products: products,
    });
  } catch (error) {
    console.error("Error fetching public store page:", error);

    return res.status(500).json({
      message: "Internal server error while loading shop page",
      error: error.message,
    });
  }
}

module.exports = {
  getSellerStoreByStoreName,
};