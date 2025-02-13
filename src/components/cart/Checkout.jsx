import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PayPalButton from './PaypalButton'


const cart = {
  products: [
    {
      name: "Stylish Jacket",
      size: "M",
      color: "Black",
      price: 90,
      image: "https://picsum.photos/150?random=1"
    },
    {
      name: "Stylish Jacket",
      size: "M",
      color: "Black",
      price: 50,
      image: "https://picsum.photos/150?random=2"
    },
  ],
  totalPrice: 140,
}
const Checkout = () => {
  const navigate = useNavigate()
  const [checkoutId, setCheckoutId] = useState(null)
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    pinCode: "",
    country: "",
    phone: "",
  })


  const handleCreateCheckout = (e) => {
    e.preventDefault()
    setCheckoutId(123)
  }

  const handlePaymentSuccess = (details) => {
  console.log("Payment Successful", details)
  navigate("/order-confirmation")
  }
  return (
    <div className='container  py-3 '>
       <h1 className='py-2  text-center' style={{fontFamily: "Roboto"}}>CHECKOUT</h1>
      <div className="d-flex gap-5">
        {/* left */}
        <div clasName="col-md-6 ">
        <div className="rounded pb-5 pt-2">
        
        
          <form className="ms-5" onSubmit={handleCreateCheckout}>
          <h3 className='mb-3'>Contact Details</h3>
            <div className="mb-2 ">
              <label className="d-block">Email</label>
              <input type="email" value="test@ex.com" className='w-100 py-2 border rounded'
              disabled
              />
              
            </div>
            <h3 className="mb-2">Delivery</h3>
            <div className='row mb-2'>
              <div className='col'>
                <label className='d-block'>First Name</label>
                <input type="text" 
                value={shippingAddress.firstName}
                onChange={(e) => setShippingAddress({...shippingAddress, firstName: e.target.value})}
                className="w-100 p-2 border rounded"
                required/>
              </div>

              <div className='col'>
                <label className='d-block'>Last Name</label>
                <input type="text" 
                value={shippingAddress.lastName}
                onChange={(e) => setShippingAddress({...shippingAddress, lastName: e.target.value})}
                className="w-100 p-2 border rounded"/>
              </div>
              </div>

              <div className="mb-2">
                <label className="d-block">Address</label>
                <input type="text" vlaue={shippingAddress.address}
                onChange={(e) => setShippingAddress({...shippingAddress, address: e.target.value})}
                className="w-100 p-2 border rounded"
                required/>
              </div>


              {/* <h3 className="mb-2">Delivery</h3> */}
            <div className='row'>
              <div className='col'>
                <label className='d-block'>City</label>
                <input type="text" 
                value={shippingAddress.city}
                onChange={(e) => setShippingAddress({...shippingAddress, city: e.target.value})}
                className="w-100 p-2 border rounded"
                required/>
              </div>

              <div className='col'>
                <label className='d-block'>Pin Code</label>
                <input type="text" 
                value={shippingAddress.pinCode}
                onChange={(e) => setShippingAddress({...shippingAddress, pinCode: e.target.value})}
                className="w-100 p-2 border rounded"
                required/>
              </div>
              </div>
              
              
              <div className="mb-2">
                <label className="d-block">Country</label>
                <input type="text" vlaue={shippingAddress.country}
                onChange={(e) => setShippingAddress({...shippingAddress, country: e.target.value})}
                className="w-100 p-2 border rounded"
                required/>
              </div>

              <div className="mb-2">
                <label className="d-block">Phone</label>
                <input type="text" vlaue={shippingAddress.phone}
                onChange={(e) => setShippingAddress({...shippingAddress, phone: e.target.value})}
                className="w-100 p-2 border rounded"
                required/>
              </div>
            
            <div className='mt-4'>
              {!checkoutId ? (
                <button type="submit" className='w-100 bg-danger bg-gradient text-white py-2 rounded'>Countinue to Payment</button>
              ) : (
                <div>
                  <h5 className='mb-3'>Pay With Paypal</h5>
                  {/* paypal gateway component */}
                  <PayPalButton amount={100} onSuccess={handlePaymentSuccess} onError={(err) => alert("Payment failed. Try again.")}/>
                </div>
              )}
            </div>
          </form>
        </div>
        </div>
         
        <div className='col-md-6 bg-light'> 
          <h3 className='ms-3 py-3'>Order Summary</h3>
          <div className='border-top py-3 mb-3 mx-3'>
            {cart.products.map((product, index) => (
              <div
               key={index} 
               className='d-flex align-items-center justify-content-between py-2 border-bottom'>

                <div className='d-flex'>
                  <img src={product.image} alt={product.name} className='object-cover me-4' height={100}/>
                  
                  <div>
                 <h5>{product.name}</h5> 
                 <p className='text-muted'><strong>Size:</strong> {product.size}</p>
                 <p className='text-muted'><strong>Color:</strong> {product.color}</p>
                 {/* <p>{product.price?.toLocaleString()}</p> */}
                </div>
                
                </div>
                <p className='fw-bold'>${product.price?.toLocaleString()}</p>
              </div>
            ))}
          </div>
          <div className='px-3 d-flex justify-content-between align-items-center mb-3'>
            <p >Subtotal</p>
            <p >${cart.totalPrice?.toLocaleString()}</p>
          </div>
          <div className="px-3 d-flex justify-content-between align-items-center">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className=" mx-3 d-flex justify-content-between align-items-center mt-3 border-top pt-3">
            <p className="fs-4 fw-bold">Total Amount</p>
            <p className='fs-5 fw-bold'>${cart.totalPrice?.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout