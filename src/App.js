import Header from "./components/Header";
import Products from "./components/Product/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Product/Cart";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;