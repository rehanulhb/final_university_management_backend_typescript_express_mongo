
import { NextFunction, Request, RequestHandler, Response } from 'express';
import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { CourseServices } from './course.service';
import sendResponse from '../../utils/sendResponse';


const createCourse= catchAsync(async (req, res) => {

    const result = await CourseServices.createCourseIntoDB(
      req.body
    );

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Course is Created Successfully',
      data: result,
    });
  
})

const getAllCourses = catchAsync(async (req, res) => {
  const result = await CourseServices.getAllCoursesFromDB(req.query);

  sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Courses are retrieved Successfully',
      data: result,
    });
});

const getSingleCourse = catchAsync(async(req, res)=>{
  const {id} = req.params;
  const result = await CourseServices.getSingleCourseFromDB(id!);

  sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Course is retrieved Successfully',
      data: result,
    });

})

const deleteCourse = catchAsync(async(req, res)=>{
  const {id} = req.params;
  const result = await CourseServices.deleteCourseFromDB(id!);

  sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Course is Deleted Successfully',
      data: result,
    });

})



// const updateAcademicFaculty = catchAsync(async(req, res)=>{
//   const {facultyId} = req.params;
//   const result = await AcademicFacultyServices.updateAcademicFacultyIntoDB(facultyId!, req.body,);

//   sendResponse(res, {
//       statusCode: status.OK,
//       success: true,
//       message: 'Academic Faculty is Updated Successfully',
//       data: result,
//     });

// })

export const CourseControllers = {
  createCourse,
  getAllCourses,
  getSingleCourse,
  deleteCourse,
  
};
