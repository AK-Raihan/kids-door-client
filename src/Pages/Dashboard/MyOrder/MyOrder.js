import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth/useAuth';

const MyOrder = () => {
    const[orders, setOrders]=useState([])
    const { user } = useAuth();

    const email = user.email;

    useEffect(()=>{
        fetch(`http://localhost:5000/myOrder/${email}`)
        .then(res=>res.json())
        .then(data=>setOrders(data));
    },[]);


    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delteOrder/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              alert('successfully deleted');
            }
          });
        console.log(id);
      };
    return (
        <div>
            <div className="container">
                <div className="order-title">
                    <h2>My Order</h2>
                </div>
                <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Class</th>
                    <th scope="col">Email</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                {
                    orders.map(order=>(
                        <tbody>
                    <tr>
                    <th scope="row">{order.title}</th>
                    <td>{user.email}</td>
                    <td>{order.price}</td>
                    <td>{order.status}</td>
                    <button onClick={() => handleDelete(order?._id)} >Remove</button>
                    </tr>
                </tbody>
                    ))
                }
                </table>
            </div>
        </div>
    );
};

export default MyOrder;