import {
  Controller,
  Post,
  Body,
  Delete,
  Query,
  Patch,
  Get,
} from '@nestjs/common';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { CreateUserController } from 'src/presentation/controllers/user/createUser-controller';
import { DeleteUserController } from 'src/presentation/controllers/user/deleteUser-controller';
import { GetOneUserController } from 'src/presentation/controllers/user/getOneUser-controller';
import { UpdateUserController } from 'src/presentation/controllers/user/updateUser-controller';

@Controller('/user')
export class UserController {
  constructor(
    private readonly createUserController: CreateUserController,
    private readonly deleteUserController: DeleteUserController,
    private readonly UpdateUserController: UpdateUserController,
    private readonly getOneUserController: GetOneUserController,
  ) {}

  @Post('/create-user')
  async create(@Body() body) {
    const httpRequest: HttpRequest = { body };
    return await this.createUserController.execute(httpRequest);
  }

  @Delete('/delete-user')
  async delete(@Query() query) {
    const { id, restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.deleteUserController.execute(httpRequest);
  }

  @Patch('/update-user')
  async update(@Body() body) {
    const httpRequest: HttpRequest = { body };
    return await this.UpdateUserController.execute(httpRequest);
  }

  @Get('/get-one-user')
  async getOne(@Query() query) {
    const { id, restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.getOneUserController.execute(httpRequest);
  }
}
