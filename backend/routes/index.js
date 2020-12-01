var express = require('express');
var router = express.Router();
var fitness = require('./fitness')
var japanese = require('./japanese')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Creating routing modules
router.use('/fitness', fitness)
router.use('/japanese', japanese)

module.exports = router;
