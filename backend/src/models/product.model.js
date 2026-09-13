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
            type: String,
            required: true,
        },
        productImage2: {
            type: String,
        },
        productImage3: {
            type: String,
        },
        productImage4: {
            type: String,
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
    },
    {
        timestamps: true,
    },
);


const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;