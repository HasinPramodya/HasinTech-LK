import "./App.css";
import { Routing } from "./components/Routing/Routing";
import { NavBar } from "./components/NavBar/NavBar";



function App() {
  return (
    <>
      <div className="app">
        <NavBar />
        <main>
          <Routing />
        </main>
      </div>
    </>
  );
}

export default App;
