var express=require('express');
var app=express();
//var api=require('./routes/api');
//加载hbs模块
var hbs=require('hbs');
//加载数据模块
var blogEngine=require('./blog');
app.set('view engine','hbs');
//app.set('view engine','html');
//app.engine('html',require('hbs')._express);
app.set('views', __dirname + '/views');
app.use(express.bodyParser());
app.get('/', function(req, res) {
   res.render('index',{title:"最近文章", entries:blogEngine.getBlogEntries()});
});

app.get('/about', function(req, res) {
   res.render('about', {title:"自我介绍"});
});

app.get('/article/:id', function(req, res) {
   var entry = blogEngine.getBlogEntry(req.params.id);
   res.render('article',{title:entry.title, blog:entry});
});
app.listen(3000);
//指定模板文件的后缀名为html
//app.set('view engine','html');
//运行hbs模块
//var hbs=require('hbs');
//app.get('/api',api.index);
//设定port变量，意为访问端口
//app.set('port',process.env.PORT||3000);
//设定views变量，意为视图存放的目录
//app.set('views',path.join(_dirname,'views'));
//设定view engine变量，意为网页模板引擎
// app.set('view engine','jade');
// app.use(express.favicon());
// app.use(express.logger('dev'));
// app.use(express.bodyParser());
// app.use(express.methodOverride());
// app.use(app.router);
// app.get('/', function (req, res){
	// res.render('index');
// });

// app.get('/about', function(req, res) {
	// res.render('about');
// });

// app.get('/article', function(req, res) {
	// res.render('article');
// });
//app.get('/',function(req,res){
//	var body='Hello World';
//	res.setHeader('Content-Type','text/plain');
	// res.setHeader('Content-Length',body.length);
	// res.end(body);
// });
// app.get('/', function (req, res) {
    // res.sendFile(__dirname + '/views/index.html');
// });

// app.get('/about', (req, res) => {
    // res.sendFile(__dirname + '/views/about.html');
// });

// app.get('/article', (req, res) => {
    // res.sendFile(__dirname + '/views/article.html');
// });
//app.get('/api',function(request,response){
//	response.send({name:"张三",age:40});//返回json对象
//})
// 设定静态文件目录，比如本地文件
// 目录为demo/public/images，访问
// 网址则显示为http://localhost:3000/images
// app.use(express.static(path.join(__dirname, 'public')));
// app.listen(app.get('port'));