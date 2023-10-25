import React from 'react'
import "../../styles/components/productReturnInterface.css"
import Water from "../../assets/images/water.svg"

const ProductReturnInterface = () => {
  return (
    <div className="product-return-interface_main">
        <img src={Water} alt="" className="product-return-interface_product-img" />
    </div>
  )
}

export default ProductReturnInterface