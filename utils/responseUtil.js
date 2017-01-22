
var config = require('../config');
var nodeEnv = process.env.NODE_ENV || 'production';
var cookieOptions = config[nodeEnv].cookieOptions;


function setCookie(res, key, value) {
  res.cookie(key, value, cookieOptions);
}


exports = module.exports = {
  setUserCookie: function (res, user) {
    setCookie(res, 'userId', user._id);
  },

  clearUserCookie: function (res) {
    res.clearCookie('userId', cookieOptions);
  }
};
