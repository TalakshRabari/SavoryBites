import { useState } from 'react'
import { Route , Routes } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import ViewProduct from './pages/admin/ViewProduct';
import Home from './pages/customer/Home'
// import Login from './pages/customer/Login'
// import Register from './pages/customer/Register'
import Contact from './pages/customer/Contact'


import Checkout from './pages/customer/Checkout'
// import ViewProduct from './pages/customer/ViewProduct'
import Menu from './pages/customer/Menu'

import AdminLogin from './pages/admin/AdminLogin'
import AddProduct from './pages/admin/AddProduct'
import Vieworders from './pages/admin/Vieworders'
import Dashboard from './pages/customer/Dashboard'
import AdminDashboard from './pages/admin/AdminDashboard'
// import HeaderAdmin from './component/admin/HeaderAdmin';
import Login from './pages/customer/Login';
import Register from './pages/customer/Register';
import AddCategory from './pages/admin/AddCategory'
import About from './pages/customer/About'
// import Product from './pages/customer/Product'
import ProductDetails from './pages/customer/ProductDetails'
import ViewCategory from './pages/admin/ViewCategory'
import ViewProduct from './pages/admin/ViewProduct'
import Settings from './pages/customer/Settings'
import Shop from './pages/customer/Shop';
import Products from './pages/customer/Products';
import UpdateCategory from './pages/admin/UpateCategory';
// import HeaderAdmin from './component/admin/HeaderAdmin'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <ToastContainer />


      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />

        <Route path="/customer" >
          <Route index element={<Dashboard/>}/>
           {/* <Route path="/customer/dashboard" element={<Dashboard/>}/> */}
          <Route path="/customer/checkout" element={<Checkout />} />
          <Route path="/customer/productdetail/:id" element={<ProductDetails />} />
          <Route path="/customer/product" element={<Products/>} />
          <Route path="/customer/Setting" element={<Settings />} />
          <Route path="/customer/menu" element={<Menu />} />
        </Route>

        <Route path="/admin" >

          <Route index element={<AdminDashboard />}/>

            <Route path="/admin/addcategory" element={<AddCategory />} />
            <Route path="/admin/updatecategory/:id" element={<UpdateCategory />} />
            <Route path="/admin/addproduct" element={<AddProduct />} />
            <Route path="/admin/viewcategory" element={<ViewCategory />} />
            <Route path="/admin/viewproduct" element={<ViewProduct />} />
            <Route path="/admin/vieworders" element={<Vieworders />} />



        </Route>


      </Routes>

    </>
  )
}

export default App
