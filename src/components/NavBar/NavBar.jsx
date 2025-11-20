import React from 'react'
import './NavBar.css'
import rocket from '../../assets/rocket.png';
import star from '../../assets/glowing-star.png';
import idButton from '../../assets/id-button.png';
import memo from '../../assets/memo.png';
import order from '../../assets/package.png';
import lock from '../../assets/locked.png';
import { NavLink } from './NavLink/NavLink';



export const NavBar = () => {
  return (
    <nav className='align-center navbar'>
      <div className='align-center'>
        <h1 className='navbar_heading'>HasinTech</h1>
        <form className='align-center navbar_form'>
          <input type="text" className='navbar_search' placeholder='Search products' />
          <button type="submit" className='search_button'>Search</button>
        </form>
      </div>
      <div className='align-center navbar_links'>
        <NavLink title="Home" link="/" emoji={rocket} />
        <NavLink title="Products" link="/products" emoji={star} />
        <NavLink title="Login" link="/login" emoji={idButton} />
        <NavLink title="SignUp" link="/signup" emoji={memo} />
        <NavLink title="My Orders" link="/myorders" emoji={order} />
        <NavLink title="Logout" link="/logout" emoji={lock} />
        <a href='/cart' className='align-center'>Cart <p className="align-center cart_counts">0</p></a>
      </div>
    </nav>
  )
}
