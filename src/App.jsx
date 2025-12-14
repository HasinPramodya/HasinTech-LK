import "./App.css";
import { Routing } from "./components/Routing/Routing";
import { NavBar } from "./components/NavBar/NavBar";
import { useEffect, useState } from "react";
import { getUser } from "./services/userServices";




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
    
    console.log(updatedCart)
 }
  return (
    <>
      <div className="app">
        <NavBar user={user} cartCount= {cart.length}/>
        <main>
          <Routing addToCart={addToCart}/>
        </main>
      </div>
    </>
  );
}

export default App;
