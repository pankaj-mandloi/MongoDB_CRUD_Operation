//use to define schema class for database table structure of data
var mongoose = require('mongoose');
const { type } = require('os');
const Schema =mongoose.Schema;

var Emp = new  Schema({
    ecode:{type:Number},
    ename:{type:String},
     esal:{type:Number}
},
{
    collection:'emp'
});
module.exports=mongoose.model('Emp',Emp);