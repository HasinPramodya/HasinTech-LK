import "./App.css";
import { Home } from "./components/Home/Home";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <div className="app">
        <NavBar />
        <main>
          <Home />
        </main>
      </div>
    </>
  );
}

export default App;
