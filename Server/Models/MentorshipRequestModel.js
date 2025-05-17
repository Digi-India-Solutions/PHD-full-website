// models/MentorshipRequest.js
const mongoose = require("mongoose");

const mentorshipRequestSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true },
    departmentProgram: { type: String, required: true },
    researchInterests: { type: String, required: true },
    preferredMeetingTimes: { type: String, required: true },
    meetingFrequency: { type: String, required: true },
}, { timestamps: true });

const MentorshipRequest = mongoose.model("MentorshipRequest", mentorshipRequestSchema);

module.exports = MentorshipRequest;
