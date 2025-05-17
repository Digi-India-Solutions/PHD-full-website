const Mentor = require("../Models/mentorOnboardingModel");

const submitMentorOnboarding = async (req, res) => {
    try {
        // Create a new mentor entry based on the request data
        const mentorData = new Mentor({
            fullName: req.body.fullName,
            dateOfBirth: req.body.dateOfBirth,
            gender: req.body.gender,
            nationality: req.body.nationality,
            email: req.body.email,
            phone: req.body.phone,
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            postalCode: req.body.postalCode,
            country: req.body.country,
            undergraduatedegree: req.body.undergraduatedegree,
            undergraduateinstitution: req.body.undergraduateinstitution,
            undergraduateyearOfGraduation: req.body.undergraduateyearOfGraduation,
            mastersdegree: req.body.mastersdegree,
            mastersinstitution: req.body.mastersinstitution,
            mastersyearOfGraduation: req.body.mastersyearOfGraduation,
            phdspecialization: req.body.phdspecialization,
            phdresearchTopic: req.body.phdresearchTopic,
            phdinstitutionName: req.body.phdinstitutionName,
            phdyearOfCompletion: req.body.phdyearOfCompletion,
            currentPosition: req.body.currentPosition,
            affiliatedInstitution: req.body.affiliatedInstitution,
            yearsOfExperience: req.body.yearsOfExperience,
            agreeToTerms: req.body.agreeToTerms,
        });

        // Save the mentor data to the database
        const savedMentor = await mentorData.save();
        res.status(201).json({ message: 'Mentor onboarded successfully', mentor: savedMentor });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error onboarding mentor', error });
    }
};

const getMentor = async (req, res) => {
    try {
        const mentor = await Mentor.find();
        if (!mentor) {
            return res.status(404).json({ message: 'Mentor not found' });
        }
        return res.status(200).json(mentor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving mentor(s)', error });
    }
};


const deleteMentor = async (req, res) => {
    try {
        const mentorId = req.params.id;

        // Check if the mentor exists
        const mentor = await Mentor.findById(mentorId);
        if (!mentor) {
            return res.status(404).json({ message: 'Mentor not found' });
        }

        // Delete the mentor
        await Mentor.findByIdAndDelete(mentorId);
        res.status(200).json({ message: 'Mentor deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting mentor', error });
    }
};

module.exports = { submitMentorOnboarding, deleteMentor ,getMentor};
