import './Productslist.css'
import { ProductCard } from '../Home/ProductCard'
import { useData } from '../../hooks/useData'


export const ProductsList = () => {
  const {data, errors} = useData("/products");
  console.log(data)
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
        {
          data?.products && data.products.map((product)=>{
            return <ProductCard key={product._id} id={product._id} image={product.images[0]} price={product.price} title={product.title} rating={product.reviews.rate} ratingCounts={product.reviews.counts} stock={product.stock}/>
          })
        }
      </div>


    </section>
  )
  
}
