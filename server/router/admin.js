const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path')
const shop = require('../model/shop');
const admin = require('../model/admin')
var storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,'./static/img')
    },
    filename : function(req,file,cb){
        cb(null,req.body.title + path.parse(file.originalname).ext)
    }
})
var upload = multer({storage})

router.post('/uploadShop',upload.single('file') , (req,res)=>{
    var {price,classify,title} = req.body;
    var {filename} = req.file
    var s = new shop({
        price,
        title,
        classify,
        img : './img/' + filename
    })
    s.save().then(()=>{
        res.send('发布成功')
    })
})
router.get('/getShopCar' , (req,res)=>{
    var {username} = req.body;
    admin.find({username}).then((result)=>{
        res.send(result)
    })
})
router.post('/addShop' , (req,res)=>{
    var {username,id} = req.body
    admin.find({username}).then((result)=>{
        var user = result[0]
        user.shopCar.push(id)
        admin.updateOne({username} , {shopCar : user.shopCar}).then(()=>{
            res.send("添加购物车成功")
        })
    })
})

module.exports = router