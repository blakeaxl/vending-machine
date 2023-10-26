import React, { useState } from "react";
import ProductsInterface from "./vendingMachineComponents/ProductsInterface";
import UserInterface from "./vendingMachineComponents/UserInterface";
import ProductReturnInterface from "./vendingMachineComponents/ProductReturnInterface";
import "../styles/components/vendingMachine.css";

const VendingMachine = () => {

    const [subTotal, setSubTotal] = useState(0.0);

    const [message, setMessage] = useState("Bienvenido, por favor inserte una moneda");

    const [chosenProduct, setChosenProduct] = useState({});

    const TotalBalance = (value) => {

        let newValue = subTotal + value

        setSubTotal(newValue);

    }

    

  return (
    <>
      <div className="vending-machine-main">
        <ProductsInterface subTotal={subTotal} setSubTotal={setSubTotal} setChosenProduct={setChosenProduct} setMessage={setMessage}/>
        <UserInterface subTotal={subTotal} TotalBalance={TotalBalance} setSubTotal={setSubTotal} message={message} setMessage={setMessage}/>
        <ProductReturnInterface chosenProduct={chosenProduct} setChosenProduct={setChosenProduct}/>
      </div>
      <div className="vending-machine-base" />
    </>
  );
};

export default VendingMachine;
