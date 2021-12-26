import React from 'react';
import './NavTop.css'
import logo from '../../../images/logo (0).png'

const NavTop = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <a className="navbar-brand" href="/">
                            <div className="logo">
                                <img className='img-fluid' src={logo} alt="" />
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4">
                        <div className='top-contact text-end'>
                            <span className='text-info'>kidsdoor@gmail.com <i className="fas fa-envelope"></i></span>
                            <span>01756100000 <i className="fas fa-phone-volume"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavTop;