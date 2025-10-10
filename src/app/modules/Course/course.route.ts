import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CourseValidations } from './course.validation';
import { CourseControllers } from './course.controller';


const router = express.Router();

router.post('/create-course', 
    validateRequest(CourseValidations.createCourseValidationSchema,), 
    CourseControllers.createCourse,)

//Will Call controller Function

router.get('/', CourseControllers.getAllCourses);

router.get('/:id', CourseControllers.getSingleCourse,);

router.delete('/:id', CourseControllers.deleteCourse,);

// router.patch('/:facultyId', validateRequest(AcademicFacultyValidation.updateAcademicFacultyValidationSchema,), AcademicFacultyControllers.updateAcademicFaculty)

 

export const CourseRoutes = router;
