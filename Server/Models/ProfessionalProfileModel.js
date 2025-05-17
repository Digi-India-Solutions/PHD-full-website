const mongoose = require("mongoose");

const professionalProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    degree: {
        type: String,
        required: true,
        trim: true
    },
    yearsOfExperience: {
        type: Number,
        required: true,
        trim: true
    },
    fieldExpertise: {
        type: String,
        required: true,
        trim: true
    },
    university: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true
    },
}, { timestamps: true });

const Professional = mongoose.model("ProfessionalProfile", professionalProfileSchema);
module.exports = Professional

