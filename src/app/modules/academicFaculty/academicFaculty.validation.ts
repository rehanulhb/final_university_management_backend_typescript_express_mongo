import z from 'zod';

const createAcademicFacultyValidationSchema = z.object({
  name: z
    .string({
        message: 'Academic Faculty must be string',
    })
});

const updateAcademicFacultyValidationSchema = z.object({
  name: z
    .string({
        message: 'Academic Faculty must be string',
    })
});

export const AcademicFacultyValidation = {
  createAcademicFacultyValidationSchema,
  updateAcademicFacultyValidationSchema,
};
