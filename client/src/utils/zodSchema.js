import { z } from "zod";

export const signupSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email format"),
  name: z.string().optional(),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Confirm your password"),
  profilePicture: z.any().optional(),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Passwords must match",
});
