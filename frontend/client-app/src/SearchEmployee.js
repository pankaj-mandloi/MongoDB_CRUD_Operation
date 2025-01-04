import React, { useState } from "react";
import axios from "axios";
//import Picture from "./Picture/save.jpg";

function SearchEmployee(){
    const[ecode,setECode]=useState();
    const[ename,setEName]=useState();
    const[esal,setESal]=useState();

    const handleECodeText=(evt)=>{
        setECode(evt.target.value);
    }
    const handleSearchButton=()=>{
        
        axios.get("http://localhost:5050/emp/empsearch/"+ecode).then((res)=>{  
           // setECode(res.data.ecode);
           alert(res.data.ecode);
           //if(ecode==res.data.ecode){
            if(res.data.ecode != undefined){
            setEName(res.data.ename);
            setESal(res.data.esal);
           }else{
            alert("DATA IS NOT FOUND IN DB :)")
           }
             }).catch((err)=>{
                alert(err);
             });
    }
    return(
        <div>
            <center>
            <h5 style={{backgroundColor:"green",color:"white"}}>SEARCH EMPLOYEE DETAILS</h5>
                <table style={{backgroundColor:"#367588"}}>
                    <tr>
                        <td>Employee Code:</td>
                        <td><input type="number" onChange={handleECodeText}/></td>
                        <td><button type="submit" onClick={handleSearchButton}>SEARCH</button></td>
                    </tr>
                    <tr>
                        <td>Employee Name:</td>
                        <td><input type="text" value={ename}/></td>
                    </tr>
                    <tr>
                        <td>Employee Salary:</td>
                        <td><input type="number" value={esal}/></td>
                    </tr>
                    
                </table>
            </center>
        </div>
    );
}export default SearchEmployee;