import { z } from "zod";

export const CreateUserSchema = z.object({
    username: z.string().min(3).max(20),
    password: z.string().min(8),
    name: z.string().min(1),
});

export const SignInSchema = z.object({
    username: z.string().min(3).max(20),
    password: z.string().min(8),
});

export const CreateRoomSchema = z.object({
    name: z.string().min(3).max(20)
});



export type CreateUser = z.infer<typeof CreateUserSchema>;
export type SignIn = z.infer<typeof SignInSchema>;
