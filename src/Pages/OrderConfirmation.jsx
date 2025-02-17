import React from 'react'
import { CiFaceSmile } from "react-icons/ci";


const checkout = {
  _id: "12323",
  createdAt: new Date(),
  checkoutItems: [
    {
      productId: "1",
      name: "Jacket",
      color: "black",
      size: "M",
      price: 150,
      quantity: 2,
      image: "https://picsum.photos/150?random=1",

    },
    {
      productId: "2",
      name: "Jacket 2",
      color: "White",
      size: "L",
      price: 130,
      quantity: 5,
      image: "https://picsum.photos/150?random=2",

    },
  ],
  shippingAddress: {
    address: "123 Main road",
    city: "Delhi",
    country: "India"
  },
};


const OrderConfirmation = () => {

  const calculateEstimatedDelivery = (createdAt) => {

    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 3) // Add 3 days from the order date
    return orderDate.toLocaleDateString()
  }


  return (
    <div className="container w-75  p-4 ">
    <h1 className='text-center mb-4 text-success'>
      Thank You for Your Order <CiFaceSmile size={60} />
    </h1>

    {checkout && (
      <div className='p-3 rounded border border-2'>
        <div className="d-flex justify-content-between mb-3">  
          {/* Order id and date */}
          <div>
        <h4>Order ID: {checkout._id}</h4>
        <p >Order date: {new Date(checkout.createdAt).toLocaleDateString()}</p>
        </div> 

       {/* estimated Delivery */}
        <div>
         <p className='text-success fs-5'>Estimated Delivery: {calculateEstimatedDelivery(checkout.createdAt)}</p>
        </div>
        </div>
        {/* orderd Items */}
        <div className='mb-4'>
          {checkout.checkoutItems.map((item) => (
            <div key={item.productId}
            className='d-flex align-items-center mb-3 border-top py-1'>
              <img src={item.image} alt={item.name} className='object-cover rounded me-4' height={80}/>
              <div>
                <h4>{item.name}</h4>
                <p>{item.color} | {item.size}</p>
              </div>
              <div className='ms-auto text-end'>
                <p className=' fw-bold'>${item.price}</p>
                <p  className=' fw-bold'>Qty: {item.quantity}</p>
                
              </div>
            </div>
          ))}
        </div>
        {/* payment and delivery info */}
        <div className="row">
          <div className="col">
            <h5 className='mb-2'>Payment</h5>
            <p className='text-muted fs-5'>Paypal</p>
          </div>
          <div className='col'>
           <h5>Delivery</h5>
           <p className='text-muted'>{checkout.shippingAddress.address}<br/> {checkout.shippingAddress.city}, {" "} {checkout.shippingAddress.country}</p>
          
          </div>
        </div>
      </div>
    )}
    </div>
  )
}

export default OrderConfirmation