const GuideContact = require("../Models/GuideContactModel");

exports.createContactSubmission = async (req, res) => {
    try {
        const { guideId, name, designation, university, briefDetail } = req.body;
        if (!guideId || !name || !designation || !university || !briefDetail) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const newContact = new GuideContact({
            guideId,
            name,
            designation,
            university,
            briefDetail,
        });

        await newContact.save();

        res.status(201).json({
            message: "Contact submission successfully created",
            data: newContact,
        });
    } catch (error) {
        console.error("Error creating contact submission:", error);
        res.status(500).json({ message: "Server error, please try again later" });
    }
};

exports.getContacts = async (req, res) => {
    try {
        const contacts = await GuideContact.find().populate("guideId");
        if (!contacts.length === 0) {
            return res.status(404).json({ message: "No contacts found for this guide" });
        }

        res.status(200).json({ data: contacts });
    } catch (error) {
        console.error("Error fetching contacts:", error);
        res.status(500).json({ message: "Server error, please try again later" });
    }
};
