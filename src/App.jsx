import { ToastContainer,toast } from "react-toastify";
import "./App.css";
import UserContext from "./context/userContext";
import { Routing } from "./components/Routing/Routing";
import { NavBar } from "./components/NavBar/NavBar";
import { useEffect, useState } from "react";
import { getJwt, getUser } from "./services/userServices";
import setAuthToken from "./utils/setAuthToken";
import { addToCartApi, decreaseProductApi, getCartApi, incraseProductApi, removeFromCartApi } from "./services/cartServices";
import "react-toastify/dist/ReactToastify.css";
import CartContext from "./context/CartContext";

setAuthToken(getJwt());

function App() {
  const [user, setUser] = useState(null);
  const [cart,setCart] = useState([]);

 useEffect(() => {
  try {
         const user = getUser();
        if(Date.now() >= user.exp * 1000){
          localStorage.removeItem("token");
          location.reload();
        }else{
          setUser(user);
        }
      } catch (error) {
        console.log(error);
      }
      // Run once on mount to read token from localStorage and set user
 }, [])

 const addToCart = (product,quantity) => {
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex((item)=>{return item.product._id === product._id})

    if(productIndex === -1){
      updatedCart.push({product:product,quantity: quantity});
    }else{
      updatedCart[productIndex].quantity += quantity;
    }
    setCart(updatedCart);
    addToCartApi(product._id,quantity).then((res)=>{
      console.log(res.data);
      toast.success("Product added Successfully !");
    }).catch((err)=>{
      console.log(err);
      toast.error("Failed to add product !");
      setCart(cart);
    })

    console.log(updatedCart)
 }

 const removeFromCart = (id) => {
    const oldCart = [...cart];
    const newCart = oldCart.filter((item)=>{return item.product._id !== id});
    setCart(newCart);

    removeFromCartApi(id).catch((err)=>{
      console.log(err);
      toast.error("Failed to remove product !");
      setCart(oldCart);
    })
 }

 const updateCart = (type,id) => {
   const oldCart = [...cart];
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex((item)=>{return item.product._id === id})

    if(type === "increase") {
      updatedCart[productIndex].quantity += 1;
      setCart(updatedCart);

      incraseProductApi(id).catch((err)=>{
        console.log(err);
        toast.error("Something went wrong !");
        setCart(oldCart);
      })
    }
    if(type === "decrease") {
      updatedCart[productIndex].quantity -= 1;
      setCart(updatedCart);

      decreaseProductApi(id).catch((err)=>{
        console.log(err);
        toast.error("Something went wrong !");
        setCart(oldCart);
      })
    }
    
 }
 const getCart = () => {
    getCartApi().then((res)=>{
      setCart(res.data);
    }).catch((err)=>{
      console.log(err);
      toast.error("Something went wrong !");
    })
 }

 useEffect(()=>{
  if(user){
    getCart();
  }
 },[user])
  return (
    <>
      <UserContext.Provider value={user}>
        <CartContext.Provider value={{cart,addToCart, removeFromCart, updateCart}}>
      <div className="app">
        <NavBar/>
        <main>
          <ToastContainer position="bottom-right"/>
          <Routing/>
        </main>
      </div>
      </CartContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
