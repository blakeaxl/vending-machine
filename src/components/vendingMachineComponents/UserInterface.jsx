import React from 'react'
import "../../styles/components/userInterface.css"

const UserInterface = ({subTotal, TotalBalance}) => {
  return (
    <div className="user-interface_main">
        <div className="user-interface_user-interactions-container">
            <div className="user-interface_user-cash-selector-container">
                <button className="user-interface_price-selector-button">0.05$</button>
                <button className="user-interface_price-selector-button">0.10$</button>
                <button className="user-interface_price-selector-button">0.25$</button>
                <button className="user-interface_price-selector-button">1$</button>
            </div>
            <div className="user-interface-current-balance-and-return-money-container">
                <button className="user-interface_return-money-button">Return money</button>
                <div className="user-interface_current-balance-container">
                    <p className="user-interface_current-balance-text">0$</p>
                </div>
            </div>
        </div>
        <div className="user-interface_info-screen-container">
            <div className="user-interface_info-screen">
                <p className="user-interface_info-screen-text">temporal text</p>
            </div>
        </div>
    </div>
  )
}

export default UserInterface