const mongoose =require('../db');

var Admin = mongoose.Schema({
    username : String,
    password : String,
    shopCar : Array
})

var admin = mongoose.model('admin' , Admin)

module.exports = admin