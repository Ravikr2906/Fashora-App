import React from 'react'
import {Link} from "react-router-dom"

const NewArrivals = () => {

  const newArrivals = [
    {_id: "1",
      name: "Stylish Jacket",
      price: 120,
      images: [{url: "https://picsum.photos/500/500?random=1",
        altText: "Stylish Jacket",
      }]
    },
    {_id: "2",
      name: "Stylish Jacket",
      price: 120,
      images: [{url: "https://picsum.photos/500/500?random=2",
        altText: "Stylish Jacket",
      }]
    },
    {_id: "3",
      name: "Stylish Jacket",
      price: 120,
      images: [{url: "https://picsum.photos/500/500?random=3",
        altText: "Stylish Jacket",
      }]
    },
    {_id: "4",
      name: "Stylish Jacket",
      price: 120,
      images: [{url: "https://picsum.photos/500/500?random=4",
        altText: "Stylish Jacket",
      }]
    },
    {_id: "5",
      name: "Stylish Jacket",
      price: 120,
      images: [{url: "https://picsum.photos/500/500?random=5",
        altText: "Stylish Jacket",
      }]
    },
    {_id: "6",
      name: "Stylish Jacket",
      price: 120,
      images: [{url: "https://picsum.photos/500/500?random=6",
        altText: "Stylish Jacket",
      }]
    },
    {_id: "7",
      name: "Stylish Jacket",
      price: 120,
      images: [{url: "https://picsum.photos/500/500?random=7",
        altText: "Stylish Jacket",
      }]
    },

  ]
  return (
    <section> 
      <div className="container mx-auto text-center mb-5 position-relative">
        <h2 className='mb-4 display-4'><storng>Explore New Arrivals</storng></h2>
        <p className='text-dark m'>Discover the latest styles straight off the runway. freshly added to keep your wardrobe on the cutting edge of fashion.</p>

      </div> 

           {/* Content */}
           
            <div className="container overflow-auto mx-auto d-flex  position-relative" style={{ whiteSpace: "nowrap" }}>
            {newArrivals.map((product) => (
              <div key={product._id} className='me-2 position-relative'
              style={{ minWidth: "250px" }}>
                <img 
                   src={product.images[0]?.url} 
                   alt={product.images[0]?.altText || product.name}
                   className='rounded w-100'  
                   />
                <div className=' position-absolute start-0 bottom-0 bg-dark bg-opacity-50 pt-1 px-3 rounded w-100'
                style={{
                  backdropFilter: "blur(10px)"
                }}
                >
                  
                  <Link to={`/product/${product._id}`} className="link-light text-decoration-none">
                  <h4>{product.name}</h4>
                  <p className='fw-bold'>$ {product.price}</p>
                  </Link>
                </div>
              </div>
              
            ))}
           
           </div> 
    </section>
  )
}

export default NewArrivals