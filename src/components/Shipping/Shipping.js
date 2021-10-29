import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { getStoredCart, clearTheCart } from "../../utilities/fakedb";
import './shipping.css'

const Shipping = () => {

  const { user } = useAuth();

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = data => {
    const savedCard = getStoredCart();
    data.order = savedCard;
    console.log(data)

    fetch('http://localhost:5200/order', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        if (result.insertedId) {
          alert('Order processd successfully')
          clearTheCart();
          reset();
        }

      })

  };



  return (
    <div >

      <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

        <input defaultValue={user.displayName} {...register("name")} />

        <input defaultValue={user.email}  {...register("email", { required: true })} />

        {errors.email && <span className="error">This field is required</span>}

        <input placeholder="Phone" {...register("phone ", { required: true })} />

        <input placeholder="Address" {...register("address", { required: true })} />

        <input placeholder="City" {...register("city", { required: true })} />

        <input type="submit" />
      </form>

    </div>
  );
};

export default Shipping;