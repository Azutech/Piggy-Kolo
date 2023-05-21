import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from '../models/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../models/user.interface';
import { Observable , from} from 'rxjs';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ){}

    createPost(userPost: User): Observable<User> {
        return from(this.userRepository.save(userPost))
    }

    findAllPost(): Observable<User[]>{
        return from(this.userRepository.find())
    }
}
