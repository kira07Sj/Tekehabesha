import Navigation from "./components/Navigation.jsx"
import Hero from "./components/Hero"
import About from "./components/About.jsx"
import Products from "./components/Products.jsx"
import Billboard from "./components/Billboard.jsx"
import Footer from "./components/Footer.jsx"
import AboutPage from './Pages/AboutPage.jsx'
import ProductsPage from './Pages/ProductPage.jsx'
import ServicePage from "./Pages/ServicePage.jsx"


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  
  return (
    <Router>
      
    <Navigation/>

    <Routes>
        <Route
            path="/"
            element={
                <>
                <Hero/>
                <About/>
                <Products/>
                <Billboard/>
                </>
            }/>

          <Route path="/About" element={<AboutPage/>}/>
          <Route path="/Product" element={<ProductsPage/>}/>
          <Route path="/Service" element={<ServicePage/>}/>
          
          
    </Routes>


    <Footer/>

    
    </Router>
  )
}

export default App
