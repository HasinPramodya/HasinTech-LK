import React from 'react'
import './ProductsPage.css'
import { ProductsSidebar } from './productsSidebar'
import { ProductsList } from './Productslist'


export const ProductsPage = () => {
  return (
   <section className='products_page'>
       <ProductsSidebar/>
       <ProductsList/>
   </section>
  )
}
