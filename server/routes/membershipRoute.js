const express = require("express");
const router = express.Router();
const MemberDetails = require('../models/MemShipModel')
const CryptoUser = require("../models/User")


router.post('/addmember', async (req,res)=>{
     

    const { memberShip , date , noOfinvested , email } = req.body;

    try {
        const existinguser = await CryptoUser.findOne({ emailAddress: email })
        
        const membership = await new MemberDetails({
            userEmail: email,

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