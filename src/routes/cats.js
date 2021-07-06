const express = require('express');
const basicModule = require('../manager/basic.js');
const router = express.Router();

/* GET home page. */
router.get('/facts/:count?', async function(req, res, next) {
    const count = req.params.count ?? 1;
    const catFacts = await basicModule.getCatNames(count);
    
    res.json({ facts: catFacts });
});


module.exports = router;
