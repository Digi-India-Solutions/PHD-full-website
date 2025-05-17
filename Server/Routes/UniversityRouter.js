const express = require('express');
const { createUniversity, getAllUniversities, getUniversityById, updateUniversity, deleteUniversity } = require('../Controllers/UniversityController');
const UniversityRouter = express.Router();

// Routes
UniversityRouter.post('/add-universities', createUniversity);
UniversityRouter.get('/all-universities', getAllUniversities);
UniversityRouter.get('/single-universities/:id', getUniversityById);
UniversityRouter.put('/update-universities/:id', updateUniversity);
UniversityRouter.delete('/delete-universities/:id', deleteUniversity);

module.exports = UniversityRouter;
