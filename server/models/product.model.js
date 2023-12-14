const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [1, "Price should be at least $1"],
    },
    description: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters"]
    }
}, { timestamps: true });



module.exports = mongoose.model('Product', ProductSchema);