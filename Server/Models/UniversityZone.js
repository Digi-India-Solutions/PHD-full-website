const mongoose = require("mongoose")

const UniversitySchema = new mongoose.Schema({
    UniversityZone: {
        type: String,
        required: true
    }
})


const University = mongoose.model("University", UniversitySchema)

module.exports = University