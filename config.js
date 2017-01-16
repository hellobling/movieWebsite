var config = {
  local: {
    httpUrl: "http://p.jinhui365.cn/",
    httpsUrl: "http://p.jinhui365.cn/",
/*    httpUrl: "http://192.168.111.161:8080/",
    httpsUrl: "http:/192.168.111.161:8080/",*/
    govUrl: "http://10.0.0.115:9070/",
    phpUrl: "http://gvwx-dev.jinhui365.cn/",
    cookieOptions: {
      maxAge: 86400 * 30,
      domain:'.jinhui365.cn'
    },
    logLevel:"debug"
  },
  dev: {
    httpUrl: "http://10.0.0.40:9090/",
    httpsUrl: "http://10.0.0.40:9090/",
    govUrl: "http://10.0.0.115:9070/",
    phpUrl: "http://gvwx-dev.jinhui365.cn/",
    cookieOptions: {
      maxAge: 86400 * 30,
      domain:'.jinhui365.com'
    },
    logLevel:"info"
  },
  staging: {
    httpUrl: "http://p.jinhui365.cn/",
    httpsUrl: "http://p.jinhui365.cn/",
    govUrl: "http://10.0.0.115:9070/",
    phpUrl: "http://gvwx-dev.jinhui365.cn/",
    cookieOptions: {
      maxAge: 86400 * 30,
      domain: '.jinhui365.cn'
    },
    logLevel:"info"
  },
  preProduction: {
    httpUrl: "http://pre-p.jinhui365.com/",
    httpsUrl: "https://pre-p.jinhui365.com/",
    govUrl: "http://gov.interface.jinhui365.com:9070/",
    phpUrl: "http://wxas.jinhui365.com/",
    cookieOptions: {
      maxAge: 86400 * 30,
      domain: '.jinhui365.com'
    },
    logLevel:"info"
  },
  production: {
    httpUrl: "http://p.jinhui365.com/",
    httpsUrl: "http://p.jinhui365.com/",
    govUrl: "http://gov.interface.jinhui365.com:9070/",
    phpUrl: "http://wxas.jinhui365.com/",
    cookieOptions: {
      maxAge: 86400 * 30,
      domain: '.jinhui365.com'
    },
    logLevel:"info"
  },
  getConfig: function (key) {
    var current = this[process.env.NODE_ENV || 'production'];
    if (key && current) {
      return current[key];
    }
    return current;
  },
  logLevel:"info",
  cookieOptions: {
    maxAge: 86400 * 30,
    domain: '.jinhui365.com'
  },
  desKey: '-7-*d@#5EdxBvrTRe-#5CtUs',
  version: 3,
  logDir: process.cwd() + '/../logs/',
  appKey:'jh2adf1307ec1830bc',
  appSecret:'45addb98955e4359a9d7a695979fb27c'
};

module.exports = config;
//export NODE_ENV=local
//node www
