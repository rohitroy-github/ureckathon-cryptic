import React, { useState } from "react";
import {
  TextField,
  InputLabel,
  Grid,
  Button,
  Box,
  FormLabel,
  CircularProgress,
  Typography,
} from "@mui/material";
import sxprop from "./sxStyle";
import axios from "axios";


const LaunchSection = () => {
  const [pics, Setpics] = useState(null);
  const [showSucces, setSucces] = useState(false);
  const [showText, setShow] = useState(false);

  // 10 % deduction 
  const calc_SwapRate = (ttlfund, ttltoken) => {
    let swap_rate = (ttlfund / ttltoken) - (0.1 * (ttlfund / ttltoken))
    project.swap_rate = swap_rate
    return swap_rate;
  };

  const handledate = (e) => {
    var dateEntered = new Date(e.target.value);
    console.log(dateEntered.toISOString());
    return dateEntered.toISOString();
  };
  const [project, setProject] = useState({
    name: "",
    swap_rate: 0.0,
    token_name: "",
    total_fund: "",
    total_token: "",
    projectWalletAddress: "",
    start_date: "",
    end_date: "",
    linkedln_url: "",
    website_url: "",
    telegram_url: "",
    git_url: "",
    writeup: "",
    img_url: "NONE",
  });
  const uploadPhoto = (pics) => {
    if (pics === undefined) {
      console.log("please upload an image");
      return;
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "Cryptic");
      data.append("cloud_name", "db1grdyly");
      return fetch("https://api.cloudinary.com/v1_1/db1grdyly/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.url.toString());
          return data.url.toString();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Photo Uploaded");
      return;
    }
  };
  const handlesubmit = async (e) => {
    // mongoDBFunctionality
    e.preventDefault();
    setSucces(true);
    if (project.swap_rate === NaN) {
      alert("Give proper values");
    } else {
      let uri = await uploadPhoto(pics);
      console.log(uri);
      project.img_url = uri;
      axios
        .post("http://localhost:5000/addproject", project)
        .then((res) => {
          console.log(res);
          setShow(true);
          setSucces(false);
        })
        .catch((error) => {
          alert(error.message);
          setSucces(false);
        });
      console.log(project);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Box m={3}>
        <Typography variant="h4" style={{ color: "#1976d2", fontWeight: "600" }}>
          ICO Launch Section
        </Typography>

        <Typography variant="h7" style={{ fontWeight: "600" }}>
          Launch your WEB 3.0 project in minutes.
        </Typography>

        {/* formBox */}
        <Box mt={2}>
          <form onSubmit={handlesubmit}>
            <Grid container spacing={3}>
              {/* projectName */}
              <Grid item sm={6}>
                <TextField
                  name="title"
                  required
                  label="Project Name"
                  placeholder="Enter name of your project (Ex. Wink)?"
                  fullWidth
                  onChange={(e) => {
                    setProject({ ...project, name: e.target.value });
                  }}
                />
              </Grid>

              {/* tokenName */}
              <Grid item sm={6}>
                <TextField
                  name="Token Name"
                  required
                  label="Token Name"
                  placeholder="Enter name of your token/ coin (Ex. WNK)?"
                  fullWidth
                  onChange={(e) => {
                    setProject({ ...project, token_name: e.target.value });
                  }}
                />
              </Grid>

              {/* fundsToRaise */}
              <Grid item sm={6}>
                <TextField
                  name="Fund"
                  required
                  label="Total Fund"
                  placeholder="How much fund you wanna raise (in INR) ?"
                  fullWidth
                  type={"number"}
                  onChange={(e) => {
                    setProject({ ...project, total_fund: e.target.value });
                  }}
                />
              </Grid>

              {/* idk, if this section is required */}
              {/* swapRate */}
              <Grid item sm={6}>
                <TextField
                  name="Fund"
                  required
                  disabled={true}
                  placeholder="Enter swap rate (ex: 1) ?"
                  fullWidth
                  type={"number"}
                  value={calc_SwapRate(project.total_token, project.total_fund)}
                />
              </Grid>

              {/* totalTokenSupplyInMarket */}
              <Grid item sm={6}>
                <TextField
                  name="No of Token"
                  required
                  label="Total Supply"
                  placeholder="What's the total token supply ?"
                  fullWidth
                  type={"number"}
                  onChange={(e) => {
                    setProject({ ...project, total_token: e.target.value });
                  }}
                />
              </Grid>

              <Grid item sm={6}>
                <TextField
                  name="ProjectWalletAddress"
                  required
                  label="Public Wallet Address"
                  placeholder="What's the project's wallet address ?"
                  fullWidth
                  type={"text"}
                  onChange={(e) => {
                    setProject({
                      ...project,
                      projectWalletAddress: e.target.value,
                    });
                  }}
                />
              </Grid>

              {/* strrtingDate */}
              <Grid item sm={6}>
                <TextField
                  name="startingDate"
                  required
                  InputLabelProps={{ shrink: true }}
                  label="ICO Starting Date"
                  placeholder="When will your ICO start ?"
                  fullWidth
                  type={"date"}
                  onChange={(e) => {
                    setProject({ ...project, start_date: handledate(e) });
                  }}
                />
              </Grid>

              {/* endingDate */}
              <Grid item sm={6}>
                <TextField
                  name="endingDate"
                  required
                  InputLabelProps={{ shrink: true }}
                  label="ICO Ending Date"
                  placeholder="When will your ICO end ?"
                  fullWidth
                  type={"date"}
                  onChange={(e) => {
                    setProject({ ...project, end_date: handledate(e) });
                  }}
                />
              </Grid>

              {/* linkedIn */}
              <Grid item sm={6}>
                <TextField
                  name="title"
                  // required
                  // InputLabelProps={{shrink: true}}
                  label="Public LinkedIn URL"
                  placeholder="Enter LinkedIn URL ?"
                  fullWidth
                  onChange={(e) => {
                    setProject({ ...project, linkedln_url: e.target.value });
                  }}
                />
              </Grid>

              {/* website */}
              <Grid item sm={6}>
                <TextField
                  name="title"
                  required
                  // InputLabelProps={{shrink: true}}
                  label="Public Website URL"
                  placeholder="Enter project's public URL ?"
                  fullWidth
                  onChange={(e) => {
                    setProject({ ...project, website_url: e.target.value });
                  }}
                />
              </Grid>

              {/* githubURL */}
              <Grid item sm={6}>
                <TextField
                  name="title"
                  // required
                  // InputLabelProps={{shrink: true}}
                  label="Github Repository URL"
                  placeholder="Enter Github's public repository URL ?"
                  fullWidth
                  onChange={(e) => {
                    setProject({
                      ...project,
                      git_url: e.target.value,
                    });
                  }}
                />
              </Grid>

              {/* notRequired */}
              <Grid item sm={6}>
                <TextField
                  name="title"
                  // required
                  // InputLabelProps={{shrink: true}}
                  label="Telegram Channel"
                  fullWidth
                  onChange={(e) => {
                    setProject({ ...project, telegram_url: e.target.value });
                  }}
                />
              </Grid>
              <Grid item sm={12}>
                <TextField
                  name="title"
                  multiline={true}
                  required
                  label="Project Description"
                  placeholder="Enter a brief project description ?"
                  // InputLabelProps={{shrink: true}}
                  fullWidth
                  onChange={(e) => {
                    setProject({ ...project, writeup: e.target.value });
                  }}
                />
              </Grid>
              <Grid item sm={6}>
                <FormLabel>Upload Project Logo</FormLabel>
                <br />
                <input
                  type="file"
                  accept="image/**"
                  onChange={(e) => {
                    Setpics(e.target.files[0]);
                  }}
                  required={true}
                ></input>
              </Grid>
            </Grid>

            <Box sx={sxprop.loadbox}>
              {showSucces && <CircularProgress />}
              {!showSucces && !showText && (
                <Button
                  size="large"
                  variant="outlined"
                  type="submit"
                  sx={{ fontWeight: 800, fontSize: "15px" }}
                >
                  Launch ICO
                </Button>
              )}
              {showText && (
                <Typography variant="headingcon">
                  Succesfully Launched
                </Typography>
              )}
            </Box>
          </form>
        </Box>
      </Box>
    </div>
  );
};

export default LaunchSection;
