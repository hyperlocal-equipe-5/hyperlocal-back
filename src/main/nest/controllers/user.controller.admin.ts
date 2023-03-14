import {
  Controller,
  Post,
  Body,
  Delete,
  Query,
  Patch,
  Get,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { CreateUserController } from 'src/presentation/controllers/user/createUser-controller';
import { DeleteUserController } from 'src/presentation/controllers/user/deleteUser-controller';
import { GetAllUsersController } from 'src/presentation/controllers/user/getAllUsers-controller';
import { GetOneUserController } from 'src/presentation/controllers/user/getOneUser-controller';
import { UpdateUserController } from 'src/presentation/controllers/user/updateUser-controller';
import { CreateUserDto } from '../dtos/user/createUser-dto';
import { GetOneUser } from '../dtos/user/getOneUser-dto';
import { UpdateUser } from '../dtos/user/updateUser-dto';

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
    summary: 'Route that an authorized account can create an new user.',
  })
  @ApiBearerAuth()
  @Post('/create-user')
  async create(@Body() body: CreateUserDto) {
    const httpRequest: HttpRequest = { body };
    return await this.createUserController.execute(httpRequest);
  }

  @ApiOperation({
    summary: 'Route that an authorized account can delete an user from a restaurant.',
  })
  @ApiBearerAuth()
  @Delete('/delete-user')
  async delete(@Query() query: GetOneUser) {
    const { id, restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.deleteUserController.execute(httpRequest);
  }

  @ApiOperation({
    summary: 'Route that an authorized account can update an user from a restaurant.',
  })
  @ApiBearerAuth()
  @Patch('/update-user')
  async update(@Body() body: UpdateUser) {
    const httpRequest: HttpRequest = { body };
    return await this.UpdateUserController.execute(httpRequest);
  }

  @ApiOperation({
    summary: 'Route that an authorized account can get one user from a restaurant.',
  })
  @ApiBearerAuth()
  @Get('/get-one-user')
  async getOne(@Query() query: GetOneUser) {
    const { id, restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.getOneUserController.execute(httpRequest);
  }

  @ApiOperation({
    summary: 'Route that an authorized account can get all users from a restaurant',
  })
  @ApiBearerAuth()
  @Get('/get-all-users')
  async getAll(@Query() query) {
    const { restaurant } = query;
    const httpRequest: HttpRequest = { restaurant };
    return await this.getAllUsersController.execute(httpRequest);
  }
}
