const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  storeName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

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
    type: String

  },

  instagramLink: {
    type: String,
  },

  facebookUsername: {
    type: String,
  },

  facebookLink: {
    type: String,
  },

  whatsappNumber: {
    type: String,
    trim: true,
  },

  address: {
    type: String,
  },
  ourStory: {
    type: String,
  },
});

const storeModel = mongoose.model("Store", storeSchema);

module.exports = storeModel;