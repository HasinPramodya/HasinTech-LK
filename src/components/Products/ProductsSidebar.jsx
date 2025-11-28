import React, { useEffect, useState } from 'react'
import './productsSidebar.css'
import { NavLinks } from '../NavBar/NavLinks/NavLinks'
import apiClient from '../../utils/api-client'

export const ProductsSidebar = () => {
  const [categories, setCategories] = useState([]);
  const [erros,setErrors] = useState([]);

  useEffect(()=>{
      apiClient.get("/category").then(
        (res)=>{
            setCategories(res.data);
            console.log(res.data);
        }
      ).catch(
        (err)=>{
            setErrors(err.meassge);
        }
      )
  },[])

  return (
    <aside className="products_sidebar">
        <h2>Category</h2>
        <div className="category_links">
          {
            categories.map((category)=>{
              return <NavLinks key={category.name} title={category.name} link={`products?category=${category.name}`} emoji={`http://localhost:5000/category/${category.image}`}  sidebar={true} />
            })
          }
           
        </div>
    </aside>
  )
}
