import z from 'zod';

const createAcademicDepartmentValidationSchema = z.object({
  body: z.object({
  name: z
    .string({
        message: 'Name is Required',
        
    }),
    academicFaculty: z.string({
        message: 'Academic Faculty must be string and Required',
    }),
})
});

const updateAcademicDepartmentValidationSchema = z.object({
  body: z.object({
  name: z
    .string({
        message: 'Academic Department must be string',
    }).optional(),
    academicFaculty: z.string({
        message: 'Academic Faculty must be string and Required',
    }).optional(),
})
});

export const AcademicDepartmentValidation = {
  createAcademicDepartmentValidationSchema,
  updateAcademicDepartmentValidationSchema,
};
