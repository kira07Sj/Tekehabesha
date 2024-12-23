
import AboutPage from './Pages/AboutPage.jsx'
import ProductsPage from './Pages/ProductPage.jsx'
import ServicePage from "./Pages/ServicePage.jsx"
import ProductDetailPage from "./Pages/ProductDetailPage.jsx"
import Home from './Pages/Home.jsx'
import MainPage from './layouts/MainPage.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <Router>



      <Routes>
        <Route path='/' element={<MainPage />} >

          <Route index element={<Home />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Product" element={<ProductsPage />} />
          <Route path="/Service" element={<ServicePage />} />
          <Route path="/ProductDetail/:id" element={<ProductDetailPage />} />

        </Route>


        
      </Routes>





    </Router>
  )
}

export default App
