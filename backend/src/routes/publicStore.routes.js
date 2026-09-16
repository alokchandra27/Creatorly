const express = require("express");
const router = express.Router();
const publicStoreController = require("../controllers/publicStore.controller");

// router.get("/", publicStoreController.getAllStores);

router.get("/:storeName",  publicStoreController.getSellerStoreByStoreName);


module.exports = router;