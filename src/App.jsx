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
      }catch (error) {
        console.log(error);
      }
      
 },[user])
  return (
    <>
      <div className="app">
        <NavBar user={user} cartCount= {cart.length}/>
        <main>
          <Routing />
        </main>
      </div>
    </>
  );
}

export default App;
