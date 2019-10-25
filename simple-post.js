var express = require('express');
var app = express();

app.post('/data', function (req,res){
    res.send('post method!! /data');
})

app.listen(8080);