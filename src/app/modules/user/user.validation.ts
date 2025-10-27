import z from 'zod';
import { UserStatus } from './user.constant';

const userValidationSchema = z.object({
  password: z
    .string()
    .max(20, { message: 'Password cannot be more than 20 characters' })
    .optional()
    .catch('Password must be a string'),
});

const changeStatusValidationSchema = z.object({
  body: z.object({
    status: z.enum([...UserStatus] as [string, ...string[]]),
  }),
});

export const UserValidation = {
  userValidationSchema,
  changeStatusValidationSchema,
};
