var User = require('../models/user');
module.exports = {
    register : function(req,res){
        res.render('register', {
            title:'注册'
        })
    },
    post : function(req,res){
        var _user = req.body.user;
        
        User.find({name: _user.name}, function(err,user){
            
            if(err){
                console.log(err)
            }
            if(user && user.length >0){
                 res.redirect('/')

            }
            else{
                var user = new User(_user);
                user.save(function(err, user){
                    if (err){
                        console.log(err)
                    }
                    res.redirect('/admin/userlist')
                })
        
            }
        })
        
    },
    //userlist page
    list : function(req,res){
        User.fetch(function(err, users){
            if(err){
                console.log(err)
            }

            res.render('userlist', {
                title:'imooc 用户列表页',
                users: users

            })
        }) 
        
    },
    
    login : function(req,res){
        res.render('login', {
            title:'登录'
        })
    },
    loginPost : function(req,res){
        var _user = req.body.user;
        var name = _user.name;
        var password = _user.password;

        User.findOne({name : name}, function(err,user){
            if(err){
                console.log(err)
            }
            console.log(user)
            if(!user) {
                res.redirect('/')
            }
        })
    } 
}    
