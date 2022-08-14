import React from "react";
import "../styles/Coin.css"

function Coin({ name, icon, price, symbol, priceChange1d, marketCap }) {
  return (
    <div className="coin-container">
      <div className="coin-row">
        
        <div className="coin">
          <img src={icon} alt="crypto" />
          <h1>
            {name}
          </h1>
          <p>
            {symbol}
          </p>
        </div>

        <div className="coin-data">
          <p className="coin-price">
            ${price.toFixed(6)}
          </p>
          {priceChange1d < 0 ? (
            <p className="coin-price-red">{priceChange1d.toFixed(2)}%</p>
          ) : (
            <p className="coin-price-green">{priceChange1d.toFixed(2)}%</p>
          )}
          <p className="coin-market-cap">
            ${marketCap.toFixed(2)}
          </p>
        </div>

      </div>
    </div>
  );
}

export default Coin;