const { disconnect } = require('../db');
const mongoose = require('../db');

const Classify = mongoose.Schema({
    classify : String,
    img : String,
})

const classify = mongoose.model('classify' , Classify);

// var c=new classify({
//     classify:'京东到家',
//     img:'./classify/5.png'
// })
// c.save().then(()=>{
//     console.log("成功")
//     mongoose.c=disconnect()
// })

module.exports = classify;
