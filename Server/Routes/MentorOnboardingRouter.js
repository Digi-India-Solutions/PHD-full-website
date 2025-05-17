const { submitMentorOnboarding, deleteMentor, getMentor } = require("../Controllers/mentorOnboardingController")

const MentorOnboardingRouter = require("express").Router()

MentorOnboardingRouter.post("/submit-onboard-mentor", submitMentorOnboarding)
MentorOnboardingRouter.get("/all-onboard-mentor", getMentor)
MentorOnboardingRouter.delete("/delete-onboard-mentor/:id", deleteMentor)

module.exports = MentorOnboardingRouter