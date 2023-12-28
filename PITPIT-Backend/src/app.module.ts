import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ComplexModule } from './complex/complex.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthModule } from './auth/auth.module';
import config from 'ormconfig'
@Module({
  imports: [UserModule, ComplexModule, TypeOrmModule.forRoot(config), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
