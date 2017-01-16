/**
 * Created by ztian on 2015/5/14.
 * 将cookie或get参数中的agent或type（兼容老版本App）放到locals中方便页面访问
 */

var config = require('../config');

//我们的app访问我的移动网站的时候，会种特定的cookie

module.exports = function (req, res, next) {
  //全局变量初始化成对象
  res.locals = req.locals || {};

  //判断如果agent是AndroidApp就将isAndroidapp置成true
  res.locals.isAndroidApp = req.cookies.agent == 'AndroidApp'
    || req.query.agent == 'AndroidApp'
    || req.query.type == 'AndroidApp';//是否是金汇金融app

  res.locals.isIOSApp = req.cookies.agent == 'IOSApp'
    || req.query.agent == 'IOSApp'
    || req.query.type == 'IOSApp';//是否是金汇IOSapp

  //app版本号
  res.locals.appVersion = req.query.appVersion ||  req.cookies.appVersion;

  //第一个是用来判断是否是app，不管是安卓还是ios,第二个取这个的反值
  res.locals.isApp = res.locals.isAndroidApp || res.locals.isIOSApp;
  res.locals.isBroswer = !res.locals.isApp;

  //config是配置文件，version是这个工程的版本号，读出来，存放到res.locals.version中，其他地方如果用的话，直接可以从res.locas.version中读取
  res.locals.version = config.version;

  next();
};
