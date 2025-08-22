import z from 'zod';

const userNameValidationchema = z.object({
  firstName: z.string().min(1).max(20),
  middleName: z.string().default(''),
  lastName: z.string().min(1),
});

// Guardian Schema
const guardianValidationSchema = z.object({
  fatherName: z.string().min(1),
  fatherOccupation: z.string().min(1),
  fatherContactNo: z.string().min(1),
  motherName: z.string().min(1),
  motherOccupation: z.string().min(1),
  motherContactNo: z.string().min(1),
});

// Local Guardian Schema
const localGuardianValidationSchema = z.object({
  name: z.string().min(1),
  occupation: z.string().min(1),
  contactNo: z.string().min(1),
  address: z.string().min(1),
});

// Student Schema
export const studentValidationSchema = z.object({
  id: z.string().min(1),

  name: userNameValidationchema,

  gender: z.enum(['male', 'female', 'other']),

  dateOfBirth: z.string().default(''),

  email: z.string().email({ message: 'Invalid Email Format' }),

  contactNo: z.string().min(1),
  emergencyContactNo: z.string().min(1),

  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  presentAddress: z.string().min(1),
  permanentAddress: z.string().min(1),

  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,

  profileImg: z.string().default(''),

  isActive: z.enum(['active', 'blocked']).default('active'),
});

export default studentValidationSchema;
