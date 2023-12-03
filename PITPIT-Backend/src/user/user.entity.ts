import { Prisma } from "@prisma/client";

export class User implements Prisma.UserCreateInput{
    password: string;
    email: string;
    access_token: string;
    refresh_token: string;
    name?: string;
    
}