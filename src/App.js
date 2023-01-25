import React from "react";
import Header from "./components/Header";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "./models/data.json";
import ProductList from "./components/ProductList";
import Search from "./components/Search";
import BasketCount from "./components/BasketCount";
import Casing from "./components/Casing";
import Basket from "./components/Basket";
import About from "./pages/About.js";

function App() {
  const [products, setProducts] = useState(data);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  const [term, setTerm] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("An action =>", term);
  }, [term]);

  function addToBasket(trackId) {
    products.map((product) => {
      if (product.trackId === trackId) {
        product.inBasket = true;
        console.log(product);
        setBasket((prev) => [...prev, product]);

        if (product.trackPrice) {
          setTotal(parseFloat(total + product.trackPrice));
        } else {
          setTotal(total + 0);
        }
      }
      console.log(setTotal);
      setCount(count + 1);
      return product;
    });
  }

  function removeFromBasket(trackId) {
    const removeFromCart = [];
    basket.filter((products) => {
      if (products.trackId !== trackId) {
        removeFromCart.push(products);
      } else {
        products.trackId = !products.trackId;
        if (products.trackPrice) {
          setTotal(parseFloat(total - products.trackPrice));
        }
      }
      return products;
    });

    setBasket(removeFromCart);
    setCount(count - 1);
  }

  console.log(products);

  async function search(value) {
    const url = `https://itunes.apple.com/search?term=${value}&limit=30&explicit=no`;
    const results = await fetch(url).then((res) => res.json());
    if (!results.error) {
      setProducts(
        results.results.filter(
          (result) =>
            result.trackName &&
            basket.findIndex((product) => result.id === product.trackId) === -1
        )
      );
    }
  }

  function BasketList() {
    return (
      <>
        <BasketCount />
        <Basket
          basket={basket}
          addToBasket={addToBasket}
          removeFromBasket={removeFromBasket}
          basketTotal={total}
          basketCount={count}
        />
      </>
    );
  }

  function Home() {
    return (
      <Casing>
        <Search term={term} setTerm={setTerm} search={search} />
        <ProductList
          items={products}
          addToBasket={addToBasket}
          removeFromBasket={removeFromBasket}
          itemCount={data.length}
        />
      </Casing>
    );
  }
  return (
    <Router>
      <div className="App">
        <Header itemCount={count} />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/basket" element={<BasketList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
