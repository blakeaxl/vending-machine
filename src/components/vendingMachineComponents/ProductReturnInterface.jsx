import React from 'react'
import "../../styles/components/productReturnInterface.css"

const ProductReturnInterface = ({chosenProduct, setChosenProduct}) => {

  return (
    <div className="product-return-interface_main">
        {
          chosenProduct.image && (
            <img src={chosenProduct.image} alt="" onClick={() => {setChosenProduct({})}} className="product-return-interface_product-img" />
          )
        }
    </div>
  )
}

export default ProductReturnInterface