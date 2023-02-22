const express = require('express');
const admin = require('../model/admin');
const classify = require('../model/classify')
const router = express.Router();
const shop = require('../model/shop')
const {generatorToken} = require('../tools/jwt')
router.post('/login' , (req,res)=>{
    var {username,password} = req.body;
    admin.find({username}).then((result)=>{
        console.log(result)
        if(result.length !== 0){
            //登陆
            var user = result[0];
            if(username == user.username && password == user.password){
                var token = generatorToken(req.body);
                res.cookie('token' , token , {
                    maxAge : 1000000
                });
                res.send('登录成功')
            }else{
                res.send('登录失败')
            }
        }else{
            var a = new admin({
                username,
                password,
                shopCar : []
            })
            a.save().then(()=>{
                var token = generatorToken(req.body);
                res.cookie('token' , token , {
                    maxAge : 1000000
                });
                res.send('注册且登录成功')
            })
        }
    })
})
router.get('/getClassify' , (req,res)=>{
    classify.find({}).then((result)=>{
        res.send(result)
    })
})
router.get('/getShop' , (req,res)=>{
    shop.find({}).then((result)=>{
        res.send(result)
    })
})
router.post('/details' , (req,res)=>{
    var {id} = req.body;
    shop.find({_id : id}).then((result)=>{
        res.send(result)
    })
})

module.exports = router