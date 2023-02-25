import React, { useState, useContext, useEffect } from "react";
import { Avatar, Divider, Grid, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import sxprop from "./sxStyle";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import LanguageIcon from "@mui/icons-material/Language";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link, Route, Routes } from "react-router-dom";
import Metrics from "./Metrics";
import ProjectInfo from "./ProjectInfo";
import Allocation from "./Allocation";
import YourBid from "./YourBid";
import UserContext from "../context/appContext";
import InvestModal from "./InvestModal";
import { TransactionContext } from "../context/TransactionContext";
import axios from "axios";

const AirDropDetails = () => {
  const { currentAccount } = useContext(TransactionContext);
  const context = useContext(UserContext);
  const { projectdetails, setprojectList } = context;
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    if (currentAccount === "") {
      alert("Connect Wallet First");
    } else {
      setOpen(true);
    }
  };

  var investInfo = {
    id: projectdetails._id,
    totalToken: projectdetails.total_token,
    totalFund: projectdetails.total_fund,
    Name: projectdetails.name,
    tokenName: projectdetails.token_name,
  };


  const getpjtdtls = async (id) => {
    axios.post('http://localhost:5000/getOneproj', { pjtid: id }).then((res) => {
      setprojectList(res.data.pjt)
      console.log(res);
    }).catch((error) => {
      alert(error.message)
    })
  }
  useEffect(() => {
    getpjtdtls(localStorage.getItem('projId'))
  }, [])

  return (
    <Box sx={sxprop.headingboxsx}>
      {open && <InvestModal mod={{ open, setOpen, investInfo }} />}
      <Stack
        direction={"column"}
        spacing={4}
        sx={{
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Card sx={sxprop.headercardsx}>
          <CardContent>
            <Grid
              container
              spacing={1}
              sx={{ alignItems: "center", marginBottom: "10px" }}
            >
              <Grid item xs={10}>
                <Typography variant="headingcon">
                  {projectdetails.name}
                </Typography>
                <Stack direction={"column"}>
                  <Typography variant="captionmod">
                    ${projectdetails.token_name}
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
                  {projectdetails.img_url == "NONE" ? (
                    <Avatar sx={{ bgcolor: "#838588" }}>NO</Avatar>
                  ) : (
                    <Avatar
                      sx={{ bgcolor: "#838588" }}
                      src={projectdetails.img_url}
                    />
                  )}
                </Typography>
              </Grid>
            </Grid>
            <Typography
              variant="body2"
              sx={{ margin: "10px", whiteSpace: "pre-line" }}
            >
              {projectdetails.writeup}
            </Typography>
          </CardContent>
        </Card>
        <Box sx={sxprop.loadbox}>
          <Button variant="outlined" sx={sxprop.buttonsx} onClick={handleModal}>
            Invest Now
          </Button>
        </Box>
      </Stack>
      <Stack direction={"row"} spacing={4} sx={{ margin: "20px" }}>
        <Typography>
          <Link to="info" style={{ textDecoration: "none" }}>
            Project Details
          </Link>
        </Typography>
        <Typography>
          <Link to="metrics" style={{ textDecoration: "none" }}>
            Metrics
          </Link>
        </Typography>
        <Typography>
          <Link to="allocation" style={{ textDecoration: "none" }}>
            Your Allocation
          </Link>
        </Typography>
      </Stack>
      <Divider variant="middle" sx={{ margin: "20px" }} />
      <Routes>
        <Route
          path="/*"
          element={<ProjectInfo projectdetails={projectdetails} />}
        ></Route>
        <Route
          path="metrics"
          element={<Metrics projectdetails={projectdetails} />}
        ></Route>
        <Route
          path="allocation"
          element={
            <Allocation
              proj={{
                tkn_name: projectdetails.token_name,
                pdt_id: projectdetails._id,
              }}
            />
          }
        ></Route>
        <Route path="bid" element={<YourBid />}></Route>
      </Routes>
      <Accordion sx={sxprop.sxfaq}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="cardhrdtxt">Project FAQs</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack
            spacing={1}
            direction="column"
            sx={{ marginTop: "0px", marginLeft: "20px", width: "90%" }}
          >
            <Typography variant="listfont" display="block" gutterBottom>
              How to invest in this ICO ?
            </Typography>
            <Typography
              variant="listfont"
              display="block"
              gutterBottom
              style={{ fontWeight: "400" }}
            >
              Press the [INVEST NOW] button to start the investing procedure.
            </Typography>

            <Typography variant="listfont" display="block" gutterBottom>
              Can I invest using cryptocurrencies ?
            </Typography>
            <Typography
              variant="listfont"
              display="block"
              gutterBottom
              style={{ fontWeight: "400" }}
            >
              Yes, you can invest using cryptocurrencies (Ethers) for investing
              in any ICO.
            </Typography>

            <Typography variant="listfont" display="block" gutterBottom>
              Can I invest using fiat currencies ?
            </Typography>
            <Typography
              variant="listfont"
              display="block"
              gutterBottom
              style={{ fontWeight: "400" }}
            >
              No, you cannot make ICO investment using fiat cuurrencies for now
              but our team is working on implementing that soon.
            </Typography>

            <Typography variant="listfont" display="block" gutterBottom>
              What's an ICO ?
            </Typography>
            <Typography
              variant="listfont"
              display="block"
              gutterBottom
              style={{ fontWeight: "400" }}
            >
              An initial coin offering (ICO) is a type of capital-raising
              activity in the cryptocurrency and blockchain environment. The ICO
              can be viewed as an initial public offering (IPO) that uses
              cryptocurrencies.
            </Typography>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default AirDropDetails;
