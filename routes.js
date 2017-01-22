var app = require('./app.js');
var controller = require('./controllers');

module.exports = function (app){
    app.get('/' ,controller.account.index)
    //req.body 用于取出post提交上来的参数，req.params取出路由中的参数
    // detail page
    app.get('/movie/:id' , controller.account.detail);

    //admin page
    app.get('/admin/movie' , controller.user.authorize, controller.account.admin);
    //admin update movie 更新电影地址
    app.get('/admin/update/:movieid', controller.user.authorize, controller.account.update);


    //从表单提交过来后 电影数据的存储 
    //admin post movie
    app.post('/admin/movie/new', controller.user.authorize, controller.account.post);


    // list page
    app.get('/admin/list' , controller.user.authorize, controller.account.list);

    // list delete movie 处理删除请求
    app.delete('/admin/list', controller.user.authorize, controller.account.delete);
    //注册页面
    app.get('/admin/register', controller.user.register);
    app.post('/user/signup', controller.user.post);
    app.get('/admin/userlist', controller.user.authorize, controller.user.list);
    
    //登录页面
    app.get('/admin/login',controller.user.login);
    app.post('/user/signin', controller.user.loginPost);
    app.get('/admin/loginout', controller.user.loginout);

}