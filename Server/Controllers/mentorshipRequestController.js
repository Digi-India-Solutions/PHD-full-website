const MentorshipRequest = require("../Models/MentorshipRequestModel");


// Create a new mentorship request
const createMentorshipRequest = async (req, res) => {
  try {
    const { fullName, email, phone, departmentProgram, researchInterests, preferredMeetingTimes, meetingFrequency } = req.body;

    // Validate if the required fields are provided
    if (!fullName || !email || !phone || !departmentProgram || !researchInterests || !preferredMeetingTimes || !meetingFrequency) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create a new mentorship request document
    const newRequest = new MentorshipRequest({
      fullName,
      email,
      phone,
      departmentProgram,
      researchInterests,
      preferredMeetingTimes,
      meetingFrequency
    });

    // Save the mentorship request to the database
    await newRequest.save();

    res.status(201).json({ message: "Mentorship request submitted successfully", data: newRequest });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error occurred while submitting mentorship request", error: error.message });
  }
};

// Get all mentorship requests (optional)
const getMentorshipRequests = async (req, res) => {
  try {
    const requests = await MentorshipRequest.find();
    res.status(200).json({ message: "Mentorship requests fetched successfully", data: requests });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error occurred while fetching mentorship requests", error: error.message });
  }
};

const DeleteMentorshipRequests = async (req, res) => {
    try {
      const requests = await MentorshipRequest.findById(req.params.id);
      if(!requests){
        return res.status(404).json({
            success:false,
            message:"Record Not Found"
        })
      }
      await requests.deleteOne()
      res.status(200).json({ message: "Mentorship requests delete successfully"});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error occurred while fetching mentorship requests", error: error.message });
    }
  };

module.exports = { createMentorshipRequest, getMentorshipRequests ,DeleteMentorshipRequests};
