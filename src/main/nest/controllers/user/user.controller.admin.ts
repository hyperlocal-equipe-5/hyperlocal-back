import {
  Controller,
  Post,
  Body,
  Delete,
  Query,
  Patch,
  Get,
} from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { CreateUserController } from 'src/presentation/controllers/user/createUser-controller';
import { DeleteUserController } from 'src/presentation/controllers/user/deleteUser-controller';
import { GetAllUsersController } from 'src/presentation/controllers/user/getAllUsers-controller';
import { GetOneUserController } from 'src/presentation/controllers/user/getOneUser-controller';
import { UpdateUserController } from 'src/presentation/controllers/user/updateUser-controller';
import { GetOneRestaurant } from '../../dtos/getOneRestaurant-dto';
import { CreateUserDto } from '../../dtos/user/createUser-dto';
import { GetOneUser } from '../../dtos/user/getOneUser-dto';
import { UpdateUser } from '../../dtos/user/updateUser-dto';

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
  @Post()
  async create(@Body() body: CreateUserDto) {
    const httpRequest: HttpRequest = { body };
    return await this.createUserController.execute(httpRequest);
  }

  @ApiOperation({
    summary:
      'Route that an authorized account can delete an user from a restaurant.',
  })
  @ApiBearerAuth()
  @Delete(':id')
  async delete(@Param('id') id: string, @Query() query: GetOneRestaurant) {
    const { restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.deleteUserController.execute(httpRequest);
  }

  @ApiOperation({
    summary:
      'Route that an authorized account can update an user from a restaurant.',
  })
  @ApiBearerAuth()
  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: UpdateUser) {
    const httpRequest: HttpRequest = { body: { ...body, id } };
    return await this.UpdateUserController.execute(httpRequest);
  }

  @ApiOperation({
    summary:
      'Route that an authorized account can get one user from a restaurant.',
  })
  @ApiBearerAuth()
  @Get(':id')
  async getOne(@Param('id') id: string, @Query() query: GetOneUser) {
    const { restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.getOneUserController.execute(httpRequest);
  }

  @ApiOperation({
    summary:
      'Route that an authorized account can get all users from a restaurant',
  })
  @ApiBearerAuth()
  @Get()
  async getAll(@Query() query: GetOneRestaurant) {
    const { restaurant } = query;
    const httpRequest: HttpRequest = { restaurant };
    return await this.getAllUsersController.execute(httpRequest);
  }
}
