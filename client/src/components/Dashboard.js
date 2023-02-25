// This component is the dashboard where all user interacts with all the components
import React, {useState, useContext, useEffect} from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import sxprop from "./sxStyle";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {Link, Route, Routes} from "react-router-dom";
// components import
import Allprojects from "./Allprojects";
import AirDrop from "./AirDrop";
import ProjectDetails from "./ProjectDetails";

import Membership from "./Membership";

import Feedback from "./Feedback";
import ContactUs from "./ContactUs";

import LaunchSection from "./LaunchSection";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsAndConditions from "./TermsAndConditions";

import UserContext from "../context/appContext";

import FacebookIcon from "@mui/icons-material/Facebook";

import TwitterIcon from "@mui/icons-material/Twitter";
import GithubIcon from "@mui/icons-material/GitHub";

import LanguageIcon from "@mui/icons-material/Language";

// import axios from "axios";

// importingTransactionContextProviders
import {TransactionContext} from "../context/TransactionContext";

import {shortenWalletAddress} from "../utils/shortenWalletAddress";
import ConnectWalletError from "./ConnectWalletError";
import AirDropDetails from "./AirDropDetails";
import PaymentSuccessfull from "./PaymentSuccessfull";

const drawerWidth = 300;

const Dashboard = () => {
  const context = useContext(UserContext);
  const {user, setuser} = context;

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("userCrypto")) != null) {
      // alert('user logged in')
    }
  }, []);

  // destructuringTransactionContextProviderValue
  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendTransaction,
    formData,
    isLoading,
  } = useContext(TransactionContext);
  const handleConnect = async () => {
    connectWallet();
  };

  const drawer = (
    <>
      <Toolbar>
        {/* <Typography variant="logosame">Cryptic</Typography> */}
        <Link to="/" style={{textDecoration: "none"}}>
          <Typography
            variant="h5"
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: "35px",
              textAlign: "left",
            }}
          >
            Cryptic
          </Typography>
        </Link>
        <Box sx={sxprop.logo}>{/* <img src="../assets/logo.png"></img> */}</Box>
      </Toolbar>
      <Box sx={sxprop.toolboxsx}>
        {/* ifWalletIsNotConnected */}
        {!currentAccount && (
          <>
            {/* // <Button variant="outlined" sx={sxprop.buttonsx} onClick={handleuser}> */}
            <Button
              // variant="outlined"
              sx={sxprop.connectWalletButton}
              onClick={handleConnect}
            >
              Connect WEB 3.0 Wallet
            </Button>

            <Typography
              variant="h7"
              color="black"
              gutterBottom
              align="center"
              style={{fontSize: "12px", marginTop: "8px", fontWeight: "bold"}}
            >
              Your Cryptic Launchpad experience will be limited without
              connecting.{" "}
            </Typography>
          </>
        )}

        {/* ifWalletIsConnected  */}
        {currentAccount && (
          <>
            <Button
              variant="outlined"
              sx={sxprop.connectWalletButton}
              size="large"
            >
              {shortenWalletAddress(currentAccount)}
            </Button>

            <Typography
              variant="h7"
              color="white"
              gutterBottom
              align="center"
              style={{
                fontSize: "12px",
                marginTop: "8px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Web 3.0 Wallet Connected :)
            </Typography>
          </>
        )}
      </Box>

      <Stack
        spacing={1}
        direction="column"
        sx={{marginTop: "20px", marginLeft: "20px"}}
      >
        <Typography
          variant="listfont"
          display="block"
          gutterBottom
          style={{fontSize: "15px"}}
        >
          <Link
            to="/dashboard"
            style={{textDecoration: "none", color: "white"}}
          >
            Active Projects
          </Link>
        </Typography>

        <Typography
          variant="listfont"
          display="block"
          gutterBottom
          style={{fontSize: "15px"}}
        >
          <Link to="airdrop" style={{textDecoration: "none", color: "white"}}>
            Upcoming Projects
          </Link>
        </Typography>

        <Typography
          variant="listfont"
          display="block"
          color="white"
          gutterBottom
          style={{fontSize: "15px", color: "white"}}
        >
          <Link
            to="membership"
            style={{textDecoration: "none", color: "white"}}
          >
            Membership
          </Link>
        </Typography>
      </Stack>
    </>
  );
  // ResourceSectionDropdown
  const Resource = (
    <Accordion sx={sxprop.sxAccordian}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{color: "white"}} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="accordianhead">Resource</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={1} direction="column">
          <Typography variant="listfont" display="block" gutterBottom>
            <Link
              to="feedbackAndBugReport"
              style={{textDecoration: "none", color: "white"}}
            >
              Feedback & Bug Report
            </Link>
          </Typography>
          <Typography variant="listfont" display="block" gutterBottom>
            <Link
              to="contactUs"
              style={{textDecoration: "none", color: "white"}}
            >
              Contact Us
            </Link>
          </Typography>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );

  // GeneralSectionDropdown
  const General = (
    <Accordion sx={sxprop.sxAccordian}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{color: "white"}} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{color: "white"}}
      >
        <Typography variant="accordianhead">General</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={1} direction="column">
          <Typography variant="listfont" display="block" gutterBottom>
            <Link
              to="launchapplyto"
              style={{textDecoration: "none", color: "white"}}
            >
              Apply to Launch
            </Link>
          </Typography>
          <Typography variant="listfont" display="block" gutterBottom>
            <Link
              to="privacyPolicy"
              style={{textDecoration: "none", color: "white"}}
            >
              Privacy Policy
            </Link>
          </Typography>
          <Typography variant="listfont" display="block" gutterBottom>
            <Link
              to="termsAndConditions"
              style={{textDecoration: "none", color: "white"}}
            >
              Terms & Conditions
            </Link>
          </Typography>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );

  const Socials = (
    <Stack
      direction={"row"}
      spacing={3}
      alignItems="center"
      sx={{
        position: "absolute",
        alignItems: "center",
        bottom: 10,
        marginLeft: "25px",
      }}
    >
      <a href="https://github.com/rohitroy-github/Cryptic" target="_blank">
        <LanguageIcon style={{color: "white", cursor: "pointer"}} />
      </a>
      <a href="https://github.com/rohitroy-github/Cryptic" target="_blank">
        <FacebookIcon style={{color: "white", cursor: "pointer"}} />
      </a>
      <a href="https://github.com/rohitroy-github/Cryptic" target="_blank">
        <TwitterIcon style={{color: "white", cursor: "pointer"}} />
      </a>
      <a href="https://github.com/rohitroy-github/Cryptic" target="_blank">
        <GithubIcon style={{color: "white", cursor: "pointer"}} />
      </a>
    </Stack>
  );

  return (
    <Box sx={{display: "flex"}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          display: {xs: "block", sm: "none"},
          "& .MuiDrawer-paper": {boxSizing: "border-box", width: drawerWidth},
          backgroundColor: "white",
        }}
      >
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{mr: 2, display: {sm: "none"}}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="logosame">Cryptic</Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{width: {sm: 240}, flexShrink: {sm: 0}}}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: {xs: "block", sm: "none"},
            "& .MuiDrawer-paper": {boxSizing: "border-box", width: drawerWidth},
          }}
          style={{
            backgroundImage:
              "linear-gradient(to right bottom, #00426b, #1e608e, #367fb3, #4ca0d8, #62c3ff)",
          }}
        >
          {drawer}
          {Resource}
          {General}
          {Socials}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={sxprop.drawersx}
          open
          style={{
            backgroundImage:
              "linear-gradient(to right bottom, #00426b, #1e608e, #367fb3, #4ca0d8, #62c3ff)",
          }}
        >
          {drawer}
          {Resource}
          {General}
          {Socials}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: {sm: `calc(100% - ${drawerWidth}px)`},
          marginLeft: "29px",
          margin: {xs: "0 5px"},
        }}
      >
        <Routes>
          <Route path="/" element={<Allprojects />}></Route>
          {/* <Route path="/dashboard" element={<Allprojects />}></Route> */}
          <Route
            path="/airdrop"
            element={
              currentAccount === "" ? <ConnectWalletError /> : <AirDrop />
            }
          ></Route>
          <Route path="/projectdetails/*" element={<ProjectDetails />}></Route>
          <Route path="/allprojects/*" element={<ProjectDetails />}></Route>
          <Route path="/membership" element={<Membership />}></Route>
          <Route path="/payment-successful" element={<PaymentSuccessfull />}></Route>
          <Route path="/feedbackAndBugReport" element={<Feedback />}></Route>
          <Route path="/contactUs" element={<ContactUs />}></Route>

          <Route
            path="/launchapplyto"
            element={
              currentAccount === "" ? <ConnectWalletError /> : <LaunchSection />
            }
          ></Route>
          <Route path="/privacyPolicy" element={<PrivacyPolicy />}></Route>
          <Route
            path="/termsAndConditions"
            element={<TermsAndConditions />}
          ></Route>
          <Route
            path="airdrop/airdrop-details/*"
            element={<AirDropDetails />}
          ></Route>
        </Routes>
      </Box>
    </Box>
  );
};

export default Dashboard;
