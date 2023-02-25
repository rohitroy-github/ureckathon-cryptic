// ContactUsPage

import React from "react";

import {Typography} from "@mui/material";
import {Box} from "@mui/system";
import sxprop from "./sxStyle";

const ContactUs = () => {
  return (
    <div>
      {" "}
      <Box sx={sxprop.pageContainer}>
        {/* headingBox */}
        <Box sx={sxprop.headingboxsx}>
          {/* <Typography variant="headingcon">Active Projects</Typography> */}
          <Typography
            variant="h4"
            style={{color: "#1976d2", fontWeight: "600"}}
          >
            Contact Us
          </Typography>

          <Typography variant="h7" style={{fontWeight: "600"}}>
            We are loyal to our awesome investors.
          </Typography>
        </Box>

        <Box mt={3}>enterTextHere</Box>
      </Box>
    </div>
  );
};

export default ContactUs;
