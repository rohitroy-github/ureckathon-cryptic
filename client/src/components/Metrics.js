// to show project metrics like avg invested , total remaining
import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import sxprop from "./sxStyle";
import axios from "axios";
import {Grid, Typography} from "@mui/material";

const Metrics = ({projectdetails}) => {
  const [Json, setjson] = useState({});
  const ID = projectdetails._id;
  console.log(ID);
  const getMetrics = async () => {
    let metJson = await axios.post("http://localhost:5000/getmetrics", {
      projId: ID,
    });
    setjson(metJson.data);
    console.log(metJson);
  };
  useEffect(() => {
    getMetrics();
  }, []);

  return (
    <Box sx={sxprop.subboxsx}>
      <Grid container spacing={1}>
        <Grid item sm={6} xs={12}>
          Average Choice
        </Grid>
        <Grid item sm={6} xs={12}>
          <Typography variant="body2">
            {Json.average
              ? Json.average.toString().slice(0, 10) + " INR"
              : "Oops no one has invested yet"}
            {/* {Json.average ? "₹ " + Json.average : "Oops no one has invested yet"} */}
          </Typography>
        </Grid>

        {/* <Grid item sm={6} xs={12}>
          Invest distribution
        </Grid>
        <Grid item sm={6} xs={12}>
          <Typography variant="body2">
            {Json.standardDev ? "+/- $" + Json.standardDev : "Not much data"}
          </Typography>
        </Grid> */}

        <Grid item sm={6} xs={12}>
          Project Wallet Address
        </Grid>
        <Grid item sm={6} xs={12}>
          <Typography variant="body2">
            {projectdetails.projectWalletAddress}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Metrics;
