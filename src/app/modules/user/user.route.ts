import express from 'express';

const router = express.Router();

//Will Call controller Function
router.post('/create-student', UserControllers.createStudent);

export const UserRoutes = router;
