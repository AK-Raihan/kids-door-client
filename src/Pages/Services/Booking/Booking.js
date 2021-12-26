import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth/useAuth';

const Booking = () => {
    const{productId} = useParams()
    const location = useLocation()
    const navigate= useNavigate()

    const{user}=useAuth();
    const [enroll, setEnroll] = useState({ name: "", price: "", title: ""});
    // console.log(user);
    delete enroll._id;

  
    useEffect(() => {
      fetch(`http://localhost:5000/singleProduct/${productId}`)
        .then((res) => res.json())
        .then((result) =>{ 
          setEnroll(result)
          reset(result)
        });
    }, []);

    console.log(enroll);
  
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm({defaultValues: enroll});

    const onSubmit = (data) => {
        console.log(data);
      data.status = "pending";
      
          fetch("http://localhost:5000/confirmOrder", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((result) => {
              if(result.insertedId){
                console.log(result.insertedId)
                const destination = location?.state?.from || '/myOrder';
             navigate(destination);
              }
            });
        };
    return (
        <div>
            <div className="container">
                <div className="row py-3">
                    <div className="col-lg-3">
                    </div>
                    <div className="col-md-6 bg-warning p-3 text-center">
              <h4>Enrollment Form</h4>
              <form  onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("user")}
                  defaultValue={user?.displayName}
                  className="p-2 m-2 w-100"
                />
                <input
                  {...register("email")}
                  defaultValue={user?.email}
                  className="p-2 m-2 w-100"
                />
                <br />
                <input
                  {...register("title")}
                  defaultValue={enroll?.title}
                  className="p-2 m-2 w-100"
                />
                <br />
                <input
                  {...register("price")}
                  defaultValue={enroll?.price}
                  className="p-2 m-2 w-100"
                />
                <br />
                <input
                  {...register("phone")}
                  placeholder='phone'
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
                  value="Enroll Confirm"
                  className="btn btn-success w-50"
                />
              </form>
              <div className="col-lg-3">

              </div>
            </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;