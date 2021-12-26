import React, { useEffect, useState } from 'react';
import Class from '../Class/Class';

const Classes = () => {

    const[classes, setClasses] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res=>res.json())
        .then(data=>setClasses(data));
    },[])
    return (
        <div>
            <div className="container">
                <h4 className='text-center'>Our Curriculum</h4>
                <div class="row row-cols-1 row-cols-md-3 g-4">
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