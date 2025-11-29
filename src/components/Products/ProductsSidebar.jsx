import './productsSidebar.css'
import { NavLinks } from '../NavBar/NavLinks/NavLinks'
import { useData } from '../../hooks/useData'


export const ProductsSidebar = () => {
  const {data : categories, error} = useData('/category')
 
  return (
    <aside className="products_sidebar">
        <h2>Category</h2>
        <div className="category_links">
          {error && <em className="form_error">{error}</em>}
          {  
            categories && categories.map((category)=>{
              return <NavLinks key={category.name} title={category.name} link={`products?category=${category.name}`} emoji={`http://localhost:5000/category/${category.image}`}  sidebar={true} />
            })
          }
           
        </div>
    </aside>
  )
}
