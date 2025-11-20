import React from 'react';
import './NavLink.css';


export const NavLink = ({title,link, emoji}) => {
  return (
     <a href={link} className='align-center'>{title}<img src={emoji} alt='' className='link_emoji'/></a>
  )
}
