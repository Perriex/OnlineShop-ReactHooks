/** @format */

import React from "react";

export const ShoppingBag = ({ cart }) => {
  return (
    <div className="Cart">
      <div>
        <h1> سبد خرید شما</h1>
        <ul>
          {cart.map((item) => {
            if (item.count > 0)
              return (
                <li style={{ display: "block" }}>
                  <h2 style={{ display: "inline-block" }}>
                    {item.name + " x " + item.count}
                  </h2>
                </li>
              );
            return null;
          })}
        </ul>
      </div>
    </div>
  );
};
