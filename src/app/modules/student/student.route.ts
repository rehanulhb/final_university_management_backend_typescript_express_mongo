import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

//Will Call controller Function

router.get('/', StudentControllers.getAllStudents);

router.get('/:studentId', StudentControllers.getSingleStudent);
router.delete('/:studentId', StudentControllers.deleteStudent);

export const StudentRoutes = router;
