import React, { useEffect, useState,useContext } from "react";
import UserContext from "../../context/userContext";
import CartContext from "../../context/CartContext";
import "./CartPage.css";
import { Table } from "../Common/Table";
import { QuantityInput } from "../SingleProductPage/QuantityInput";
import remove from "../../assets/remove.png";

export const CartPage = () => {
  const [subTotal , setSubTotal] = useState(0);
  const user = useContext(UserContext);
  const {cart, removeFromCart, updateCart} = useContext(CartContext);
  useEffect(() => {
     let total = 0;
     cart.forEach(({product, quantity}) => {
       total += quantity * product.price;
     });
     setSubTotal(total);
  }, [cart]);

  return (
    <section className="align-center cart_page">
      <div className="align-center user_info">
        <img src={`http://localhost:5000/profile/${user?.profilePic}`} alt="" className="user_profile" />
        <div>
          <p className="user_name">Name : {user?.name}</p>
          <p className="user_email">Email: {user?.email}</p>
        </div>
      </div>

      <Table headings={["item", "price", "quantity", "Total", "Remove"]}>
      <tbody>
        {cart.map(({product, quantity}) => (
          <tr key={product.title}>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td className="align-center table_quantity_input">
              <QuantityInput
                quantity={quantity}
                stock={product.stock}
                setQuantity={updateCart}
                cartPage={true}
                productId={product._id}
              />
            </td>
            <td>{quantity * product.price}</td>
            <td>
              <img src={remove} alt="remove icon" className="cart_remove_icon" onClick={()=>{removeFromCart(product._id)}}/>
            </td>
          </tr>
        ))} 
      </tbody>
      </Table>

      <table className="cart_bill">
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>${subTotal}</td>
          </tr>
          <tr>
            <td>Shipping Charge</td>
            <td>$5</td>
          </tr>
          <tr className="cart_bill_final">
            <td>Total</td>
            <td>${subTotal + 5}</td>
          </tr>
        </tbody>
      </table>

      <button className="search_button checkout_button">Checkout</button>
    </section>
  );
};
