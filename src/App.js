import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function App() {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => setCryptos(res.data))
      .catch((error) => console.log({ error }));
  }, []);
  return (
    <div className="App">
      <div className="title">
        <h1> Crypto Monitor </h1>
      </div>
      <table>
        <tr>
          <td> Name </td>
          <td> Symbol </td>
          <td> Current Price </td>
          <td> %Change(24h)</td>
        </tr>
        {cryptos.map((crypto) => {
          return (
            <tr>
              <td> {crypto.name} </td>
              <td style={{ textTransform: "uppercase" }}> {crypto.symbol} </td>
              <td> {crypto.current_price} </td>
              <td> {crypto.price_change_percentage_24h} % </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
