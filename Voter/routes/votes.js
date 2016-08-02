var express = require('express');
var router = express.Router();
var variables = require("../variables");
/* GET users listing. */
router.get('/create', function(req, res, next) {
  res.send('respond with a resource');
})

.post('/create', function(req, res, next) {
var votes = res.body;
/*add votes to variable*/
  res.send('respond with a resource');
});

module.exports = router;
