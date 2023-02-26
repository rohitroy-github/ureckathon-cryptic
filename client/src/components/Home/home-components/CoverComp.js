import React, {useState, useEffect} from "react";
import axios from "axios";
import Coin from "./Coin";

import {Typography} from "@mui/material";

const CoverComp = (props) => {
  function handleBackClick() {
    props.scrollTo.current.scrollIntoView({behavior: "smooth"});
  }
  const [coins, setCoins] = useState([]);

  const options = {
    method: "GET",
    url: "https://api.coingecko.com/api/v3/search/trending",
    params: {
      vs_currency: "inr",
      page: "1",
      per_page: "100",
      order: "market_cap_desc",
    },
    headers: {
      "X-RapidAPI-Key": "f08ab9d573mshd814384c2763d49p1e0283jsn71c1ca0d99d5",
      "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        // taking the top four trending cryptos
        setCoins(response.data.coins.slice(0, 10));
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // console.log(coins);

  return (
    <div className="cover">
      <div className="cover_top">
        {/* <h1>Invest in ICOs like a pro.</h1>
        <p>Become a subscriber and know beforehand which ido to invest in</p> */}

        <Typography variant="h1" style={{color: "white", fontWeight: "600"}}>
          Invest in ICOs like a pro.{" "}
        </Typography>

        <Typography
          variant="h6"
          style={{
            fontWeight: "600",
            marginTop: "20px",
            marginBottom: "20px",
            "@media (max-width: 786px)": {
              fontWeight: "600",
              marginTop: "25px",
              marginBottom: "25px",
            },
          }}
        >
          Become a subscriber right now and chekout some awesome ICO
          investments.{" "}
        </Typography>
        <button className="yellow_button" onClick={handleBackClick}>
          Register Now
        </button>
      </div>

      <div className="cover_middle cover_grid">
        {coins.length > 0 ? (
          coins.map((coin) => {
            return (
              <Coin
                key={coin.item.coin_id}
                name={coin.item.name}
                image={coin.item.thumb}
                rank={coin.item.market_cap_rank}
                price={coin.item.price_btc}
              />
            );
          })
        ) : (
          <p>No coins in the array</p>
        )}
      </div>
    </div>
  );
};

export default CoverComp;
