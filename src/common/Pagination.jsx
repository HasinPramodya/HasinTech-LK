import React from 'react'
import './Pagination.css'

export const Pagination = ({totalPosts, postsPerPage, onClick, currentPage}) => {
    let pages = []

    for(let i=1; Math.ceil(i<=totalPosts/postsPerPage); i++){
        pages.push(i)
    }
  return (
    <ul className='pagination'>
        {
            pages.length > 1 && pages.map((page)=>{
                return <li key={page}><button className={parseInt(currentPage) === page ? "pagination_button active" : "pagination_button"} onClick={()=>{onClick(page)}}>{page}</button></li>
            })
        }
    </ul>
  )
}
