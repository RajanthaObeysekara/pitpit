import {IsEmail, IsString} from 'class-validator'
export class CreateUserDto{
    @IsString()
    name: String;
    @IsEmail()
    email:string;
    @IsString()
    password:string;
}