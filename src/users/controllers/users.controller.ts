import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { User } from '../models/user.interface';
import {Observable} from 'rxjs'

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}
  
    @Post()
    create(@ Body() post: User): Observable<User>{
        return this.userService.createPost(post)
    }
}
