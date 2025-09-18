import z from 'zod';

const createAcademicSemesterValidationSchema = z.object({
  password: z
    .string()
    .max(20, { message: 'Password cannot be more than 20 characters' })
    .optional()
    .catch('Password must be a string'),
});

export const AcademicSemesterValidations = {
  createAcademicSemesterValidationSchema,
};
