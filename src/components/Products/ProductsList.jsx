import './Productslist.css'
import { ProductCard } from '../Home/ProductCard'
import { useData } from '../../hooks/useData'
import { ProductCardSkelton } from './ProductCardSkelton';
import { useSearchParams } from 'react-router-dom';


export const ProductsList = () => {
  const [search, setSearch] = useSearchParams();
  const category = search.get("category")
  const {data, errors, isLoading} = useData("/products", {
    params: {
      category : category
    }
  },[category]);
  const skelton = [1,2,3,4,5,6,7,8,9,10]
  return (
    <section className="products-list_section">Product list
      <header className="align-center products_list_header">
        <h2>Products</h2>
        <select name="sort" id="" className='products_sorting'>
            <option value="">Relevance</option>
            <option value="price desc">Price: High to Law</option>
            <option value="price asc">Price: Low to High</option>
            <option value="rate desc">Rate: High to Law</option>
            <option value="rate asc">Rate: Low to High</option>
        </select>
      </header>
      <div className="products_list">
        {errors && <em className="form_error">{errors}</em>}
         {isLoading &&skelton.map((item)=>{
          return <ProductCardSkelton key={item}/>
        })}
        {
          data?.products && data.products.map((product)=>{
            return <ProductCard key={product._id} id={product._id} image={product.images[0]} price={product.price} title={product.title} rating={product.reviews.rate} ratingCounts={product.reviews.counts} stock={product.stock}/>
          })
        }
      </div>


    </section>
  )
  
}
