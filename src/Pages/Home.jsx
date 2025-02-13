import React from 'react'
import Hero from '../components/layout/Hero'
import GenderCollection from '../components/products/GenderCollection'
import NewArrivals from '../components/products/NewArrivals.jsx'
import ProductDetails from "../components/products/ProductDetails.jsx"
import ProductGrid from '../components/products/ProductGrid.jsx'
import FeaturedCollection from '../components/products/FeaturedCollection.jsx'



const placeholderProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 1000,
    images: [
      { url: "https://picsum.photos/500/500?random=3",
        altText: "Product 1"}
    ]
  },
  {
    _id: 2,
    name: "Product 1",
    price: 1000,
    images: [
      { url: "https://picsum.photos/500/500?random=4",
        altText: "Product 2"}
    ]
  },
  {
    _id: 3,
    name: "Product 3",
    price: 1000,
    images: [
      { url: "https://picsum.photos/500/500?random=5",
        altText: "Product 1"}
    ]
  },
  {
    _id: 4,
    name: "Product 4",
    price: 1000,
    images: [
      { url: "https://picsum.photos/500/500?random=6",
        altText: "Product 1"}
    ]
  },
  {
    _id: 5,
    name: "Product 1",
    price: 1000,
    images: [
      { url: "https://picsum.photos/500/500?random=5",
        altText: "Product 1"}
    ]
  },
  {
    _id: 6,
    name: "Product 1",
    price: 1000,
    images: [
      { url: "https://picsum.photos/500/500?random=6",
        altText: "Product 2"}
    ]
  },
  {
    _id: 7,
    name: "Product 3",
    price: 1000,
    images: [
      { url: "https://picsum.photos/500/500?random=7",
        altText: "Product 1"}
    ]
  },
  {
    _id: 8,
    name: "Product 8",
    price: 1000,
    images: [
      { url: "https://picsum.photos/500/500?random=8",
        altText: "Product 1"}
    ]
  },
]
const Home = () => {
  return (
    <div>
    <Hero/>
    <GenderCollection/>
    <NewArrivals/>

    {/* Best Seller */}
    <h2 className='display-5 text-center  mt-5 mb-3'>Best Seller </h2>
    <ProductDetails/>


{/* Top wears for women */}
    <div className='mt-5 text-center container mx-auto'>
      <h2 className='display-5 text-center mb-4'>Top Wears for women</h2>
      <ProductGrid products={placeholderProducts}/>
    </div>
    
    {/* featured collections */}
    <FeaturedCollection/>
    </div>
  )
}

export default Home