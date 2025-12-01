import { useState } from "react";

function App() {
  const products = [
    { name: "Mela", price: 0.5 },
    { name: "Pane", price: 1.2 },
    { name: "Latte", price: 1.0 },
    { name: "Pasta", price: 0.7 },
  ];

  const [addedProducts, setAddedProducts] = useState([]);

  const updateProductQuantity = (name, quantity) => {
    setAddedProducts((curr) =>
      curr.map((p) => {
        if (p.name === name) {
          return {
            ...p,
            quantity,
          };
        }
        return p;
      })
    );
  };

  function addToCart(product) {
    const alreadyInCart = addedProducts.find((p) => p.name === product.name);

    if (alreadyInCart) {
      updateProductQuantity(alreadyInCart.name, alreadyInCart.quantity + 1);
      return;
    }

    const productToAdd = {
      ...product,
      quantity: 1,
    };

    setAddedProducts((curr) => [...curr, productToAdd]);
  }

  function removeFromCart(product) {
    const updatedCart = addedProducts.filter((p) => p.name !== product.name);
    setAddedProducts(updatedCart);
  }

  const total = addedProducts.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

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
            <button onClick={() => removeFromCart(product)}>
              Rimuovi dal carrello
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
      <h3>TOTALE: {total.toFixed(2)}€</h3>
    </>
  );
}

export default App;
