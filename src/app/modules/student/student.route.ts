import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

//Will Call controller Function
router.post('/create-student', StudentControllers.createStudent);

router.get('/', StudentControllers.getAllStudents);

export const StudentRoutes = router;
