import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import Joi from 'joi';

const createStudent = async (req: Request, res: Response) => {
  try {
    //Creating a schema validation using Joi
    const JoivalidationSchema = Joi.object({
      id: Joi.string(),
      name: {
        firstName: Joi.string().max(20),
        middleName: Joi.string().max(20),
        lastName: Joi.string().max(20),
      },
      gender: Joi.string().required().valid(['male', 'female', 'other']),
    });

    const { student: studentData } = req.body;

    //Will call Service function to send this data

    const result = await StudentServices.createStudentIntoDB(studentData);

    //Send Response
    res.status(200).json({
      success: true,
      message: 'Student is Created Successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Students are Retrieved Successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId!);
    res.status(200).json({
      success: true,
      message: 'Students is Retrieved Successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
