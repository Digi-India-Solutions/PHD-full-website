const express = require('express');
const { createDisciplinesCourseDetails, getAllDisciplinesCourseDetails, getDisciplinesCourseDetailsById, updateDisciplinesCourseDetails, deleteDisciplinesCourseDetails, getAllDisciplinesCourseDetailsByCourseName } = require('../Controllers/DisciplinesCourseDetailsController');
const DisciplinesCourseDetailsRouter = express.Router();

DisciplinesCourseDetailsRouter.post('/add-disciplines-course-details', createDisciplinesCourseDetails);
DisciplinesCourseDetailsRouter.get('/all-disciplines-course-details', getAllDisciplinesCourseDetails);
DisciplinesCourseDetailsRouter.get('/all-disciplines-course-details-by-course-name/:courseName', getAllDisciplinesCourseDetailsByCourseName);
DisciplinesCourseDetailsRouter.get('/single-disciplines-course-details/:id', getDisciplinesCourseDetailsById);
DisciplinesCourseDetailsRouter.put('/update-disciplines-course-details/:id', updateDisciplinesCourseDetails);
DisciplinesCourseDetailsRouter.delete('/delete-disciplines-course-details/:id', deleteDisciplinesCourseDetails);

module.exports = DisciplinesCourseDetailsRouter;
