var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '익스프레이이이이잉ㅇㅞ',pageName:'form.ejs' });
});

module.exports = router;
