import React from 'react'
import './productsSidebar.css'
import { NavLinks } from '../NavBar/NavLinks/NavLinks'
import rocket from '../../assets/rocket.png'

export const ProductsSidebar = () => {
  return (
    <aside className="products_sidebar">
        <h2>Category</h2>
        <div className="category_links">
            <NavLinks title="Electronics" link="products?category=electronics" emoji={rocket} sidebar={true} />
        </div>
    </aside>
  )
}
