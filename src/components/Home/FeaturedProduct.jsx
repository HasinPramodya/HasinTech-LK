import React from "react";
import "./FeaturedProduct.css";
import { ProductCard } from "./ProductCard";
import { useData } from "../../hooks/useData";
import { ProductCardSkelton } from "../Products/ProductCardSkelton";

export const FeaturedProduct = () => {
  const { data, error, isLoading } = useData("/products/featured");
  const skelton = [1, 2, 3];
  console.log(data);
  return (
    <section className="featured_products">
      <h2>Featured Products</h2>

      <div className="align-center featured_products_list">
        {error && <em className="form_error">{error}</em>}
        {data &&
          data.map((product) => (
            <ProductCard key={product._id} id={product._id} image={product.images[0]} price={product.price} title={product.title} rating={product.reviews.rate} ratingCounts={product.reviews.counts} stock={product.stock}/>
          ))}

        {isLoading && skelton.map((n) => <ProductCardSkelton key={n} />)}
      </div>
    </section>
  );
};
