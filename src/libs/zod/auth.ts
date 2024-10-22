import { z } from 'zod';

export const resetPasswordSchema = z.object({
  email: z.string().email(),
});

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const newPasswordSchema = z
  .object({
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export const signUpSchema = signInSchema
  .extend({
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });
