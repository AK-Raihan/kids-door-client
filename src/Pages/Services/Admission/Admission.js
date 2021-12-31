import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEnrollment } from "../../../redux/action/enrollmentAction";
import "./Admission.css";
import Enrollment from "./Enrollment";


const Admission = () => {
    // const[enrollMent, setEnrollMent] = useState([])
    const enrollMent = useSelector((state) => state.allProducts.allProducts);
    const dispatch = useDispatch();

    useEffect( ()=>{
        fetch('https://calm-island-72082.herokuapp.com/admission')
        .then(res=>res.json())
        .then(data=>dispatch(setEnrollment(data)))
    } ,[])
    console.log(enrollMent);
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
