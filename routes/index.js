var express = require('express');
var router = express.Router();
const spaceData= require('../src/spacedata');

/* GET home page. */
router.get('/', function(req, res, next) {
  spaceData.getData(req, res);
});

module.exports = router;
