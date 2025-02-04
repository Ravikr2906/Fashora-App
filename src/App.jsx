import{BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import UserLayout from './components/layout/UserLayout.jsx'
import Home from './Pages/Home.jsx'
import { Toaster } from 'sonner'

function App() {
  
  return (
    <>
    <Toaster position='top-right'/>
    {/* <Router> */}
    <Routes>
  <Route path="/" element={<UserLayout/>}>
  <Route index element={<Home/>}/>
  </Route>
  
    </Routes>
    {/* </Router> */}
    </>
  )
}

export default App
