const { createDisciplinesCourse, getAllDisciplinesCourses, getCoursesByDiscipline, updateDisciplinesCourse, deleteDisciplinesCourse, getCoursesWithMakeProductFalse, getAllDisciplinesCoursesByDisplineName } = require("../Controllers/DisciplinesCourseController")

const DisciplinesCourseRouter = require("express").Router()

DisciplinesCourseRouter.post("/add-disciplines-course", createDisciplinesCourse)
DisciplinesCourseRouter.get("/all-disciplines-course", getAllDisciplinesCourses)
DisciplinesCourseRouter.get("/all-disciplines-course-by-disciplinename/:displine", getAllDisciplinesCoursesByDisplineName)
DisciplinesCourseRouter.get("/all-disciplines-course-make-product", getCoursesWithMakeProductFalse)
DisciplinesCourseRouter.get("/single-disciplines-course/:id", getCoursesByDiscipline)
DisciplinesCourseRouter.put("/update-disciplines-course/:id", updateDisciplinesCourse)
DisciplinesCourseRouter.delete("/delete-disciplines-course/:id", deleteDisciplinesCourse)

module.exports = DisciplinesCourseRouter
