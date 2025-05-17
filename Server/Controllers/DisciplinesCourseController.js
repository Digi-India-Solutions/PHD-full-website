const DisciplinesCourse = require("../Models/DisciplinesCourseModel");


// Create a new Discipline Course
const createDisciplinesCourse = async (req, res) => {
    try {
        const { Disciplines, DisciplinesCourseName } = req.body;

        if (!Disciplines || !DisciplinesCourseName) {
            return res.status(400).json({ success: false, message: "All fields are required." });
        }

        const existingCourse = await DisciplinesCourse.findOne({
            DisciplinesCourseName: { $regex: `^${DisciplinesCourseName}$`, $options: "i" },
        });

        if (existingCourse) {
            return res.status(400).json({
                success: false,
                message: "A course with the same name already exists."
            });
        }
        const newCourse = new DisciplinesCourse({
            Disciplines,
            DisciplinesCourseName,
        });

        await newCourse.save();
        res.status(201).json({ success: true, message: "Discipline course created successfully.", data: newCourse });
    } catch (error) {
        console.error("Error creating discipline course:", error);
        res.status(500).json({ success: false, message: "Failed to create discipline course." });
    }
};

// Get all Discipline Courses
const getAllDisciplinesCourses = async (req, res) => {
    try {
        const courses = await DisciplinesCourse.find().populate("Disciplines");
        if (!courses) {
            return res.status(404).json({
                success: false,
                message: "No courses found for this discipline."
            })
        }
        res.status(200).json({ success: true, data: courses });
    } catch (error) {
        console.error("Error fetching courses:", error);
        res.status(500).json({ success: false, message: "Failed to fetch discipline courses." });
    }
};

// Get all Discipline Courses
const getAllDisciplinesCoursesByDisplineName = async (req, res) => {
    try {
        const { displine } = req.params
        const courses = await DisciplinesCourse.find().populate("Disciplines");
        if (!courses) {
            return res.status(404).json({
                success: false,
                message: "No courses found for this discipline."
            })
        }
        const filterData = courses.filter((x) => x.Disciplines.DisciplinesName.trim() === displine.trim())
        res.status(200).json({ success: true, data: filterData });
    } catch (error) {
        console.error("Error fetching courses:", error);
        res.status(500).json({ success: false, message: "Failed to fetch discipline courses." });
    }
};

const getCoursesWithMakeProductFalse = async (req, res) => {
    try {
        const courses = await DisciplinesCourse.find().populate("Disciplines");
        // console.log(courses)
        const filterData = courses.filter((x) => x.makeProduct === false)
        console.log(filterData)
        if (filterData.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No courses found with makeProduct: false."
            });
        }

        res.status(200).json({ success: true, data: filterData });
    } catch (error) {
        console.error("Error fetching courses:", error);
        res.status(500).json({ success: false, message: "Failed to fetch discipline courses." });
    }
};


// Get Courses by Discipline ID
const getCoursesByDiscipline = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id)
        const courses = await DisciplinesCourse.findById(id).populate("Disciplines");

        if (!courses) {
            return res.status(404).json({ success: false, message: "No courses found for this discipline." });
        }

        res.status(200).json({ success: true, data: courses });
    } catch (error) {
        console.error("Error fetching courses by discipline:", error);
        res.status(500).json({ success: false, message: "Failed to fetch courses by discipline." });
    }
};

// Update a Discipline Course
const updateDisciplinesCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const { Disciplines, DisciplinesCourseName } = req.body;
        // Check if a course with the same DisciplinesCourseName exists (case-insensitive)
        const existingCourse = await DisciplinesCourse.findOne({
            DisciplinesCourseName: { $regex: new RegExp(`^${DisciplinesCourseName}$`, 'i') }
        });

        if (existingCourse && existingCourse._id.toString() !== id) {
            return res.status(400).json({ success: false, message: "A course with this name already exists." });
        }

        const updatedCourse = await DisciplinesCourse.findByIdAndUpdate(
            id,
            { Disciplines, DisciplinesCourseName },
            { new: true }
        );

        if (!updatedCourse) {
            return res.status(404).json({ success: false, message: "Discipline course not found." });
        }

        res.status(200).json({ success: true, message: "Discipline course updated successfully.", data: updatedCourse });
    } catch (error) {
        console.error("Error updating discipline course:", error);
        res.status(500).json({ success: false, message: "Failed to update discipline course." });
    }
};

// Delete a Discipline Course
const deleteDisciplinesCourse = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedCourse = await DisciplinesCourse.findByIdAndDelete(id);

        if (!deletedCourse) {
            return res.status(404).json({ success: false, message: "Discipline course not found." });
        }

        res.status(200).json({ success: true, message: "Discipline course deleted successfully." });
    } catch (error) {
        console.error("Error deleting discipline course:", error);
        res.status(500).json({ success: false, message: "Failed to delete discipline course." });
    }
};

module.exports = {
    createDisciplinesCourse,
    getAllDisciplinesCourses,
    getCoursesByDiscipline,
    updateDisciplinesCourse,
    deleteDisciplinesCourse,
    getCoursesWithMakeProductFalse,
    getAllDisciplinesCoursesByDisplineName
};
