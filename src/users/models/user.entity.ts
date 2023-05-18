import { type } from "os";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: ''})
    firstName: string;

    @Column({default: ''})
    lastName: string;

    @Column({default: ''})
    email: string;

    @Column({default: ''})
    password: string;

    @Column({default: ''})
    phoneNumber: string;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMPS'})
    createdAt: Date


}