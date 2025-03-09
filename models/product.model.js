const  mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
{
    name: {
        type: String,
        required: [true, "Name is required"],  
    },
    quantity: {
        type: Number,
        default: 0,
        required: [true, "Quantity is required"],
    },
    price: {
        type: Number,
        default: 0,
        required: [true, "Price is required"],
    },
    image: {
        type: String,
        required: false,
    },
}, {
    timestamps: true
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;