import "./App.css";
import { Routing } from "./components/Routing/Routing";
import { NavBar } from "./components/NavBar/NavBar";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";



function App() {
  const [user, setUser] = useState(null);

 useEffect(() => {
  try {
     const jwt =localStorage.getItem("token");
    const jwtUser = jwtDecode(jwt);
    if(Date.now() >= jwtUser.exp * 1000){
      localStorage.removeItem("token");
      location.reload();
    }else{
      setUser(jwtUser);
    }  
  }catch (error) {}
      
 },[user])
  return (
    <>
      <div className="app">
        <NavBar user={user}/>
        <main>
          <Routing />
        </main>
      </div>
    </>
  );
}

export default App;
