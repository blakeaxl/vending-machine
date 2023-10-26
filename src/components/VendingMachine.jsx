import React, { useState } from "react";
import ProductsInterface from "./vendingMachineComponents/ProductsInterface";
import UserInterface from "./vendingMachineComponents/UserInterface";
import ProductReturnInterface from "./vendingMachineComponents/ProductReturnInterface";
import "../styles/components/vendingMachine.css";

const VendingMachine = ({ CoinStockModifier, ProductStockModifier, initialCoins }) => {
  const [subTotal, setSubTotal] = useState(0.0);

  const [message, setMessage] = useState(
    "Bienvenido, por favor inserte una moneda"
  );

  const [chosenProduct, setChosenProduct] = useState({});

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

  const [currentCoins, setCurrentCoins] = useState(posibleCoins);

  const TotalBalance = (value) => {
    const newList = [...currentCoins];
    const updatedList = newList.map((listCoin) => {
      if (listCoin.value === value) {
        return { ...listCoin, quantity: listCoin.quantity + 1 };
      }
      return listCoin;
    });
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
