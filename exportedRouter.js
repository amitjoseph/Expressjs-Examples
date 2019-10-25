var express = require('express');
var app = express();

var dataRouter = require('./myrouter.js');

app.use('/mydata', dataRouter);

app.listen(8080);


//curl -X POST http://localhost:8080/mydata