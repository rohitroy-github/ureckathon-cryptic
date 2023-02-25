// Feedback&BugReportPage

import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import sxprop from "./sxStyle";

const Feedback = () => {
  return (
    <div>
      <Box sx={sxprop.pageContainer}>
        {/* headingBox */}
        <Box sx={sxprop.headingboxsx}>
          {/* <Typography variant="headingcon">Active Projects</Typography> */}
          <Typography
            variant="h4"
            style={{ color: "#1976d2", fontWeight: "600" }}
          >
            Feedback & Bug Report
          </Typography>

          <Typography variant="h7" style={{ fontWeight: "600" }}>
            A valuable feedback helps us improve and serve you better.
          </Typography>
        </Box>

        <Box mt={3} mr={5} ml={3}>
          Thank you for choosing Cryptic as your platform for ICO and IDO
          registrations. We strive to provide the best user experience possible,
          and your feedback is an essential part of helping us achieve this
          goal. We welcome any comments, suggestions, or concerns you may have
          about our platform. Whether you have a question about a specific ICO
          or IDO, or you have ideas for how we can improve our platform, we want
          to hear from you. If you have an urgent issue or need immediate
          assistance, please contact our support team directly. Our team is
          available 24/7 to assist you with any issues or concerns you may have.
          To provide feedback, please fill out the form below with as much
          detail as possible. Our team will review your comments and take them
          into consideration as we continue to develop and improve our platform. <br/>
          <a mt={2} href="https://docs.google.com/forms/d/e/1FAIpQLSeTZrNcmsFwFBjLGGfjApRB2Wq-s1DWkI5CEypkzJ7rq_XGtA/viewform">Google form link</a>
        </Box>
      </Box>
    </div>
  );
};

export default Feedback;
