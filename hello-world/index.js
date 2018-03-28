var express = require('express');
var app = express();
//public子目录下静态网页
//app.use(express.static(__dirname + '/public'));
//动态网页
var routes=require('./eoutes')(app)
app.listen(3000);