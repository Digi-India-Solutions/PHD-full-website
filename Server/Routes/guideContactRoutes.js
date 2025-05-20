const { createContactSubmission, getContacts, deleteContact } = require("../Controllers/guideContactController");

const GuideContactRouter = require("express").Router();

GuideContactRouter.post("/send-guide-contact", createContactSubmission);
GuideContactRouter.get("/all-guide-contact", getContacts);
GuideContactRouter.delete("/delete-guide-contact/:id", deleteContact);
module.exports = GuideContactRouter;
