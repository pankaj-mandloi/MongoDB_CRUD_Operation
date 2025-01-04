import React, { useState } from "react";
import axios from "axios";
//import Picture from "./Picture/insert.png";

function SaveEmployee(){
    const[ecode,setECode]=useState();
    const[ename,setEName]=useState();
    const[esal,setESal]=useState();

    const handleECodeText=(evt)=>{
        setECode(evt.target.value);
    }

    const handleENameText=(evt)=>{
        setEName(evt.target.value);
    }

    const handleESalText=(evt)=>{
        setESal(evt.target.value);
    }

    const handleSaveButton=()=>{
        var obj={
                ecode:ecode,
                ename:ename,
                esal:esal
        };

        axios.get("http://localhost:5050/emp/empsearch/"+ecode).then((res)=>{  
            if(res.data.ecode != undefined){
                alert("this ecode already exist!!");
                }else{
                        axios.post("http://localhost:5050/emp/empsave",obj).then((res)=>{
                            alert(res.data);//"data save" message output me server se aaya 
                            }).catch((err)=>{
                             alert(err);
                            });
                    }
             }).catch((err)=>{
                alert(err);
             });

        
    }
    return(
        <div><center>  
        <h5 style={{backgroundColor:"green",color:"white"}}>PLEASE FILL EMPLOYEE DETAILS</h5>
        <table style={{backgroundColor:"orange"}}>
                    <tr>
                        <td>Employee Code</td>
                        <td><input type="number" onChange={handleECodeText}/></td>
                    </tr>
                    <tr>
                        <td>Employee Name</td>
                        <td><input type="text" onChange={handleENameText}/></td>
                    </tr>
                    <tr>
                        <td>Employee Salary</td>
                        <td><input type="number" onChange={handleESalText}/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><button type="submit" onClick={handleSaveButton}>SAVE</button></td>
                    </tr>
                </table>
            </center>
        </div>
    );
}export default SaveEmployee;