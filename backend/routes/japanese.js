var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "Welcome to japanese module." });
});

router.get("/kanji", (req, res) => {
    res.json({ message: "Welcome to japanese KANJI module." });
});

router.get('/kanji/:kanjiId', function (req, res) {
    res.send(req.params)
  })

module.exports = router;
