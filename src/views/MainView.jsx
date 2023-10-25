import React from 'react'
import VendingMachine from '../components/VendingMachine'
import VendingMachineHiddenInterface from '../components/VendingMachineHiddenInterface'
import "../styles/views/mainView.css"

const MainView = () => {
  return (
    <div className="main-view">
      <VendingMachine />
      <VendingMachineHiddenInterface />
    </div>
  )
}

export default MainView