const express = require('express');
const { createAllUniversity, getAllAllUniversities, getAllUniversityById, updateAllUniversity, deleteAllUniversity, getAllAllUniversitiesAccordingZone } = require('../Controllers/AllUniversityController');
const AllUniversityRouter = express.Router();



AllUniversityRouter.post('/add-multi-universities', createAllUniversity);
AllUniversityRouter.get('/all-multi-universities', getAllAllUniversities);
AllUniversityRouter.get('/all-multi-universities-accordign-zone', getAllAllUniversitiesAccordingZone);
AllUniversityRouter.get('/get-multi-universities/:id', getAllUniversityById);
AllUniversityRouter.put('/update-multi-universities/:id', updateAllUniversity);
AllUniversityRouter.delete('/delete-multi-universities/:id', deleteAllUniversity);

module.exports = AllUniversityRouter;
