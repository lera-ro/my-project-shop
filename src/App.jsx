import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import "./index.css";
import Basket from "./Basket";
import Goods from "./Goods";
import Contacts from "./Contacts"; 
import Specialties from "./Specialties/Specialties";
import { data } from "./data";
import LoaderPage from './Loader/LoaderPage';
import "./App.css";

const App = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [products, setProducts] = useState(data);
  const [stateLoader, setStateLoader] = useState(true);

useEffect(() => {
 const timer = setTimeout(() => setStateLoader(false), 2000);
 return () => clearTimeout(timer)
 }, [])

  const handleAddProductToCart = productID => {
    setCartProducts([...cartProducts, productID]);
  };
  const handleRemoveFromCart = productID => {
    const newCartProducts = cartProducts.filter(id => id !== productID);
    setCartProducts(newCartProducts);
  };

  return (

  <div>
      <div>
    {stateLoader && <LoaderPage />}
      </div>
  <Router>
    <nav>
      
    <div className="icon-goods">
      <Link to="/" className="link"><img src="https://img.icons8.com/?size=100&id=tLuf6TL8RS4h&format=png&color=000000" width="30px" alt="shop" /></Link>
    </div> 
    <div className="header">
      <Link to="/specialties" className="link">specialties</Link>
      <Link to="/contacts" className="link">contacts</Link> 
      <Link to="/basket" className="link"><img src="https://img.icons8.com/?size=100&id=8386&format=png&color=000000" width="30px" alt="basket" /></Link>
      </div>
    </nav>

    <Routes>
      <Route path="/" element={<Goods products={products} cartProducts={cartProducts} handleAddProductToCart={handleAddProductToCart} handleRemoveFromCart={handleRemoveFromCart} setProducts={setProducts}/>} />
      <Route path="/specialties" element={<Specialties />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/basket" element={<Basket products={products} cartProducts={cartProducts} handleAddProductToCart={handleAddProductToCart} handleRemoveFromCart={handleRemoveFromCart}/>} />     
    </Routes>

    </Router>            
      </div>
    )
}

export default App;
