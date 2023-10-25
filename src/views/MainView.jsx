import React from 'react'
import VendingMachine from '../components/VendingMachine'
import VendingMachineHiddenInterface from '../components/VendingMachineHiddenInterface'

const MainView = () => {
  return (
    <div className="main-view">
      <VendingMachine />
      <VendingMachineHiddenInterface />
    </div>
  )
}

export default MainView