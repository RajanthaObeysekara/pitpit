import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import * as bcrypt from 'bcrypt'
import { Complex } from './complex.entities';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, nullable: false })
    name: string

    @Column({ unique: true, nullable: false })
    email: string

    @Column({ nullable: false })
    password: string

    @Column({ nullable: false })
    access_token: string

    @Column({ nullable: false })
    refresh_token: string

    @OneToMany(type => Complex,complex => complex.user)
    complex: Complex[]

    @BeforeInsert()
    async hashPassword(){
        // TODO Encrption
        this.password = bcrypt.hash(this.password,10)
    }
}