import Button from "./components/Button";
import MenuContainer from "./components/MenuContainer";
import Product from "./components/Product";
import Header from "./components/Header";
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
      name: "Coca",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "Fanta",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [currentSale, setCurrentSale] = useState([]);

  const [cartTotal, setCartTotal] = useState(0);

  const [userInput, setUserInput] = useState("");

  function showProducts() {
    setProducts(products.filter((item) => item.name === userInput));
  }

  function handleClick(productId) {
    let newProduct = products.find((item) => item.id === productId);
    setCurrentSale([...currentSale, newProduct]);
    console.log(currentSale);
  }

  return (
    <div className="App">
      <Header
        userInput={userInput}
        setUserInput={setUserInput}
        currentFunction={showProducts}
      />
      <Product products={products} currentFunction={handleClick} />
      <MenuContainer products={products} />

      <span>
        Total RS{" "}
        {currentSale.reduce(
          (currentTotal, newValue) => currentTotal + newValue.price,
          0
        )}
      </span>
    </div>
  );
}

export default App;
