const sellerModel = require("../models/seller.model");
const storeModel = require("../models/store.model");
const { uploadImage, deleteImage } = require("../services/storage.service");

async function getSellerStore(req, res) {
  try {
    const sellerId = req.user.id;

    let storeProfile = await storeModel.findOne({
      sellerId,
    });

    if (!storeProfile) {
      const seller = await sellerModel.findById(sellerId);

      if (!seller) {
        return res.status(404).json({
          message: "Seller profile not found",
        });
      }

      storeProfile = await storeModel.create({
        bio: seller.bio || "",
        profileImage: seller.profileImage || "",
        sellerId: sellerId,
        instagramUsername: "@abcStore" || "",
        instagramLink: "https://www.instagram.com/" || "",
        facebookUsername: "",
        facebookLink: "",
        whatsappNumber: "",
        address: "",
        storeLogo: "",
        bannerImage: "",
      });

      console.log(
        "Empty tha isliye naya store profile create kiya gaya:",
        storeProfile,
      );
    }

    res.status(200).json({
      message: "Store profile retrieved successfully",
      storeProfile: storeProfile,
    });
  } catch (error) {
    console.error("Error fetching seller store profile:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function updateSellerStore(req, res) {
  try {
    const sellerId = req.user.id;

    const existingStore = await storeModel.findOne({ sellerId });

    if (!existingStore) {
      return res.status(404).json({ message: "Store profile not found" });
    }

    const seller = await sellerModel.findById(sellerId);
    const sanitizedSellerName = seller
      ? seller.username
          .toLowerCase()
          .replace(/[^a-z0-9]/g, "-")
          .replace(/-+/g, "-")
      : "unknown-seller";

    const updatePayload = { ...req.body };

    if (req.files) {
      for (const fieldName in req.files) {
        const fileArray = req.files[fieldName];

        if (fileArray && fileArray.length > 0) {
          const fileObject = fileArray[0];

          console.log(
            `Uploading new image for field: ${fieldName} for seller ID: ${sellerId}`,
          );

          const plainStore = existingStore.toObject();
          if (plainStore[fieldName] && plainStore[fieldName].fileId) {
            const targetFileId = plainStore[fieldName].fileId;
            console.log(
              `Deleting old ${fieldName} with File ID: ${targetFileId}`,
            );
            await deleteImage(targetFileId);
          }

          const imageResponse = await uploadImage(
            fileObject,
            `${sanitizedSellerName}/store-assets`,
          );

          updatePayload[fieldName] = {
            url: imageResponse.url,
            fileId: imageResponse.fileId,
          };
        }
      }
    }
    const updatedStoreProfile = await storeModel.findOneAndUpdate(
      { sellerId },
      updatePayload,
      { returnDocument: "after", runValidators: true },
    );

    res.status(200).json({
      message: "Store profile updated successfully",
      storeProfile: updatedStoreProfile,
    });
  } catch (error) {
    console.error("Error updating seller store profile:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  getSellerStore,
  updateSellerStore,
};
