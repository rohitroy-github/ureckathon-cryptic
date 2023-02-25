const mongoose = require("mongoose");

const UserModel = mongoose.Schema(
    {
        walletAddress: { type: String },
        emailAddress: { type: String ,default:'nan'},
        password:{type: String},
        name: { type: String ,default:'nan'},
        Date: {
            type: Date,
            default: Date.now
        }
    }

)
const CryptoUser = mongoose.model('CryptoUser', UserModel)
module.exports = CryptoUser;