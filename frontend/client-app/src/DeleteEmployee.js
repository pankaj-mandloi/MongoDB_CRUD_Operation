import React, { useState } from "react";
import axios from "axios";
//import Picture from "./Picture/save.jpg";

function DeleteEmployee(){
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
    const handleSearchButton=(evt)=>{
        axios.get("http://localhost:5050/emp/empsearch/"+ecode).then((res)=>{  
            alert("inside search button"+res.data.ecode+" "+res.data.ename+" "+res.data.esal);
        if(res.data.ecode != undefined){
            setECode(res.data.ecode);
            setEName(res.data.ename);
            setESal(res.data.esal);
            alert("DATA Found By Searching");
           }else{
            alert("DATA IS NOT FOUND IN DB");
           }
             }).catch((err)=>{
                alert(err);
             });
    }
    
    const handleDeleteButton=()=>{
        alert("inside delete button=>"+ecode+" "+ename+" "+esal);
       // var ecode=ecode;
    axios.delete("http://localhost:5050/emp/empdelete/"+ecode).then((res)=>{  
            
                alert(res.data);
            }).catch((err)=>{
                alert("heloo"+err);
             });
    }
    return(
        <div>
            <center>
            <h5 style={{backgroundColor:"green",color:"white"}}>DELETE EMPLOYEE DETAILS</h5>
                <table style={{backgroundColor:"#367588"}}>
                    <tr>
                        <td>Employee Code:</td>
                        <td><input type="number" onChange={handleECodeText}/>
                        <td><button type="submit" onClick={handleSearchButton}>SEARCH</button></td></td>
                    </tr>
                    <tr>
                        <td>Employee Name:</td>
                        <td><input type="text" value={ename} onChange={handleENameText}/></td>
                    </tr>
                    <tr>
                        <td>Employee Salary:</td>
                        <td><input type="number" value={esal} onChange={handleESalText}/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><button type="submit" onClick={handleDeleteButton}>DELETE</button></td>
                    </tr>
                </table>
            </center>
        </div>
    );
}export default DeleteEmployee;