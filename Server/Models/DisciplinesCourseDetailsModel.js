const mongoose = require("mongoose")

const DisciplinesCourseDetailsSchema = new mongoose.Schema({
    Disciplines: {
        type: mongoose.Types.ObjectId,
        ref: "Disciplines",
        required: true
    },
    DisciplinesCourseName: {
        type: mongoose.Types.ObjectId,
        ref: "DisciplinesCourse",
        required: true
    },
    CourseOverView: {
        type: String,
        required: true
    },
    Studentenrolledtaughtto: {
        type: String,
        required: true
    }
})

const DisciplinesCourseDetails = mongoose.model("DisciplinesCourseDetails", DisciplinesCourseDetailsSchema)

module.exports = DisciplinesCourseDetails