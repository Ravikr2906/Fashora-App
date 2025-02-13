import{BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import UserLayout from './components/layout/UserLayout.jsx'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import { Toaster } from 'sonner'
import Profile from './Pages/Profile.jsx'
import CollectionPage from './Pages/CollectionPage.jsx'
import ProductDetails from './components/products/ProductDetails.jsx'
import Checkout from './components/cart/Checkout.jsx'
import OrderConfirmation from './Pages/OrderConfirmation.jsx'

function App() {
  
  return (
    <>
    <Toaster position='top-right'/>
    
    <Routes>
  <Route path="/" element={<UserLayout/>}>
    <Route index element={<Home/>}/>
     <Route path="login" element={<Login/>}/>
     <Route path="register" element={<Register/>}/>
     <Route path="profile" element={<Profile/>}/>
     <Route path="collections/:collection" element={<CollectionPage/>}/>
     <Route path="product/:id" element={<ProductDetails/>}/>
     <Route path="checkout" element={<Checkout/>}/>
     <Route path="order-confirmation" element={<OrderConfirmation/>}/>
  </Route>
  
    </Routes>
   
    </>
  )
}

export default App
