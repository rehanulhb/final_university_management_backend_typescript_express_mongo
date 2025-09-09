import { NextFunction, Request, RequestHandler, Response } from 'express';
import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';

const createStudent: RequestHandler = async (req, res, next) => {
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

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Student is Created Successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserControllers = {
  createStudent,
};
