import React, { useState } from "react";
import ProductsInterface from "./vendingMachineComponents/ProductsInterface";
import UserInterface from "./vendingMachineComponents/UserInterface";
import ProductReturnInterface from "./vendingMachineComponents/ProductReturnInterface";
import "../styles/components/vendingMachine.css";

const VendingMachine = ({ CoinStockModifier, ProductStockModifier, initialCoins }) => {
  const [subTotal, setSubTotal] = useState(0.0);

// Estado para el mensaje de bienvenida
const [message, setMessage] = useState(
  "Bienvenido, por favor inserte una moneda"
);

// Estado para el producto elegido
const [chosenProduct, setChosenProduct] = useState({});

// Posibles monedas
const posibleCoins = [
  {
    id: 1,
    value: 0.05,
    quantity: 0,
  },
  {
    id: 2,
    value: 0.10,
    quantity: 0,
  },
  {
    id: 3,
    value: 0.25,
    quantity: 0,
  },
  {
    id: 4,
    value: 1.0,
    quantity: 0,
  },
];

// Estado para las monedas actuales
const [currentCoins, setCurrentCoins] = useState(posibleCoins);

// Función para calcular el balance total
const TotalBalance = (value) => {
  const newList = [...currentCoins];
  const updatedList = newList.map((listCoin) => {
    if (listCoin.value === value) {
      return { ...listCoin, quantity: listCoin.quantity + 1 };
    }
    return listCoin;
  });
  
  // Actualizar el estado de las monedas actuales y el subtotal
  setCurrentCoins(updatedList);
  setSubTotal(subTotal + value);
};

  return (
    <>
      <div className="vending-machine-main">
        <ProductsInterface
          subTotal={subTotal}
          currentCoins={currentCoins}
          posibleCoins={posibleCoins}
          setCurrentCoins={setCurrentCoins}
          CoinStockModifier={CoinStockModifier}
          setSubTotal={setSubTotal}
          setChosenProduct={setChosenProduct}
          setMessage={setMessage}
          ProductStockModifier={ProductStockModifier}
          initialCoins={initialCoins}
        />
        <UserInterface
          subTotal={subTotal}
          TotalBalance={TotalBalance}
          setSubTotal={setSubTotal}
          message={message}
          setMessage={setMessage}
          currentCoins={currentCoins}
          posibleCoins={posibleCoins}
          setCurrentCoins={setCurrentCoins}
        />
        <ProductReturnInterface
          chosenProduct={chosenProduct}
          setChosenProduct={setChosenProduct}
        />
      </div>
      <div className="vending-machine-base" />
    </>
  );
};

export default VendingMachine;
