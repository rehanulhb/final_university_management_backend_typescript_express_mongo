import express, { NextFunction, Request, Response } from 'express';
import { UserControllers } from './user.controller';
import { ZodObject } from 'zod';
import { createStudentValidationSchema } from '../student/student.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();


//Will Call controller Function
router.post(
  '/create-student',
  validateRequest(createStudentValidationSchema),
  UserControllers.createStudent,
);

export const UserRoutes = router;
