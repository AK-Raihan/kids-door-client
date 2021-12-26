import React from 'react';
import './NavTop.css'
import logo from '../../../images/logo (0).png'

const NavTop = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <a class="navbar-brand" href="/">
                            <div className="logo">
                                <img className='img-fluid' src={logo} alt="" />
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4">
                        <div className='top-contact text-end'>
                            <span className='text-info'>kidsdoor@gmail.com <i class="fas fa-envelope"></i></span>
                            <span>01756100000 <i class="fas fa-phone-volume"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavTop;