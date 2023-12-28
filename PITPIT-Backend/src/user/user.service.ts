import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entities';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/updateUser.Dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) { }
    async findOne(id: number) {
        return await this.userRepo.findOne({ where: { id: id } })
    }

    async findOneEmail(email: string) {
        return await this.userRepo.findOne({ where: { email: email } })
    }

    async create(createUserDto: CreateUserDto) {
        const user = await this.userRepo.create(createUserDto);
        await this.userRepo.save(user)
        const { password, ...result } = user // use an interceptor to remove password for all the user related outputs
        return result
    }

    async update(id: number, UpdateUserDto: UpdateUserDto) {
        return await this.userRepo.update(id, UpdateUserDto)
    }
}
