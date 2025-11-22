import React, { Children } from 'react'
import './Table.css'

export const Table = ({headings, children}) => {
  return (
    <table className='common_table'>
       <thead>
          {
            headings.map((heading,index)=>{
               return <th key={index}>{heading}</th>
            })
          }
       </thead>
       {children}
    </table>
  )
}
