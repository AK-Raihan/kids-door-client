import React, { useEffect, useState } from 'react';
import Class from '../Class/Class';
import './Classes.css'

const Classes = () => {

    const[classes, setClasses] = useState([]);

    useEffect(()=>{
        fetch('https://calm-island-72082.herokuapp.com/classes')
        .then(res=>res.json())
        .then(data=>setClasses(data));
    },[])
    return (
        <div className='classes-main py-5'>
            <div className="container">
                <h4 className='text-center fs-1 mb-5'>Our Curriculum</h4>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        classes.map(clas=><Class
                        clas={clas}
                        key={clas._id}
                        ></Class>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Classes;