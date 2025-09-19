import { NextFunction, Request, RequestHandler, Response } from 'express';

import sendResponse from '../../utils/sendResponse';
import status from 'http-status';
import catchAsync from '../../utils/catchAsync';

const createAcademicSemester= catchAsync(async (req, res) => {

    //Creating a schema validation using Zod

    //const { password, student: studentData } = req.body;

    // const result = await UserServices.createStudentIntoDB(
    //   password,
    //   studentData,
    // );

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Student is Created Successfully',
      data: result,
    });
  
})

export const AcademicSemesterControllers = {
  createAcademicSemester,
};
