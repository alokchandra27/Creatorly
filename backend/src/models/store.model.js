const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
    bio: {
        type: String,
    },
    profileImage: {
        type: String,
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
    storeLogo: {
        type: String,
    },
    bannerImage: {
        type: String,
    },    
});

const storeModel = mongoose.model("Store", storeSchema);

module.exports = storeModel;