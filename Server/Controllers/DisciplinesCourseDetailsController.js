const DisciplinesCourseDetails = require("../Models/DisciplinesCourseDetailsModel");
const DisciplinesCourse = require("../Models/DisciplinesCourseModel");

// Create a new DisciplinesCourseDetails
exports.createDisciplinesCourseDetails = async (req, res) => {
    try {
        const { Disciplines, DisciplinesCourseName, CourseOverView, Studentenrolledtaughtto } = req.body;

        const newCourseDetails = new DisciplinesCourseDetails({
            Disciplines,
            DisciplinesCourseName,
            CourseOverView,
            Studentenrolledtaughtto
        });

        const savedCourseDetails = await newCourseDetails.save();
        const course = await DisciplinesCourse.findById(DisciplinesCourseName);

        if (course && !course.makeProduct) {
            course.makeProduct = true;
            await course.save();
        }
        res.status(201).json({
            message: "DisciplinesCourseDetails created successfully",
            data: savedCourseDetails
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating DisciplinesCourseDetails",
            error: error.message
        });
    }
};

// Get all DisciplinesCourseDetails
exports.getAllDisciplinesCourseDetails = async (req, res) => {
    try {
        const courseDetails = await DisciplinesCourseDetails.find()
            .populate("Disciplines")
            .populate("DisciplinesCourseName");

        res.status(200).json({
            message: "DisciplinesCourseDetails retrieved successfully",
            data: courseDetails
        });
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving DisciplinesCourseDetails",
            error: error.message
        });
    }
};

exports.getAllDisciplinesCourseDetailsByCourseName = async (req, res) => {
    try {
        const { courseName } = req.params
        const courseDetails = await DisciplinesCourseDetails.find()
            .populate("Disciplines")
            .populate("DisciplinesCourseName");

        const filterData = courseDetails.find((x) => x.DisciplinesCourseName.DisciplinesCourseName.trim() === courseName.trim())
        res.status(200).json({
            message: "DisciplinesCourseDetails retrieved successfully",
            data: filterData
        });
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving DisciplinesCourseDetails",
            error: error.message
        });
    }
};

// Get a single DisciplinesCourseDetails by ID
exports.getDisciplinesCourseDetailsById = async (req, res) => {
    try {
        const { id } = req.params;
        const courseDetails = await DisciplinesCourseDetails.findById(id)
            .populate("Disciplines")
            .populate("DisciplinesCourseName");

        if (!courseDetails) {
            return res.status(404).json({ message: "DisciplinesCourseDetails not found" });
        }

        res.status(200).json({
            message: "DisciplinesCourseDetails retrieved successfully",
            data: courseDetails
        });
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving DisciplinesCourseDetails",
            error: error.message
        });
    }
};

// Update a DisciplinesCourseDetails by ID
exports.updateDisciplinesCourseDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const updatedCourseDetails = await DisciplinesCourseDetails.findByIdAndUpdate(id, updates, {
            new: true,
            runValidators: true
        });

        if (!updatedCourseDetails) {
            return res.status(404).json({ message: "DisciplinesCourseDetails not found" });
        }

        res.status(200).json({
            message: "DisciplinesCourseDetails updated successfully",
            data: updatedCourseDetails
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating DisciplinesCourseDetails",
            error: error.message
        });
    }
};

// Delete a DisciplinesCourseDetails by ID
exports.deleteDisciplinesCourseDetails = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedCourseDetails = await DisciplinesCourseDetails.findByIdAndDelete(id);

        if (!deletedCourseDetails) {
            return res.status(404).json({ message: "DisciplinesCourseDetails not found" });
        }

        res.status(200).json({
            message: "DisciplinesCourseDetails deleted successfully",
            data: deletedCourseDetails
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting DisciplinesCourseDetails",
            error: error.message
        });
    }
};