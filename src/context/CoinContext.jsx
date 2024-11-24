// import { createContext, useEffect, useState } from "react";

// export const CoinContext = createContext();

// const CoinContextProvider = (props) => {
//   const [allCoin, setAllCoin] = useState([]);
//   const [currency, setCurrencyState] = useState({
//     name: "usd",
//     symbol: "$",
//   });
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [coinCache, setCoinCache] = useState({});

//   const setCurrency = (newCurrency) => {
//     setCurrencyState((prev) => ({ ...prev, ...newCurrency }));
//   };

//   const fetchAllCoin = async () => {
//     if (coinCache[currency.name]) {
//       setAllCoin(coinCache[currency.name]);
//       return;
//     }

//     const options = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         'x-cg-demo-api-key': 'CG-vr9q42xzksSXXNze9mYXezYy',
//       },
//     };

//     setLoading(true);
//     try {
//       const response = await fetch(
//         `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
//         options
//       );
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       setAllCoin(data);
//       setCoinCache((prevCache) => ({ ...prevCache, [currency.name]: data }));
//       setError(null);
//     } catch (err) {
//       console.error(err);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAllCoin();
//   }, [currency]);

//   const contextValue = {
//     allCoin,
//     currency,
//     setCurrency,
//     error,
//     loading,
//   };

//   return (
//     <CoinContext.Provider value={contextValue}>
//       {props.children}
//     </CoinContext.Provider>
//   );
// };

// export default CoinContextProvider;









import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrencyState] = useState({
    name: "usd",
    symbol: "$",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [coinCache, setCoinCache] = useState({});

  const setCurrency = (newCurrency) => {
    setCurrencyState((prev) => ({ ...prev, ...newCurrency }));
  };

  const fetchAllCoin = async () => {
    if (coinCache[currency.name]) {
      setAllCoin(coinCache[currency.name]);
      return;
    }

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': process.env.REACT_APP_CG_API_KEY,
      },
    };

    setLoading(true);
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
        options
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setAllCoin(data);
      setCoinCache((prevCache) => ({ ...prevCache, [currency.name]: data }));
      setError(null);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllCoin();
  }, [currency]);

  const contextValue = {
    allCoin,
    currency,
    setCurrency,
    error,
    loading,
  };

  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
