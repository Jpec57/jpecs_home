var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// simple route
router.get("/test", (req, res) => {
  res.json({ message: "Welcome to jpec application." });
});

router.get("/training", (req, res) => {
  res.json({ message: "Welcome to training module." });
});

router.get("/japanese", (req, res) => {
  res.json({ message: "Welcome to japanese module." });
});

module.exports = router;
