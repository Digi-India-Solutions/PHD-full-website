const { createContactSubmission, getContacts } = require("../Controllers/guideContactController");

const GuideContactRouter = require("express").Router();

GuideContactRouter.post("/send-guide-contact", createContactSubmission);
GuideContactRouter.get("/all-guide-contact", getContacts);

module.exports = GuideContactRouter;
