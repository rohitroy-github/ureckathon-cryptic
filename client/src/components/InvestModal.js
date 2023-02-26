import React, {useState, useContext, useRef, useEffect} from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {Stack, TextField} from "@mui/material";

// forFetchingLiveEthereumPrice
import axios from "axios";

import {TransactionContext} from "../context/TransactionContext";
import CircularProgress from "@mui/material/CircularProgress";
import {textAlign} from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const InvestModal = ({mod}) => {
  const projectWalletAddress = mod.investInfo.projectWalletAddress;

  //   enablingBlockchainTransactionFunctionality
  const {
    currentAccount,
    // connectWallet,
    sendTransaction,
    isLoading,
    isTransactionSuccessfull,
    ICOLaunchSectionCryptoInvestmentData,
    handleICOLaunchSectionDataChange,
  } = useContext(TransactionContext);

  const iserror = useRef(false);

  // passingTheValuesToUseState
  const [InvestDetails, SetDetails] = useState({
    projId: mod.investInfo.id,
    userWallet: currentAccount,
    token_name: mod.investInfo.tokenName,
    projectWalletAddress: mod.investInfo.projectWalletAddress,
    invested: 0,
    ProjectName: mod.investInfo.Name,
  });

  //functionToConvertEthToINRAccordingToLiveEth-INRValue
  const ethToINR = (ethereumValueInInr, amount) => {
    const INRValuation = amount * ethereumValueInInr;

    // console.log(INRValuation);

    if (INRValuation <= 0) {
      alert("Invested amount can't be 0 !");
    } else if (INRValuation > mod.investInfo.totalFund) {
      alert("Invested amount can't be more than project's total fund !");
    } else {
      // setUseStateValue
      InvestDetails.invested = INRValuation;
    }

    return INRValuation;
  };

  const handleClose = () => mod.setOpen(false);
  //   const handleSubmit = () => {
  //     if (InvestDetails.invested == 0 && !iserror.current) {
  //       alert("Invested Can't be Zero or more that max fund");
  //     } else {
  //       // TriggerBlockchainWalletTransaction
  //       sendTransaction();

  //       console.log(InvestDetails);
  //       axios
  //         .post("http://localhost:5000/investproj", InvestDetails)
  //         .then((res) => {
  //           console.log(res);
  //         });
  //     }
  //     console.log("this working");
  //   };

  // const checkValue = (e) => {
  //   if (e.target.value > mod.investInfo.totalFund) {
  //     iserror.current = true;
  //     // alert('not happening')
  //     SetDetails({...InvestDetails, invested: 0});
  //   } else {
  //     iserror.current = false;
  //     SetDetails({...InvestDetails, invested: e.target.value});
  //   }
  // };

  //   settingDemoProjectPublicAddress
  //   const addressTo = "0xd34861d1dc54bdaa9b42a9fbc875bf9685804b17";

  // functionToPassAddressToToState
  // const addAddressToValue = () => {
  //   console.log(projectWalletAddress);

  //   handleICOLaunchSectionDataChange("addressTo", projectWalletAddress);

  //   return projectWalletAddress;
  // };

  //   handlingInvestmentsThroughCryptocurrency
  const handleSubmitCryptoInvestmemt = (e) => {
    // console.log("invest fired >>>");

    handleICOLaunchSectionDataChange("addressTo", projectWalletAddress);

    const {addressTo, amount} = ICOLaunchSectionCryptoInvestmentData;

    // setInvestedValueFromEthToINR
    ethToINR(ethereumValueInInr, amount);

    // console.log(InvestDetails);

    e.preventDefault();

    // check
    // console.log("addressTo", addressTo);
    // console.log("amount", amount);

    if (!InvestDetails.invested || !addressTo) return;

    sendTransaction();

    // console.log(
    //   "isTransactionSuccessfull inside Modal",
    //   isTransactionSuccessfull
    // );

    // onlyExecuteWhenTransactionIsSuccessfull
    // if (isTransactionSuccessfull) {
    // sendingDetailsToDatabase

    axios
      .post("http://localhost:5000/investproj", InvestDetails)
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          // console.log("Investment allocated successfully !");
          // alert("Investment allocated successfully !");
        } else {
          // alert("Investment allocated unsuccessfull !");
        }
      });

    // window.location.reload();
  };

  // liveEthereumValue
  //   forStoringLiveEthereumPriceInINR
  const [ethereumValueInInr, setEthereumValueInInr] = useState(null);

  //   functionToFetchLiveEthereumPriceInINR
  useEffect(() => {
    const fetchLiveEthereumPriceInINR = async () => {
      const result = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr"
      );
      setEthereumValueInInr(result.data.ethereum.inr);
    };
    fetchLiveEthereumPriceInINR();
  }, []);

  return (
    <div>
      <Modal
        open={mod.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{textAlign: "center"}}
          >
            {mod.investInfo.Name}
          </Typography>

          {/* displayingLiveEthereumValue */}
          <Stack
            direction={"row"}
            sx={{
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Ethereum - INR
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {ethereumValueInInr}
            </Typography>
          </Stack>

          <Stack
            direction={"row"}
            sx={{
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Total Token
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {mod.investInfo.totalToken}
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            sx={{
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Total Fund
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {mod.investInfo.totalFund}
            </Typography>
          </Stack>

          <Stack
            direction={"row"}
            sx={{
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Your Investment
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {/* {mod.investInfo.totalFund} */}
              {/* calculateValueInINRHere */}
            </Typography>
          </Stack>

          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              mb: 2,
              fontSize: "13px",
              // fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Project Wallet Address {projectWalletAddress}
          </Typography>

          <Typography id="modal-modal-title" variant="h6" component="h2">
            Investment Details
          </Typography>

          {/* forFiatInvestments */}
          {/* <TextField
            name="Amount"
            required
            label="Total Fund in $"
            fullWidth
            type={"number"}
            error={iserror.current}
            onChange={(e) => checkValue(e)}
            helperText={
              iserror.current && "Invest Amount can't be more than Total Fund"
            }
          /> */}

          {/* forCryptoInvestments */}
          {/* enterProjectWalletAddressManuallyForNow */}
          <Grid item sm={12} mb={1} mt={1}>
            <TextField
              name="addressTo"
              required
              label="Project Wallet Address"
              placeholder="Enter project wallet address ?"
              fullWidth
              type={"text"}
              // value={projectWalletAddress}
              onChange={(e) =>
                handleICOLaunchSectionDataChange("addressTo", e.target.value)
              }
              // handleChange={(e) =>
              //   handleICOLaunchSectionDataChange("addressTo", e.target.value)
              // }
            />
          </Grid>

          <Grid item sm={12} mb={1} mt={1}>
            {/* enterInvestmentValueInEthForNow */}
            <TextField
              name="amount"
              required
              label="Investment Amount"
              placeholder="Enter investment amount (in Eth) ?"
              fullWidth
              type={"number"}
              onChange={(e) =>
                handleICOLaunchSectionDataChange("amount", e.target.value)
              }
            />
          </Grid>

          <Grid item sm={12} mt={1}>
            {isLoading ? (
              <Box sx={{display: "flex"}}>
                <CircularProgress />
              </Box>
            ) : (
              <Button
                variant="outlined"
                type="submit"
                fullWidth
                style={{fontWeight: 800}}
                // investingUsingFiat

                // onClick={handleSubmit}

                // investingUsingCrypto
                onClick={handleSubmitCryptoInvestmemt}
              >
                Invest
              </Button>
            )}
          </Grid>

          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              fontSize: "10px",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            Note* Investments must be less than or equal to the total funds |
            Please recheck wallet address before investing
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default InvestModal;
