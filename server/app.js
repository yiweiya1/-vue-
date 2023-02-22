const cookieParser = require('cookie-parser');
const express = require('express');
const app = express()
const {verifyToken} = require('./tools/jwt')
app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(cookieParser())
app.use(express.static('./static'))
app.use('/' , require('./router/index'))
app.use('/admin',verifyToken , require('./router/admin'))
app.listen(4000)
