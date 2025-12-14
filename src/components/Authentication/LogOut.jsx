import React, { useEffect } from 'react'
import { logout } from '../../services/userServices';


export const LogOut = () => {
useEffect(()=>{
      logout();
      window.location.href = '/';
      
  },[])
  return null;
}
