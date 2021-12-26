import React from 'react';

const Class = ({clas}) => {
    return (
        <div className="col">
    <div className="card h-100">
      <img src= {clas.img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{clas.name}</h5>
        <p className="card-text">{clas.description} </p>
      </div>
      <div className="card-footer">
        <button className='btn btn-info'>Read more</button>
      </div>
    </div>
  </div>
    );
};

export default Class;