var config = {
  local: {
    cookieOptions: {
      maxAge: 86400 * 30,
      domain:'.bling.cn'
    },
    logLevel:"debug"
  },
  dev: {
    cookieOptions: {
      maxAge: 86400 * 30,
      domain:'.bling.cn'
    },
    logLevel:"info"
  },
  staging: {
    cookieOptions: {
      maxAge: 86400 * 30,
      domain: '.bling.cn'
    },
    logLevel:"info"
  },
  preProduction: {
    cookieOptions: {
      maxAge: 86400 * 30,
      domain: '.bling.cn'
    },
    logLevel:"info"
  },
  production: {
    cookieOptions: {
      maxAge: 86400 * 30,
      domain: '.bling.cn'
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
    domain: '.bling.cn'
  },
  desKey: '-7-*d@#5EdxBvrTRe-#5CtUs',
  version: 3,
  logDir: process.cwd() + '/../logs/',
  appKey:'',
  appSecret:''
};

module.exports = config;
//export NODE_ENV=local
//node www
