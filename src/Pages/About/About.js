import React from 'react';
import './About.css'
import image from '../../images/about.jpg'

const About = () => {
    return (
        <div className='about-main'>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img className='img-fluid' src={image} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="about-head">
                            <h2>About Kindergarten</h2>
                            <p>All our preschools have all-weather indoor play areas, an art studio or an atelier, technology corners and much else; and most have outdoor play spaces and even swimming pools specifically for the younger ones. Our programs ensure that children in our care everywhere have access to the highest quality of international.</p>
                            </div>
                            <div className="about-list">
                                <ul>
                                    <li>Individual attention in a small-class setting</li>
                                    <li>Educational field trips and school presentations</li>
                                    <li>Positive learning environment for your child</li>
                                </ul>
                            </div>
                            <button className='btn btn-outline-info'>Read More</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;