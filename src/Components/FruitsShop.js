/** @format */

import React, { useState } from "react";
import { fruits } from "../Data/FruitList";
import { Fruit } from "./Fruit";

import { ShoppingBag } from "./ShoppingBag";

export const FruitsShop = () => {
  const [cart, setCart] = useState([
    {
      name: "Apple",
      count: 0,
    },
    {
      name: "Banana",
      count: 0,
    },
    {
      name: "Orange",
      count: 0,
    },
    {
      name: "Strawberry",
      count: 0,
    },
    {
      name: "Mango",
      count: 0,
    },
  ]);
  const addToCart = (id) => {
    cart[id - 1].count += 1;
    let newCart = [...cart];
    setCart(newCart);
  };
  return (
    <>
      <section className="container">
        {fruits.map((item, i) => (
          <Fruit fruit={item} key={i} addToCart={addToCart} />
        ))}
      </section>
      <ShoppingBag cart={cart} />
    </>
  );
};
