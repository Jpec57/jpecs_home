var express = require('express');
var router = express.Router();
const { User, Training } = require('../database')


router.get('/', function(req, res, next) {
  res.send('Training Home page');
});

// create a user
router.post('/api/users', (req, res) => {
  User.create(req.body)
      .then(user => res.json(user))
})
// get all users
router.get('/api/users', (req, res) => {
  User.findAll().then(users => res.json(users))
})


router.get('/readme', function(req, res, next) {
    res.send('Training Home page readme');
  });

module.exports = router;
