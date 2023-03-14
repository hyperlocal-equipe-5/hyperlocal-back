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
import { GetOneUserController } from 'src/presentation/controllers/user/getOneUser-controller';
import { UpdateUserController } from 'src/presentation/controllers/user/updateUser-controller';
import { CreateUserDto } from '../dtos/user/createUser-dto';
import { GetOneUser } from '../dtos/user/getOneUser-dto';
import { UpdateUser } from '../dtos/user/updateUser-dto';

@ApiTags('/user')
@Controller('/user')
export class UserController {
  constructor(
    private readonly createUserController: CreateUserController,
    private readonly deleteUserController: DeleteUserController,
    private readonly UpdateUserController: UpdateUserController,
    private readonly getOneUserController: GetOneUserController,
  ) {}

  @ApiOperation({
    summary: '',
  })
  @ApiBearerAuth()
  @Post('/create-user')
  async create(@Body() body: CreateUserDto) {
    const httpRequest: HttpRequest = { body };
    return await this.createUserController.execute(httpRequest);
  }

  @ApiOperation({
    summary: '',
  })
  @ApiBearerAuth()
  @Delete('/delete-user')
  async delete(@Query() query: GetOneUser) {
    const { id, restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.deleteUserController.execute(httpRequest);
  }

  @ApiOperation({
    summary: '',
  })
  @ApiBearerAuth()
  @Patch('/update-user')
  async update(@Body() body: UpdateUser) {
    const httpRequest: HttpRequest = { body };
    return await this.UpdateUserController.execute(httpRequest);
  }

  @ApiOperation({
    summary: '',
  })
  @ApiBearerAuth()
  @Get('/get-one-user')
  async getOne(@Query() query: GetOneUser) {
    const { id, restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.getOneUserController.execute(httpRequest);
  }
}
