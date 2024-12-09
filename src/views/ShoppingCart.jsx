import React, { useState } from "react";
import { pizzas, pizzaCart as initialCart } from "../utils/pizzas";

const ShoppingCart = () => {
  const [cart, setCart] = useState(initialCart);

  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, count: item.count + amount } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  const total = cart.reduce((acc, item) => {
    const pizza = pizzas.find((p) => p.id === item.id);
    return acc + pizza.price * item.count;
  }, 0);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul className="list-group">
        {cart.map((item) => {
          const pizza = pizzas.find((p) => p.id === item.id);
          return (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={item.id}
            >
              <div className="d-flex">
                <img
                  src={assets/images/${pizza.img}}
                  alt={pizza.name}
                  className="me-3"
                  style={{ width: "50px", height: "50px" }}
                />
                <div>
                  <h5>{pizza.name}</h5>
                  <p>${pizza.price.toLocaleString()}</p>
                  <p>Cantidad: {item.count}</p>
                </div>
              </div>
              <div>
                <button
                  className="btn btn-outline-secondary me-2"
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  -
                </button>
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  +
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <h4 className="mt-3">Total: ${total.toLocaleString()}</h4>
      <button className="btn btn-primary">Pagar</button>
    </div>
  );
};

export default ShoppingCart;