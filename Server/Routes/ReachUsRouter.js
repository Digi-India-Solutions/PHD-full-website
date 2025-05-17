const { createReachUs, getReachUs, deleteReachUs } = require("../Controllers/ReachUsController")

const ReachUsRouter = require("express").Router()

ReachUsRouter.post("/send-reachus", createReachUs)
ReachUsRouter.get("/all-reachus", getReachUs)
ReachUsRouter.delete("/delete-reachus/:id", deleteReachUs)

module.exports = ReachUsRouter