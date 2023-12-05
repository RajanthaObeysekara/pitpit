import { Param, Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Get('all')
    getAllUsers() {
        return 'all users'
    }

    @Get(':id')
    getUser(@Param("id") id: any) {
        return this.userService.findOne(id)
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto)
    }
}
