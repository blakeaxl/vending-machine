import React from "react";
import "../../styles/components/productStockSwitcher.css";

const ProductStockSwitcher = ({ product, StockModifier }) => {

  return (
    <div className="product-stock-main-container" key={product.id}>
      <img src={product.image} alt="" className="product-stock_image" />
      <div className="product-stock_options-container">
        <button
          className="product-stock_switcher-button"
          onClick={() => {
            StockModifier("rest", product);
          }}
        >
          -
        </button>
        <div className="product-stock_stock-container">
          <p className="product-stock_stock-text">{product.stock}</p>
        </div>
        <button
          className="product-stock_switcher-button"
          onClick={() => {
            StockModifier("add", product);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductStockSwitcher;