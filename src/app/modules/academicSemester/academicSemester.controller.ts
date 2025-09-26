import { NextFunction, Request, RequestHandler, Response } from 'express';

import sendResponse from '../../utils/sendResponse';
import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { AcademicSemesterServices } from './academicSemester.service';

const createAcademicSemester= catchAsync(async (req, res) => {

    

    const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
      req.body
    );

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Academic Semester is Created Successfully',
      data: result,
    });
  
})

const getSingleAcademicSemester = catchAsync(async(req, res)=>{
  const {semesterId} = req.params;
  const result = await AcademicSemesterServices.getSingleAcademicSemesterFromDB(semesterId);

  sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Academic Semester is retrieved Successfully',
      data: result,
    });

})

export const AcademicSemesterControllers = {
  createAcademicSemester,
};
