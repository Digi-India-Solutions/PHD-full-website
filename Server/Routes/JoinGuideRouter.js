const { createJoinGuide, getJoinGuides, deleteJoinGuide } = require("../Controllers/JoinGuideController")

const JoinGuideRouter = require("express").Router()

JoinGuideRouter.post("/send-join-guide-requiest", createJoinGuide)
JoinGuideRouter.get("/all-join-guide-requiest", getJoinGuides)
JoinGuideRouter.delete("/delete-join-guide-requiest/:id", deleteJoinGuide)

module.exports = JoinGuideRouter