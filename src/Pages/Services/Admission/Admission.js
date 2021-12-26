import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Admission.css";
import Enrollment from "./Enrollment";

const Admission = () => {
    const[enrollMent, setEnrollMent] = useState([])

    useEffect( ()=>{
        fetch('https://calm-island-72082.herokuapp.com/admission')
        .then(res=>res.json())
        .then(data=>setEnrollMent(data))
    } ,[])
  return (
    <div>
      <div className="container py-5">
        <div className="enroll-title text-center py-3">
          <h2>Enrollment Fee</h2>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {
              enrollMent.map(enroll=><Enrollment key={enroll._id} enroll={enroll}></Enrollment>)
          }
        </div>
      </div>
    </div>
  );
};

export default Admission;
