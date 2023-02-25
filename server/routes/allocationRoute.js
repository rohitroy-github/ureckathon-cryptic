const ProjectAllocation = require("../models/AllocationTable");
const ProjectDetails = require("../models/ProjectModel");
const express = require("express");
const router = express.Router();

router.post("/investproj", async (req, res) => {
  const {
    userWallet,
    projectWalletAddress,
    token_name,
    invested,
    ProjectName,
    projId,
  } = req.body;

  try {
    const projectOne = await ProjectDetails.findById(projId);
    projectOne.total_fund = projectOne.total_fund - invested;
    await ProjectDetails.findByIdAndUpdate(projId, projectOne, {new: true});
    const newallocation = await new ProjectAllocation({
      userWallet,
      projectWalletAddress,
      token_name,
      invested,
      ProjectName,
    }).save();

    res.status(200).json({
      succes: true,
      allocation: newallocation,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
    });
  }
});

// tokenClainFunction
router.post("/tokenclaim", async (req, res) => {
  try {
    const {investId, projId} = req.body;
    let investOne = await ProjectAllocation.findById(investId);
    let investProj = await ProjectDetails.findById(projId);
    if (!investOne.istokenClaimed) {
      investOne.istokenClaimed = true;
      investOne.tokenGain = investOne.invested / investProj.swap_rate;
      investProj.total_token = investProj.total_token - investOne.tokenGain;
      await ProjectDetails.findByIdAndUpdate(projId, investProj);
      await ProjectAllocation.findByIdAndUpdate(investId, investOne);
      res.status(200).json({
        succes: true,
      });
    } else {
      res.status(200).json({
        alreadyClaimed: true,
      });
    }
  } catch (error) {
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
    });
  }
});

router.post("/getallocation", async (req, res) => {
  try {
    const {walletAddress, token_name} = req.body;
    const allocatedProj = await ProjectAllocation.find({
      userWallet: walletAddress,
      token_name: token_name,
    });
    res.status(200).json({
      succes: true,
      investedProj: allocatedProj,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
    });
  }
});

const getstddev = (jsonarr, avg) => {
  let sum = 0;
  jsonarr.map((val) => {
    sum = sum + (val.invested - avg) ** 2;
  });
  let res = sum / (jsonarr.length - 1);
  return Math.sqrt(res);
};
const getavg = (jsonarr) => {
  let sum = 0;
  jsonarr.map((val) => {
    sum = sum + val.invested;
  });
  return sum / jsonarr.length;
};

router.post("/getmetrics", async (req, res) => {
  try {
    const {projId} = req.body;
    const proj = await ProjectDetails.findById(projId);
    var allocatioarr = await ProjectAllocation.find({
      token_name: proj.token_name,
    });
    var avg = getavg(allocatioarr);
    var stddv = getstddev(allocatioarr, avg);
    console.log(stddv);
    res.status(200).json({
      succes: true,
      average: avg,
      standardDev: stddv,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
