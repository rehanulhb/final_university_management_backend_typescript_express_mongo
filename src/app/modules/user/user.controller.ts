import { NextFunction, Request, RequestHandler, Response } from 'express';
import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';
import catchAsync from '../../utils/catchAsync';

const createStudent= catchAsync(async (req, res) => {

    //Creating a schema validation using Zod

    const { password, student: studentData } = req.body;

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
  
})

export const UserControllers = {
  createStudent,
};
