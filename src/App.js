import { useState, useEffect } from "react";
import axios from "axios";
import ProductsList from "./components/ProductsList/Product";
import Product from "./components/Product";
import Cart from "./components/cart/Cart";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    axios
      .get("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => setProducts(response.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleClick(productId) {
    const verifica = currentSale.find((elemento) => elemento.id === productId);

    const item = products.find((elemento) => elemento.id === productId);
    verifica === undefined
      ? setCurrentSale([...currentSale, item])
      : console.log("item repetido");
    verifica === undefined
      ? setCartTotal(
          currentSale.reduce((acc, item) => acc + item.price, item.price)
        )
      : console.log("");

    console.log(verifica);
  }

  function showProducts(input) {
    const item = products.filter((elemento) => {
      return (
        elemento.name.toLowerCase().includes(input) ||
        elemento.category.toLowerCase().includes(input)
      );
    });

    setFilteredProducts(item);
  }
  const handleFilter = (event) => {
    event.preventDefault();
    showProducts(input);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <h1> Burguer </h1> <h5> Kenzie</h5>
        </div>
        <form onSubmit={handleFilter}>
          <input
            type="text"
            placeholder="Digitar pesquisa"
            onChange={(event) => {
              setInput(event.target.value);
            }}
          ></input>
          <button type="submit">Pesquisar</button>
        </form>
      </header>
      <div className="divPrincipal">
        <ProductsList
          products={filteredProducts.length > 0 ? filteredProducts : products}
          Product={Product}
          handleClick={handleClick}
        />
        <Cart currentSale={currentSale} cartTotal={cartTotal} />
      </div>
    </div>
  );
}

export default App;
