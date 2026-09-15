const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: true,
        },
        productDescription: {
            type: String,
            required: true,
        },
        productPrice: {
            type: Number,
            required: true,
        },

        productImage1: {
            url: { type: String, required: true },
            fileId: { type: String, required: true }
        },
        productImage2: {
            url: { type: String },
            fileId: { type: String }
        },
        productImage3: {
            url: { type: String },
            fileId: { type: String }
        },
        productImage4: {
            url: { type: String },
            fileId: { type: String }
        },
        sellerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'sellers',
            required: true,
        },
        category: {
            type: String,
            enum: ['clay', 'resin', 'wood', 'metal', 'fabric', 'crochet', '3d-printing', 'handmade', 'petal', 'Other'],
        },
        stocks: {
            type: Number,
        },
        color: {
            type: String,
        },
        size: {
            type: String,
        },
        extraDetails: {
            type: String,
        },
        customization: {
            type: Boolean,
            default: false,
        },
        sellerUsername: {
            type: String,
            required: true,
        },
        storeName: {
            type: String,
            required: true,
        },
        
        //  Audit & Soft Delete Fields
        isDeleted: {
            type: Boolean,
            default: false,
        },
        deletedAt: {
            type: Date,
            default: null,
        }
    },
    {
        timestamps: true,
    },
);

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;
