const mongoose =require('../db');

var Shop = mongoose.Schema({
    title : String,
    price : String,
    classify : String,
    img : String
})

var shop = mongoose.model('shop' , Shop)

module.exports = shop