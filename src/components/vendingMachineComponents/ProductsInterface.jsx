import React from "react";
import "../../styles/components/productsInterface.css";

const ProductsInterface = ({ subTotal, setChosenProduct, setMessage, setSubTotal }) => {
  const machineProducts =
    JSON.parse(localStorage.getItem("vending-machine-products")) || [];

  const ProcessProduct = (product) => {
    if (subTotal !== 0) {
      if (subTotal >= product.price) {

        setChosenProduct(product);

        if(product.price === subTotal) {

            setSubTotal(0.0)

            setMessage(`${product.name} fue entregado, gracias por su compra!`)

            setTimeout(() => {

                setMessage("Bienvenido, por favor inserte una moneda")
        
            }, [3000])

        } else {

            const change = subTotal - product.price

            setMessage(`${product.name} fue entregado, su cambio es de ${change.toFixed(2)}$!`)

            setSubTotal(0.0)

            setTimeout(() => {

                setMessage("Bienvenido, por favor inserte una moneda")
        
            }, [3000])

        }

      } else {
        setMessage(
          `El producto seleccionado cuesta ${product.price}$ y solo insertaste ${subTotal.toFixed(
            2
          )}$`
        );
      }
    } else {
      setMessage("No has insertado dinero");

      setTimeout(() => {

        setMessage("Bienvenido, por favor inserte una moneda")

    }, [3000])

    }
  };

  return (
    <div className="products-interface_main">
      <div className="products-interface_products-container">
        {machineProducts.map((product) => (
          <div className="products-interface_products-single-product-container" key={product.id}>
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
