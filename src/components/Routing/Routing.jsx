import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from "../Authentication/LoginPage";
import SignupPage from "../Authentication/SignupPage";
import { CartPage } from "../Cart/CartPage";
import { Home } from "../Home/Home";
import { MyOrderPage } from "../MyOrder/MyOrderPage";
import { ProductsPage } from "../Products/ProductsPage";
import { SingleProductPage } from "../SingleProductPage/SingleProductPage";

export const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignupPage/>}/>
            <Route path='/products' element={<ProductsPage/>}/>
            <Route path='/products/1' element={<SingleProductPage/>}/>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='/myorders' element={<MyOrderPage/>}/>
        </Routes>
    </div>
  )
}
