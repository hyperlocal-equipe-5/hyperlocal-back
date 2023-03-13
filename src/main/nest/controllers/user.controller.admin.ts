import {
  Controller,
  Post,
  Body,
  Delete,
  Query,
  Patch,
  Get,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { CreateUserController } from 'src/presentation/controllers/user/createUser-controller';
import { DeleteUserController } from 'src/presentation/controllers/user/deleteUser-controller';
import { GetAllUsersController } from 'src/presentation/controllers/user/getAllUsers-controller';
import { GetOneUserController } from 'src/presentation/controllers/user/getOneUser-controller';
import { UpdateUserController } from 'src/presentation/controllers/user/updateUser-controller';


@ApiTags('/admin/user')
@Controller('/admin/user')
export class UserControllerAdmin {
  constructor(
    private readonly createUserController: CreateUserController,
    private readonly deleteUserController: DeleteUserController,
    private readonly UpdateUserController: UpdateUserController,
    private readonly getAllUsersController: GetAllUsersController,
    private readonly getOneUserController: GetOneUserController,
  ) {}

  @ApiOperation({
    summary: ''
  })
  @Post('/create-user')
  async create(@Body() body) {
    const httpRequest: HttpRequest = { body };
    return await this.createUserController.execute(httpRequest);
  }

  @ApiOperation({
    summary: ''
  })
  @Delete('/delete-user')
  async delete(@Query() query) {
    const { id, restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.deleteUserController.execute(httpRequest);
  }

  @ApiOperation({
    summary: ''
  })
  @Patch('/update-user')
  async update(@Body() body) {
    const httpRequest: HttpRequest = { body };
    return await this.UpdateUserController.execute(httpRequest);
  }

  @ApiOperation({
    summary: ''
  })
  @Get('/get-one-user')
  async getOne(@Query() query) {
    const { id, restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.getOneUserController.execute(httpRequest);
  }

  @ApiOperation({
    summary: ''
  })
  @Get('/get-all-users')
  async getAll(@Query() query) {
    const { restaurant } = query;
    const httpRequest: HttpRequest = { restaurant };
    return await this.getAllUsersController.execute(httpRequest);
  }
}
