const productModel = require("../models/product.model");
const sellerModel = require("../models/seller.model"); // 🌟 Make sure to import your Seller Model!
const { uploadImage } = require("../services/storage.service");

async function createProduct(req, res) {
  try {
    const sellerId = req.user.id;

    // 1. Fetch the seller from the DB to get their name
    const seller = await sellerModel.findById(sellerId);
    if (!seller) {
      return res.status(404).json({ message: "Seller profile not found" });
    }

    // 2. Clean the seller's name for use in a URL folder path (e.g. "John's Craft Shop" -> "johns-craft-shop")
    const sanitizedSellerName = seller.username
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-") // Replace non-alphanumeric characters with hyphens
      .replace(/-+/g, "-");

    const {
      productName,
      productDescription,
      productPrice,
      category,
      stocks,
      color,
      size,
      extraDetails,
      customization,
    } = req.body;

    const uploadedImages = {};

    if (req.files) {
      for (const fieldName in req.files) {
        const fileArray = req.files[fieldName];

        if (fileArray && fileArray.length > 0) {
          const fileObject = fileArray[0];

          // 3. Pass the dynamic folder target name here!
          const imageUrl = await uploadImage(fileObject, sanitizedSellerName);
          uploadedImages[fieldName] = imageUrl;
        }
      }
    }

    const newProduct = new productModel({
      productName,
      productDescription,
      productPrice,
      sellerId,
      category,
      stocks,
      color,
      size,
      extraDetails,
      customization,
      sellerUsername: sanitizedSellerName, // Store the sanitized seller name in the product document
      storeName: seller.storeName, // Store the seller's store name in the product document
      productImage1: uploadedImages.productImage1,
      productImage2: uploadedImages.productImage2,
      productImage3: uploadedImages.productImage3,
      productImage4: uploadedImages.productImage4,
    });

    const savedProduct = await newProduct.save();

    console.log("Product created successfully:", savedProduct);

    res.status(201).json({
      message: "Product created successfully",
      product: savedProduct,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        message: "Server error during product creation",
        error: error.message,
      });
  }
}

async function getAllProducts(req, res) {
  try {
    const products = await productModel.find();
    res.status(200).json({
      message: "Products fetched successfully",
      products: products,
    });
  }  catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        message: "Server error while fetching products",
        error: error.message,
      });
  }
}

async function getProductById(req, res) {
  try {
    const productId = req.params.id;
    const product = await productModel.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({
      message: "Product fetched successfully",
      product: product,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        message: "Server error while fetching product",
        error: error.message,
      });
  }
}

async function updateProduct(req, res) {
  try {
    const productId = req.params.id;
    const sellerId = req.user.id; 

    // 1. Find the existing product first to verify ownership
    const existingProduct = await productModel.findById(productId);
    if (!existingProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Security check: ensure this product belongs to the logged-in seller
    if (existingProduct.sellerId.toString() !== sellerId) {
      return res.status(403).json({ message: "Unauthorized to update this product" });
    }

    // 2. Fetch seller details to get the folder path name
    const seller = await sellerModel.findById(sellerId);
    const sanitizedSellerName = seller
      ? seller.username.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-")
      : "unknown-seller";

    // 3. Destructure text fields from req.body
    const updatePayload = { ...req.body };

    // 4. Handle any new image file uploads
    if (req.files) {
      for (const fieldName in req.files) {
        const fileArray = req.files[fieldName];
        
        if (fileArray && fileArray.length > 0) {
          const fileObject = fileArray[0];
          // Upload the new image to ImageKit using the seller folder path
          const newImageUrl = await uploadImage(fileObject, sanitizedSellerName);
          // Add it directly to the update payload
          updatePayload[fieldName] = newImageUrl;
        }
      }
    }

    // 5. Update the document in MongoDB
    const updatedProduct = await productModel.findByIdAndUpdate(
      productId,
      updatePayload,
      { new: true, runValidators: true } // runValidators ensures the update matches your schema types
    );

    res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error while updating product",
      error: error.message,
    });
  }
}

module.exports = { createProduct, getAllProducts, updateProduct , getProductById };
