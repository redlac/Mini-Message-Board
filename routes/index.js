var express = require('express');
var router = express.Router();
var app = express();

let messages = [{text: "Hi there!", user: "Frank", added: new Date()}, {text: "Hello user!", user: "Lisa", added: new Date()}];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./pages/index', { title: 'Mini Message Board', messages: messages});
});

router.post("/new", function(req, res, next){
  messages.push({text: req.body.message, user: req.body.name, added: new Date()});
  res.redirect("/");
  console.log(messages);
});

module.exports = router;