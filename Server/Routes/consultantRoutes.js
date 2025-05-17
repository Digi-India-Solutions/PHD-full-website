const { submitConsultationForm, getAllRecord, deleteRecord } = require("../Controllers/consultantController");

const consultantRoutes = require("express").Router()


// POST route to handle form submission
consultantRoutes.post('/send-consultation', submitConsultationForm);
consultantRoutes.get('/all-consultation', getAllRecord);
consultantRoutes.delete('/delete-consultation/:id', deleteRecord);

module.exports = consultantRoutes;