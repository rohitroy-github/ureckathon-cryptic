// This components is used along with Airdrop componets for card view
import React, {useContext} from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import LanguageIcon from "@mui/icons-material/Language";
import Typography from "@mui/material/Typography";

import {ThemeProvider} from "@emotion/react";
import {createTheme} from "@mui/material";
import customTheme from "./dashStyle";

import sxprop from "./sxStyle";
import {Avatar, Grid, Stack} from "@mui/material";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import UserContext from "../context/appContext";

const AirdropCards = ({ido}) => {
  const context = useContext(UserContext);
  const {setprojectList} = context;
  const handleproject = () => {
    setprojectList(ido);
    localStorage.setItem("projId", ido._id);
  };

  const theme = createTheme(customTheme);

  return (
    <ThemeProvider theme={theme}>
      <Link to="airdrop-details" style={{textDecoration: "none"}}>
        <Card sx={sxprop.customcardsx} onClick={handleproject}>
          <Stack sx={{alignItems: "center"}}>
            <Button
              variant="outlined"
              // sx={sxprop.buttonsx}
              style={{
                width: "fitcontent",
                height: "fitcontent",
                borderRadius: "10px",
                fontFamily: "Montserrat",
                fontWeight: "800",
                color: "white",
                backgroundColor: "#1976d2",
              }}
            >
              Airdrop Project
            </Button>
          </Stack>

          <CardContent>
            <Grid
              container
              spacing={1}
              sx={{alignItems: "center", marginBottom: "10px"}}
            >
              <Grid item xs={10}>
                <Typography variant="cardhrdtxt">{ido.name}</Typography>
                <Stack direction={"column"}>
                  <Typography variant="captionmod">
                    ${ido.token_name}
                  </Typography>
                  <Stack direction={"row"} spacing={1}>
                    <LanguageIcon />
                    <FacebookIcon />
                    <LinkedInIcon />
                    <TelegramIcon />
                    <TwitterIcon />
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="cardhrdtxt">
                  {ido.img_url == "NONE" ? (
                    <Avatar sx={{bgcolor: "#838588"}}>NO</Avatar>
                  ) : (
                    <Avatar sx={{bgcolor: "#838588"}} src={ido.img_url} />
                  )}
                </Typography>
              </Grid>
            </Grid>
            <Typography
              variant="body2"
              sx={{
                // margin: "10px",
                height: "130px",
                width: {sm: "328px", xs: "250px"},
              }}
            >
              {ido.writeup.slice(0, 200)} ...
            </Typography>
            <Grid container spacing={1}>
              {/* DisplaytotalFundAllocatedByTheProjectHere */}

              <Grid item xs={9}>
                <Typography variant="listfont">Starting Date</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="accordianhead">
                  {`${ido.start_date.slice(0, 10)}`}
                </Typography>
              </Grid>

              <Grid item xs={9}>
                <Typography variant="listfont">Ending Date</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="accordianhead">
                  {`${ido.end_date.slice(0, 10)}`}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Link>
    </ThemeProvider>
  );
};

export default AirdropCards;
