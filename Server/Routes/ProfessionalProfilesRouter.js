const { createProfessionalProfile, updateProfessionalProfile, getAllProfessionalProfiles, getAllProfessionalProfilesById, deleteProfessionalProfile } = require("../Controllers/ProfessionalProfileController")
const upload = require("../Middleware/multer")

const ProfessionalProfilesRouter = require("express").Router()

ProfessionalProfilesRouter.post("/add-profession-guide", upload.single("image"), createProfessionalProfile)
ProfessionalProfilesRouter.get("/all-profession-guide", getAllProfessionalProfiles)
ProfessionalProfilesRouter.get("/single-profession-guide/:id", getAllProfessionalProfilesById)
ProfessionalProfilesRouter.put("/update-profession-guide/:id", upload.single("image"), updateProfessionalProfile)
ProfessionalProfilesRouter.delete("/delete-profession-guide/:id", deleteProfessionalProfile)

module.exports = ProfessionalProfilesRouter