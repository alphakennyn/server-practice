const express = require('express');
const basicModule = require('../manager/basic.js');
const router = express.Router();

router.get('/:country', async function(req, res, next) {
    const country = req.params.country ?? '';
    const allUnis = await basicModule.getAllUniversities(country);

    res.json({ data: allUnis });
});

module.exports = router;
