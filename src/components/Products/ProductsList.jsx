import React from 'react'
import './Productslist.css'
import { ProductCard } from '../Home/ProductCard'

export const ProductsList = () => {
  return (
    <section className="products-list_section">Product list
      <header className="align-center products_list_header">
        <h2>Products</h2>
        <select name="sort" id="" className='products_sorting'>
            <option value="">Relevance</option>
            <option value="price desc">Price: High to Law</option>
            <option value="price asc">Price: Low to High</option>
            <option value="rate desc">Rate: High to Law</option>
            <option value="rate asc">Rate: Low to High</option>
        </select>
      </header>
      <div className="products_list">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>


    </section>
  )
}
