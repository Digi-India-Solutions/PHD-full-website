const joinGuide = require("../Models/JoinGuideModel");


// Create a new JoinGuide record
const createJoinGuide = async (req, res) => {
    try {
        const { phoneNumber, message } = req.body;

        // Validate input
        if (!phoneNumber || !message) {
            return res.status(400).json({ success: false, message: "Phone number and message are required." });
        }

        // Create a new JoinGuide entry
        const newJoinGuide = await joinGuide.create({ phoneNumber, message });

        res.status(201).json({
            success: true,
            message: "JoinGuide entry created successfully.",
            data: newJoinGuide,
        });
    } catch (error) {
        console.error("Error in createJoinGuide:", error);
        res.status(500).json({ success: false, message: "Server error. Please try again later." });
    }
};

// Get all JoinGuide records
const getJoinGuides = async (req, res) => {
    try {
        const joinGuides = await joinGuide.find().sort({ createdAt: -1 }); // Sort by newest first
        res.status(200).json({
            success: true,
            message: "JoinGuide records fetched successfully.",
            data: joinGuides,
        });
    } catch (error) {
        console.error("Error in getJoinGuides:", error);
        res.status(500).json({ success: false, message: "Server error. Please try again later." });
    }
};

// Delete a JoinGuide record by ID
const deleteJoinGuide = async (req, res) => {
    try {
        const { id } = req.params;

        // Check if the record exists
        const joinGuide = await joinGuide.findById(id);
        if (!joinGuide) {
            return res.status(404).json({ success: false, message: "JoinGuide record not found." });
        }

        // Delete the record
        await joinGuide.deleteOne();

        res.status(200).json({
            success: true,
            message: "JoinGuide record deleted successfully.",
        });
    } catch (error) {
        console.error("Error in deleteJoinGuide:", error);
        res.status(500).json({ success: false, message: "Server error. Please try again later." });
    }
};

module.exports = {
    createJoinGuide,
    getJoinGuides,
    deleteJoinGuide,
};
