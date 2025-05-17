const Professional = require("../Models/ProfessionalProfileModel");
const { deleteImage } = require("../Utils/HelperfunctionDeleteImage");


// Create a new professional profile
const createProfessionalProfile = async (req, res) => {
    try {
        const { name, degree, yearsOfExperience, fieldExpertise, university } = req.body;
        const image = req.file;
        if (!name || !degree || !yearsOfExperience || !fieldExpertise || !university || !image) {
            if (image) deleteImage(image.path);
            return res.status(400).json({
                success: false,
                message: "All fields are required, including the image."
            });
        }

        const newProfile = new Professional({
            name,
            degree,
            yearsOfExperience,
            fieldExpertise,
            university,
            image: image.path
        });

        await newProfile.save();

        res.status(201).json({
            success: true,
            message: "Professional profile created successfully",
            data: newProfile
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to create professional profile",
            error: error.message
        });
    }
};

// Update an existing professional profile
const updateProfessionalProfile = async (req, res) => {
    const { id } = req.params;
    const { name, degree, yearsOfExperience, fieldExpertise, university } = req.body;
    const image = req.file;

    try {
        const existingProfile = await Professional.findById(id);

        if (!existingProfile) {
            if (image) deleteImage(image.path); // Delete new image if no profile exists
            return res.status(404).json({
                success: false,
                message: "Professional profile not found"
            });
        }

        // Delete the old image if a new image is uploaded
        if (image && existingProfile.image) {
            deleteImage(existingProfile.image);
        }

        const updatedProfile = await Professional.findByIdAndUpdate(
            id,
            {
                name: name || existingProfile.name,
                degree: degree || existingProfile.degree,
                yearsOfExperience: yearsOfExperience || existingProfile.yearsOfExperience,
                fieldExpertise: fieldExpertise || existingProfile.fieldExpertise,
                university: university || existingProfile.university,
                image: image ? image.path : existingProfile.image
            },
            { new: true }
        );

        res.status(200).json({
            success: true,
            message: "Professional profile updated successfully",
            data: updatedProfile
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to update professional profile",
            error: error.message
        });
    }
};

// Delete a professional profile
const deleteProfessionalProfile = async (req, res) => {
    const { id } = req.params;

    try {
        const existingProfile = await Professional.findById(id);

        if (!existingProfile) {
            return res.status(404).json({
                success: false,
                message: "Professional profile not found"
            });
        }

        // Delete the associated image
        if (existingProfile.image) {
            deleteImage(existingProfile.image);
        }

        await existingProfile.deleteOne();

        res.status(200).json({
            success: true,
            message: "Professional profile deleted successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to delete professional profile",
            error: error.message
        });
    }
};

// Get all professional profiles
const getAllProfessionalProfiles = async (req, res) => {
    try {
        const profiles = await Professional.find();
        res.status(200).json({
            success: true,
            data: profiles
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch professional profiles",
            error: error.message
        });
    }
};

// Get all professional profiles
const getAllProfessionalProfilesById = async (req, res) => {
    try {
        const profiles = await Professional.findById(req.params.id);
        res.status(200).json({
            success: true,
            data: profiles
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch professional profiles",
            error: error.message
        });
    }
};

module.exports = {
    createProfessionalProfile,
    updateProfessionalProfile,
    deleteProfessionalProfile,
    getAllProfessionalProfiles,
    getAllProfessionalProfilesById
};
