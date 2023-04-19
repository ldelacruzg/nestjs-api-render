import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers() {
    return this.usersService.users({});
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    const user = await this.usersService.user({ id: Number(id) });

    if (!user) {
      throw new NotFoundException(`User not found with id ${id}`);
    }

    return user;
  }

  @Post()
  async createPost(@Body() body: { email: string; name: string }) {
    const { email, name } = body;
    return this.usersService.createUser({ email, name });
  }

  @Put(':id')
  async updatePost(
    @Param('id') id: string,
    @Body() body: { email: string; name: string },
  ) {
    const { email, name } = body;
    return this.usersService.updateUser({
      where: { id: Number(id) },
      data: { email, name },
    });
  }
}
