import React, { useEffect, useState } from 'react';
import VendingMachine from '../components/VendingMachine';
import VendingMachineHiddenInterface from '../components/VendingMachineHiddenInterface';
import '../styles/views/mainView.css';
import Products from '../assets/JSONs/ProductsStock.json';
import Coins from '../assets/JSONs/CoinsValue.json';

const MainView = () => {

// Define el estado inicial de los productos como un array vacío.
const [initialProducts, setInitialProducts] = useState([]);
// Define el estado inicial de las monedas como un array vacío.
const [initialCoins, setInitialCoins] = useState([]);

// Define una función para modificar el stock de las monedas.
const CoinStockModifier = (actionType, coin, quantity) => {
  // Obtiene las monedas iniciales del almacenamiento local o crea un array vacío si no hay ninguna.
  const initialCoins = JSON.parse(localStorage.getItem("vending-machine-coins")) || [];
  // Busca la moneda en la lista de monedas iniciales.
  const listCoin = initialCoins.find(item => item.id === coin.id);

  // Si la moneda no se encuentra en la lista, no hace nada.
  if (!listCoin) return;

  // Si se intenta restar stock y ya está en 0, muestra un mensaje de error.
  if (actionType === "rest" && listCoin.stock <= 0) {
    console.log("No se puede restar más stock porque ya está en 0.");
    return;
  }

  // Modifica el stock de la moneda según el tipo de acción (añadir o restar).
  listCoin.stock += actionType === "add" ? quantity : -quantity;
  // Actualiza las monedas iniciales en el almacenamiento local.
  localStorage.setItem("vending-machine-coins", JSON.stringify(initialCoins));
  // Actualiza el estado inicial de las monedas.
  setInitialCoins(initialCoins);
};

// Define una función para modificar el stock de los productos.
const ProductStockModifier = (type, product) => {
  // Obtiene los productos iniciales del almacenamiento local o crea un array vacío si no hay ninguno.
  const initialProducts = JSON.parse(localStorage.getItem("vending-machine-products")) || [];
  
  // Crea una nueva lista de productos actualizados a partir de los productos iniciales.
  const updatedProducts = initialProducts.map((listProduct) => {
    // Si el producto actual es el mismo que el producto que se quiere modificar, actualiza su stock.
    if (listProduct.id === product.id) {
      // Si se intenta restar stock y ya está en 0, muestra un mensaje de error y devuelve el producto sin cambios.
      if (type === "rest" && listProduct.stock <= 0) {
        console.log("No se puede restar más stock porque ya está en 0.");
        return listProduct;
      } else {
        // Si no, devuelve una copia del producto con su stock actualizado según el tipo de acción (añadir o restar).
        return {
          ...listProduct,
          stock: type === "add" ? listProduct.stock + 1 : listProduct.stock - 1,
        };
      }
    }
    // Si no es el producto que se quiere modificar, devuelve el producto sin cambios.
    return listProduct;
  });

  // Actualiza los productos iniciales en el almacenamiento local.
  localStorage.setItem("vending-machine-products", JSON.stringify(updatedProducts));
  // Actualiza el estado inicial de los productos.
  setInitialProducts(updatedProducts);
};


  // Define un efecto para cargar los datos iniciales desde el almacenamiento local al montar el componente.
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