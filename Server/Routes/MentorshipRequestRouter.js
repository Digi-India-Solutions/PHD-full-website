const { createMentorshipRequest, getMentorshipRequests, DeleteMentorshipRequests } = require("../Controllers/mentorshipRequestController")

const MentorshipRequestRouter = require("express").Router()

MentorshipRequestRouter.post("/submit-mentorship-request", createMentorshipRequest)
MentorshipRequestRouter.get("/all-mentorship-request", getMentorshipRequests)
MentorshipRequestRouter.delete("/delete-mentorship-request/:id", DeleteMentorshipRequests)

module.exports = MentorshipRequestRouter