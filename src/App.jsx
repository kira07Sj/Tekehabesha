
import AboutPage from './Pages/AboutPage.jsx'
import ProductsPage from './Pages/ProductPage.jsx'
import ServicePage from "./Pages/ServicePage.jsx"
import ProductDetailPage from "./Pages/ProductDetailPage.jsx"
import Home from './Pages/Home.jsx'
import MainPage from './layouts/MainPage.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPage from './layouts/AdminPage.jsx'
import Dashboard from './Pages/Overview.jsx'
import Management from "./Pages/Management.jsx"
import Login from './Pages/Login.jsx'
import { AuthProvider } from './auth/AuthContext.jsx'
import ProtectedRoute from './auth/ProtectedRoute.jsx'


function App() {

  return (

    <AuthProvider>
    <Router>

      <Routes>
        <Route path='/' element={<MainPage />} >

          <Route index element={<Home />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Product" element={<ProductsPage />} />
          <Route path="/Service" element={<ServicePage />} />
          <Route path="/ProductDetail/:id" element={<ProductDetailPage />} />

        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Admin' element = {<ProtectedRoute><AdminPage/></ProtectedRoute>}>
          <Route path='/Dashboard' element={<Dashboard/>}/>
          <Route path='/Manage-Products' element={<Management/>}/>
        </Route>

        
      </Routes>

    </Router>
    </AuthProvider>
  )
}

export default App
