var express = require('express');
var app = express();

var router = express.Router();

router.get('/', function(req,res){
    res.send('GET method invoked!');
});

router.post('/', function(req,res){
    res.send('POST method invoked!');
})


module.exports = router;