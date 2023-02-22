const mongoose = require('mongoose')
const url = "mongodb://localhost:27017/myShop";
mongoose.connect(url)

module.exports = mongoose