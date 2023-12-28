import { Controller, Post, Request, UseGuards, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/user/dto/createUserDto';
import { JwtGuard } from './guards/jwt-auth.guard';
import { RefreshGuard } from './guards/refresh-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService
    ) { }

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto) {
        return await this.userService.create(createUserDto)
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        return await this.authService.login(req.user);
    }

    @UseGuards(RefreshGuard)
    @Post('refresh')
    async refreshToken(@Request() req) {
        return await this.authService.refreshToken(req.user)
    }

    // this is a test route for check the JWT guard of the application
    @UseGuards(JwtGuard)
    @Post('guard')
    async guard(@Request() request) {
        return request.user
    }
}
