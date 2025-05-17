const AllUniversity = require("../Models/AllUniversitsModel");
const University = require("../Models/UniversityZone");


// Create a new AllUniversity
exports.createAllUniversity = async (req, res) => {
    const { UniversityZone, Universities } = req.body;

    try {
        // Validate if the UniversityZone exists
        const zoneExists = await University.findById(UniversityZone);
        if (!zoneExists) {
            return res.status(404).json({ message: "UniversityZone not found" });
        }

        const newAllUniversity = new AllUniversity({
            UniversityZone,
            Universities
        });

        const savedUniversity = await newAllUniversity.save();
        res.status(201).json(savedUniversity);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

// Get all AllUniversities
exports.getAllAllUniversities = async (req, res) => {
    try {
        const allUniversities = await AllUniversity.find().populate("UniversityZone");
        res.status(200).json(allUniversities);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

// Get all AllUniversities with combined data
exports.getAllAllUniversitiesAccordingZone = async (req, res) => {
    try {
        const allUniversities = await AllUniversity.find().populate("UniversityZone");

        // Format the response to group universities under each zone
        const combinedData = allUniversities.map((university) => ({
            UniversityZone: university.UniversityZone.UniversityZone,
            Universities: university.Universities,
        }));

        res.status(200).json({ success: true, data: combinedData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};


// Get a single AllUniversity by ID
exports.getAllUniversityById = async (req, res) => {
    const { id } = req.params;

    try {
        const allUniversity = await AllUniversity.findById(id).populate("UniversityZone");
        if (!allUniversity) {
            return res.status(404).json({ message: "AllUniversity not found" });
        }
        res.status(200).json(allUniversity);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

// Update an existing AllUniversity
exports.updateAllUniversity = async (req, res) => {
    const { id } = req.params;
    const { UniversityZone, Universities } = req.body;

    try {
        // Validate if the UniversityZone exists
        if (UniversityZone) {
            const zoneExists = await University.findById(UniversityZone);
            if (!zoneExists) {
                return res.status(404).json({ message: "UniversityZone not found" });
            }
        }

        const updatedUniversity = await AllUniversity.findByIdAndUpdate(
            id,
            { UniversityZone, Universities },
            { new: true }
        );

        if (!updatedUniversity) {
            return res.status(404).json({ message: "AllUniversity not found" });
        }

        res.status(200).json(updatedUniversity);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

// Delete an AllUniversity by ID
exports.deleteAllUniversity = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedUniversity = await AllUniversity.findByIdAndDelete(id);
        if (!deletedUniversity) {
            return res.status(404).json({ message: "AllUniversity not found" });
        }
        res.status(200).json({ message: "AllUniversity deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};
