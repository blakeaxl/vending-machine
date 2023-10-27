import React from "react";
import "../../styles/components/userInterface.css";

const UserInterface = ({
  subTotal,
  TotalBalance,
  setSubTotal,
  message,
  setMessage,
  currentCoins,
  setCurrentCoins,
  posibleCoins
}) => {
  const RecoverMoney = () => {
    // Esta función devuelve el dinero al usuario
    if (subTotal !== 0) {
      setSubTotal(0.0);
  
      setMessage(
        `El dinero devuelto es de ${currentCoins
          .map((coin) => `${coin.quantity} moneda(s) de ${coin.value}$`)
          .join(", ")}!`
      );
  
      setCurrentCoins(posibleCoins);
      
    } else {
      setMessage("No hay dinero para devolver");
    }
  
    // Espera 3 segundos antes de mostrar el mensaje
    setTimeout(() => {
      setMessage("Bienvenido, por favor inserte una moneda");
    }, [3000]);
  };
  
  const AddMoney = (value) => {
    // Esta función agrega dinero al balance total del usuario
    TotalBalance(value);
  
    // Muestra un mensaje pidiéndole al usuario que elija un producto
    setMessage("Por favor elige un producto");
  };

  return (
    <div className="user-interface_main">
      <div className="user-interface_user-interactions-container">
        <div className="user-interface_user-cash-selector-container">
          <button
            className="user-interface_price-selector-button"
            onClick={() => {
              AddMoney(0.05);
            }}
          >
            0.05$
          </button>
          <button
            className="user-interface_price-selector-button"
            onClick={() => {
              AddMoney(0.1);
            }}
          >
            0.10$
          </button>
          <button
            className="user-interface_price-selector-button"
            onClick={() => {
              AddMoney(0.25);
            }}
          >
            0.25$
          </button>
          <button
            className="user-interface_price-selector-button"
            onClick={() => {
              AddMoney(1.0);
            }}
          >
            1$
          </button>
        </div>
        <div className="user-interface-current-balance-and-return-money-container">
          <button
            className="user-interface_return-money-button"
            onClick={() => {
              RecoverMoney();
            }}
          >
            Devolver dinero
          </button>
          <div className="user-interface_current-balance-container">
            <p className="user-interface_current-balance-text">
              {subTotal.toFixed(2)}$
            </p>
          </div>
        </div>
      </div>
      <div className="user-interface_info-screen-container">
        <div className="user-interface_info-screen">
          <p className="user-interface_info-screen-text">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default UserInterface;
