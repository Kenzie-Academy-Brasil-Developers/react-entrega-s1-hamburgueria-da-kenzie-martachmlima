import Product from "./components/Product";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { useState } from "react";

import "./App.css";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14.0,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 16.0,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 18.0,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5.0,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca-cola",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "KenzieMaltine",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);

  const [currentSale, setCurrentSale] = useState([]);

  const [userInput, setUserInput] = useState("");

  function showProducts() {
    setProducts(
      products.filter(
        (item) => item.category.slice(0, 1) === userInput.slice(0, 1)
      )
    );
  }

  function handleClick(productId) {
    let newProduct = products.find((item) => item.id === productId);
    if (currentSale.indexOf(newProduct) === -1) {
      setCurrentSale([...currentSale, newProduct]);
    }
  }

  function removeAllProducts() {
    setCurrentSale([]);
  }

  function removeOneProduct(itemID) {
    setCurrentSale(currentSale.filter((item) => item.id !== itemID));
  }

  return (
    <div className="App">
      <Header
        userInput={userInput}
        setUserInput={setUserInput}
        currentFunction={showProducts}
      />
      <Product
        products={products}
        currentFunction={handleClick}
        userInput={userInput}
      />
      <Cart
        currentSale={currentSale}
        currentFunction={removeAllProducts}
        auxFunction={removeOneProduct}
      />
    </div>
  );
}

export default App;
