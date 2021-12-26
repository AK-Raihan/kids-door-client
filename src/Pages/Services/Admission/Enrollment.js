import React from 'react';
import { NavLink } from 'react-router-dom';

const Enrollment = ({enroll}) => {
    const{title, price, item1, item2, item3, item4, item5, _id}= enroll
    return (
        <div className="col">
            <div className="card h-100 enroll-card">
              <h3>{title}</h3>
              <div className="fee mt-3">
                <h6>
                  $ <span>{price}</span> /year
                </h6>
              </div>
              <div className="card-body">
                <ul className="enroll-service">
                  <li>
                    <span>
                      <i className="fas fa-check"></i>
                    </span>{" "}
                    {item1}
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i>
                    </span>{" "}
                    {item2}
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i>
                    </span>{" "}
                    {item3}
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i>
                    </span>{" "}
                    {item4}
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i>
                    </span>{" "}
                    {item5}
                  </li>
                </ul>
              </div>
              <NavLink to={`/booking/${_id}`}>
                <button className="btn btn-outline-light fw-bold w-50 mx-auto p-3 rounded-circle">
                  Enroll
                </button>
              </NavLink>
            </div>
          </div>
    );
};

export default Enrollment;