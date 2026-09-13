const sellerModel = require("../models/seller.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const auditLog = require("../models/auditLog.model");

async function registerSeller(req, res) {
  try {
    const {
      fullName: { firstName, lastName },
      email,
      username,
      password,
      storeName,
    } = req.body;

    // Check if the user already exists

    const existingUser = await sellerModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user

    const hashedPassword = await bcrypt.hash(password, 10);

    const newSeller = await sellerModel.create({
      fullName: { firstName, lastName },
      email,
      username,
      storeName,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: newSeller._id }, process.env.JWT_SECRET, {
      expiresIn: "14d",
    });

    const cookieOptions = {
      httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   sameSite: "strict",
    //   maxAge: 14 * 24 * 60 * 60 * 1000, // 14 days
    };

    res.cookie("token", token, cookieOptions);

    res.status(201).json({
      message: "User registered successfully",
      seller: newSeller,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error during registration" });
  }
}

async function loginSeller(req, res) {
  try {
    const { email, password } = req.body;

    const seller = await sellerModel.findOne({
      email: email,
    });

    if (!seller) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(password, seller.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: seller._id }, process.env.JWT_SECRET, {
      expiresIn: "14d",
    });

    const cookieOptions = {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   sameSite: "strict",
      maxAge: 14 * 24 * 60 * 60 * 1000, // 14 days
    };

    res.cookie("token", token, cookieOptions);

    res.status(200).json({
      message: "Seller logged in successfully",
      user: seller,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error during login" });
  }
}

async function getSellerProfile(req, res) {
  try {
    const sellerId = req.user.id;
    const seller = await sellerModel.findById(sellerId);

    if (!seller) {
      return res.status(404).json({ message: "Seller not found" });
    }

    res.status(200).json({
      message: "Seller profile retrieved successfully",
      seller: seller,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error during profile retrieval" });
  }
}

async function updateSellerProfile(req, res) {
  try {
    const sellerId = req.user.id;
    const { fullName, email, username } = req.body;

    const seller = await sellerModel.findByIdAndUpdate(
      sellerId,
      {
        fullName: {
          firstName: fullName.firstName,
          lastName: fullName.lastName,
        },
        email,
        username,
      },
      { new: true },
    );

    if (!seller) {
      return res.status(404).json({ message: "Seller not found" });
    }

    res.status(200).json({
      message: "Seller profile updated successfully",
      seller: seller,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error during profile update" });
  }
}

async function deleteSellerProfile(req, res) {
  try {
    const sellerId = req.user.id;

    const seller = await sellerModel.findByIdAndDelete(sellerId);

    if (!seller) {
      return res.status(404).json({ message: "Seller not found" });
    }

    await auditLog.create({
      action: "DELETE",
      userId: sellerId,
      userType: "Seller",
      userEmail: seller.email,
      performedBy: sellerId,
      username: seller.username,
      timestamp: new Date(),
    });

    res.status(200).json({
      message: "Seller profile deleted successfully",
      seller: seller,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error during profile deletion" });
  }
}

async function logoutSeller(req, res) {
  try {

    const sellerId = req.user.id;

    const seller = await sellerModel.findById(sellerId);

    if (!seller) {
      return res.status(404).json({ message: "Seller not found" });
    }

    res.clearCookie("token");




    res.status(200).json({ message: "Seller logged out successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error during logout" });
  }
}


module.exports = {
  registerSeller,
  loginSeller,
  getSellerProfile,
  updateSellerProfile,
  deleteSellerProfile,
  logoutSeller,
};
