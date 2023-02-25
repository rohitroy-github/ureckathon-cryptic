import React, {useState, useContext} from "react";
import axios from "axios";
import {Button} from "@mui/material";
import sxprop from "./sxStyle";
import {TransactionContext} from "../context/TransactionContext";
import UserContext from "../context/appContext";

function PayButton({price, type, noOfinvested}) {
  const {currentAccount} = useContext(TransactionContext);
  
  const handleCheckout = () => {
    axios
      .post("http://localhost:5000/create-checkout-session", {
        price,
        type,
      })
      .then((res) => {
        if (res.data.url) {
          axios
            .post(" http://localhost:5000/addmember", {
              userWallet: currentAccount,
              memberShip: type,
              noOfinvested: noOfinvested,
            })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err.message));

          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };
  

  return (
    <div>
      <Button 
      onClick={() => handleCheckout()} 
      sx={sxprop.memberbtn}>
        Purchase Now
      </Button>
    </div>
  );
}

export default PayButton;
