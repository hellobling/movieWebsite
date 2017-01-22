var Movie = require('../models/movie');
var format = require("../utils/format.js");
var _ = require('underscore');
module.exports = {
    index : function(req,res){
        
        Movie.fetch(function(err, movies){
            if(err){
                console.log(err)
            }

            res.render('index', {
                title:'imooc 首页',
                format : format,
                movies: movies
            })
        }) 
    },
    detail : function(req,res){
        var id = req.params.id;//处理路由中的参数 路由里的变量是什么 就取出来什么
        Movie.findById(id, function(err, movie){
            res.render('detail', {
                title:'imooc ' ,
                movie: movie
            })
        })
    },
    admin : function(req,res){
        res.render('admin', {
            title:'imooc 后台录入页',
            movie:{
                title:'',
                doctor:'',
                country: '',
                year: '',
                poster: '',
                flash: '',
                summary:'',
                language:''
            }
        })
    },
    update : function(req,res){//:movieid 这个是变量 用来存储路由里的一切值
        var id = req.params.movieid
        if(id){
            Movie.findById(id,function(err, movie){
                res.render('admin', {
                    title: 'imooc 后台更新页',
                    movie: movie


                })
            })
        }
    },
    post : function(req,res){
        //判断数据是更新的还是新加的
        var id = req.body.movie._id //主键名字是_id
        var movieObj = req.body.movie
        var _movie = null;
        if(id){//如果id存在说明电影存在
            Movie.findById(id,function(err,movie){
                if(err){
                    console.log(err)
                }
                //用undersore的extend方法 post的新数据替换老数据
                _movie = _.extend(movie, movieObj)
                _movie.save(function(err, movie){
                    if(err){
                        console.log(err)
                    }
                    res.redirect('/movie/' + movie._id)
                })
            })
        }
        else{ //如果说电影的id是没有定义过的 就说明电影是新加的
            _movie = new Movie({
                doctor: movieObj.doctor,
                title: movieObj.title,
                country: movieObj.country,
                language: movieObj.language,
                year: movieObj.year,
                poster: movieObj.poster,
                summary: movieObj.summary,
                flash: movieObj.flash
            })

            _movie.save(function(err, movie){
                if(err){
                    console.log(err)
                }
                res.redirect('/movie/' + movie._id)
            })
        }
    },
    list : function(req,res){
        Movie.fetch(function(err, movies){
            if(err){
                console.log(err)
            }

            res.render('list', {
                title:'imooc 列表页',
                movies: movies

            })
        }) 
        
    },
    delete : function(req,res){//拿到从浏览器过来删除的请求
        var id = req.query.id

        if(id){//看ID是否存在
            Movie.remove({_id: id}, function(err, movie){
                if(err){
                    console.log(err)
                }
                else{//如果没有异常给客户端返回一段json数据
                    res.json({success: 1})
                }
            })
        }
    }
}