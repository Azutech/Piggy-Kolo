import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Put,
  NotFoundException,
  Delete,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { User } from '../models/user.interface';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('create')
  create(@Body() Userpost: User): Observable<User> {
    return this.userService.createPost(Userpost);
  }

  @Get('getAll')
  findAll(): Observable<User[]> {
    return this.userService.findAllPost();
  }

  @Get('get/:id')
  async findOne(@Param('id') id: number): Promise<Observable<User>> {
    const user = await this.userService.findPost(id);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    }

    return this.userService.findPost(id);
  }
   @Put('update/:id')
   async update(@Body() Userpost: User, @Param('id') id: number): Promise<Observable<UpdateResult>>{
        const  user = await this.userService.updatePost(id, Userpost)
        if (!user) {
            throw new NotFoundException('User does not exist!');
        }
        return this.userService.updatePost(id, Userpost)
   }
   
   @Delete('delete/:id')
   async delete(@Param('id') id: number):  Promise<Observable<DeleteResult>>{
    const user = await this.userService.deletePost(id)
    if (!user) {
      throw new NotFoundException('User does not exist!');
      }

      return this.userService.deletePost(id)
   }

}
