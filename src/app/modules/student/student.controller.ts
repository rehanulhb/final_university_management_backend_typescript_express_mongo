import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import Joi from 'joi';

const createStudent = async (req: Request, res: Response) => {
  try {
    //Creating a schema validation using Joi
    const userNameJoiSchema = Joi.object({
      firstName: Joi.string()
        .trim()
        .max(20)
        .required()
        .custom((value, helpers) => {
          const capitalized = value.charAt(0).toUpperCase() + value.slice(1);
          if (value !== capitalized) {
            return helpers.error('string.capitalize');
          }
          return value;
        })
        .messages({
          'any.required': 'First Name is Required',
          'string.max': 'First Name Cannot be more than 20 Characters',
          'string.capitalize': '{{#label}} must start with a capital letter',
        }),
      middleName: Joi.string().allow('', null),
      lastName: Joi.string()
        .required()
        .pattern(/^[A-Za-z]+$/)
        .messages({
          'any.required': 'Last Name is Required',
          'string.pattern.base': '{#value} is not valid',
        }),
    });

    // Guardian Schema
    const guardianJoiSchema = Joi.object({
      fatherName: Joi.string().required().messages({
        'any.required': "Father's Name is required",
      }),
      fatherOccupation: Joi.string().required().messages({
        'any.required': "Father's Occupation is required",
      }),
      fatherContactNo: Joi.string().required().messages({
        'any.required': "Father's Contact Number is required",
      }),
      motherName: Joi.string().required().messages({
        'any.required': "Mother's Name is required",
      }),
      motherOccupation: Joi.string().required().messages({
        'any.required': "Mother's Occupation is required",
      }),
      motherContactNo: Joi.string().required().messages({
        'any.required': "Mother's Contact Number is required",
      }),
    });

    // Local Guardian Schema
    const localGuardianJoiSchema = Joi.object({
      name: Joi.string().required().messages({
        'any.required': 'Local Guardian Name is required',
      }),
      occupation: Joi.string().required().messages({
        'any.required': 'Local Guardian Occupation is required',
      }),
      contactNo: Joi.string().required().messages({
        'any.required': 'Local Guardian Contact Number is required',
      }),
      address: Joi.string().required().messages({
        'any.required': 'Local Guardian Address is required',
      }),
    });

    // Student Schema
    const studentJoiSchema = Joi.object({
      id: Joi.string().required().messages({
        'any.required': 'Student ID is required',
      }),
      name: userNameJoiSchema.required().messages({
        'any.required': 'Student Name is required',
      }),
      gender: Joi.string()
        .valid('male', 'female', 'other')
        .required()
        .messages({
          'any.only':
            "The Gender field can only be one of the following: 'male', 'female', or 'other'.",
          'any.required': 'Gender is required',
        }),
      dateOfBirth: Joi.string().optional(),

      email: Joi.string().email().required().messages({
        'string.email': '{#value} is not a valid email type',
        'any.required': 'Email is required',
      }),

      contactNo: Joi.string().required().messages({
        'any.required': 'Contact Number is required',
      }),
      emergencyContactNo: Joi.string().required().messages({
        'any.required': 'Emergency Contact Number is required',
      }),
      bloodGroup: Joi.string()
        .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
        .messages({
          'any.only': '{#value} is not a valid blood group',
        }),

      presentAddress: Joi.string().required().messages({
        'any.required': 'Present Address is required',
      }),
      permanentAddress: Joi.string().required().messages({
        'any.required': 'Permanent Address is required',
      }),

      guardian: guardianJoiSchema.required().messages({
        'any.required': 'Guardian information is required',
      }),
      localGuardian: localGuardianJoiSchema.required().messages({
        'any.required': 'Local Guardian information is required',
      }),

      profileImg: Joi.string().uri().optional(),

      isActive: Joi.string()
        .valid('active', 'blocked')
        .default('active')
        .messages({
          'any.only': "Status must be either 'active' or 'blocked'.",
        }),
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
