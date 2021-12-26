import React from 'react';
import './Banner.css'
import banner1 from '../../images/banner.png'
import banner2 from '../../images/banner (1).png'
import banner3 from '../../images/banner (2).png'

const Banner = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide banner-main" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          
          <div className="carousel-item active banner-carousel ">
            <img src={banner1} className="d-block w-100  " alt="..."/>
            <div className="carousel-caption d-none ms-auto d-md-block banner-content">
              <div className="banner-content-item text-start">
              <h1>Practical Teaching &</h1>
              <h3>Social Development</h3>
              <p>We aim at success by creating skills <br /> necessary for kids to enrich & empower in studies & sports. </p>
              <button className="btn btn-outline-info fw-bold ">Learn More</button>
              </div>
            </div>
          </div>

          <div className="carousel-item banner-carousel">
            <img src={banner3} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none me-auto d-md-block banner-content">
              <div className="banner-content-item text-start">
              <h1>Empowering students from</h1>
              <h3>small age towards vision.</h3>
              <p>We aim at success by creating skills <br /> necessary for kids to enrich & empower in studies & sports. </p>
              <button className="btn btn-outline-info fw-bold">Learn More</button>
              </div>
            </div>
          </div>

          <div className="carousel-item banner-carousel">
            <img src={banner2} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none ms-auto d-md-block banner-content">
              <div className="banner-content-item text-start">
              <h1>Fun School</h1>
              <h3>Creative Learning</h3>
              <p>We aim at success by creating skills <br /> necessary for kids to enrich & empower in studies & sports. </p>
              <button className="btn btn-outline-info fw-bold">Learn More</button>
              </div>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
};

export default Banner;