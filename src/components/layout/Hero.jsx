import React from 'react'

import heroN from "../../assets/heroN.jpg"

import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="position-relative">
      <img src={heroN} alt="hero-Image"  className='w-100 px-3' height={580} />

      <div className="ms-5 position-absolute top-50 start-50 translate-middle  bg-opacity-10 text-light text-center p-3 rounded">
      <h1 className='display-3'><strong>Vacation <br/> Ready </strong></h1>
      <p>Explore our vacation-ready outfits with fast worldwide shipping.</p>
      <Link to="#" className='p-3 my-3 rounded bg-white link-dark text-decoration-none'>
      Shop Now
      </Link>
    </div>
    </section>
  )
}

export default Hero