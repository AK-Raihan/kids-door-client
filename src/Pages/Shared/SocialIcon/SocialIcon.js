import React from 'react';
import './SocialIcon.css'

const SocialIcon = () => {
    return (
        <div>
                <div className="social-menu d-flex list-unstyled ">                  
                    <li><i className="fab fa-facebook-square"></i></li>
                    <li><i className="fab fa-twitter-square"></i></li>
                    <li><i className="fab fa-instagram-square"></i></li>
                    <li><i className="fab fa-linkedin"></i></li>
                </div>
        </div>
    );
};

export default SocialIcon;