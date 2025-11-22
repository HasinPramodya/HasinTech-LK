import React from 'react';
import './NavLink.css';


export const NavLink = ({title,link, emoji,sidebar}) => {
  return (
     <a href={link} className={sidebar ? 'align-center sidebar_link' : 'align-center'}>{title}<img src={emoji} alt='' className='link_emoji'/></a>
  )
}
