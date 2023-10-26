import React from "react";
import "../../styles/components/productsInterface.css";

const ProductsInterface = ({
  subTotal,
  setChosenProduct,
  setMessage,
  setSubTotal,
  CoinStockModifier,
  currentCoins,
  setCurrentCoins,
  posibleCoins,
  ProductStockModifier,
  initialCoins,
}) => {
  const machineProducts =
    JSON.parse(localStorage.getItem("vending-machine-products")) || [];

  console.log(currentCoins);

  const ProcessProduct = (product) => {
    if (subTotal.toFixed(2) !== 0) {
      if (subTotal.toFixed(2) >= product.price.toFixed(2)) {
        setChosenProduct(product);

        if (product.price.toFixed(2) === subTotal.toFixed(2)) {
          setSubTotal(0.0);

          setMessage(`${product.name} fue entregado, gracias por su compra!`);

          currentCoins.forEach((currentCoin) => {
            CoinStockModifier("add", currentCoin, currentCoin.quantity);
          });

          setCurrentCoins(posibleCoins);

          ProductStockModifier("rest", product);

          setTimeout(() => {
            setMessage("Bienvenido, por favor inserte una moneda");
          }, [3000]);
        } else {

          const exchange = subTotal.toFixed(2) - product.price.toFixed(2);

          const newCoinsList = initialCoins.filter(item => item.id !== 4); //lsita sin 1$

          let change = subTotal.toFixed(2) - product.price.toFixed(2);

          const coinsToReturn = []; // Creamos un array vacío para almacenar las monedas que se devolverán como cambio.

          for (let i = newCoinsList.length - 1; i >= 0; i--) {
            // Recorremos el array de monedas inicial de mayor a menor valor.
            const coin = newCoinsList[i]; // Obtenemos la moneda actual.
            let coinsNeeded = Math.floor(change.toFixed(2) / coin.value.toFixed(2)); // Calculamos cuántas monedas de esta denominación se necesitan para dar el cambio.

            if (coin.stock >= coinsNeeded) {
              // Si hay suficientes monedas de esta denominación en stock...
              coinsToReturn.push({ ...coin, quantity: coinsNeeded }); // Agregamos las monedas necesarias al array de monedas a devolver.
              change -= coinsNeeded * coin.value.toFixed(2); // Restamos el valor total de estas monedas del cambio que queda por dar.
            } else {
              // Si no hay suficientes monedas de esta denominación en stock...
              coinsToReturn.push({ ...coin, quantity: coin.stock }); // Agregamos todas las monedas disponibles al array de monedas a devolver.
              change -= coin.stock * coin.value.toFixed(2); // Restamos el valor total de estas monedas del cambio que queda por dar.
            }

            if (change === 0) break; // Si ya hemos dado todo el cambio necesario, salimos del bucle.
          }

          console.log(coinsToReturn)

          coinsToReturn.forEach(item => {
            CoinStockModifier("rest", item, item.quantity)
          })

          if (change > 0) {
            // Si todavía queda algo de cambio por dar...
            setMessage(
              // Mostramos un mensaje de error.
              `Lo siento, no tengo monedas suficientes para darle su cambio de ${change.toFixed(
                2
              )}$`
            );
          } else {
            // Si hemos dado todo el cambio necesario...
            setMessage(
              // Mostramos un mensaje con las monedas que se devolverán como cambio.
              `${product.name} fue entregado, su cambio es de ${coinsToReturn
                .map((coin) => `${coin.quantity} moneda(s) de ${coin.value}$`)
                .join(", ")}!`
            );

            currentCoins.forEach((currentCoin) => {
              // Actualizamos el stock de las monedas actuales.
              CoinStockModifier("add", currentCoin, currentCoin.quantity);
            });

            setCurrentCoins(posibleCoins); // Reiniciamos las monedas actuales.

            ProductStockModifier("rest", product); // Restamos una unidad del stock del producto comprado.

            setSubTotal(0.0); // Reiniciamos el subtotal.
          }

          setMessage(
            `${product.name} fue entregado, su cambio es de ${exchange.toFixed(
              2
            )}$!`
          );

          setTimeout(() => {
            setMessage("Bienvenido, por favor inserte una moneda");
          }, [3000]);
        }
      } else {
        setMessage(
          `El producto seleccionado cuesta ${
            product.price
          }$ y solo insertaste ${subTotal.toFixed(2)}$`
        );
      }
    } else {
      setMessage("No has insertado dinero");

      setTimeout(() => {
        setMessage("Bienvenido, por favor inserte una moneda");
      }, [3000]);
    }
  };

  return (
    <div className="products-interface_main">
      <div className="products-interface_products-container">
        {machineProducts.map((product) => (
          <div
            className="products-interface_products-single-product-container"
            key={product.id}
          >
            <img
              src={product.image}
              alt=""
              className="products-interface_products-single-product-img"
            />
            <button
              className="products-interface_products-single-product-button"
              onClick={() => {
                ProcessProduct(product);
              }}
            >
              {product.price}$
            </button>
          </div>
        ))}
      </div>
      <div className="products-interface_products-floor-background" />
    </div>
  );
};

export default ProductsInterface;
