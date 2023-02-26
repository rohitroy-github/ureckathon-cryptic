// PrivacyPolicyPage

import React from "react";

import { Typography } from "@mui/material";
import { Box } from "@mui/system";
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
            style={{ color: "#1976d2", fontWeight: "600" }}
          >
            Privacy Policy
          </Typography>

          <Typography variant="h7" style={{ fontWeight: "600" }}>
            Our privacy policies define us.
          </Typography>
        </Box>

        <Box mt={3} mr={5} ml={3}>
          At Cryptic, we take your privacy very seriously. This Privacy Policy
          outlines the types of information we collect, how we use that
          information, and the steps we take to protect your personal data.{" "}
          <br />
          What information do we collect? <br />
          We collect information when you use our platform to register for an
          ICO or IDO. This information may include your name, email address,
          phone number, and other personal information. <br />
          How do we use your information? <br />
          We use your information to provide you with access to our platform and
          to facilitate the registration process for ICOs and IDOs. We may also
          use your information to communicate with you about our platform, to
          send you marketing communications, and to improve our services. <br />
          How do we protect your information? <br />
          We take all reasonable steps to protect your personal data. This
          includes using industry-standard security protocols to prevent
          unauthorized access to your information. <br />
          Do we share your information? <br />
          We do not sell or rent your personal information to third parties.
          However, we may share your information with trusted partners who help
          us provide our services. We may also share your information with law
          enforcement agencies or other government authorities if required by
          law. <br />
          Your rights You have the right to access, correct, or delete any
          personal information we hold about you. If you wish to exercise these
          rights, please contact us at privacy@cryptic.com.
          <br />
          Updates to this policy We may update this Privacy Policy from time to
          time. Any changes will be posted on our website, and we will notify
          you of any material changes via email. Contact us
          <br />
          If you have any questions or concerns about our Privacy Policy, please
          contact us at privacy@cryptic.com. We're always happy to help.
        </Box>
      </Box>
    </div>
  );
};

export default PrivacyPolicy;
