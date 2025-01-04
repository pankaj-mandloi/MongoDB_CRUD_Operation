var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var cors = require('cors');
const PORT = 5050;
var mongoose = require('mongoose');
var empRoute = require('./emp.route');
var db = require('./DB');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors());
app.use('/emp',empRoute);

mongoose.connect(db.URL,{ useNewUrlParser:true}).then(()=>{
console.log('Database is connected '+db.URL)},
err=>console.log('can not connect to database '+err));

app.listen(PORT,()=>{
console.log('server is running on port '+PORT);
});