var express = require('express');
var router = express.Router();

/* 지역검사. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '지역검쉑',pageName:'locals/search.ejs' });
});

router.get('/favorite', function(req,res){
  res.render('index',{title:'즐찾구독조아용',pageName:'locals/favorite.ejs'});
});

module.exports = router;
