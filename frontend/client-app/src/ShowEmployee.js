import React, { useState, useEffect,useRef } from "react";
import axios from "axios";

function ShowEmployee() {
  const [emplist, setEmpList] = useState([]);

 const handleShowButton=()=>{
    axios.get("http://localhost:5050/emp/empshow").then((res)=>{
        setEmpList(res.data);
      }).catch((err)=>{
        alert(err);
      });
  };
  return(
    <div>
    <center>
        <h5 style={{ backgroundColor: "green", color: "white" }}>SHOW EMPLOYEE DETAILS</h5>
        <table  cellSpacing={10} align="center" bgcolor="#367588">
            <tr>
              <th>ALL EMPLOYEE DETAILS:</th>
              <th><button type="submit" onClick={handleShowButton}>SHOW</button></th>
            </tr> 
            <tr>
              <th style={{ backgroundColor: "red", color: "white" }}>EMPLOYEE CODE</th>
              <th style={{ backgroundColor: "red", color: "white" }}>EMPLOYEE NAME</th>
              <th style={{ backgroundColor: "red", color: "white" }}>EMPLOYEE SALARY</th>
            </tr>
          {
          emplist.map((item)=>(
              <tr>
                <td style={{ backgroundColor: "black", color: "white" }}>{item.ecode}</td>
                <td style={{ backgroundColor: "black", color: "white" }}>{item.ename}</td>
                <td style={{ backgroundColor: "black", color: "white" }}>{item.esal}</td>
              </tr>
            ))}
          
        </table>
      </center>
    </div>
  );
}
export default ShowEmployee;