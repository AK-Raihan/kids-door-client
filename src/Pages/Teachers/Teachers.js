import React from 'react';
import './Teacher.css'
import team1 from '../../images/team (1).jpg'
import team2 from '../../images/team (2).jpg'
import team3 from '../../images/team (3).jpg'
import team4 from '../../images/team (4).jpg'

const Teachers = () => {
    return (
        <div className='teacher-main'>
            <div className="container py-5">
                <div className="teacher-title text-center pb-5">
                    <h1>Our Qualified Staff</h1>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="teacher-item">
                            <div className="teacher-img">
                            <img className='img-fluid rounded' src={team1} alt="" />
                            </div>
                            <div className="teacher-content">
                            <p>Instructor / Teacher</p>
                            <h4>Esian Kabir </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="teacher-item">
                            <img className='img-fluid rounded' src={team2} alt="" />
                            <p>Instructor / Teacher</p>
                            <h4>Esian Kabir </h4>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="teacher-item">
                            <img className='img-fluid rounded' src={team3} alt="" />
                            <p>Instructor / Teacher</p>
                            <h4>Esian Kabir </h4>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="teacher-item">
                            <img className='img-fluid rounded' src={team4} alt="" />
                            <p>Instructor / Teacher</p>
                            <h4>Esian Kabir </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teachers;