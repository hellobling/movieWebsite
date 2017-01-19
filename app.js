var express = require('express');//加载express模块
var app = express(); //启动web服务器
var path = require('path');//静态资源路径
var mongoose = require('mongoose')
var _ = require('underscore')
var Movie = require('./models/movie');
var User = require('./models/user');
var port = process.env.PORT || 3000 //设置端口默认3000
mongoose.connect('mongodb://localhost/imooc')//存入本地的数据库名字起成imooc
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
var ejs = require('ejs');//这个必须写
app.set("views",'./views')//设置视图根目录
app.set('view engine', 'ejs')//设置默认模板引擎
app.use(cookieParser('zhouliang'));//给req对象上添加cookies属性
app.use(bodyParser.json({limit: '5mb'}));//是用来解析json数据格式的
app.use(bodyParser.urlencoded({limit: '5mb'}));//是用来解析我们通常的form表单提交的数据，也就是请求头中包含这样的信息
app.use(express.session({
    secret : 'imooc'
}))
app.use(express.static(path.join(__dirname, 'public')));//静态资源路径设置
app.locals.moment = require('moment');
var config = require('./config');
app.use(require('./middlewares/userAgent'));//中间件判断是浏览器还是app、ios

app.listen(port)//监听端口

console.log('imooc started on port' + port)

// index page
//引入路由
var routes = require('./routes')(app);//引入路由

module.exports = app;