const University = require("../Models/UniversityZone");



const createUniversity = async (req, res) => {
    try {
        const { UniversityZone } = req.body;
        const newUniversity = new University({
            UniversityZone
        });
        const savedUniversity = await newUniversity.save();
        res.status(201).json({
            success: true,
            message: "University created successfully.",
            data: savedUniversity
        });
    } catch (error) {
        console.error("Error creating university:", error);
        res.status(500).json({
            success: false,
            message: "Failed to create university."
        });
    }
};

// Get all Universities
const getAllUniversities = async (req, res) => {
    try {
        const universities = await University.find();
        res.status(200).json({
            success: true,
            data: universities
        });
    } catch (error) {
        console.error("Error fetching universities:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch universities."
        });
    }
};

// Get a University by ID
const getUniversityById = async (req, res) => {
    try {
        const { id } = req.params;

        const university = await University.findById(id);
        if (!university) {
            return res.status(404).json({
                success: false,
                message: "University not found."
            });
        }

        res.status(200).json({
            success: true,
            data: university
        });
    } catch (error) {
        console.error("Error fetching university:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch university."
        });
    }
};

// Update a University by ID
const updateUniversity = async (req, res) => {
    try {
        const { id } = req.params;
        const { UniversityZone } = req.body;

        // Find and update the university
        const updatedUniversity = await University.findByIdAndUpdate(
            id,
            { UniversityZone },
            { new: true }
        );

        if (!updatedUniversity) {
            return res.status(404).json({
                success: false,
                message: "University not found."
            });
        }

        res.status(200).json({
            success: true,
            message: "University updated successfully.",
            data: updatedUniversity
        });
    } catch (error) {
        console.error("Error updating university:", error);
        res.status(500).json({
            success: false,
            message: "Failed to update university."
        });
    }
};

// Delete a University by ID
const deleteUniversity = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedUniversity = await University.findByIdAndDelete(id);
        if (!deletedUniversity) {
            return res.status(404).json({
                success: false,
                message: "University not found."
            });
        }

        res.status(200).json({
            success: true,
            message: "University deleted successfully."
        });
    } catch (error) {
        console.error("Error deleting university:", error);
        res.status(500).json({
            success: false,
            message: "Failed to delete university."
        });
    }
};

module.exports = {
    createUniversity,
    getAllUniversities,
    getUniversityById,
    updateUniversity,
    deleteUniversity
};
