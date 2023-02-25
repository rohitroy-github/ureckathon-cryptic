const express = require("express");
const router = express.Router();
const MemberDetails = require('../models/MemShipModel')


router.post('/addmember', async (req,res)=>{
     
    const { memberShip , date , noOfinvested , walletAddress } = req.body;

    try {
        // const user = await CryptoUser.findOne({ walletAddress: req.body.walletAddress })
        
        const membership = await new MemberDetails({
            userWallet: walletAddress,
            memberShip: memberShip,
            startDateMem: date,
            noOfinvested: noOfinvested
        }).save();
        res.status(200).json({
            success: true,
            data: membership
        })
    } catch (error) {
        res.status(error.statusCode || 500).json({
            success: false,
            message: error.message
        });
    }
});


module.exports = router;