import React from 'react';
import logo from '../../../images/logo (0).png'
import SocialIcon from '../SocialIcon/SocialIcon';
import post1 from '../../../images/post.jpg'
import post2 from '../../../images/post1.jpg'

const Footer = () => {
    return (
        <div className='bg-dark text-white pt-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <a class="navbar-brand" href="/">
                                <div className="logo">
                                    <img className='img-fluid' src={logo} alt="" />
                                </div>
                        </a>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                        <SocialIcon></SocialIcon>
                    </div>
                    <div className="col-lg-3">
                        <h2>About School</h2>
                        <ul>
                            <li>General Information</li>
                            <li>Who We are</li>
                            <li>Our Teachers</li>
                            <li>School History</li>
                            <li>Specialize Programme</li>
                            <li>Language Training</li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h2>Recent Post</h2>
                        <div className="post d-flex justify-content-between">
                            <div className="img me-4">
                            <img className='img-fluid' src={post2} alt="" />
                            </div>
                            <div className="content">
                                <h5>Reading practice for the students</h5>
                                <p>nov 19, 2021</p>
                            </div>
                        </div>
                        <div className="post d-flex">
                            <div className="img me-4">
                            <img className='img-fluid' src={post1} alt="" />
                            </div>
                            <div className="content">
                                <h5>A team dedicated to football matches</h5>
                                <p>Dec 19, 2021</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                    <h2>Keep In Touch</h2>
                        <p>Our school is the perfect environment for language studies.</p>
                        <ul className=" list-unstyled">
                            <li className="text-white"><i className="fas fa-map-marker-alt "></i> BHA gate oposite position,22</li>
                            <li ><i className="fas fa-phone-volume"></i> +24 123-456-7878</li>
                            <li ><i className="far fa-envelope"></i> info@example.com</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bootom text-center py-3">
                  <p >© 2021 Kids door – All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;