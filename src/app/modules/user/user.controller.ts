import { Request, Response } from 'express';
import { UserServices } from './user.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    //Creating a schema validation using Zod

    const { password, student: studentData } = req.body;

    //Data Validation using Joi
    // const { error, value } = studentValidationSchema.validate(studentData);

    //Data Validation using Zod
    // const zodparsedData = studentValidationSchema.parse(studentData);

    const result = await UserServices.createStudentIntoDB(
      password,
      studentData,
    );

    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'Something went wrong',
    //     error,
    //   });
    // }

    //Will call Service function to send this data

    //Send Response
    res.status(200).json({
      success: true,
      message: 'Student is Created Successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

export const UserControllers = {
  createStudent,
};
