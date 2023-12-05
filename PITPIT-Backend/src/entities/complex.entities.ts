import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entities";

@Entity()
export class Complex {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, nullable: false })
    name: string

    @Column({ unique: true, nullable: false })
    place:string

    @ManyToOne(type => User, (user)=> user.complex)
    user:User
}