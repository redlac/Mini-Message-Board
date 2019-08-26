var express = require('express');
var router = express.Router();
var index = require("./index");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("./pages/form");
});



module.exports = router;
