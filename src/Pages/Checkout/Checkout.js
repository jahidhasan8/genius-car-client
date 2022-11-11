import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
  const service = useLoaderData()
  const { _id, title, price } = service
  const { user } = useContext(AuthContext)

  const handlePlaceOrder = (e) => {
    e.preventDefault()
    const form = e.target
    const name = `${form.firstName.value} ${form.lastName.value}`
    const email = user?.email || 'unregistered'
    const message = form.message.value
    const phone = form.phone.value

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message
    }
    /*   if(phone.length >10){
        alert('phone number should be 1o characters or longer')
      } */
    fetch('https://genius-car-server-wine.vercel.app/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('genius-token')}`
      },
      body: JSON.stringify(order)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged) {
          alert('order placed successfully')
          form.reset()
        }

      })
      .catch(error => console.error(error.message))
  }


  return (
    <div>
      <form onSubmit={handlePlaceOrder}>
        <h2 className="text-4xl text-center">You are about to Order: {title}</h2>
        <h4 className="text-3xl">price:{price}</h4>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <input name="firstName" type="text" placeholder="First Name" className="input input-bordered w-full " />

          <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered w-full " />

          <input name="phone" type="text" defaultValue={user?.phoneNumber} placeholder="Your Phone" className="input input-bordered w-full " required />

          <input name="email" type="text" readOnly defaultValue={user?.email} placeholder="Your Email" className="input input-bordered w-full " />
        </div>
        <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message"></textarea>
        <input className='btn' type="submit" value="Place Your Order" required />

      </form>
    </div>
  );
};

export default Checkout;