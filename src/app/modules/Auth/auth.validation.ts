import { z } from 'zod';

const loginValidationSchema = z.object({
  body: z.object({
    id: z.string({ error: 'Id is required.' }),
    password: z.string({ error: 'Password is required' }),
  }),
});

export const AuthValidation = {
  loginValidationSchema,
//   changePasswordValidationSchema,
//   refreshTokenValidationSchema,
};