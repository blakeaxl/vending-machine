import React, { useEffect, useState } from 'react';
import VendingMachine from '../components/VendingMachine';
import VendingMachineHiddenInterface from '../components/VendingMachineHiddenInterface';
import '../styles/views/mainView.css';
import Products from '../assets/JSONs/ProductsStock.json';
import Coins from '../assets/JSONs/CoinsValue.json';

const MainView = () => {
  const [initialProducts, setInitialProducts] = useState([]);
  const [initialCoins, setInitialCoins] = useState([]);

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
      <VendingMachine />
      <VendingMachineHiddenInterface
        initialCoins={initialCoins}
        initialProducts={initialProducts}
        setInitialCoins={setInitialCoins}
        setInitialProducts={setInitialProducts}
      />
    </div>
  );
};

export default MainView;