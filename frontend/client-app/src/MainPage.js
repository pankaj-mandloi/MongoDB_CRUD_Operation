import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import SaveEmployee from "./SaveEmployee";
import SearchEmployee from "./SearchEmployee";
import UpdateEmployee from "./UpdateEmployee";
import DeleteEmployee from "./DeleteEmployee";
import ShowEmployee from "./ShowEmployee";
import Picture from "./homepic.jpg";

function MainPage(){
  return (
    <div><center>
    <img src={Picture} height="350px" width="1200px"/>
    <table bgcolor="#757575" cellPadding={10}><th> <nav>
        <Link to="/SaveEmployee" style={{padding:"10px", color:"black"}}>SAVE</Link>
        <Link to="/SearchEmployee" style={{padding:"10px", color:"black"}}>SEARCH</Link>
        <Link to="/UpdateEmployee" style={{padding:"10px",color:"black"}}>UPDATE</Link>
        <Link to="/DeleteEmployee" style={{padding:"10px",color:"black"}}>DELETE</Link>
        <Link to="/ShowEmployee" style={{padding:"10px",color:"black"}}>SHOW</Link>
      </nav></th></table>
      <Routes>
        <Route path="/SaveEmployee" element={<SaveEmployee />} />
        <Route path="/SearchEmployee" element={<SearchEmployee />} />
        <Route path="/UpdateEmployee" element={<UpdateEmployee />} />
        <Route path="/DeleteEmployee" element={<DeleteEmployee />} />
        <Route path="/ShowEmployee" element={<ShowEmployee />} />
      </Routes>
      </center>
    </div>
  );
}
export default MainPage;