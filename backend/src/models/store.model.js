const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  bio: {
    type: String,
  },
  profileImage: {
    url: { type: String },
    fileId: { type: String },
  },
  storeLogo: {
    url: { type: String },
    fileId: { type: String },
  },
  bannerImage: {
    url: { type: String },
    fileId: { type: String },
  },
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "seller",
    required: true,
    unique: true,
  },
  instagramUsername: {
    type: String,
    required: true,
  },
  instagramLink: {
    type: String,
    required: true,
  },
  facebookUsername: {
    type: String,
  },
  facebookLink: {
    type: String,
  },
  whatsappNumber: {
    type: String,
  },
  address: {
    type: String,
  },
});

const storeModel = mongoose.model("Store", storeSchema);

module.exports = storeModel;
