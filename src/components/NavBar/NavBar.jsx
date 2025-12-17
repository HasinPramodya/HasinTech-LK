import React, { useContext, useEffect, useState } from 'react'
import './NavBar.css'
import rocket from '../../assets/rocket.png';
import star from '../../assets/glowing-star.png';
import idButton from '../../assets/id-button.png';
import memo from '../../assets/memo.png';
import order from '../../assets/package.png';
import lock from '../../assets/locked.png';
import { NavLinks } from './NavLinks/NavLinks.jsx';
import { NavLink, useNavigate } from "react-router-dom";
import { getSuggesstionApi } from '../../services/productServices.js';
import UserContext from '../../context/userContext.js';
import CartContext from '../../context/CartContext.js';



export const NavBar = ({cartCount}) => {
  const [search, setSearch] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const user = useContext(UserContext)
  const {cart} = useContext(CartContext)
  const navigate = useNavigate()
  useEffect(() => {
    if (search.trim() !== ""){
      getSuggesstionApi(search).then(res => {
        setSuggestions(res.data)
      }).catch(err => {
        console.log(err)
      })
    }else{
      setSuggestions([])
    }
  }, [search])
  const handleSubmit = (e) => {
    e.preventDefault();
    if(search !== ""){
      navigate(`/products?search=${search.trim()}`)
    }
  }
  return (
    <nav className='align-center navbar'>
      <div className='align-center'>
        <h1 className='navbar_heading'>HasinTech</h1>
        <form className='align-center navbar_form' onSubmit={handleSubmit}>
          <input type="text" className='navbar_search' placeholder='Search products' value={search} onChange={e => setSearch(e.target.value)}/>
          <button type="submit" className='search_button'>Search</button>
          <ul className="search result">
            <li className="search_suggesstion_link">

            </li>
          </ul>
        </form>
      </div>
      <div className='align-center navbar_links'>
        <NavLinks title="Home" link="/" emoji={rocket} />
        <NavLinks title="Products" link="/products" emoji={star} />
        {!user &&<><NavLinks title="Login" link="/login" emoji={idButton} />
        <NavLinks title="SignUp" link="/signup" emoji={memo} /></>}
        {user && <><NavLinks title="My Orders" link="/myorders" emoji={order} />
        <NavLinks title="Logout" link="/logout" emoji={lock} />
        <NavLink to='/cart' className='align-center'>Cart <p className="align-center cart_counts">{cart.length}</p></NavLink></>}
      </div>
    </nav>
  )
}
