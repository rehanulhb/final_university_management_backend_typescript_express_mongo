import z from 'zod';

const academicFacultyValidationSchema = z.object({
  name: z
    .string({
        message: 'Academic Faculty must be string',
    })
});

export const UserValidation = {
  academicFacultyValidationSchema,
};
