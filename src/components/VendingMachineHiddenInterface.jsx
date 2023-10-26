import React from 'react'
import "../styles/components/vendingMachineHiddenInterface.css"
import ProductStockSwitcher from './vendingMachineHiddenInterfaceComponents/ProductStockSwitcher'
import CoinStockSwitcher from './vendingMachineHiddenInterfaceComponents/CoinStockSwitcher'

const VendingMachineHiddenInterface = ({initialCoins,initialProducts, ProductStockModifier, CoinStockModifier}) => {

  return (
    <div className="hidden-interface_container">
      <div className="hidden-interface_items-container">
        {
          initialProducts?.map(product => (
            <ProductStockSwitcher key={product.id} product={product} StockModifier={ProductStockModifier}/>
          ))
        }
      </div>
      <div className="hidden-interface_items-container">
        {
          initialCoins?.map(coin => (
            <CoinStockSwitcher key={coin.id} coin={coin} StockModifier={CoinStockModifier}/>
          ))
        }
      </div>
    </div>
  )
}

export default VendingMachineHiddenInterface