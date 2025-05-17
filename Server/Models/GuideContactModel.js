// models/GuideContact.js
const mongoose = require("mongoose");

const guideContactSchema = new mongoose.Schema(
    {
        guideId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ProfessionalProfile",
            required: true,
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        designation: {
            type: String,
            required: true,
            trim: true,
        },
        university: {
            type: String,
            required: true,
            trim: true,
        },
        briefDetail: {
            type: String,
            required: true,
        },
    },
    { timestamps: true } // Automatically adds createdAt and updatedAt fields
);
const GuideContact = mongoose.model("GuideContact", guideContactSchema);
module.exports = GuideContact
