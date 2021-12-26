import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth/useAuth';

const Registration = () => {
    const [loginData, setLoginData] = useState({});
    const {signInGoogle, registerUser} = useAuth();

    const handleGoogle = ()=>{
        signInGoogle()
    }

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    console.log(loginData);

    const handleLoginSubmit = e => {
        registerUser(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
        <div style={{marginBottom:'300px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4 mt-5 text-center">
                    <h3>Register form</h3>
                        <button onClick={handleGoogle} className='btn btn-outline-success w-100'>Continue With Google</button>
                        <p className='fw-bold'>---------------------or-----------------------</p>
                        <form onSubmit={handleLoginSubmit}>
                            <input onBlur={handleOnBlur} name="email" className='form-control my-3' type="email" placeholder='Email' />
                            <input onBlur={handleOnBlur} name="password" className='form-control my-3' type="password" placeholder='Password' />
                            <input className='btn btn-dark w-100 btn-outline-secondary text-white' type="submit" value="Register" />
                        </form>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        </div>
    );
};

export default Registration;