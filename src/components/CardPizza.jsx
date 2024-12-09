import React from "react";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card h-100">
      <img src={`assets/images/${img}`} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <strong>Ingredientes:</strong>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </p>
        <p className="card-text">
          <strong>Precio:</strong> ${price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default CardPizza;
