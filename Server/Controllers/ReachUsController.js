const ReachUs = require("../Models/ReachusModel");


const createReachUs = async (req, res) => {
    try {
        console.log(req.body)
        const { phoneNumber, message } = req.body;
        if (!phoneNumber || !message) {
            return res.status(400).json({ error: "Phone number and message are required." });
        }
        const newReachUs = new ReachUs({ phoneNumber, message });
        await newReachUs.save();

        res.status(201).json({ message: "Reach Us entry created successfully", data: newReachUs });
    } catch (error) {
        res.status(500).json({ error: "Internal server error", details: error.message });
    }
};

// Get all ReachUs records
const getReachUs = async (req, res) => {
    try {
        const reachUsRecords = await ReachUs.find().sort({ createdAt: -1 });
        res.status(200).json({ message: "Records fetched successfully", data: reachUsRecords });
    } catch (error) {
        res.status(500).json({ error: "Internal server error", details: error.message });
    }
};

// Delete a ReachUs record by ID
const deleteReachUs = async (req, res) => {
    try {
        const { id } = req.params;
        const record = await ReachUs.findById(id);
        if (!record) {
            return res.status(404).json({ error: "Record not found" });
        }
        await record.deleteOne();
        res.status(200).json({ message: "Record deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal server error", details: error.message });
    }
};

module.exports = {
    createReachUs,
    getReachUs,
    deleteReachUs,
};
