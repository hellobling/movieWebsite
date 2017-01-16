var mongoose = require('mongoose')
var MovieSchema = new mongoose.Schema({
    doctor: String,
    title: String,
    language: String,
    country: String,
    summary: String,
    flash: String,
    poster: String,
    year: Number,
    meta:{  //录入数据或更新数据的时间的记录
        createAt: { //创建时候的时间
            type: Date,
            default: Date.now()
        },
        updateAt: {//更新的时间
            type: Date,
            default: Date.now()
        }
    }
})

MovieSchema.pre('save', function(next){//每次存取数据之前都会调用一下这个方法
    if(this.isNew){//判断数据是否是新加的，如果是新加的就把创建时的时间和更新的时间设置成当前时间
        this.meta.createAt = this.meta.updateAt = Date.now();
    }
    else{//如果这个数据已经有了，我们只更新他的更新时间
        this.meta.updateAt = Date.now()
    }
    next() //让存储流程走下去
})

//增加静态方法
MovieSchema.statics = {
    fetch: function(cb){//用来取出目前数据库里所有的数据
        return this
            .find({})
            .sort('meta.updateAt')//按照更新时排序
            .exec(cb)//执行该回调方法
    },
     findById: function(id, cb){//用来查询单条数据
        return this
            .findOne({_id: id})
            .exec(cb)//执行该回调方法
    }
}
 //最后将这个模式导出
 module.exports = MovieSchema