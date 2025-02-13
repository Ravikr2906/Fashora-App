import React, { useEffect, useRef, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import FilterSidebar from '../components/products/FilterSidebar'
import SortOptions from '../components/products/SortOptions'
import ProductGrid from '../components/products/ProductGrid'
// import { use } from 'react'

const CollectionPage = () => {
  const [products, setProducts] = useState([])
  const sidebarRef = useRef(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  //  close side bar if click outside of the bar
  //  const handleClickOutside = (e) => {
  //   if(sidebarRef.current && ! sidebarRef.current.contains(e.target)){
  //     setIsSidebarOpen(false)
  //   }
  //  }

  //event listener for click
  //    useEffect(() => {
  //     document.addEventListener("mousedown", handleClickOutside)
  // return () => {
  //     document.removeEventListener("mousedown", handleClickOutside)
  // } 
  //   }, [])


  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          _id: 1,
          name: "Product 1",
          price: 1000,
          images: [
            {
              url: "https://picsum.photos/500/500?random=3",
              altText: "Product 1"
            }
          ]
        },
        {
          _id: 2,
          name: "Product 1",
          price: 1000,
          images: [
            {
              url: "https://picsum.photos/500/500?random=4",
              altText: "Product 2"
            }
          ]
        },
        {
          _id: 3,
          name: "Product 3",
          price: 1000,
          images: [
            {
              url: "https://picsum.photos/500/500?random=5",
              altText: "Product 1"
            }
          ]
        },
        {
          _id: 4,
          name: "Product 4",
          price: 1000,
          images: [
            {
              url: "https://picsum.photos/500/500?random=6",
              altText: "Product 1"
            }
          ]
        },
        {
          _id: 5,
          name: "Product 1",
          price: 1000,
          images: [
            {
              url: "https://picsum.photos/500/500?random=5",
              altText: "Product 1"
            }
          ]
        },
        {
          _id: 6,
          name: "Product 1",
          price: 1000,
          images: [
            {
              url: "https://picsum.photos/500/500?random=6",
              altText: "Product 2"
            }
          ]
        },
        {
          _id: 7,
          name: "Product 3",
          price: 1000,
          images: [
            {
              url: "https://picsum.photos/500/500?random=7",
              altText: "Product 1"
            }
          ]
        },
        {
          _id: 8,
          name: "Product 8",
          price: 1000,
          images: [
            {
              url: "https://picsum.photos/500/500?random=8",
              altText: "Product 1"
            }
          ]
        },
      ]
      setProducts(fetchedProducts)
    }, 1000)
  }, [])


  return (
    <>
      <div className='row my-2'>
        {/* side bar */}
        <div className='mx-3 d-none d-lg-block col-lg-2 mb-3'>
          <h2 className='ms-4'>Filters</h2>
          <FilterSidebar />
        </div>

        {/* mobile view */}
        <div className='d-lg-none row justify-content-center align-items-center '>
          <button class="btn btn-secondary opacity-50 py-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><FaFilter /> Filters</button>

          <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div class="offcanvas-header">
              <h2 class="offcanvas-title " id="offcanvasScrollingLabel" >Filters</h2>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              {/* <p>Try scrolling the rest of the page to see this option in action.</p> */}
              <FilterSidebar />
            </div>
          </div>
        </div>

        <div className='col-lg-9 bg-light'>
          <h3 className='display-5 mb-5 text-center'>ALL COLLECTION</h3>
          <ProductGrid products={products} />
        </div>
      </div>



    </>
  )
}

export default CollectionPage