import React, { useEffect, useState } from 'react'
import './Productslist.css'
import { ProductCard } from '../Home/ProductCard'
import apiClient from '../../utils/api-client';

export const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() =>{
        apiClient.get("/products").then((res)=>{
          setProducts(res.data.products);
        }).catch((err)=>{
          setError(err.message);
        })
  },[])
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
        {
          products.map((product)=>{
            return <ProductCard key={product._id} product={product}/>
          })
        }
      </div>


    </section>
  )
}
