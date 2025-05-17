const mongoose = require("mongoose")

const DisciplinesCourseSchema = new mongoose.Schema({
    Disciplines: {
        type: mongoose.Types.ObjectId,
        ref: "Disciplines",
        required: true
    },
    DisciplinesCourseName: {
        type: String,
        required: true
    },
    makeProduct: {
        type: Boolean,
        default: false
    }
})


const DisciplinesCourse = mongoose.model("DisciplinesCourse", DisciplinesCourseSchema)

module.exports = DisciplinesCourse