const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/register", authController.registerSeller);

router.post("/login", authController.loginSeller);

router.get(
  "/profile",
  authMiddleware.authUser,
  authController.getSellerProfile,
);

router.put(
  "/profile",
  authMiddleware.authUser,
  authController.updateSellerProfile,
);

router.delete(
  "/profile",
  authMiddleware.authUser,
  authController.deleteSellerProfile,
);

router.post("/logout", authMiddleware.authUser, authController.logoutSeller);

// router.post(
//   "/forgot-password",
//   authMiddleware.authUser,
//   authController.forgotPassword,
// );
// router.post(
//   "/reset-password",
//   authMiddleware.authUser,
//   authController.resetPassword,
// );

module.exports = router;
