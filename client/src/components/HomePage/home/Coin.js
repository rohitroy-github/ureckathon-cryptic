import React from "react";

const Coin = ({ name, image, rank, price }) => {
  return (
    <div className="grid_comp">
      <div className="comp_top">
        <div className="comp_top_head">
          <img src={image} alt="cryptoCoin" />
          <div>
            <h2>{name}</h2>
          </div>
          <p className="color_green">Rank - {rank}</p>
        </div>
      </div>
      <div className="comp_middle">
        <p>Price - {price} BTC</p>
      </div>
    </div>
  );
};

export default Coin;
