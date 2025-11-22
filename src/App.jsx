import "./App.css";
import { CartPage } from "./components/Cart/cartPage";
import { Home } from "./components/Home/Home";
import { NavBar } from "./components/NavBar/NavBar";
import { ProductsPage } from "./components/Products/ProductsPage";
import { SingleProductPage } from "./components/SingleProductPage/SingleProductPage";


function App() {
  return (
    <>
      <div className="app">
        <NavBar />
        <main>
          {/* <Home /> */}
          {/* <ProductsPage /> */}
          {/* <SingleProductPage /> */}
          <CartPage />
          
        </main>
      </div>
    </>
  );
}

export default App;
