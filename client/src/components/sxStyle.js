// this is componets where all the custom styles are done and passed as props
const sxprop = {
  loadbox: {display: "flex", justifyContent: "center", margin: "15px 10px"},
  logo: {
    display: "flex",
    AlignContent: "center",
    justifyContent: "center",
    margin: "5px 0px 15px 0px",
    transition: "transform 0.4s",
    "&:hover": {
      transform: "scale(0.9)",
    },
  },

  // .logoImg {
  //   width: 130px;
  //   height: auto;
  //   transition: transform 0.4s;
  // }

  // .logoImg:hover {
  //   transform: scale(0.9);
  // }

  toolboxsx: {
    display: "flex",
    flexDirection: "column",
    AlignContent: "center",
    margin: "0px 10px",
  },
  buttonsx: {
    width: "fitcontent",
    height: "fitcontent",
    paddingLeft: "10px",
    paddingRight: "10px",
    borderRadius: "5px",
    border: "2px solid #1976d2",
    fontFamily: "Montserrat",
    fontWeight: "800",
    color: "#1976d2",
    // growAnimation
    transition: "transform 0.4s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  connectWalletButton: {
    width: "fitcontent",
    height: "fitcontent",
    borderRadius: "10px",
    border: "2px solid white",
    fontFamily: "Montserrat",
    fontWeight: "800",
    color: "white",

    // growAnimation
    transition: "transform 0.4s",
    "&:hover": {
      transform: "scale(1.05)",
      color: "white",
      border: "2px solid #1976d2",
    },
  },
  greybtnsx: {
    width: "fitcontent",
    borderRadius: "20px",
    "&.MuiButton-outlined": {
      color: "#8c8c8c",
      borderColor: "#8c8c8c",
    },
    "&.MuiButton-root": {
      fontFamily: "Montserrat",
      fontSize: "14px",
      fontWeight: "600",
    },
  },
  sxAccordian: {
    color: "white",
    marginTop: "10px",

    "&.MuiAccordion-root": {
      backgroundColor: "transparent",
      border: 0,
    },
    "&:before": {
      backgroundImage:
        "linear-gradient(to right bottom, #00426b, #1e608e, #367fb3, #4ca0d8, #62c3ff)",
      boxShadow: 0,
    },
  },
  drawersx: {
    display: {xs: "none", sm: "block"},
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: 250,
      borderRadius: "0px 25px 25px 0px",
      boxShadow: "10px 0px 30px 0px rgba(138,138,138,1)",
      padding: "10px",
      backgroundImage:
        "linear-gradient(to right bottom, #00426b, #1e608e, #367fb3, #4ca0d8, #62c3ff)",
    },
  },
  headingboxsx: {
    margin: "5px 0",
    fontFamily: "Montserrat",
    fontWeight: "600",
  },

  pageContainer: {
    margin: "30px",
    fontFamily: "Montserrat",
    fontWeight: "600",
    "@media (max-width: 600px)": {
      marginTop: "75px",
      marginLeft: "0",
      marginRight: "0",
      textAlign: "left",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "100%",
    },
  },

  subboxsx: {margin: "10px 15px"},
  buttongrpsx: {
    margin: "18px 0",
    marginTop: {xs: "45px"},
  },

  customcardsx: {
    width: "100%",
    borderRadius: "10px",
    backgroundColor: "#e9e9e9",
    boxShadow: 8,
    padding: "10px",
  },

  headercardsx: {
    width: "50%",
    borderRadius: "30px",
    backgroundColor: "transparent",
    boxShadow: 0,
  },
  sxfaq: {
    "&.MuiAccordion-root": {
      boxShadow: 3,
      width: "100%",
      marginTop: "20px",
    },
    "&:before": {
      backgroundColor: "transparent",
      boxShadow: 0,
      width: "100%",
    },
  },
  membercardsx: {
    backgroundColor: "#1976d2",
    color: "white",
    width: "100%",
    borderRadius: "10px",
    boxShadow: 8,
    padding: "10px",
    // height: "400px",
  },

  memberbtn: {
    marginTop: "5px",
    width: "fitcontent",
    height: "fitcontent",
    borderRadius: "5px",
    paddingLeft: "10px",
    paddingRight: "10px",
    fontFamily: "Montserrat",
    fontWeight: "800",
    color: "#1976d2",
    backgroundColor: "white",
    //growAnimation
    transition: "transform 0.4s",
    "&:hover": {
      transform: "scale(1.1)",
      color: "#1976d2",
      backgroundColor: "white",
    },
    // transition: "transform 0.2s",
    // "&.MuiButton-outlined": {
    //   color: "#8c8c8c",
    //   borderColor: "#8c8c8c",
    // },
    // "&.MuiButton-root": {
    //   fontFamily: "Montserrat",
    //   fontSize: "14px",
    //   backgroundColor: "white",
    // },
    // "&:hover": {
    //   transform: "scale(1.1)",
    // },
  },
};

export default sxprop;
