// ContactUsPage

import React from "react";

import { Typography } from "@mui/material";
import { Box } from "@mui/system";
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
            style={{ color: "#1976d2", fontWeight: "600" }}
          >
            Contact Us
          </Typography>

          <Typography variant="h7" style={{ fontWeight: "600" }}>
            We are loyal to our awesome investors.
          </Typography>
        </Box>

        <Box mt={3} mr={5} ml={3}>
          We're always here to help you with any questions or
          concerns you may have about Cryptic. Please feel free to reach out to
          our support team via the following channels: <br/>
           Email:support@cryptic.com <br/>
           Phone: +91 (555) 123-456 <br/>
           We're available 24/7 to
          assist you with any issues or concerns you may have. Our team of
          experienced support agents is knowledgeable and friendly, and they're
          always happy to help. In addition to our support channels, you can
          also follow us on social media to stay up to date with the latest news
          and updates from Cryptic. We're active on Twitter, Facebook, and
          Instagram, and we regularly share insights and information about the
          world of cryptocurrency and blockchain.
        </Box>
      </Box>
    </div>
  );
};

export default ContactUs;
