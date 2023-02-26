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

        <Box mt={3} mr={5} ml={3}>
        These Terms and Conditions govern your use of the Cryptic platform . By using the Platform, you agree to these Terms. If you do not agree to abide by these terms. <br/>
1.	Use of the Platform
You may use the Platform to register for ICOs and IDOs. You may not use the Platform for any illegal or unauthorized purpose.<br/>
2.	Registration
To use the Platform, you must register and create an account. You agree to provide accurate and complete information when registering.<br/>
3.	User Content
You are responsible for any content you post on the Platform. You may not post any content that is defamatory, obscene, or illegal. We reserve the right to remove any content that violates these Terms.<br/>
4.	Intellectual Property
All content on the Platform, including text, graphics, logos, and images, is the property of Cryptic or its licensors and is protected by copyright and other intellectual property laws.<br/>
5.	Limitation of Liability
Cryptic is not liable for any damages arising from your use of the Platform. In no event shall Cryptic be liable for any indirect, incidental, special, or consequential damages.<br/>
6.	Indemnification
You agree to indemnify and hold Cryptic and its affiliates, officers, agents, and employees harmless from any claim or demand, including reasonable attorneys' fees, arising out of your use of the Platform.<br/>
7.	Termination
Cryptic may terminate your account if you don’t obey the terms and conditions or are caught doing illegal activities using our application. You may also terminate your account at any time by contacting us.<br/>
8.	Governing Law
These Terms shall be governed by and construed in accordance with the laws of the country the user is using our app from.<br/>
9.	Changes to the Terms
Cryptic may update these Terms at any time without notice. Your continued use of the Platform after any changes to the Terms constitutes your acceptance of the new terms.

        </Box>
      </Box>
    </div>
  );
};

export default TermsAndConditions;
