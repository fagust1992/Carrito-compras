import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar";
import { ContextProvider } from "../src/Context/Context";
import Cart from "./Paginas/Cart";
import Home from "./Paginas/Home";
import Detalle from "./Paginas/Detalle";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ContextProvider>
          <NavBar />
          <Header />

          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pizza/:id" element={<Detalle />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </ContextProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
