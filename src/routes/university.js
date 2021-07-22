const express = require('express');
const basicModule = require('../manager/basic.js');
const router = express.Router();

router.get('/:country', async function(req, res, next) {
    const country = req.params.country ?? '';
    try {
        const allUnis = await basicModule.getAllUniversities(country);
        const names = allUnis.map((university) => {
            return university.name
        })
        res.json({ data: names });
    } catch (e) {
        throw new Error("The country provided doesn't exist or has no Universities. Please try again")
    }

});

module.exports = router;
