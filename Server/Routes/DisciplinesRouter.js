const { createDiscipline, getAllDisciplines, getDisciplineById, updateDiscipline, deleteDiscipline } = require("../Controllers/DisciplinesController")
const upload = require("../Middleware/multer")

const DisciplinesRouter = require("express").Router()

DisciplinesRouter.post("/add-discipline", upload.single("DisciplinesLogo"), createDiscipline)
DisciplinesRouter.get("/all-discipline", getAllDisciplines)
DisciplinesRouter.get("/single-discipline/:id", getDisciplineById)
DisciplinesRouter.put("/update-discipline/:id", upload.single("DisciplinesLogo"), updateDiscipline)
DisciplinesRouter.delete("/delete-discipline/:id", deleteDiscipline)

module.exports = DisciplinesRouter