const mongoose = require("mongoose");

const MemberModel = mongoose.Schema({
    userWallet: { type: String, ref: "CryptoUser" },
    userEmail: { type: String },
    memberShip: { type: String },
    startDateMem: { type: Date, default: Date.now },
    noOfinvested: { type: Number },
    maxInvest: { type: Number }
})

const MemberDetails = mongoose.model('MemberTable', MemberModel)
module.exports = MemberDetails 