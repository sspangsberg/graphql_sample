const mongoose = require("mongoose");

export const Product = mongoose.model('Product',   
  {
    name: { type: String, required: true, minlength: 4, maxlength: 50 },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    inStock: { type: Boolean, required: true }
  }  
);
