const mongoose = require('mongoose');

const book1Schema = new mongoose.Schema( {
    author_id: Number, 
    name: String, 
    price: Number,
    ratings:Number,
}, { timestamps: true });


module.exports = mongoose.model('AuthorBook', book1Schema)