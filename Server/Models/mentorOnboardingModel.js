const mongoose = require('mongoose');

const mentorOnboardingSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    nationality: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: Number, required: true },
    country: { type: String, required: true },
    undergraduatedegree: { type: String, required: true },
    undergraduateinstitution: { type: String, required: true },
    undergraduateyearOfGraduation: { type: Number, required: true },
    mastersdegree: { type: String, required: true },
    mastersinstitution: { type: String, required: true },
    mastersyearOfGraduation: { type: Number, required: true },
    phdspecialization: { type: String },
    phdresearchTopic: { type: String },
    phdinstitutionName: { type: String },
    phdyearOfCompletion: { type: Number },
    currentPosition: { type: String, required: true },
    affiliatedInstitution: { type: String, required: true },
    yearsOfExperience: { type: Number, required: true },
    agreeToTerms: { type: Boolean, required: true },
});

// Create and export the Mentor model
const Mentor = mongoose.model('Mentor', mentorOnboardingSchema);
module.exports = Mentor;
