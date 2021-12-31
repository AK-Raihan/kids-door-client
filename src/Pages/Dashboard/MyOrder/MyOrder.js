import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useAuth from '../../../Hooks/useAuth/useAuth';
import { SetOrders } from '../../../redux/action/enrollmentAction';

const MyOrder = () => {
    const orders = useSelector((state) => state.allProducts.allProducts);
    const dispatch = useDispatch();
    // const[orders, setOrders]=useState([])
    const { user } = useAuth();

    const email = user.email;

    useEffect(()=>{
        fetch(`https://calm-island-72082.herokuapp.com/myOrder/${email}`)
        .then(res=>res.json())
        .then(data=>dispatch(SetOrders(data)));
    },[]);


    const handleDelete = (id) => {
        fetch(`https://calm-island-72082.herokuapp.com/delteOrder/${id}`, {
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
        <div style={{marginTop:'100px'}}>
            <div className="container">
                <div className="order-title text-center">
                    <h2>My Order</h2>
                </div>
                <table className="table">
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