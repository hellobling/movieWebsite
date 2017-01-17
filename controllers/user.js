var User = require('../models/user');
module.exports = {
    register : function(req,res){
        res.render('register', {
            title:'注册'
        })
    },
    login : function(req,res){
        res.render('register', {
            title:'登录'
        })
    } 
}    
