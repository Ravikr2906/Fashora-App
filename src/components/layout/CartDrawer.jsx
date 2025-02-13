import {HiOutlineShoppingBag} from "react-icons/hi2"
import React from 'react'
import CartContents from "../cart/CartContents"
import { useNavigate } from "react-router-dom"

const CartDrawer = () => {
const navigate = useNavigate()
  const handleCheckout = () => {
navigate("/checkout")
  }
  return (
    <div>
       <button class="btn mt-3  position-relative" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
    <HiOutlineShoppingBag size={30} style={{ color: '#4b5563' }}/>
  <span className="position-absolute  top-0 start-70 translate-middle badge rounded-pill bg-danger">
    1
  </span></button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h2 class="offcanvas-title" id="offcanvasRightLabel">Your Cart</h2>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <CartContents/>
  </div>

  {/* checkout button fixed at the bottom */}
  <div className="py-2 px-4 bg-white sticky-bottom ">
<button  onClick={handleCheckout} className="w-100 bg-danger bg-gradient text-white py-2 rounded hover">Checkout</button>

  </div>
  <p className="text-secondary px-4 ">Shipping, taxes, and discount codes  calculated at checkout.</p>
</div>
    </div>
  )
}

export default CartDrawer