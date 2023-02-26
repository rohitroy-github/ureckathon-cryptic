import React from "react";

import {Grid, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import sxprop from "./sxStyle";
import Typography from "@mui/material/Typography";

const ProjectInfo = ({projectdetails}) => {
  return (
    <Box sx={sxprop.subboxsx}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Stack direction={"column"}>
            <Typography variant="cardhrdtxt">ICO Information</Typography>
            <Grid container spacing={1} style={{marginTop: "2px"}}>
              <Grid item xs={6}>
                <Typography variant="body2">ICO opens on</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">
                  {projectdetails.start_date?.slice(0, 10)}
                </Typography>
              </Grid>
              {/* <Grid item xs={6}>
            <Typography variant="body2">Early Access</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">dates</Typography>
          </Grid> */}
              <Grid item xs={6}>
                <Typography variant="body2">ICO closes on</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">
                  {projectdetails.end_date?.slice(0, 10)}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">Token Price</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">
                  {projectdetails.swap_rate}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">Total Raises</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">
                  ${projectdetails.total_fund.toString().slice(0, 10)}
                </Typography>
              </Grid>

              {/* <Grid item xs={6}>
                <Typography variant="body2">Wallet Address</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">
                  ${projectdetails.projectWalletAddress}
                </Typography>
              </Grid> */}
            </Grid>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Stack direction={"column"}>
            <Typography variant="cardhrdtxt">Token Information</Typography>
            <Grid container spacing={1} style={{marginTop: "2px"}}>
              <Grid item xs={6}>
                <Typography variant="body2">Name</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">{projectdetails.name}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">Token Symbol</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">
                  {projectdetails.token_name}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">Total Supply</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">
                  {projectdetails.total_token.toString().slice(0, 10)}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">Access Type</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">Private</Typography>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectInfo;
