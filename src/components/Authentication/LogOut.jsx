import React, { useEffect } from 'react'

export const LogOut = () => {
   
  useEffect(()=>{
      localStorage.removeItem('token');
      window.location.href = '/';
      
  },[])
  return null;
}
