import React from 'react'
import { RiDeleteBin3Line } from 'react-icons/ri'

const CartContents = () => {
const cartProducts = [
  {productId: 1, 
    name: "T-Shirt",
    size: "M",
    color: "Red",
    quantity: 1,
    price: 15,
    image: "http://picsum.photos/200?random=1",
  },
  {productId: 2, 
    name: "Jeans",
    size: "L",
    color: "Color",
    quantity: 1,
    price: 25,
    image: "http://picsum.photos/200?random=1",
  }
]

  return (
    <div>
      {/* <ul> */}
      {
         cartProducts.map((product, index) => (
          <div key={index} className='d-flex items-start justify-content-between py-4 border-bottom'>
            <div className='d-flex items-start'>
                 <img src={product.image} alt="Product-img" className='img-fluid'  width={100} />
                 <div className='ms-3'>
                  <h3>{product.name}</h3>
                  <p>
                    Size: {product.size} | Color: {product.color}
                  </p>
                  <div className='d-flex align-items-center mt-2'>
                    <button className='border rounded px-2 py-1 '>
                      - </button>
                      <span className='mx-4'>{product.quantity}</span>
                    <button className='border rounded px-2 py-1'>
                      + </button>
                    </div>
                  </div>
                  <div className='mt-2 ms-2'>
                  <p className='ms-3'>${product.price.toLocaleString()}</p>
                  <button className='btn btn-transparant'>
                    <RiDeleteBin3Line size={30} className='text-danger'/>
                  </button>
                 </div> 
            </div>
            </div>
        ))
        
        }
      {/* </ul> */}
    </div>
  )
}

export default CartContents