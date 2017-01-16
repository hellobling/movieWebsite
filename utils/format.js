var _ = require('underscore');

module.exports = {

  formatMoney: function (s, n) {
    if (isNaN(s)) {
      return '--';
    }
    try {
      n = n >= 0 && n <= 20 ? n : 2;
      s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
      var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];
      t = "";
      for (i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length ? "," : "");
      }
      r = r ? '.' + r : '';
      return t.split("").reverse().join("") + r;
    }
    catch (e) {
      return '';
    }
  }

}
