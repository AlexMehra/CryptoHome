import React, { useEffect, useState } from 'react';
import './TopHighLow.css';
import { CoinContext } from './CoinContext';

const TopHighLow = () => {
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currency,setcurrency] = useState(CoinContext);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-pro-api-key': 'CG-U69aUjwwHSb6gSbyzQ3hj3AE' },
    };

    fetch(`https://pro-api.coingecko.com/api/v3/coins/top_gainers_losers?vs_currency=${currency}&duration=24h&top_coins=300`, options)
      .then((res) => res.json())
      .then((data) => {
        setGainers(data.top_gainers || []);
        setLosers(data.top_losers || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [currency]);

  if (loading) {
    return <div className="spinner">Loading...</div>;
  }

  return (
    <div className="top-high-low">
      <div className="section">
        <h2>Top High</h2>
        <ul>
          {gainers.map((coin) => (
            <li key={coin.id} className="coin-item">
              <img src={coin.image} alt={coin.name} className="coin-image" />
              <span className="coin-name">{coin.name} ({coin.symbol.toUpperCase()})</span>
              <span className="coin-change positive">+{coin.price_change_percentage_24h.toFixed(2)}%</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="section">
        <h2>Top Low</h2>
        <ul>
          {losers.map((coin) => (
            <li key={coin.id} className="coin-item">
              <img src={coin.image} alt={coin.name} className="coin-image" />
              <span className="coin-name">{coin.name} ({coin.symbol.toUpperCase()})</span>
              <span className="coin-change negative">{coin.price_change_percentage_24h.toFixed(2)}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopHighLow;
