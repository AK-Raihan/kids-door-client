import React from 'react';
import './Contact.css'
import { useForm } from 'react-hook-form';

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
  
      const onSubmit = (data) => {
        
            fetch("http://localhost:5000/sendMessage", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(data),
            })
              .then((res) => res.json())
              .then((result) => {
                if(result.insertedId){
                  console.log(result.insertedId)
                }
              });
          };
    return (
        <div className="container">
            <div className="row py-3">
                    <div className="col-lg-3">
                    </div>
                    <div className="col-md-6 p-3 text-center">
              <h4>Quick Inquary</h4>
             <div className="contact-form">
             <form  onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("user")}
                  type="text"
                  required
                  placeholder='name'
                  className="p-2 m-2 w-100"
                />
                <input
                  {...register("email")}
                  type='email'
                  placeholder='email'
                  className="p-2 m-2 w-100"
                />
                <br />
                <input
                  {...register("subject")}
                  type='text'
                  placeholder='subject'
                  className="p-2 m-2 w-100"
                />
                <br />
                <br />
                <textarea
                  {...register("comments")}
                  placeholder="comments"
                  className="p-2 m-2 w-100"
                />
                <br />
  
                {errors.exampleRequired && <span>This field is required</span>}
  
                <input
                  type="submit"
                  value="Send Message"
                  className="btn btn-success w-50"
                />
              </form>
             </div>
              <div className="col-lg-3">

              </div>
            </div>
                </div>
                <div className="row text-center pb-5">
                    <h2 className='py-3'>Get in Touch</h2>
                <div className="col-lg-4">
                    <div className="contac-box" data-aos="zoom-in-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <span><i class="fas fa-phone-volume"></i></span>
                        <h2>Phone</h2>
                        <p>+88 01756104126</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="contac-box" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <span><i class="fas fa-envelope"></i></span>
                        <h2>Email</h2>
                        <p>mkraihan207@gmail.com</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="contac-box " data-aos="zoom-in-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <span><i class="fas fa-map-marker-alt"></i></span>
                        <h2>Address</h2>
                        <p>Mymensingh, Bangladesh</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;