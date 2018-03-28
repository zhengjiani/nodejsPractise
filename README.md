express框架：

模式匹配

express搭建HTTPs加密服务器

```
var fs = require('fs');
var options = {
  key: fs.readFileSync('E:/ssl/myserver.key'),
  cert: fs.readFileSync('E:/ssl/myserver.crt'),
  passphrase: '1234'
};

var https = require('https');
var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello World Expressjs');
});

var server = https.createServer(options, app);
server.listen(8084);
console.log('Server is running on port 8084');
```

模板引擎hbs

渲染是指将数据代入模板的过程

Express模板引擎hbs:

昨天晚上做阮一峰的案例的时候出了一个错误：

即app.engine('html',require('hbs')._express);这一行一直报错，刚开始以为是express3版本和express4版本有问题。最后又重新下载express4版本。还是同样的问题。最后在一个博客里找到答案，所以记录一下。

app.set('view engine','hbs');
//app.set('view engine','html');
//app.engine('html',require('hbs')._express);
app.set('views', __dirname + '/views');

我感觉是因为渲染模板应该是以.hbs结尾的文件，而不是html.因此我把views中的网页文件都改为了模板文件，成功：

![express1](C:\Users\52319\Desktop\myStudy\nodejs学习\express1.png)

附上博客地址：

https://www.cnblogs.com/chyingp/p/hbs-getting-started.html

express4后新增express.router路由器功能形成单独组件

router中间件由use方法指定、param方法用于路径参数的处理，这两个都要放在HTTP动词之前。