const express = require('express');
const basicModule = require('../manager/basic.js');
const router = express.Router();

/* GET home page. */
router.get('/fact', function(req, res, next) {
    const catFact = basicModule.getCatFact();

    res.json({ fact: catFact });
});

module.exports = router;
