import React from 'react'
import ProductsInterface from './vendingMachineComponents/ProductsInterface'
import UserInterface from './vendingMachineComponents/UserInterface'
import ProductReturnInterface from './vendingMachineComponents/ProductReturnInterface'
import "../styles/components/vendingMachine.css"

const VendingMachine = () => {
  return (
    <div className="vending-machine-main">
        <ProductsInterface />
        <UserInterface />
        <ProductReturnInterface />
    </div>
  )
}

export default VendingMachine