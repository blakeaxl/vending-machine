import React from "react";
import "../../styles/components/coinStockSwitcher.css";

const CoinStockSwitcher = ({ coin, setListState }) => {

  const StockModifier = (actionType) => {

    const initialCoins = JSON.parse(localStorage.getItem("vending-machine-coins")) || [];

    const listCoin = initialCoins.find(item => item.id === coin.id);

    if (listCoin) {
      listCoin.stock += actionType === "add" ? 1 : -1;
      localStorage.setItem("vending-machine-coins", JSON.stringify(initialCoins));
      setListState(initialCoins);
    }
  }

  return (
    <div className="coin-stock_main-container">
      <p className="coin-stock_main-text">{coin.value}$</p>
      <div className="coin-stock_options-container">
        <button className="coin-stock_switcher-button" onClick={() => {StockModifier("rest")}}>-</button>
        <div className="coin-stock_stock-container">
          <p className="coin-stock_stock-text">{coin.stock}</p>
        </div>
        <button className="coin-stock_switcher-button" onClick={() => {StockModifier("add")}}>+</button>
      </div>
    </div>
  );
};

export default CoinStockSwitcher;