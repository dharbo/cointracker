import "./styles/App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import DisplayCoin from "./components/DisplayCoin";

function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [btnState, setBtn] = useState(false);

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=100").then(
      (response) => {
        setListOfCoins(response.data.coins);
      }
    );
  }, []);

  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  const handleClick = () => {
    setBtn(!btnState);
  }

  return (
    <div className="coin-app">

      <div className="coin-search">
        <h1 className="coin-text">Coin Tracker</h1>
        <input
          className="coin-input"
          type="text"
          placeholder="Search for coins ..."
          onChange={(event) => {
            setSearchWord(event.target.value);
          }}
        />
      </div>
      
      <button className="toggle-btn toggle-btn:hover" onClick={handleClick}>
        Sort By Market Cap
      </button>

      <div className="labels">
        <p style={{width: 40}}></p>
        <p style={{width: 132}}>Coin</p>
        <p style={{width: 215}}>Ticker Symbol</p>
        <p style={{width: 115}}>Price</p>
        <p style={{width: 240}}>24hr Price Change</p>
        <p>Market Cap</p>
      </div>

      <DisplayCoin toggle={btnState} list={filteredCoins}/>

    </div>
  );
}

export default App;