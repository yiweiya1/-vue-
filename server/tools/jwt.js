const jwt = require('jsonwebtoken');
const key = '12123124135sdfsafasdfasdfasdf3242e'
function generatorToken(e){
    const token = jwt.sign(e,key);
    return token
}
function verifyToken(req,res,next){
    var {token} = req.cookies;
    jwt.verify(token,key,(err,result)=>{
        if(err){
            res.send("你没有登录权限")
        }else{
            req.body.username = result.username;
            next()
        }
    })
}

module.exports = {
    generatorToken,
    verifyToken
}