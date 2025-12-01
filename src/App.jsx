import { useState } from "react";

function App() {
  const products = [
    { name: "Mela", price: 0.5 },
    { name: "Pane", price: 1.2 },
    { name: "Latte", price: 1.0 },
    { name: "Pasta", price: 0.7 },
  ];

  const [addedProducts, setAddedProducts] = useState([]);
  console.log(addedProducts);

  function addToCart(product) {
    const alreadyInCart = addedProducts.some((p) => p.name === product.name);

    if (alreadyInCart) {
      return;
    }

    const productToAdd = {
      ...product,
      quantity: 1,
    };

    setAddedProducts((curr) => [...curr, productToAdd]);
  }

  return (
    <>
      <h2>PRODOTTI</h2>
      <ul>
        {products.map((product, i) => (
          <li key={i}>
            {product.name} - {product.price.toFixed(2)}€
            <button onClick={() => addToCart(product)}>
              Aggiungi al carrello
            </button>
          </li>
        ))}
      </ul>
      {addedProducts.length > 0 && (
        <>
          <h3>Prodotti nel carrello</h3>
          <ul>
            {addedProducts.map((product, i) => (
              <li key={i}>
                {product.quantity} x {product.name} {product.price.toFixed(2)}€
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default App;
