const CryptoUser = require("../models/User");
const MemberDetails = require("../models/MemShipModel");
const {hashPassword, comparePassword} = require("../config/generatehash");
const express = require("express");
const router = express.Router();

// testRoute
router.post("/", async (req, res) => {
  res.json({
    message:
      "This is the Backend/ Server route for Cryptic Launchpad project !",
  });
});

router.post("/usercrypto", async (req, res) => {
  try {
    const {Name, email, password} = req.body;
    const existinguser = await CryptoUser.findOne({emailAddress: email});
    if (existinguser) {
      throw {
        statusCode: 400,
        message: "User already exists",
      };
    }
    const membership = await new MemberDetails({
      userWallet: "",
      userEmail: email,
      memberShip: "free",
      noOfinvested: 0,
      maxInvest: 3,
    }).save();
    const newUser = await new CryptoUser({
      name: Name,
      emailAddress: email,
      password: password,
      walletAddress: "",
    }).save();

    res.status(200).json({
      success: true,
      user: newUser,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
    });
  }
});

router.post("/connectWallet", async (req, res) => {
  try {
    const {email, walletAddress} = req.body;
    const user = await CryptoUser.findOne({emailAddress: email});
    if (user) {
      if (user.walletAddress == walletAddress) {
        console.log("worked");
        res.status(200).json({
          success: true,
        });
      } else if (user.walletAddress == "") {
        await MemberDetails.updateOne(
          {userEmail: email},
          {$set: {userWallet: walletAddress}}
        );
        await CryptoUser.updateOne(
          {emailAddress: email},
          {$set: {walletAddress: walletAddress}}
        );
      } else {
        throw {
          statusCode: 400,
          message: "you fraud",
        };
      }
    } else {
      throw {
        statusCode: 400,
        message: "you must login to connect wallet",
      };
    }
  } catch (error) {
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
    });
  }
});

router.post("/userLogin", async (req, res) => {
  try {
    const {email, password} = req.body;
    const Loggeduser = await CryptoUser.findOne({emailAddress: email});
    if (!Loggeduser) {
      throw {
        statusCode: 400,
        message: "Need to Register First",
      };
    }
    if (Loggeduser.password != password) {
      throw {
        statusCode: 700,
        message: "Wrong Password",
      };
    }
    res.status(200).json({
      success: true,
      user: Loggeduser,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
