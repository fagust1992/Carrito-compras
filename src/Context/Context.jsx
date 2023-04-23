import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [dato, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const url = "/pizzas.json";
  const consultarPizzas = async (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })

      .catch((error) => console.log(error));
  };
  useEffect(() => {
    consultarPizzas(url);
  }, []);
  const addCart = (id) => {
    const pizza = dato.find((a) => a.id === id);
    console.log(pizza);
    setTotal(total + pizza.price);

    const searchCart = cart.findIndex((x) => x.id === id);
    console.log(searchCart);
    if (searchCart >= 0) {
      cart[searchCart].count++;
      setCart([...cart]);
    } else {
      const newObject = {
        id: pizza.id,
        name: pizza.name,
        price: pizza.price,
        img: pizza.img,
        count: 1,
      };

      setCart([...cart, newObject]);
    }
  };
  const sumar = (id) => {
    const searchCart = cart.findIndex((x) => x.id === id);
    if (searchCart >= 0) {
      cart[searchCart].count++;
      setCart([...cart]);
      setTotal(total + cart[searchCart].price);
    } else {
      console.log("error");
    }
  };

  const restar = (id) => {
    const searchCart = cart.findIndex((x) => x.id === id);
    if (cart[searchCart].count === 1) {
      setTotal(total - cart[searchCart].price);
      cart.splice(searchCart, 1);
    } else {
      setTotal(total - cart[searchCart].price);
      cart[searchCart].count--;
      setCart([...cart]);
    }
  };
  return (
    <Context.Provider value={{ dato, total, cart, addCart, sumar, restar }}>
      {children}
    </Context.Provider>
  );
};
