const express = require('express');
const basicModule = require('../manager/basic.js');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ hello: 'world' });
});

router.get('/today', function(req, res, next) {
  const date = basicModule.getDate();
  res.json({ date });
});

module.exports = router;
