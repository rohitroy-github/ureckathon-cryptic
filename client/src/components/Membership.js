// to avail the membership for each user
import React, {useContext} from "react";
import Box from "@mui/material/Box";
import sxprop from "./sxStyle";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {Divider, Grid, Stack} from "@mui/material";
import PayButton from "./PayButton";

const Membership = () => {
  return (
    <div>
      <Box m={3}>
        {/* headingBox */}
        <Box sx={sxprop.headingboxsx}>
          {/* <Typography variant="headingcon">Active Projects</Typography> */}
          <Typography
            variant="h4"
            style={{color: "#1976d2", fontWeight: "600"}}
          >
            Our Membership Plans
          </Typography>

          <Typography variant="h7" style={{fontWeight: "600"}}>
            Choose a mebership plan that best fits your investing needs.
          </Typography>
        </Box>
        <Grid container spacing={4} sx={{marginTop: "10px"}}>
          {/* Plan-1 */}
          <Grid item xs={12} sm={6} lg={4} md={4}>
            <Card sx={sxprop.membercardsx}>
              <CardContent>
                <Stack direction={"column"} sx={{alignItems: "center"}}>
                  <Typography variant="memberheader">BASIC</Typography>
                  <Stack direction={"row"} spacing={1}>
                    <Typography variant="moneytext">Free</Typography>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{borderWidth: "2px", borderColor: "white"}}
                    />
                    <Stack direction={"column"}>
                      <Typography variant="cardhrdtxt">FOR</Typography>
                      <Typography variant="cardhrdtxt">5 ICOs</Typography>
                    </Stack>
                  </Stack>
                </Stack>
                <Typography
                  variant="body2"
                  style={{textAlign: "left"}}
                  sx={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    // height: "100px",
                  }}
                >
                  The <b>Basic Plan</b> provides investors and potential
                  investors to visit 5 active ICOs at a time on the Cryptic
                  Launcpad. Early access rights to upcoming ICOs are restricted
                  in this membership. A mandatory fees of Re. 1 is required for
                  account verification purpose. 24*7 customer support is not
                  provided.
                </Typography>
                <Grid container spacing={1}>
                  <Grid item xs={9}>
                    <Typography variant="listfont">ICO Limit</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="accordianhead">5</Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography variant="listfont">Early Access</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="accordianhead">No</Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography variant="listfont">TimeLimit</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="accordianhead">No</Typography>
                  </Grid>
                </Grid>
                <Stack
                  direction={"column"}
                  sx={{alignItems: "center", marginTop: "10px"}}
                >
                  <PayButton price="0100" type="IDO LIMIT 5" />
                  {/* <Button sx={sxprop.memberbtn}>Purchase Now</Button> */}

                  <Typography
                    id="modal-modal-description"
                    sx={{
                      mt: 2,
                      fontSize: "10px",
                      textAlign: "center",
                      fontWeight: "500",
                    }}
                  >
                    * This is a 6 Months subscription plan !
                  </Typography>
                </Stack>{" "}
              </CardContent>
            </Card>
          </Grid>

          {/* Plan-2 */}
          <Grid item xs={12} sm={6} lg={4} md={4}>
            <Card sx={sxprop.membercardsx}>
              <CardContent>
                <Stack direction={"column"} sx={{alignItems: "center"}}>
                  <Typography variant="memberheader">ICO SPECIAL</Typography>
                  <Stack direction={"row"} spacing={1}>
                    <Typography variant="moneytext">₹ 99</Typography>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{borderWidth: "2px", borderColor: "white"}}
                    />
                    <Stack direction={"column"}>
                      <Typography variant="cardhrdtxt">FOR</Typography>
                      <Typography variant="cardhrdtxt">10 ICOs</Typography>
                    </Stack>
                  </Stack>
                </Stack>
                <Typography
                  variant="body2"
                  style={{textAlign: "left"}}
                  sx={{marginTop: "10px", marginBottom: "10px"}}
                >
                  {" "}
                  The <b>ICO Special</b> plan offer the investors to checkout
                  and invest in at most 5 ICOs at a time which will be listed on
                  our Cryptic launchpad with a seamless user experiance and 24*7
                  customer support by our trained consultants. Early access
                  rights to upcoming ICOs are allowed in this membership.
                </Typography>
                <Grid container spacing={1}>
                  <Grid item xs={9}>
                    <Typography variant="listfont">ICO Limit</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="accordianhead">10</Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography variant="listfont">Early Access</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="accordianhead">Yes</Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography variant="listfont">TimeLimit</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="accordianhead">No</Typography>
                  </Grid>
                </Grid>
                <Stack
                  direction={"column"}
                  sx={{alignItems: "center", marginTop: "10px"}}
                >
                  <PayButton price="9900" type="IDO LIMIT 10" />

                  <Typography
                    id="modal-modal-description"
                    sx={{
                      mt: 2,
                      fontSize: "10px",
                      textAlign: "center",
                      fontWeight: "500",
                    }}
                  >
                    * This is a 6 Months subscription plan !
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          {/* Plan-3 */}
          <Grid item xs={12} sm={6} lg={4} md={4}>
            <Card sx={sxprop.membercardsx}>
              <CardContent>
                <Stack direction={"column"} sx={{alignItems: "center"}}>
                  <Typography variant="memberheader">
                    VENTURE SPECIAL
                  </Typography>
                  <Stack direction={"row"} spacing={1}>
                    <Typography variant="moneytext">₹ 399</Typography>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{borderWidth: "2px", borderColor: "white"}}
                    />
                    <Stack direction={"column"}>
                      <Typography variant="cardhrdtxt">FOR</Typography>
                      <Typography variant="cardhrdtxt">UNLIMITED</Typography>
                    </Stack>
                  </Stack>
                </Stack>
                <Typography
                  variant="body2"
                  style={{textAlign: "left"}}
                  sx={{marginTop: "10px", marginBottom: "10px"}}
                >
                  {" "}
                  The <b>Venture Special</b> plan is our most recommended and
                  frequently purchased plan by our investors. It allows
                  potential investors to checkout all the active and upcoming
                  ICO projects on the Cryptic Launchpad with a seamless user
                  experience and 24 * 7 customer support by our trained
                  technical staff.
                </Typography>
                <Grid container spacing={1}>
                  <Grid item xs={9}>
                    <Typography variant="listfont">ICO Limit</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="accordianhead">Unlimited</Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography variant="listfont">Early Access</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="accordianhead">Yes</Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography variant="listfont">Time Limit</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="accordianhead">No</Typography>
                  </Grid>
                </Grid>
                <Stack
                  direction={"column"}
                  sx={{alignItems: "center", marginTop: "10px"}}
                >
                  <PayButton price="39900" type="IDO LIMIT Unlimited" />

                  <Typography
                    id="modal-modal-description"
                    sx={{
                      mt: 2,
                      fontSize: "10px",
                      textAlign: "center",
                      fontWeight: "500",
                    }}
                  >
                    * This is a 6 Months subscription plan !
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Membership;
