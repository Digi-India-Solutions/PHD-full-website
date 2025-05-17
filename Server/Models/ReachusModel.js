const mongoose = require("mongoose")

const ReachUsSchema = new mongoose.Schema({
    phoneNumber: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const ReachUs = mongoose.model("ReachUs", ReachUsSchema)

module.exports = ReachUs