const mongoose = require("mongoose")

const JoinGuideSchema = new mongoose.Schema({
    phoneNumber: {
        type: Number,
        required: true
    },
    message: {
        type: String, required: true
    }
},{timestamps:true})

const joinGuide = mongoose.model("JoinGuide" , JoinGuideSchema)

module.exports = joinGuide