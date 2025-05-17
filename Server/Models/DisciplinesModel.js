const mongoose = require("mongoose")

const DisciplinesSchema = new mongoose.Schema({
    DisciplinesName: {
        type: String,
        required: true
    },
    DisciplinesLogo: {
        type: String,
        required: true
    },
    DisciplinesStatus: {
        type: Boolean,
        default: false
    }
})

const Disciplines = mongoose.model("Disciplines", DisciplinesSchema)

module.exports = Disciplines