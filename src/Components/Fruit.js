/** @format */

import React from "react";

export const Fruit = ({ fruit, addToCart }) => {
  return (
    <button
      key={fruit.id}
      className="Fruit-cart"
      onClick={() => addToCart(fruit.id)}
    >
      <grid>
        <div>
          <img src={fruit.picture} alt={fruit.name} width="120px" />
        </div>
        <div>
          <row>
            <h2 style={{ color: "#555555" }}>{fruit.name}</h2>
          </row>
          <row>
            <h5>{`${(fruit.price / 10)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان`}</h5>
          </row>
        </div>
      </grid>
    </button>
  );
};
