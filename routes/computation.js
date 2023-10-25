var express = require('express');
var router = express.Router();
var cos=0;
var asin=0;
var asinh=0
/* GET users listing. */
router.get('/', function(req, res, next) {
    var x= Math.random();
    var y = Math.random();
    cos = Math.cos(x,y);
    asin = Math.asin(x);
    asinh = Math.asinh(x);
    
    res.setHeader('Content-Type', 'text/html');

    res.send(  `f(cos(${x},${y})) is ${cos}`);
  
});

module.exports = router;

