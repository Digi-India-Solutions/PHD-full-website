const mongoose = require("mongoose")

const AllUniversitySchema = new mongoose.Schema({
    UniversityZone: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "University",
        required: true
    },
    Universities: {
        type: [String],
        required: true
    }
})

const AllUniversity = mongoose.model("AllUniversitys", AllUniversitySchema)

module.exports = AllUniversity