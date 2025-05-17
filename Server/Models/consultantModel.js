const mongoose = require('mongoose');

const consultantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
}, {
    timestamps: true, // Adds createdAt and updatedAt timestamps
});

const Consultant = mongoose.model('Consultant', consultantSchema);

module.exports = Consultant;
