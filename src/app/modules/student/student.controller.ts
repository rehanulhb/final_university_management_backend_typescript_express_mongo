import { NextFunction, Request, RequestHandler, Response } from 'express';
import { StudentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';
import catchAsync from '../../utils/catchAsync';

const getSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.getSingleStudentFromDB(studentId!);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Students is Retrieved Successfully',
    data: result,
  });
});

const getAllStudents = catchAsync(async (req, res) => {
  
  const result = await StudentServices.getAllStudentsFromDB(req.query);
  sendResponse(res,{
    statusCode: status.OK,
    success: true,
    message: 'Students Are Retrieved Successfully',
    data: result,
  })
});

const updateStudent= catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const {student} = req.body;
  const result = await StudentServices.updateStudentIntoDB(studentId!, student);
  
  sendResponse(res,{
    statusCode: status.OK,
    success: true,
    message: 'Student is Updated Successfully',
    data: result,
  })
});

const deleteStudent= catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.deleteStudentFromDB(studentId!);
  
  sendResponse(res,{
    statusCode: status.OK,
    success: true,
    message: 'Student is Deleted Successfully',
    data: result,
  })
});

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};
