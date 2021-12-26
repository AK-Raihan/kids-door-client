import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth/useAuth';


const Navigation = () => {
  const {logout, user}=useAuth()
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink  to="/home" className="nav-link fs-5">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link fs-5">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/shop" className="nav-link fs-5">Facilities</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/classes" className="nav-link fs-5">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/admission" className="nav-link fs-5">Admission</NavLink>
        </li>
      
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link fs-5">Contact</NavLink>
        </li>
      </ul>
      <div>
      {
        user.email ? <div>
          <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Dashboard
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li className="nav-item">
          <NavLink to="/myOrder" className="nav-link">My Order</NavLink>
          </li>
          <li className="nav-item">
          <NavLink to="/manageOrder" className="nav-link">Manage Order</NavLink>
        </li>
          <li className="nav-item">
          <button onClick={logout} className="text-success border-0 btn-lg btn-outline-danger fs-5" >Logout</button>
        </li>

          </ul>
        </div> 
        
        </div> : <div className="d-flex">
        <NavLink to='login'>
        <button className='btn  px-5 fs-5'>Sign in</button>
        </NavLink>
        <NavLink to='/register'>
        <button className='btn  px-5 fs-5'>Sign up</button>
        </NavLink>
      </div>
        
      }
        
      </div>
    </div>
  </div>
</nav>
    );
};

export default Navigation;