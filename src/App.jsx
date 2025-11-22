import "./App.css";
import { CartPage } from "./components/Cart/cartPage";
import { Home } from "./components/Home/Home";
import { MyOrderPage } from "./components/MyOrder/MyOrderPage";
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
          {/* <CartPage /> */}
          <MyOrderPage />
          
        </main>
      </div>
    </>
  );
}

export default App;
