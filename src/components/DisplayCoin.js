import React from 'react'
import Coin from './Coin';

function DisplayCoin( {toggle, list} ) {
  if (toggle === true) {
    return (
        <div>
            {list.slice(0).reverse().map((coin, i) => {
                return (
                    <Coin key={i}
                        icon={coin.icon}
                        name={coin.name}
                        symbol={coin.symbol}
                        price={coin.price}
                        priceChange1d={coin.priceChange1d}
                        marketCap={coin.marketCap}
                    />
                );
            })}
        </div>
    )
  } else {
    return (
        <div>
            {list.map((coin, i) => {
                return (
                    <Coin key={i}
                        icon={coin.icon}
                        name={coin.name}
                        symbol={coin.symbol}
                        price={coin.price}
                        priceChange1d={coin.priceChange1d}
                        marketCap={coin.marketCap}
                    />
                );
            })}
        </div>
    )}
}

export default DisplayCoin;