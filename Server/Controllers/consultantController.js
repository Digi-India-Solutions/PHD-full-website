const Consultant = require("../Models/consultantModel");


// Controller to handle form submission
const submitConsultationForm = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        // Validate if required fields are provided
        if (!name || !email || !phone || !message) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        // Create a new consultant entry
        const newConsultant = new Consultant({
            name,
            email,
            phone,
            message,
        });

        // Save the form data to the database
        await newConsultant.save();

        res.status(201).json({
            success: true,
            message: 'Consultation request submitted successfully',
            data: newConsultant,
        });
    } catch (error) {
        console.error('Error submitting consultation form:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

const getAllRecord = async (req, res) => {
    try {
        const data = await Consultant.find()
        if (data.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No record found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "REcord found successfully",
            data: data
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server errro"
        })
    }
}

const deleteRecord = async (req, res) => {
    try {
        const data = await Consultant.findById(req.params.id)
        if (!data) {
            return res.status(404).json({
                success: false,
                message: "No record found"
            })
        }
        await data.deleteOne()
        return res.status(200).json({
            success: true,
            message: "REcord Delete successfully",
            data: data
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server errro"
        })
    }
}


module.exports = {
    submitConsultationForm, getAllRecord ,deleteRecord
};
