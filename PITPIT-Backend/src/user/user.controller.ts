import { Param, Controller, Get, Post, Body, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/updateUser.Dto';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Get('all')
    getAllUsers() {
        return 'all users'
    }

    @Get(':id')
    getUser(@Param("id") id: number) {
        return this.userService.findOne(id)
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto)
    }

    @Put(':id')
    updateUser(@Body() UpdateUserDto: UpdateUserDto, @Param("id") id: number) {
        return this.userService.update(id, UpdateUserDto)
    }
}
