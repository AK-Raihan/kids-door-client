import React from 'react';

const Class = ({clas}) => {
    return (
        <div class="col">
    <div class="card h-100">
      <img src= {clas.img} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{clas.name}</h5>
        <p class="card-text">{clas.description} </p>
      </div>
      <div class="card-footer">
        <button className='btn btn-info'>Read more</button>
      </div>
    </div>
  </div>
    );
};

export default Class;