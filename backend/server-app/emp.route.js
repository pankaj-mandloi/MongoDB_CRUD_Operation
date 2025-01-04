//use to define operations
const express = require('express');
const empRoute= express.Router();
var Emp = require('./emp.model');

//save code
empRoute.route('/empsave/').post((req,res)=>{
    var emp = new Emp(req.body);
     //insert ke liye mongodb ne predefine di hai
    emp.save().then(emp=>{
        //console.log(emp);//here emp is a object that have data of form field
       res.send("Data Saved!!");
       res.end();
    }).catch((err)=>{
        res.send(err);
        res.end();
    });
});

//search code
empRoute.route('/empsearch/:ecode').get((req,res)=>{
    console.log("Before Search in DB=> "+req.params.ecode);
    Emp.findOne({"ecode":req.params.ecode}).then((emp)=>{
        console.log("After Search from DB=> "+emp.ecode+" "+emp.ename+" "+emp.esal);
        res.send(emp);
        res.end();
    }).catch((err)=>{
        res.send(err);
        res.end();
    });
});

//update code
empRoute.route('/empupdate').put((req,res)=>{
    console.log("Before Update IN DB=> "+req.body.ecode+" "+req.body.newecode+" "+req.body.ename+" "+req.body.esal);
Emp.updateOne({"ecode":req.body.ecode},{$set:{"ecode":req.body.newecode,"ename":req.body.ename,"esal":req.body.esal}}).then((emp)=>{      
    //console.log(emp);
        if(emp.modifiedCount>0){
            res.send("Data Updated!!");
            res.end();
        }else{
            res.send("Data Not Modified!!");
            res.end();
        }
        }).catch((err)=>{
                res.send(err);
                res.end();
        });
});

//delete code
empRoute.route('/empdelete/:ecode').delete((req,res)=>{
    console.log("Before Deleting in DB=> "+req.params.ecode);
    Emp.deleteOne({"ecode":req.params.ecode}).then((emp)=>{
       // console.log(emp);
       if(emp.deletedCount>0){
        res.send("Data Deleted!!");
        res.end();
    }else{
        res.send("Data Not Deleted!!");
        res.end();
    }
    }).catch((err)=>{
            res.send(err);
            res.end();
     });
});

//ShowAll code
empRoute.route('/empshow').get((req,res)=>{
    Emp.find().then((emplist)=>{
               /*console.log("Rows=> "+emplist.length);
                for(var i=0;i<=emplist.length;i++){
                    console.log("Row "+i+" "+emplist[i].ecode+" "+emplist[i].ename+" "+emplist[i].esal);
                    }*/
        res.send(emplist);
        res.end();
    }).catch((err)=>{
            res.send(err);
            res.end();
     });
});


module.exports = empRoute;