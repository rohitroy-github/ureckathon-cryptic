// to show detailed info of a particular projects
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
import { height } from "@mui/system";
import axios from "axios";

const ProjectDetails = () => {
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
    projectWalletAddress: projectdetails.projectWalletAddress,
  };

  // INRconversionFunction
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
    <Box m={3}>
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
              <Grid item xs={12}>
                <Stack direction={"row"} spacing={1}>
                  <Typography
                    variant="h5"
                    style={{ color: "#1976d2", fontWeight: "500" }}
                  >
                    Project
                  </Typography>
                  <Typography
                    variant="h5"
                    style={{ color: "#1976d2", fontWeight: "800" }}
                  >
                    {projectdetails.name}
                  </Typography>
                </Stack>
              </Grid>

              <Grid item xs={6}>
                <Stack direction={"row"} spacing={4} style={{}}>
                  <LanguageIcon style={{ fontSize: "25px", cursor: "pointer" }} />
                  <FacebookIcon style={{ fontSize: "25px", cursor: "pointer" }} />
                  <LinkedInIcon style={{ fontSize: "25px", cursor: "pointer" }} />
                  <TelegramIcon style={{ fontSize: "25px", cursor: "pointer" }} />
                  <TwitterIcon style={{ fontSize: "25px", cursor: "pointer" }} />
                </Stack>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="cardhrdtxt">
                  {projectdetails.img_url == "NONE" ? (
                    <Avatar sx={{ bgcolor: "#838588" }}>NO</Avatar>
                  ) : (
                    <Avatar
                      sx={{ bgcolor: "#838588", width: "30%", height: "30%" }}
                      src={projectdetails.img_url}
                      sizes="large"
                    />
                  )}
                </Typography>
              </Grid>

              <Grid item xs={12} style={{}}>
                <Stack direction={"row"} spacing={1} style={{ margin: "0px" }}>
                  <Typography
                    variant="h7"
                    style={{ color: "#1976d2", fontWeight: "500" }}
                  >
                    Token Symbol
                  </Typography>
                  <Typography
                    variant="h7"
                    style={{ color: "#1976d2", fontWeight: "800" }}
                  >
                    {projectdetails.token_name}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>

            {/* <Typography sx={{margin: "10px", whiteSpace: "pre-line"}}>
              {projectdetails.writeup}
            </Typography> */}
            <Typography
              variant="h7"
              style={{
                fontWeight: "600",
                // margin: "10px",
                whiteSpace: "pre-line",
              }}
            >
              {projectdetails.writeup}
            </Typography>
          </CardContent>
        </Card>

        <Box
          sx={sxprop.loadbox}
          style={{ width: "100%", justifyContent: "center" }}
        >
          <Button sx={sxprop.buttonsx} onClick={handleModal}>
            Invest Now
          </Button>
        </Box>
      </Stack>

      <Stack
        direction={"row"}
        spacing={10}
        sx={{
          marginTop: "20px",
          width: "100%",
          justifyContent: "center",
          boxShadow: 3,
          padding: "12px",
        }}
      >
        <Typography variant="cardhrdtxt">
          <Link to="info" style={{ textDecoration: "none" }}>
            Project Details
          </Link>
        </Typography>
        <Typography variant="cardhrdtxt">
          <Link to="metrics" style={{ textDecoration: "none" }}>
            Metrics
          </Link>
        </Typography>
        <Typography variant="cardhrdtxt">
          <Link to="allocation" style={{ textDecoration: "none" }}>
            Your Allocation
          </Link>
        </Typography>
      </Stack>

      <Divider variant="middle" sx={{ margin: "15px 50px 30px 50px" }} />

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

      <Divider variant="middle" sx={{ margin: "30px 50px 0px 50px" }} />

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

export default ProjectDetails;
