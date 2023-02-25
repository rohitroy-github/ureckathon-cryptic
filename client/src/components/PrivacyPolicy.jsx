// PrivacyPolicyPage

import React from "react";

import {Typography} from "@mui/material";
import {Box} from "@mui/system";
import sxprop from "./sxStyle";

const PrivacyPolicy = () => {
  return (
    <div>
      <Box sx={sxprop.pageContainer}>
        {/* headingBox */}
        <Box sx={sxprop.headingboxsx}>
          {/* <Typography variant="headingcon">Active Projects</Typography> */}
          <Typography
            variant="h4"
            style={{color: "#1976d2", fontWeight: "600"}}
          >
            Privacy Policy
          </Typography>

          <Typography variant="h7" style={{fontWeight: "600"}}>
            Our privacy policies define us.
          </Typography>
        </Box>

        <Box mt={3}>enterTextHere</Box>
      </Box>
    </div>
  );
};

export default PrivacyPolicy;
