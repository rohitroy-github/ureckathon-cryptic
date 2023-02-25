// Feedback&BugReportPage

import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Feedback = () => {
  return (
    <div>
      <Typography variant="h4" style={{ color: "#1976d2", fontWeight: "600" }}>
        Give your FeedBack
      </Typography>
      <Box sx={{ margin: "30px" }}>
        Click on the Google form link to send your feedbacks
      </Box>
    </div>
  );
};

export default Feedback;
