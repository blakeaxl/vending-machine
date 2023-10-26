import React from "react";
import "../../styles/components/productStockSwitcher.css";

const ProductStockSwitcher = ({ product, setListState }) => {
  
  const StockModifier = (type) => {
    const initialProducts =
      JSON.parse(localStorage.getItem("vending-machine-products")) || [];
    const updatedProducts = initialProducts.map((listProduct) => {
      if (listProduct.id === product.id) {
        return {
          ...listProduct,
          stock: type === "add" ? listProduct.stock + 1 : listProduct.stock - 1,
        };
      }
      return listProduct;
    });
    localStorage.setItem(
      "vending-machine-products",
      JSON.stringify(updatedProducts)
    );
    setListState(updatedProducts);
  };

  return (
    <div className="product-stock-main-container" key={product.id}>
      <img src={product.image} alt="" className="product-stock_image" />
      <div className="product-stock_options-container">
        <button
          className="product-stock_switcher-button"
          onClick={() => {
            StockModifier("rest");
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
            StockModifier("add");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductStockSwitcher;