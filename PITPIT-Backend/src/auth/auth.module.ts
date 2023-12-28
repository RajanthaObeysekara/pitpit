import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { JwtModule } from '@nestjs/jwt/dist';
import { LocalStrategy } from './strategies/local-strategy';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entities';
import { JwtStrategy } from './strategies/jwt-strategy';
import { RefreshStrategy } from './strategies/refresh-strategy';

@Module({
  providers: [AuthService, UserService, LocalStrategy, JwtStrategy, RefreshStrategy],
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: `${process.env.jwt_secret}`,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController]
})
export class AuthModule { }
