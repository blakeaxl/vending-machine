import React from 'react'
import "../../styles/components/productsInterface.css"
import Juice from "../../assets/images/juice.svg"
import Water from "../../assets/images/water.svg"
import Coke from "../../assets/images/coke.svg"

const ProductsInterface = () => {
  return (
    <div className="products-interface_main">
        <div className="products-interface_products-container">
            <div className="products-interface_products-single-product-container">
                <img src={Juice} alt="" className="products-interface_products-single-product-img" />
                <button className="products-interface_products-single-product-button">1$</button>
            </div>
            <div className="products-interface_products-single-product-container">
                <img src={Water} alt="" className="products-interface_products-single-product-img" />
                <button className="products-interface_products-single-product-button">0.65$</button>
            </div>
            <div className="products-interface_products-single-product-container">
                <img src={Coke} alt="" className="products-interface_products-single-product-img" />
                <button className="products-interface_products-single-product-button">1.50$</button>
            </div>
        </div>
        <div className="products-interface_products-floor-background" />
    </div>
  )
}

export default ProductsInterface