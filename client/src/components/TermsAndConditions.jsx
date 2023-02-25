// TermsAndConditionsPage

import React from "react";

import {Typography} from "@mui/material";
import {Box} from "@mui/system";
import sxprop from "./sxStyle";

const TermsAndConditions = () => {
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
            Terms & Conditions
          </Typography>

          <Typography variant="h7" style={{fontWeight: "600"}}>
            Please read Cryptic's terms and conditions thoroughly before
            investing.
          </Typography>
        </Box>

        <Box mt={3}>
          By defining responsive styles in the sx prop, we can apply different
          styles based on the screen size without having to write separate media
          queries. The @media rule in the boxStyles object will automatically
          apply the styles when the screen size is 600px or less.
        </Box>
      </Box>
    </div>
  );
};

export default TermsAndConditions;
