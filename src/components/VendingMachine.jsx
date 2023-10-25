import React, { useState } from "react";
import ProductsInterface from "./vendingMachineComponents/ProductsInterface";
import UserInterface from "./vendingMachineComponents/UserInterface";
import ProductReturnInterface from "./vendingMachineComponents/ProductReturnInterface";
import "../styles/components/vendingMachine.css";

const VendingMachine = () => {

    const [subTotal, setSubTotal] = useState(0.0)

    const TotalBalance = (value) => {

        let initialValue = subTotal;

        let newValue = subTotal + parseFloat(value).toFixed(2)

        setSubTotal(newValue);

    }

  return (
    <>
      <div className="vending-machine-main">
        <ProductsInterface />
        <UserInterface subTotal={subTotal} TotalBalance={TotalBalance}/>
        <ProductReturnInterface />
      </div>
      <div className="vending-machine-base" />
    </>
  );
};

export default VendingMachine;
