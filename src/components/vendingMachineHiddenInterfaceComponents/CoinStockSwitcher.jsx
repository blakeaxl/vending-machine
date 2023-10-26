import React from "react";
import "../../styles/components/coinStockSwitcher.css";

const CoinStockSwitcher = ({ coin, StockModifier }) => {

  return (
    <div className="coin-stock_main-container">
      <p className="coin-stock_main-text">{coin.value}$</p>
      <div className="coin-stock_options-container">
        <button className="coin-stock_switcher-button" onClick={() => {StockModifier("rest", coin, 1)}}>-</button>
        <div className="coin-stock_stock-container">
          <p className="coin-stock_stock-text">{coin.stock}</p>
        </div>
        <button className="coin-stock_switcher-button" onClick={() => {StockModifier("add", coin, 1)}}>+</button>
      </div>
    </div>
  );
};

export default CoinStockSwitcher;