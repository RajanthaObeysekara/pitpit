import { Controller, Get, HttpStatus, Req, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { Request, Response } from 'express';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    
    @Get('/')
    async getAllUsers(@Req() request: Request, @Res() response: Response): Promise<any> {
        try {
            const result = await this.userService.getAllUsers()
            return response.status(HttpStatus.OK).json({
                status: 'OK!',
                message: ' Successfully fetch data!',
                result: result
            })
        } catch (error) {
            return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                status: 'OK!',
                message: ' Internal Server Error',
                result: null
            })
        }
    }
}
