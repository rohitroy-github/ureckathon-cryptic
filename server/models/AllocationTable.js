const mongoose = require("mongoose");

const AllocationModel = mongoose.Schema(
    {
        userWallet: { type: String, ref: "CryptoUser" },
        token_name: { type: String, ref: 'ProjectDetails' },
        projectWalletAddress: { type: String },
        invested: { type: Number },
        tokenGain: { type: Number, default: 0 },
        ProjectName: { type: String },
        DateBrought: { type: Date, default: Date.now },
        istokenClaimed: { type: Boolean, default: false }
    }
)
const ProjectAllocation = mongoose.model('ProjectAllocation', AllocationModel)
module.exports = ProjectAllocation;