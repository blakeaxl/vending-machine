import React, { useEffect, useState } from 'react';
import VendingMachine from '../components/VendingMachine';
import VendingMachineHiddenInterface from '../components/VendingMachineHiddenInterface';
import '../styles/views/mainView.css';
import Products from '../assets/JSONs/ProductsStock.json';
import Coins from '../assets/JSONs/CoinsValue.json';

const MainView = () => {

  const [initialProducts, setInitialProducts] = useState([]);
  const [initialCoins, setInitialCoins] = useState([]);

  const CoinStockModifier = (actionType, coin, quantity) => {

    const initialCoins = JSON.parse(localStorage.getItem("vending-machine-coins")) || [];

    const listCoin = initialCoins.find(item => item.id === coin.id);

    if (listCoin) {
      if (actionType === "rest" && listCoin.stock <= 0) {
        console.log("No se puede restar más stock porque ya está en 0.");
      } else {
        listCoin.stock += actionType === "add" ? quantity : -quantity;
        localStorage.setItem("vending-machine-coins", JSON.stringify(initialCoins));
        setInitialCoins(initialCoins);
      }
    }
}

const ProductStockModifier = (type, product) => {
  const initialProducts =
    JSON.parse(localStorage.getItem("vending-machine-products")) || [];
  const updatedProducts = initialProducts.map((listProduct) => {
    if (listProduct.id === product.id) {
      if (type === "rest" && listProduct.stock <= 0) {
        console.log("No se puede restar más stock porque ya está en 0.");
        return listProduct;
      } else {
        return {
          ...listProduct,
          stock: type === "add" ? listProduct.stock + 1 : listProduct.stock - 1,
        };
      }
    }
    return listProduct;
  });
  localStorage.setItem(
    "vending-machine-products",
    JSON.stringify(updatedProducts)
  );
  setInitialProducts(updatedProducts);
};


  useEffect(() => {
    const localStorageProducts =
      JSON.parse(localStorage.getItem('vending-machine-products')) || [];
    const localStorageCoins =
      JSON.parse(localStorage.getItem('vending-machine-coins')) || [];

    if (localStorageProducts.length === 0 && localStorageCoins.length === 0) {
      localStorage.setItem(
        'vending-machine-products',
        JSON.stringify(Products)
      );
      setInitialProducts(Products);
      localStorage.setItem(
        'vending-machine-coins',
        JSON.stringify(Coins)
      );
      setInitialCoins(Coins);
    } else {
      setInitialProducts(localStorageProducts);
      setInitialCoins(localStorageCoins);
    }
  }, []);

  return (
    <div className='main-view'>
      <VendingMachine CoinStockModifier={CoinStockModifier} ProductStockModifier={ProductStockModifier} initialCoins={initialCoins}/>
      <VendingMachineHiddenInterface
        initialCoins={initialCoins}
        initialProducts={initialProducts}
        setInitialCoins={setInitialCoins}
        setInitialProducts={setInitialProducts}
        CoinStockModifier={CoinStockModifier}
        ProductStockModifier={ProductStockModifier}
      />
    </div>
  );
};

export default MainView;