var app = require('./app.js');
var controller = require('./controllers');

module.exports = function (app){
    app.get('/' , controller.account.index)
    //req.body 用于取出post提交上来的参数，req.params取出路由中的参数
    // detail page
    app.get('/movie/:id' , controller.account.detail);

    //admin page
    app.get('/admin/movie' , controller.account.admin);
    //admin update movie 更新电影地址
    app.get('/admin/update/:movieid', controller.account.update);


    //从表单提交过来后 电影数据的存储 
    //admin post movie
    app.post('/admin/movie/new', controller.account.post);


    // list page
    app.get('/admin/list' , controller.account.list);

    // list delete movie 处理删除请求
    app.delete('/admin/list', controller.account.delete);
    //登录页面
    app.get('/admin/register', controller.user.register);
    app.get('/admin/login', controller.user.login);


}
