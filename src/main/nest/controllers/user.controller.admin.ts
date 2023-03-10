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
import { GetAllUsersController } from 'src/presentation/controllers/user/getAllUsers-controller';
import { GetOneUserController } from 'src/presentation/controllers/user/getOneUser-controller';
import { UpdateUserController } from 'src/presentation/controllers/user/updateUser-controller';

@Controller('/admin/user')
export class UserControllerAdmin {
  constructor(
    private readonly createUserController: CreateUserController,
    private readonly deleteUserController: DeleteUserController,
    private readonly updateUserController: UpdateUserController,
    private readonly getAllUsersController: GetAllUsersController,
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
    return await this.updateUserController.execute(httpRequest);
  }

  @Get('/get-one-user')
  async getOne(@Query() query) {
    const { id, restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.getOneUserController.execute(httpRequest);
  }

  @Get('/get-all-users')
  async getAll(@Query() query) {
    const { restaurant } = query;
    const httpRequest: HttpRequest = { restaurant };
    return await this.getAllUsersController.execute(httpRequest);
  }
}
