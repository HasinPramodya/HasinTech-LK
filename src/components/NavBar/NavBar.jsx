import React from 'react'
import './NavBar.css'
import rocket from '../../assets/rocket.png';
import star from '../../assets/glowing-star.png';
import idButton from '../../assets/id-button.png';
import memo from '../../assets/memo.png';
import order from '../../assets/package.png';
import lock from '../../assets/locked.png';
import { NavLinks } from './NavLinks/NavLinks.jsx';
import { NavLink } from "react-router-dom";



export const NavBar = ({user}) => {
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
        <NavLinks title="Home" link="/" emoji={rocket} />
        <NavLinks title="Products" link="/products" emoji={star} />
        {!user &&<><NavLinks title="Login" link="/login" emoji={idButton} />
        <NavLinks title="SignUp" link="/signup" emoji={memo} /></>}
        {user && <><NavLinks title="My Orders" link="/myorders" emoji={order} />
        <NavLinks title="Logout" link="/logout" emoji={lock} />
        <NavLink to='/cart' className='align-center'>Cart <p className="align-center cart_counts">0</p></NavLink></>}
      </div>
    </nav>
  )
}
