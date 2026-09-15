const express = require('express');
const storeController = require('../controllers/store.controller');
const authmiddleware = require('../middleware/auth.middleware');
const multer = require("multer");

const upload = multer({ storage: multer.memoryStorage() }); // Use memory storage for multer

const router = express.Router();



router.get('/me',authmiddleware.authUser, storeController.getSellerStore);

router.put('/me/',authmiddleware.authUser,
    upload.fields([
        { name: "profileImage", maxCount: 1 },
        { name: "storeLogo", maxCount: 1 },
        { name: "bannerImage", maxCount: 1 },
    ]),
    storeController.updateSellerStore);

module.exports = router;