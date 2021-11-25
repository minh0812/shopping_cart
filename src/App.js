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
          <Route path="/shopping_cart" element={<Products />} />
          <Route path="/shopping_cart/cart" element={<Cart />} />
          <Route path="/shopping_cart/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;